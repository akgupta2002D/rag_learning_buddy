"use client"

import { createContext, useContext, type ReactNode } from "react"

type Theme = "default" | "alternate"

interface ThemeContextType {
  theme: Theme
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({
  children,
  theme,
}: {
  children: ReactNode
  theme: Theme
}) {
  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={theme === "default" ? "theme-default" : "theme-alternate"}>{children}</div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
