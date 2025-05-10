"use client"
import { useRef, useEffect, useState } from "react"
import { motion, useMotionTemplate, AnimatePresence } from "framer-motion"
import Loader from "@/components/loader"
import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import HoverBorderGradientDemo from "@/components/hover-border-gradient-demo"
import PlaceholdersAndVanishInputDemo from "@/components/placeholders-and-vanish-input-demo"
import ProfileImageUpload from "@/components/profile-image-upload"
import UserBioInput from "@/components/user-bio-input"
import ProgrammingLanguageSelection from "@/components/programming-language-selection"
import LearningPathSelection from "@/components/learning-path-selection"
import SkillLevelSelection from "@/components/skill-level-selection"
import FinalLoadingStep from "@/components/final-loading-step"
import Dashboard from "@/components/dashboard"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin)
}

// Static color
const BLUE = "#3B82F6"

// Form steps
type FormStep =
  | "username"
  | "profile-image"
  | "user-bio"
  | "programming-language"
  | "learning-path"
  | "skill-level"
  | "final-loading"
  | "dashboard"

export default function Home() {
  const loaderRef = useRef<HTMLDivElement>(null)
  const typewriterRef = useRef<HTMLDivElement>(null)
  const typewriterContainerRef = useRef<HTMLDivElement>(null)
  const secondTypewriterRef = useRef<HTMLDivElement>(null)
  const secondTypewriterContainerRef = useRef<HTMLDivElement>(null)

  // Animation states
  const [showLoader, setShowLoader] = useState(true)
  const [showTypewriter, setShowTypewriter] = useState(false)
  const [showSecondTypewriter, setShowSecondTypewriter] = useState(false)
  const [showFinalText, setShowFinalText] = useState(false)
  const [showButton, setShowButton] = useState(false)

  // Form states
  const [currentStep, setCurrentStep] = useState<FormStep>("username")
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false)
  const [username, setUsername] = useState("")
  const [userBio, setUserBio] = useState("")
  const [programmingLanguage, setProgrammingLanguage] = useState<string>("")
  const [selectedPath, setSelectedPath] = useState<string>("")
  const [selectedLevel, setSelectedLevel] = useState<string>("")

  const color = BLUE

  // Create motion templates
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 70%, ${color}30 100%)`
  const bottomGradient = useMotionTemplate`linear-gradient(to top, ${color}30 0%, rgba(0,0,0,0) 100%)`

  // Handle form submission
  const handleSubmitUsername = () => {
    setCurrentStep("profile-image")
  }

  const handleSubmitProfileImage = () => {
    setCurrentStep("user-bio")
  }

  const handleSubmitBio = (bio: string) => {
    setUserBio(bio)
    setCurrentStep("programming-language")
  }

  const handleSelectProgrammingLanguage = (language: string) => {
    setProgrammingLanguage(language)
    setCurrentStep("learning-path")
  }

  const handleSelectPath = (path: string) => {
    setSelectedPath(path)
    setCurrentStep("skill-level")
  }

  const handleSelectLevel = (level: string) => {
    setSelectedLevel(level)
    setCurrentStep("final-loading")
  }

  // Add this state for the fade-to-black transition
  const [fadeToBlack, setFadeToBlack] = useState(false)

  // Modify the handleFinalLoadingComplete function
  const handleFinalLoadingComplete = () => {
    // First fade to black
    setFadeToBlack(true)

    // Then transition to dashboard after the fade completes
    setTimeout(() => {
      setCurrentStep("dashboard")
    }, 1000) // Match this with the fade duration
  }

  // Use GSAP to create animation sequence
  useEffect(() => {
    // Create a timeline for sequencing animations
    const tl = gsap.timeline()

    // Step 1: Fade out the loader after 3 seconds
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      delay: 3,
      onComplete: () => {
        setShowLoader(false)
        setShowTypewriter(true)
      },
    })

    return () => {
      tl.kill() // Clean up timeline on unmount
    }
  }, [])

  // Handle first typewriter effect after loader fades
  useEffect(() => {
    if (showTypewriter && typewriterRef.current && typewriterContainerRef.current) {
      const typewriterTl = gsap.timeline()
      // Updated first typewriter text
      const text = "Are you ready to reprogram your future?"

      // Step 2: Type in the text
      typewriterTl.to(typewriterRef.current, {
        duration: 2,
        text: text,
        ease: "none",
        delay: 0.5,
      })

      // Step 3: Wait a few seconds
      typewriterTl.to(
        {},
        {
          duration: 2,
        },
      )

      // Step 4: Fade out
      typewriterTl.to(typewriterContainerRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          setShowTypewriter(false)
          setShowSecondTypewriter(true)
        },
      })

      return () => {
        typewriterTl.kill() // Clean up timeline on unmount
      }
    }
  }, [showTypewriter])

  // Handle second typewriter effect after first one fades
  useEffect(() => {
    if (showSecondTypewriter && secondTypewriterRef.current && secondTypewriterContainerRef.current) {
      const secondTypewriterTl = gsap.timeline()
      // Updated second typewriter text
      const text = "Your transformation protocol begins now…"

      // Step 5: Type in the second text
      secondTypewriterTl.to(secondTypewriterRef.current, {
        duration: 2,
        text: text,
        ease: "none",
        delay: 0.5,
      })

      // Step 6: Wait a few seconds
      secondTypewriterTl.to(
        {},
        {
          duration: 2,
        },
      )

      // Step 7: Fade out
      secondTypewriterTl.to(secondTypewriterContainerRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
        onComplete: () => {
          console.log("Second typewriter animation complete, showing final text")
          setShowSecondTypewriter(false)
          setShowFinalText(true)
          // Show button immediately with final text
          setShowButton(true)
        },
      })

      return () => {
        secondTypewriterTl.kill() // Clean up timeline on unmount
      }
    }
  }, [showSecondTypewriter])

  return (
    <div className="flex min-h-screen h-auto flex-col bg-black relative overflow-x-hidden">
      {/* Black overlay for transition */}
      {fadeToBlack && (
        <motion.div
          className="fixed inset-0 bg-black z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {currentStep === "dashboard" && (
            <Dashboard
              username={username}
              selectedPath={selectedPath}
              selectedLevel={selectedLevel}
              programmingLanguage={programmingLanguage}
            />
          )}
        </motion.div>
      )}

      {/* Main content that will fade away */}
      <motion.div className="flex-1" animate={{ opacity: fadeToBlack ? 0 : 1 }} transition={{ duration: 1 }}>
        {/* Hero Section */}
        <motion.section
          style={{ backgroundImage }}
          className="relative flex min-h-screen h-auto items-center justify-center overflow-y-auto overflow-x-hidden py-10"
        >
          {/* Grid Overlay */}
          <div className="hero-grid absolute inset-0 z-10" />

          {/* Bottom Gradient */}
          <motion.div
            style={{ background: bottomGradient }}
            className="absolute bottom-0 left-0 right-0 z-20 h-64 opacity-60 pointer-events-none"
          />

          {/* Hero Content - Centered Container */}
          <div className="relative z-30 flex items-center justify-center w-full py-10">
            {/* Animation Container - All animations are absolutely positioned within this container */}
            <div className="relative flex flex-col items-center justify-center w-full">
              {/* Loader - Only shown when showLoader is true */}
              {showLoader && (
                <div ref={loaderRef} className="absolute scale-75">
                  <Loader />
                </div>
              )}

              {/* First Typewriter - Only shown when showTypewriter is true */}
              {showTypewriter && (
                <div ref={typewriterContainerRef} className="absolute">
                  <div
                    ref={typewriterRef}
                    className="font-raleway font-light text-base md:text-xl lg:text-2xl typewriter-gradient"
                  ></div>
                </div>
              )}

              {/* Second Typewriter - Only shown when showSecondTypewriter is true */}
              {showSecondTypewriter && (
                <div ref={secondTypewriterContainerRef} className="absolute">
                  <div
                    ref={secondTypewriterRef}
                    className="font-raleway font-light text-base md:text-xl lg:text-2xl typewriter-gradient"
                  ></div>
                </div>
              )}

              {/* Final Content Container with fixed positioning */}
              <AnimatePresence>
                {showFinalText && (
                  <div className="flex flex-col items-center justify-center w-full">
                    <div className="flex flex-col items-center space-y-10 w-full px-4">
                      {/* Main "Welcome to Nexacademy" title with slide-in animation - only show in username step */}
                      {currentStep === "username" && (
                        <motion.div
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                          <h1 className="white-blue-gradient text-3xl md:text-5xl lg:text-6xl font-bricolage">
                            Welcome to Nexacademy
                          </h1>
                        </motion.div>
                      )}

                      {/* Form Steps Container */}
                      <div className="w-full max-w-5xl relative overflow-visible">
                        {/* Username Step */}
                        <AnimatePresence mode="wait">
                          {currentStep === "username" && (
                            <motion.div
                              key="username-step"
                              initial={{ y: 50, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              exit={{ x: -100, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="flex flex-col items-center space-y-2 w-full"
                            >
                              {/* Input field */}
                              {showButton && (
                                <div className="w-full flex flex-col items-center">
                                  <PlaceholdersAndVanishInputDemo
                                    onAvailabilityChange={setIsUsernameAvailable}
                                    onUsernameChange={setUsername}
                                  />
                                </div>
                              )}

                              {/* Button component */}
                              {showButton && (
                                <div>
                                  <HoverBorderGradientDemo
                                    isEnabled={isUsernameAvailable}
                                    onSubmit={handleSubmitUsername}
                                  />
                                </div>
                              )}
                            </motion.div>
                          )}

                          {/* Profile Image Upload Step */}
                          {currentStep === "profile-image" && (
                            <motion.div
                              key="profile-image-step"
                              initial={{ x: 100, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -100, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="flex flex-col items-center space-y-2 w-full"
                            >
                              <ProfileImageUpload username={username} onContinue={handleSubmitProfileImage} />
                            </motion.div>
                          )}

                          {/* User Bio Step */}
                          {currentStep === "user-bio" && (
                            <motion.div
                              key="user-bio-step"
                              initial={{ x: 100, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -100, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="flex flex-col items-center space-y-2 w-full"
                            >
                              <UserBioInput username={username} onContinue={handleSubmitBio} />
                            </motion.div>
                          )}

                          {/* Programming Language Selection Step */}
                          {currentStep === "programming-language" && (
                            <motion.div
                              key="programming-language-step"
                              initial={{ x: 100, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -100, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="flex flex-col items-center space-y-2 w-full"
                            >
                              <ProgrammingLanguageSelection
                                username={username}
                                onSelectLanguage={handleSelectProgrammingLanguage}
                              />
                            </motion.div>
                          )}

                          {/* Learning Path Selection Step */}
                          {currentStep === "learning-path" && (
                            <motion.div
                              key="learning-path-step"
                              initial={{ x: 100, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -100, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="flex flex-col items-center space-y-2 w-full"
                            >
                              <LearningPathSelection username={username} onSelectPath={handleSelectPath} />
                            </motion.div>
                          )}

                          {/* Skill Level Selection Step */}
                          {currentStep === "skill-level" && (
                            <motion.div
                              key="skill-level-step"
                              initial={{ x: 100, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -100, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="flex flex-col items-center space-y-2 w-full"
                            >
                              <SkillLevelSelection
                                username={username}
                                selectedPath={selectedPath}
                                onSelectLevel={handleSelectLevel}
                              />
                            </motion.div>
                          )}

                          {/* Final Loading Step */}
                          {currentStep === "final-loading" && (
                            <motion.div
                              key="final-loading-step"
                              initial={{ x: 100, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              exit={{ x: -100, opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="flex flex-col items-center space-y-2 w-full"
                            >
                              <FinalLoadingStep
                                username={username}
                                userBio={userBio}
                                programmingLanguage={programmingLanguage}
                                selectedPath={selectedPath}
                                selectedLevel={selectedLevel}
                                onComplete={handleFinalLoadingComplete}
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}
