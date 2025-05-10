"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Loader from "@/components/loader"

interface FinalLoadingStepProps {
  username: string
  userBio: string
  programmingLanguage: string
  selectedPath: string
  selectedLevel: string
  onComplete?: () => void
}

export default function FinalLoadingStep({
  username,
  userBio,
  programmingLanguage,
  selectedPath,
  selectedLevel,
  onComplete,
}: FinalLoadingStepProps) {
  const [loadingStep, setLoadingStep] = useState(0)
  const [loadingComplete, setLoadingComplete] = useState(false)
  const [zoomEffect, setZoomEffect] = useState(false)

  const loadingSteps = [
    { text: "Creating your profile...", delay: 1500 },
    { text: `Setting up ${username}'s learning environment...`, delay: 2000 },
    { text: `Configuring ${selectedPath} curriculum for ${selectedLevel} level...`, delay: 2000 },
    { text: `Optimizing for ${programmingLanguage} development...`, delay: 1500 },
    { text: "Almost there...", delay: 1000 },
    { text: "Ready to launch!", delay: 1000 },
  ]

  useEffect(() => {
    // Simulate loading process with sequential steps
    if (loadingStep < loadingSteps.length) {
      const timer = setTimeout(() => {
        setLoadingStep(loadingStep + 1)
      }, loadingSteps[loadingStep].delay)

      return () => clearTimeout(timer)
    } else {
      setLoadingComplete(true)

      // Wait a moment before starting zoom effect
      const timer = setTimeout(() => {
        setZoomEffect(true)

        // Wait for zoom animation to complete before calling onComplete
        setTimeout(() => {
          if (onComplete) {
            onComplete()
          }
        }, 1000) // Match this with the zoom animation duration
      }, 1000)

      return () => clearTimeout(timer)
    }
  }, [loadingStep, loadingSteps.length, onComplete])

  return (
    <motion.div
      className="w-full flex flex-col items-center justify-center space-y-8"
      animate={
        zoomEffect
          ? {
              opacity: 0,
              transition: { duration: 1, ease: "easeInOut" },
            }
          : {}
      }
    >
      <h2 className="text-white text-2xl md:text-3xl font-bricolage mb-2 text-center">
        <span className="white-blue-gradient">Preparing your journey</span>
      </h2>

      {/* Loader animation */}
      <div className="relative scale-75">
        <Loader />

        {/* Pulsing glow effect behind loader */}
        <div className="absolute inset-0 -z-10 rounded-full bg-blue-500/20 blur-xl animate-pulse"></div>
      </div>

      {/* Loading step text with animation */}
      <div className="h-8 flex items-center justify-center">
        {loadingSteps.map((step, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: loadingStep === index ? 1 : 0,
              y: loadingStep === index ? 0 : 20,
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`text-white/80 text-center absolute ${loadingStep !== index ? "pointer-events-none" : ""}`}
          >
            {step.text}
          </motion.p>
        ))}

        {loadingComplete && !zoomEffect && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-green-400 text-center font-medium"
          >
            Your Nexacademy profile is ready!
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}
