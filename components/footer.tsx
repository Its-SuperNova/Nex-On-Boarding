"use client"

import { type FormEvent, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function Footer() {
  const container = useRef<HTMLDivElement>(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  // Handle newsletter form submission
  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault()
    const target = e.target as HTMLFormElement
    const formData = new FormData(target)
    const email = formData.get("newsletter_email")?.toString()

    // Here you'd typically send this to your API
    console.log("Newsletter subscription:", email)

    // Show success message and reset form
    setShowSuccessMessage(true)
    target.reset()

    // Hide success message after 2 seconds
    setTimeout(() => {
      setShowSuccessMessage(false)
    }, 2000)
  }

  return (
    <div className="relative bg-gradient-to-b from-purple-900 to-black pt-8 text-white" ref={container}>
      <div className="container mx-auto px-4">
        {/* Success message toast */}
        {showSuccessMessage && (
          <div className="fixed bottom-4 right-4 rounded-lg bg-green-500 px-6 py-3 text-white shadow-lg transition-all">
            Thanks for subscribing to our newsletter!
          </div>
        )}

        {/* Main footer content */}
        <div className="mb-8 flex flex-col justify-between gap-10 md:flex-row">
          {/* Left column - Newsletter */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-white md:text-4xl">
              Let&apos;s build something amazing together
            </h2>
            <div className="pt-4">
              <p className="py-2 text-xl text-white/90 md:text-2xl">Sign up for our newsletter*</p>
              <div className="mt-2 overflow-hidden rounded-full border-2 border-purple-300 bg-black/30 backdrop-blur-sm">
                <form onSubmit={handleNewsletterSubmit} className="grid grid-cols-6 items-center">
                  <input
                    type="email"
                    name="newsletter_email"
                    placeholder="Your Email *"
                    required
                    className="col-span-5 border-none bg-transparent px-6 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-0"
                  />
                  <button
                    type="submit"
                    className="col-span-1 flex h-full w-full items-center justify-center bg-purple-500 px-4 py-3 transition-colors hover:bg-purple-600"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right column - Links */}
          <div className="grid grid-cols-2 gap-10 md:gap-20">
            {/* Sitemap */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white/90">SITEMAP</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-white/70 transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/components" className="text-white/70 transition-colors hover:text-white">
                    Components
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="text-white/70 transition-colors hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white/70 transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/70 transition-colors hover:text-white">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-4 text-xl font-semibold text-white/90">SOCIAL</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Logo text - Will apply custom font once provided */}
        <div className="border-t border-b border-white/20 py-6 flex justify-center">
          <h2 className={cn("text-4xl md:text-5xl font-bold tracking-wider text-white", "font-custom")}>ASHHHX</h2>
        </div>

        {/* Copyright */}
        <div className="flex flex-col justify-between py-6 md:flex-row">
          <span className="text-sm text-white/50">&copy; {new Date().getFullYear()} AshhhhX. All Rights Reserved.</span>
          <div className="mt-2 flex space-x-6 md:mt-0">
            <Link href="/privacy" className="text-sm text-white/50 transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-white/50 transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
