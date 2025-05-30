"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { submitRSVP } from "@/app/actions"
import { Check } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full bg-sage-600 hover:bg-sage-700" disabled={pending}>
      {pending ? "Submitting..." : "Submit RSVP"}
    </Button>
  )
}

export function RSVPForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    // Set a fixed guest count of 1 since we're not collecting this anymore
    formData.set("guests", "1")

    const result = await submitRSVP(formData)

    if (result.success) {
      setFormSubmitted(true)
      setMessage(result.message)
    } else {
      setMessage(result.message)
    }
  }

  if (formSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <Check className="mb-4 h-16 w-16 text-sage-600" />
        <h3 className="mb-2 text-2xl font-medium text-sage-800">Thank You!</h3>
        <p className="text-sage-700">
          {message || "Your RSVP has been received. We look forward to celebrating with you!"}
        </p>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {message && <div className="rounded-md bg-red-50 p-4 text-red-700">{message}</div>}

      <div className="space-y-4">
        <Alert className="bg-sage-50 border-sage-200">
          <AlertDescription className="text-sage-700">
            <strong>Important:</strong> Our wedding is by invitation only. If you have received an invitation, please
            RSVP below.
          </AlertDescription>
        </Alert>

        <Alert className="bg-sage-50 border-sage-200">
          <AlertDescription className="text-sage-700">
            <strong>Adults-Only Celebration:</strong> We kindly request that guests under 18 years of age not attend, as
            this will be an adults-only celebration.
          </AlertDescription>
        </Alert>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label>Will you be attending?</Label>
        <RadioGroup defaultValue="yes" name="attending" className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="attending-yes" />
            <Label htmlFor="attending-yes">Joyfully Accept</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="attending-no" />
            <Label htmlFor="attending-no">Regretfully Decline</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message to the Couple (Optional)</Label>
        <Textarea id="message" name="message" placeholder="Share your well wishes or a special message..." />
      </div>

      <SubmitButton />
    </form>
  )
}
