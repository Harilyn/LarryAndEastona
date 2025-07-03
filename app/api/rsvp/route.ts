import { type NextRequest, NextResponse } from "next/server"
import { kv } from "@vercel/kv"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, attending, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !attending) {
      return NextResponse.json({ success: false, message: "Please fill out all required fields" }, { status: 400 })
    }

    // Create RSVP data
    const rsvpData = {
      id: crypto.randomUUID(),
      firstName,
      lastName,
      email,
      attending,
      message: message || "",
      submittedAt: new Date().toISOString(),
    }

    // Check if email already exists
    const existingRSVP = await kv.get(`rsvp:${email}`)

    if (existingRSVP) {
      // Update existing RSVP
      await kv.set(`rsvp:${email}`, rsvpData)
      return NextResponse.json({
        success: true,
        message: "Your RSVP has been updated successfully!",
      })
    } else {
      // Create new RSVP
      await kv.set(`rsvp:${email}`, rsvpData)
      // Also add to list for admin view
      await kv.sadd("rsvp:emails", email)

      return NextResponse.json({
        success: true,
        message: "Your RSVP has been received successfully!",
      })
    }
  } catch (error) {
    console.error("RSVP submission error:", error)
    return NextResponse.json(
      { success: false, message: "There was an error submitting your RSVP. Please try again." },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    // Get all RSVP emails
    const emails = await kv.smembers("rsvp:emails")

    // Get all RSVP data
    const rsvps = []
    for (const email of emails) {
      const rsvpData = await kv.get(`rsvp:${email}`)
      if (rsvpData) {
        rsvps.push(rsvpData)
      }
    }

    return NextResponse.json({ success: true, rsvps })
  } catch (error) {
    console.error("Error fetching RSVPs:", error)
    return NextResponse.json({ success: false, message: "Error fetching RSVPs" }, { status: 500 })
  }
}
