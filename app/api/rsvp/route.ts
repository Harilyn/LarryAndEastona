import { type NextRequest, NextResponse } from "next/server"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, attending, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !attending) {
      return NextResponse.json({ success: false, message: "Please fill out all required fields" }, { status: 400 })
    }

    // Check if email already exists
    const existingRSVP = await sql`
      SELECT * FROM rsvps WHERE email = ${email}
    `

    if (existingRSVP.length > 0) {
      // Update existing RSVP
      await sql`
        UPDATE rsvps 
        SET first_name = ${firstName},
            last_name = ${lastName},
            attending = ${attending},
            message = ${message || ""},
            updated_at = NOW()
        WHERE email = ${email}
      `

      return NextResponse.json({
        success: true,
        message: "Your RSVP has been updated successfully!",
      })
    } else {
      // Create new RSVP
      await sql`
        INSERT INTO rsvps (first_name, last_name, email, attending, message)
        VALUES (${firstName}, ${lastName}, ${email}, ${attending}, ${message || ""})
      `

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
    const rsvps = await sql`
      SELECT * FROM rsvps 
      ORDER BY created_at DESC
    `

    return NextResponse.json({ success: true, rsvps })
  } catch (error) {
    console.error("Error fetching RSVPs:", error)
    return NextResponse.json({ success: false, message: "Error fetching RSVPs" }, { status: 500 })
  }
}
