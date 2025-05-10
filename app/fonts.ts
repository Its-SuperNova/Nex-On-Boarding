import { Bricolage_Grotesque, Raleway, Inter } from "next/font/google"

// Bricolage Grotesque font
export const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
})

// Raleway font
export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
})

// Replace custom font with Inter from Google Fonts
export const customFont = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-custom",
})

// Export a dummy function to ensure this file is properly processed
export function ensureFontsLoaded() {
  return true
}
