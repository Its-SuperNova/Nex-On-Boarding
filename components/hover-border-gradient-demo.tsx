"use client"
import { ArrowUpRight } from "lucide-react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

interface HoverBorderGradientDemoProps {
  isEnabled?: boolean
  onSubmit?: () => void
}

export default function HoverBorderGradientDemo({ isEnabled = false, onSubmit }: HoverBorderGradientDemoProps) {
  const handleClick = () => {
    if (isEnabled && onSubmit) {
      onSubmit()
    }
  }

  return (
    <div className="flex justify-center text-center mt-3">
      <HoverBorderGradient
        containerClassName={`rounded-full ${!isEnabled ? "opacity-50 cursor-not-allowed" : ""}`}
        as="button"
        className={`dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 ${!isEnabled ? "pointer-events-none" : ""}`}
        disabled={!isEnabled}
        onClick={handleClick}
      >
        <span>Submit</span>
        <ArrowUpRight className="w-4 h-4 ml-1" />
      </HoverBorderGradient>
    </div>
  )
}
