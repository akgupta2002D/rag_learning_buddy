"use client"

import type React from "react"

import { BookOpen, RefreshCw, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SummaryPanelProps {
  panelId: number
}

export function SummaryPanel({ panelId }: SummaryPanelProps) {
  return (
    <div className="h-full bg-background border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-medium text-foreground">Summary & Key Concepts</h3>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <SummarySection title="Executive Summary" content="Document summary will appear here after PDF processing..." />

        <SummarySection
          title="Key Concepts"
          content={
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Core concept extraction pending...</li>
              <li>• Upload a PDF to analyze content</li>
              <li>• AI-powered concept identification</li>
            </ul>
          }
        />

        <SummarySection title="Main Topics" content="Primary topics and themes will be identified automatically..." />
      </div>
    </div>
  )
}

function SummarySection({
  title,
  content,
}: {
  title: string
  content: React.ReactNode
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h4 className="font-medium text-foreground mb-3">{title}</h4>
      <div className="text-sm text-muted-foreground">{content}</div>
    </div>
  )
}
