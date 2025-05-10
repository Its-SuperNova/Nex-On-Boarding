"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  BarChart2,
  BookOpen,
  Calendar,
  Code,
  Compass,
  Layout,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react"

interface DashboardProps {
  username: string
  selectedPath: string
  selectedLevel: string
  programmingLanguage: string
}

export default function Dashboard({ username, selectedPath, selectedLevel, programmingLanguage }: DashboardProps) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { weekday: "long", month: "long", day: "numeric" })
  }

  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Top navigation */}
      <header className="border-b border-white/10 bg-zinc-900/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Nexacademy
            </h1>
            <div className="hidden md:flex space-x-4 ml-10">
              <button className="text-white/70 hover:text-white transition-colors">Home</button>
              <button className="text-white/70 hover:text-white transition-colors">Courses</button>
              <button className="text-white/70 hover:text-white transition-colors">Community</button>
              <button className="text-white/70 hover:text-white transition-colors">Resources</button>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right hidden md:block">
              <p className="text-sm text-white/70">{formatDate(currentTime)}</p>
              <p className="text-lg font-medium">{formatTime(currentTime)}</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
              {username.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="grid grid-cols-12 gap-6 p-6">
        {/* Sidebar */}
        <div className="col-span-12 md:col-span-3 lg:col-span-2">
          <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-4">
            <nav className="space-y-2">
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg bg-blue-600 text-white">
                <Layout className="h-5 w-5" />
                <span>Dashboard</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 transition-colors">
                <BookOpen className="h-5 w-5" />
                <span>Courses</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 transition-colors">
                <Code className="h-5 w-5" />
                <span>Projects</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 transition-colors">
                <Calendar className="h-5 w-5" />
                <span>Schedule</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 transition-colors">
                <MessageSquare className="h-5 w-5" />
                <span>Messages</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 transition-colors">
                <Users className="h-5 w-5" />
                <span>Community</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/10 transition-colors">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main dashboard area */}
        <div className="col-span-12 md:col-span-9 lg:col-span-10 space-y-6">
          {/* Welcome section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-blue-900/50 to-black rounded-xl border border-blue-500/20 p-6"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div>
                <h2 className="text-2xl font-bold">Welcome back, {username}!</h2>
                <p className="text-white/70 mt-1">Ready to continue your {selectedPath} journey?</p>
              </div>
              <button className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center space-x-2 transition-colors">
                <span>Continue Learning</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>

          {/* Stats and progress */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Current Level</h3>
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Compass className="h-5 w-5 text-blue-400" />
                </div>
              </div>
              <p className="text-3xl font-bold mt-4">{selectedLevel}</p>
              <div className="mt-4 w-full bg-white/10 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "35%" }}></div>
              </div>
              <p className="text-white/70 text-sm mt-2">35% to next level</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Learning Path</h3>
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Code className="h-5 w-5 text-blue-400" />
                </div>
              </div>
              <p className="text-3xl font-bold mt-4">{selectedPath}</p>
              <p className="text-white/70 mt-4">Primary language: {programmingLanguage}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">Weekly Activity</h3>
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <BarChart2 className="h-5 w-5 text-blue-400" />
                </div>
              </div>
              <div className="flex items-end justify-between h-32 mt-4">
                <div className="w-8 bg-blue-500/20 rounded-t-md h-[20%]"></div>
                <div className="w-8 bg-blue-500/20 rounded-t-md h-[30%]"></div>
                <div className="w-8 bg-blue-500/20 rounded-t-md h-[15%]"></div>
                <div className="w-8 bg-blue-500/20 rounded-t-md h-[45%]"></div>
                <div className="w-8 bg-blue-500/20 rounded-t-md h-[25%]"></div>
                <div className="w-8 bg-blue-500/80 rounded-t-md h-[60%]"></div>
                <div className="w-8 bg-blue-500/20 rounded-t-md h-[10%]"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/50">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
            </motion.div>
          </div>

          {/* Recommended courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/10 p-6"
          >
            <h3 className="text-xl font-bold mb-4">Recommended for You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-black/40 border border-white/5 rounded-lg p-4 hover:border-blue-500/30 transition-colors cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-blue-800 to-blue-600 rounded-md mb-3 flex items-center justify-center">
                  <Code className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-medium">{programmingLanguage} Fundamentals</h4>
                <p className="text-white/70 text-sm mt-1">Master the basics of {programmingLanguage}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-white/50">12 lessons</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">Beginner</span>
                </div>
              </div>

              <div className="bg-black/40 border border-white/5 rounded-lg p-4 hover:border-blue-500/30 transition-colors cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-purple-800 to-purple-600 rounded-md mb-3 flex items-center justify-center">
                  <Layout className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-medium">{selectedPath} Essentials</h4>
                <p className="text-white/70 text-sm mt-1">Core concepts for {selectedPath}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-white/50">8 lessons</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">{selectedLevel}</span>
                </div>
              </div>

              <div className="bg-black/40 border border-white/5 rounded-lg p-4 hover:border-blue-500/30 transition-colors cursor-pointer">
                <div className="h-32 bg-gradient-to-br from-green-800 to-green-600 rounded-md mb-3 flex items-center justify-center">
                  <BookOpen className="h-10 w-10 text-white" />
                </div>
                <h4 className="font-medium">Project-Based Learning</h4>
                <p className="text-white/70 text-sm mt-1">Build real-world applications</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-xs text-white/50">5 projects</span>
                  <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">{selectedLevel}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
