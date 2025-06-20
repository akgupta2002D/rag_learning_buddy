"use client"

import { useState, useCallback } from "react"
import { Sidebar } from "@/components/sidebar"
import { TopBar } from "@/components/top-bar"
import { SlidingViewer } from "@/components/sliding-viewer"
import { ThemeProvider } from "@/components/theme-provider"

export default function App() {
  const [activeTheme, setActiveTheme] = useState<"default" | "alternate">("default")
  const [visiblePanels, setVisiblePanels] = useState<[number, number]>([0, 1]) // Show first two panels initially

  const toggleTheme = useCallback(() => {
    setActiveTheme((prev) => (prev === "default" ? "alternate" : "default"))
  }, [])

  const rotatePanelsLeft = useCallback(() => {
    setVisiblePanels((prev) => {
      const [first, second] = prev
      // Rotate left: [0,1] → [2,0], [1,2] → [0,1], [2,0] → [1,2]
      if (first === 0 && second === 1) return [2, 0]
      if (first === 1 && second === 2) return [0, 1]
      if (first === 2 && second === 0) return [1, 2]
      return prev
    })
  }, [])

  const rotatePanelsRight = useCallback(() => {
    setVisiblePanels((prev) => {
      const [first, second] = prev
      // Rotate right: [0,1] → [1,2], [1,2] → [2,0], [2,0] → [0,1]
      if (first === 0 && second === 1) return [1, 2]
      if (first === 1 && second === 2) return [2, 0]
      if (first === 2 && second === 0) return [0, 1]
      return prev
    })
  }, [])

  return (
    <ThemeProvider theme={activeTheme}>
      <div className="flex h-screen overflow-hidden bg-background text-foreground">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <TopBar onThemeToggle={toggleTheme} activeTheme={activeTheme} />
          <SlidingViewer
            visiblePanels={visiblePanels}
            onRotateLeft={rotatePanelsLeft}
            onRotateRight={rotatePanelsRight}
          />
        </div>
      </div>
    </ThemeProvider>
  )
}
