"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Check, X } from "lucide-react"
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input"

interface PlaceholdersAndVanishInputDemoProps {
  onAvailabilityChange?: (isAvailable: boolean) => void
  onUsernameChange?: (username: string) => void
}

export default function PlaceholdersAndVanishInputDemo({
  onAvailabilityChange,
  onUsernameChange,
}: PlaceholdersAndVanishInputDemoProps) {
  const placeholders = [
    "Enter your name to join Nexacademy...",
    "What's your username?",
    "Type your alias here...",
    "How should we call you?",
    "Enter your identity...",
  ]

  const [username, setUsername] = useState("")
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  // Simulate checking username availability
  useEffect(() => {
    if (username.length === 0) {
      setIsAvailable(null)
      if (onAvailabilityChange) onAvailabilityChange(false)
      return
    }

    // Set checking state
    setIsChecking(true)
    if (onAvailabilityChange) onAvailabilityChange(false)

    // Simulate API call with timeout
    const timer = setTimeout(() => {
      // Simple simulation: usernames with "admin" or "test" are taken
      const available =
        !username.toLowerCase().includes("admin") && !username.toLowerCase().includes("test") && username.length >= 3

      setIsAvailable(available)
      setIsChecking(false)

      // Notify parent component about availability change
      if (onAvailabilityChange) onAvailabilityChange(available)
    }, 500)

    return () => clearTimeout(timer)
  }, [username, onAvailabilityChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = e.target.value
    setUsername(newUsername)
    if (onUsernameChange) onUsernameChange(newUsername)
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("submitted username:", username)
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-xl">
        <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
      </div>

      {/* Fixed height container for username availability message */}
      <div className="h-6 mt-2 flex items-center justify-center">
        {username.length > 0 && (
          <div className="text-sm">
            {isChecking ? (
              <span className="text-white/70">Checking availability...</span>
            ) : isAvailable === null ? (
              <span className="text-white/70">Enter a username</span>
            ) : isAvailable ? (
              <div className="flex items-center text-green-500">
                <Check className="w-4 h-4 mr-1" />
                <span>Username available</span>
              </div>
            ) : (
              <div className="flex items-center text-red-500">
                <X className="w-4 h-4 mr-1" />
                <span>Username not available</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
