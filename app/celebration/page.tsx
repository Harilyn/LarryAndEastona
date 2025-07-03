"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, Heart, MapPin, Gift, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/countdown-timer"
import { RSVPForm } from "@/components/rsvp-form"
import { Navigation } from "@/components/navigation"

export default function CelebrationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/couple-main.png"
            alt="Larry and Eastina"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="absolute inset-0 z-0 bg-black/40"></div>
        <div className="z-10 flex flex-col items-center justify-center space-y-6 px-4 text-center text-white">
          <h1 className="font-serif text-4xl font-light tracking-wider sm:text-5xl md:text-6xl lg:text-7xl">
            Larry & Eastina
          </h1>
          <p className="text-xl font-light">ARE GETTING MARRIED</p>
          <div className="h-0.5 w-24 bg-sage-300"></div>
          <p className="text-xl font-light">OCTOBER 17, 2025</p>
          <CountdownTimer targetDate="2025-10-17T16:00:00" />
        </div>

        {/* Decorative floral elements */}
        <div className="absolute top-0 left-0 w-40 h-40 opacity-30">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-30">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="bg-sage-50 py-20 relative overflow-hidden">
        {/* Decorative flowers */}
        <div className="absolute -top-16 -right-16 w-64 h-64 rotate-45 opacity-20">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute -bottom-16 -left-16 w-64 h-64 -rotate-45 opacity-20">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="mb-12 text-center font-serif text-4xl font-light text-sage-800">Our Story</h2>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="relative h-80 w-full overflow-hidden rounded-lg md:w-1/2">
              <Image src="/images/couple-main.png" alt="Larry and Eastina" fill className="object-cover object-top" />
            </div>
            <div className="w-full space-y-4 md:w-1/2">
              <p className="text-sage-700">
                In the vibrant chaos of Sierra Leone, two media professionals, Larry and Eastina, found an unexpected
                connection while working at BBC Media Action. Larry, a storyteller for social media, and Eastina, a
                passionate radio voice, began forming a bond beyond their professional duties. Amid deadlines and dusty
                roads, their relationship quietly blossomed—nurtured through shared vulnerabilities and deep
                conversations. A pivotal five-hour journey to Kono, originally just another assignment, became a turning
                point as they discovered mutual respect, dreams, and emotional healing, laying the foundation for
                something deeper.
              </p>
              <p className="text-sage-700">
                Their love, born in the margins of work and solidified under starlit skies, was not without its
                challenges. Both carried emotional wounds from past betrayals, but they faced them together through
                therapy, resilience, and unwavering support. Their journey—from quiet connection to committed
                partnership—culminated on October 17, 2019, a day they now cherish as the moment they chose to love
                again. This year, they mark that same date with a renewed vow to continue their shared story—one
                grounded in healing, strength, and enduring love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="details" className="py-20 relative overflow-hidden">
        {/* Decorative flowers */}
        <div className="absolute top-0 right-0 w-64 h-64 rotate-90 opacity-20">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 -rotate-90 opacity-20">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="mb-12 text-center font-serif text-4xl font-light text-sage-800">Event Details</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-md">
              <Calendar className="mb-4 h-12 w-12 text-sage-600" />
              <h3 className="mb-2 font-serif text-2xl text-sage-800">Ceremony & Reception</h3>
              <p className="text-sage-700">Friday, October 17, 2025</p>
              <p className="text-sage-700">Ceremony: 3:00 PM</p>
              <p className="text-sage-700">Reception: 5:30 PM</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-md">
              <MapPin className="mb-4 h-12 w-12 text-sage-600" />
              <h3 className="mb-2 font-serif text-2xl text-sage-800">Location</h3>
              <p className="text-sage-700">John Obey Beach</p>
              <p className="text-sage-700">Pennisular, Sierra Leone</p>
              <div className="flex flex-col sm:flex-row gap-2 mt-4">
                <Button
                  variant="outline"
                  className="border-sage-600 text-sage-600 hover:bg-sage-50 bg-transparent"
                  asChild
                >
                  <Link href="https://maps.app.goo.gl/DHSzCX7jRV3SBSqL9" target="_blank" rel="noopener noreferrer">
                    View Map
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="border-sage-600 text-sage-600 hover:bg-sage-50 bg-transparent"
                  asChild
                >
                  <Link
                    href="https://drive.google.com/file/d/1rvGeOXSP3aIY5xXN78Htn77NggBUmxhN/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Location <ExternalLink className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-white p-8 text-center shadow-md">
              <Heart className="mb-4 h-12 w-12 text-sage-600" />
              <h3 className="mb-2 font-serif text-2xl text-sage-800">Accommodations</h3>
              <p className="text-sage-700">Nearby Resorts</p>
              <p className="text-sage-700">Book by: September 17, 2025</p>
              <Button
                variant="outline"
                className="mt-4 border-sage-600 text-sage-600 hover:bg-sage-50 bg-transparent"
                asChild
              >
                <Link href="/accommodations">View Resorts</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section id="gallery" className="bg-sage-50 py-20 relative overflow-hidden">
        {/* Decorative flowers */}
        <div className="absolute top-0 right-0 w-64 h-64 rotate-180 opacity-20">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="mb-12 text-center font-serif text-4xl font-light text-sage-800">Gallery</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Beautiful+Sunset"
                alt="Beautiful sunset"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Ocean+Waves"
                alt="Ocean waves"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400&text=Tropical+Paradise"
                alt="Tropical paradise"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button asChild className="bg-sage-600 hover:bg-sage-700">
              <Link href="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Registry Section - UPDATED */}
      <section id="registry" className="py-20 relative overflow-hidden">
        {/* Decorative flowers */}
        <div className="absolute top-0 right-0 w-64 h-64 rotate-12 opacity-20">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 -rotate-12 opacity-20">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="mb-12 text-center font-serif text-4xl font-light text-sage-800">Registry</h2>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-8 text-sage-700">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift,
              you can contribute to our home fund through mobile money using either of the numbers below.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
                <Gift className="mb-4 h-10 w-10 text-sage-600" />
                <h3 className="mb-2 font-serif text-xl text-sage-800">Orange Money 1</h3>
                <div className="mb-4 rounded-md bg-sage-50 p-4 text-center">
                  <p className="font-medium text-sage-800">+232 76 918 978</p>
                </div>
                <Button
                  className="mt-2 bg-sage-600 hover:bg-sage-700"
                  onClick={() => {
                    navigator.clipboard.writeText("+23276918978")
                    alert("Mobile money number copied to clipboard!")
                  }}
                >
                  Copy Number
                </Button>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-md">
                <Gift className="mb-4 h-10 w-10 text-sage-600" />
                <h3 className="mb-2 font-serif text-xl text-sage-800">Orange Money 2</h3>
                <div className="mb-4 rounded-md bg-sage-50 p-4 text-center">
                  <p className="font-medium text-sage-800">+232 78 318 549</p>
                </div>
                <Button
                  className="mt-2 bg-sage-600 hover:bg-sage-700"
                  onClick={() => {
                    navigator.clipboard.writeText("+23278318549")
                    alert("Mobile money number copied to clipboard!")
                  }}
                >
                  Copy Number
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="bg-sage-100 py-20 relative overflow-hidden">
        {/* Decorative flowers */}
        <div className="absolute top-0 right-0 w-64 h-64 rotate-45 opacity-20">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 -rotate-45 opacity-20">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="mb-12 text-center font-serif text-4xl font-light text-sage-800">RSVP</h2>
          <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-md">
            <p className="mb-6 text-center text-sage-700">Please respond by September 17, 2025</p>
            <RSVPForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-800 py-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-4 font-serif text-3xl font-light">Larry & Eastina</h2>
          <p className="mb-4">October 17, 2025 • John Obey Beach, Sierra Leone</p>
          <p className="text-sage-300">Made with love 💚</p>
        </div>
      </footer>
    </div>
  )
}
