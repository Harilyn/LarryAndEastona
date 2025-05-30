"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, Calendar, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function InvitationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-50 to-sage-100 relative overflow-hidden">
      {/* Decorative floral background */}
      <div className="absolute inset-0 opacity-10">
        <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20">
        <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 rotate-90">
        <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 -rotate-90">
        <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180">
        <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="max-w-2xl mx-auto">
          {/* Main Invitation Card */}
          <div className="bg-white rounded-lg shadow-2xl p-8 md:p-12 text-center border border-sage-200">
            {/* Header Decoration */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="h-px w-16 bg-sage-300"></div>
                <Heart className="h-6 w-6 text-sage-600" />
                <div className="h-px w-16 bg-sage-300"></div>
              </div>
            </div>

            {/* Main Invitation Text */}
            <div className="space-y-6">
              <p className="text-sage-600 text-sm uppercase tracking-widest">Together with our families</p>

              <div className="space-y-2">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sage-800 font-light">Larry</h1>
                <p className="text-sage-600 text-lg font-light">&</p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sage-800 font-light">Eastina</h1>
              </div>

              <p className="text-sage-600 text-lg tracking-wide">request the pleasure of your company</p>

              <p className="text-sage-700 text-xl font-medium">at the celebration of our marriage</p>

              {/* Event Details */}
              <div className="space-y-4 py-6">
                <div className="flex items-center justify-center space-x-3">
                  <Calendar className="h-5 w-5 text-sage-600" />
                  <div className="text-sage-700">
                    <p className="font-medium">Friday, October 17, 2025</p>
                    <p className="text-sm">3:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="h-5 w-5 text-sage-600" />
                  <div className="text-sage-700">
                    <p className="font-medium">John Obey Beach</p>
                    <p className="text-sm">Pennisular, Sierra Leone</p>
                  </div>
                </div>
              </div>

              {/* Decorative Separator */}
              <div className="flex justify-center py-4">
                <div className="flex items-center space-x-2">
                  <div className="h-px w-12 bg-sage-300"></div>
                  <div className="w-2 h-2 bg-sage-400 rounded-full"></div>
                  <div className="h-px w-12 bg-sage-300"></div>
                </div>
              </div>

              {/* RSVP Information */}
              <div className="space-y-3">
                <p className="text-sage-600 text-sm">Kindly respond by September 17, 2025</p>
                <p className="text-sage-600 text-xs">Adults-only celebration • By invitation only</p>
              </div>

              {/* Footer Message */}
              <div className="pt-6">
                <p className="text-sage-500 text-sm italic">
                  "Love is not just looking at each other, it's looking in the same direction together"
                </p>
              </div>
            </div>

            {/* Footer Decoration */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <div className="h-px w-16 bg-sage-300"></div>
                <Heart className="h-6 w-6 text-sage-600" />
                <div className="h-px w-16 bg-sage-300"></div>
              </div>
            </div>
          </div>

          {/* Bottom Button with updated text */}
          <div className="mt-6 text-center">
            <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3">
              <Link href="/celebration">Please visit our wedding website for more information</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
