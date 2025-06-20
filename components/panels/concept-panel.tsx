"use client"

import { Brain, Tag, TrendingUp } from "lucide-react"

interface ConceptPanelProps {
  panelId: number
}

export function ConceptPanel({ panelId }: ConceptPanelProps) {
  return (
    <div className="h-full bg-background border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Brain className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-medium text-foreground">Concept Analysis</h3>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-auto">
        <ConceptSection
          icon={Tag}
          title="Extracted Concepts"
          items={["Machine Learning", "Data Processing", "Neural Networks", "Algorithm Optimization"]}
        />

        <ConceptSection
          icon={TrendingUp}
          title="Trending Topics"
          items={["Artificial Intelligence", "Deep Learning", "Computer Vision", "Natural Language Processing"]}
        />

        <div className="bg-card border border-border rounded-lg p-4">
          <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
            <Brain className="w-4 h-4" />
            Concept Relationships
          </h4>
          <div className="text-sm text-muted-foreground">
            Interactive concept mapping will appear here after document analysis...
          </div>
        </div>
      </div>
    </div>
  )
}

function ConceptSection({
  icon: Icon,
  title,
  items,
}: {
  icon: any
  title: string
  items: string[]
}) {
  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span key={index} className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-md">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
