"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { PdfViewer } from "./panels/pdf-viewer"
import { SummaryPanel } from "./panels/summary-panel"
import { ConceptPanel } from "./panels/concept-panel"
import { useState } from "react"

interface SlidingViewerProps {
  visiblePanels: [number, number]
  onRotateLeft: () => void
  onRotateRight: () => void
}

const panels = [
  { id: 0, component: SummaryPanel, name: "Summary" },
  { id: 1, component: PdfViewer, name: "PDF Viewer" },
  { id: 2, component: ConceptPanel, name: "Concepts" },
]

export function SlidingViewer({ visiblePanels, onRotateLeft, onRotateRight }: SlidingViewerProps) {
  const [leftPanelId, rightPanelId] = visiblePanels
  const [animationDirection, setAnimationDirection] = useState<"left" | "right">("right")

  // Determine if arrows should be disabled
  const isLeftDisabled = leftPanelId === 0
  const isRightDisabled = rightPanelId === 2

  const handleLeftHover = () => {
    if (!isLeftDisabled) {
      setAnimationDirection("left")
      onRotateLeft()
    }
  }

  const handleRightHover = () => {
    if (!isRightDisabled) {
      setAnimationDirection("right")
      onRotateRight()
    }
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Navigation Arrows */}
      <div className="h-16 flex items-center justify-center relative">
        <div className="flex gap-2">
          <button
            onMouseEnter={handleLeftHover}
            disabled={isLeftDisabled}
            className={`bg-background/90 backdrop-blur-sm border border-border rounded-full p-3 transition-all duration-200 shadow-lg ${
              isLeftDisabled
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-accent hover:text-accent-foreground hover:scale-110"
            }`}
            aria-label="Previous panels"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onMouseEnter={handleRightHover}
            disabled={isRightDisabled}
            className={`bg-background/90 backdrop-blur-sm border border-border rounded-full p-3 transition-all duration-200 shadow-lg ${
              isRightDisabled
                ? "opacity-30 cursor-not-allowed"
                : "hover:bg-accent hover:text-accent-foreground hover:scale-110"
            }`}
            aria-label="Next panels"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Panel Container */}
      <div className="flex-1 flex">
        {/* Left Panel */}
        <motion.div
          key={`left-${leftPanelId}`}
          initial={{
            x: animationDirection === "left" ? "-50%" : "50%",
          }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          className="w-1/2"
        >
          {panels.find((p) => p.id === leftPanelId)?.component({ panelId: leftPanelId })}
        </motion.div>

        {/* Right Panel */}
        <motion.div
          key={`right-${rightPanelId}`}
          initial={{
            x: animationDirection === "left" ? "-50%" : "50%",
          }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
          className="w-1/2"
        >
          {panels.find((p) => p.id === rightPanelId)?.component({ panelId: rightPanelId })}
        </motion.div>
      </div>
    </div>
  )
}
