// This file provides fallback mechanisms for fonts that might not be available

export function handleMissingFonts() {
  if (typeof window !== "undefined") {
    // Add a class to the document to indicate we're using fallback fonts
    document.documentElement.classList.add("using-fallback-fonts")

    // Log a message to the console
    console.warn("Some custom fonts could not be loaded. Using fallback fonts instead.")
  }
}

// Call this function immediately
handleMissingFonts()
