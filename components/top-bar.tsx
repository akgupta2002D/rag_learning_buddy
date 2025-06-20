"use client"

import { ChevronLeft, ChevronRight, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TopBarProps {
  onThemeToggle: () => void
  activeTheme: "default" | "alternate"
}

export function TopBar({ onThemeToggle, activeTheme }: TopBarProps) {
  return (
    <div className="h-16 border-b border-border flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-medium text-foreground">Document Workspace</h2>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="w-8 h-8">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <Button variant="outline" size="sm" onClick={onThemeToggle} className="flex items-center gap-2">
        <Sun className="w-4 h-4" />
        {activeTheme === "default" ? "Light Theme" : "Dark Theme"}
      </Button>
    </div>
  )
}
