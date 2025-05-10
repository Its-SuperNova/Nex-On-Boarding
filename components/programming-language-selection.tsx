"use client"
import { useState } from "react"
import { Check, ArrowUpRight, Search } from "lucide-react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { motion } from "framer-motion"

interface ProgrammingLanguageSelectionProps {
  username: string
  onSelectLanguage: (language: string) => void
}

interface LanguageOption {
  id: string
  name: string
  color: string
  category?: string
}

export default function ProgrammingLanguageSelection({
  username,
  onSelectLanguage,
}: ProgrammingLanguageSelectionProps) {
  const [selectedLanguageId, setSelectedLanguageId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const languageOptions: LanguageOption[] = [
    // Web Development
    { id: "javascript", name: "JavaScript", color: "from-yellow-400 to-yellow-600", category: "web" },
    { id: "typescript", name: "TypeScript", color: "from-blue-400 to-blue-600", category: "web" },
    { id: "html", name: "HTML", color: "from-orange-500 to-orange-700", category: "web" },
    { id: "css", name: "CSS", color: "from-blue-500 to-blue-700", category: "web" },
    { id: "php", name: "PHP", color: "from-indigo-400 to-indigo-600", category: "web" },

    // General Purpose
    { id: "python", name: "Python", color: "from-blue-400 to-blue-600", category: "general" },
    { id: "java", name: "Java", color: "from-red-400 to-red-600", category: "general" },
    { id: "csharp", name: "C#", color: "from-purple-400 to-purple-600", category: "general" },
    { id: "cpp", name: "C++", color: "from-blue-500 to-blue-700", category: "general" },
    { id: "c", name: "C", color: "from-blue-600 to-blue-800", category: "general" },
    { id: "go", name: "Go", color: "from-blue-300 to-blue-500", category: "general" },
    { id: "rust", name: "Rust", color: "from-orange-400 to-orange-600", category: "general" },
    { id: "ruby", name: "Ruby", color: "from-red-500 to-red-700", category: "general" },

    // Mobile Development
    { id: "swift", name: "Swift", color: "from-orange-500 to-orange-700", category: "mobile" },
    { id: "kotlin", name: "Kotlin", color: "from-purple-500 to-purple-700", category: "mobile" },
    { id: "dart", name: "Dart", color: "from-blue-400 to-blue-600", category: "mobile" },
    { id: "objectivec", name: "Objective-C", color: "from-gray-500 to-gray-700", category: "mobile" },

    // Functional Languages
    { id: "haskell", name: "Haskell", color: "from-purple-400 to-purple-600", category: "functional" },
    { id: "elixir", name: "Elixir", color: "from-purple-500 to-purple-700", category: "functional" },
    { id: "clojure", name: "Clojure", color: "from-green-500 to-green-700", category: "functional" },
    { id: "scala", name: "Scala", color: "from-red-500 to-red-700", category: "functional" },
    { id: "erlang", name: "Erlang", color: "from-red-400 to-red-600", category: "functional" },
    { id: "fsharp", name: "F#", color: "from-purple-500 to-purple-700", category: "functional" },

    // Data Science & ML
    { id: "r", name: "R", color: "from-blue-500 to-blue-700", category: "data" },
    { id: "julia", name: "Julia", color: "from-purple-400 to-purple-600", category: "data" },
    { id: "matlab", name: "MATLAB", color: "from-yellow-500 to-yellow-700", category: "data" },
    { id: "sas", name: "SAS", color: "from-blue-400 to-blue-600", category: "data" },

    // System Programming
    { id: "assembly", name: "Assembly", color: "from-gray-600 to-gray-800", category: "system" },
    { id: "fortran", name: "Fortran", color: "from-purple-500 to-purple-700", category: "system" },
    { id: "cobol", name: "COBOL", color: "from-blue-600 to-blue-800", category: "system" },

    // Scripting
    { id: "bash", name: "Bash", color: "from-green-600 to-green-800", category: "scripting" },
    { id: "powershell", name: "PowerShell", color: "from-blue-500 to-blue-700", category: "scripting" },
    { id: "perl", name: "Perl", color: "from-blue-400 to-blue-600", category: "scripting" },
    { id: "lua", name: "Lua", color: "from-blue-400 to-blue-600", category: "scripting" },

    // Database
    { id: "sql", name: "SQL", color: "from-blue-500 to-blue-700", category: "database" },
    { id: "plsql", name: "PL/SQL", color: "from-red-500 to-red-700", category: "database" },

    // Other
    { id: "groovy", name: "Groovy", color: "from-blue-400 to-blue-600", category: "other" },
    { id: "delphi", name: "Delphi", color: "from-red-500 to-red-700", category: "other" },
    { id: "vba", name: "VBA", color: "from-green-500 to-green-700", category: "other" },
    { id: "apex", name: "Apex", color: "from-blue-400 to-blue-600", category: "other" },
    { id: "abap", name: "ABAP", color: "from-blue-500 to-blue-700", category: "other" },
    { id: "prolog", name: "Prolog", color: "from-red-400 to-red-600", category: "other" },
  ]

  const handleLanguageSelect = (languageId: string) => {
    setSelectedLanguageId(languageId)
  }

  const handleContinue = () => {
    if (selectedLanguageId) {
      const selectedLanguage = languageOptions.find((lang) => lang.id === selectedLanguageId)
      if (selectedLanguage) {
        onSelectLanguage(selectedLanguage.name)
      }
    }
  }

  // Filter languages based on search query
  const filteredLanguages = languageOptions.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="w-full flex flex-col items-center space-y-6">
      <h2 className="text-white text-2xl md:text-3xl font-bricolage mb-2 text-center">
        What's your <span className="text-blue-400">language</span> of choice?
      </h2>
      <p className="text-white/70 text-center mb-4">
        Select your preferred programming language, <span className="text-blue-400">{username}</span>
      </p>

      {/* Search input */}
      <div className="relative w-full max-w-md mb-2">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search languages..."
          className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <motion.div
        className="flex flex-wrap justify-center gap-2 w-full max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredLanguages.map((language) => (
          <motion.button
            key={language.id}
            variants={itemVariants}
            onClick={() => handleLanguageSelect(language.id)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 
              ${
                selectedLanguageId === language.id
                  ? `bg-gradient-to-r ${language.color} text-white`
                  : "bg-zinc-900 text-white/80 hover:bg-zinc-800 border border-zinc-700"
              }
              hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
            `}
          >
            {selectedLanguageId === language.id && <Check className="w-3 h-3 inline-block mr-1.5 -mt-0.5" />}
            {language.name}
          </motion.button>
        ))}
      </motion.div>

      {/* Show message if no languages match the search */}
      {filteredLanguages.length === 0 && (
        <div className="text-white/70 text-center py-4">
          No languages found matching "{searchQuery}". Try a different search term.
        </div>
      )}

      <div className="mt-8">
        <HoverBorderGradient
          containerClassName={`rounded-full ${!selectedLanguageId ? "opacity-50 cursor-not-allowed" : ""}`}
          as="button"
          className={`dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 ${
            !selectedLanguageId ? "pointer-events-none" : ""
          }`}
          disabled={!selectedLanguageId}
          onClick={handleContinue}
        >
          <span>Continue</span>
          <ArrowUpRight className="w-4 h-4 ml-1" />
        </HoverBorderGradient>
      </div>
    </div>
  )
}
