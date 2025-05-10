import type React from "react"
import "@/app/globals.css"
import { Mona_Sans as FontSans, Inter } from "next/font/google"
import { bricolageGrotesque, raleway, customFont } from "@/app/fonts"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Create fontHeading using Inter directly
const fontHeading = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata = {
  title: "AshhhhX - UI Component Library",
  description: "Beautifully crafted components. Built for speed.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={cn(
          "min-h-screen h-auto bg-background font-sans antialiased", // Added h-auto
          fontSans.variable,
          fontHeading.variable,
          customFont.variable,
          bricolageGrotesque.variable,
          raleway.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
