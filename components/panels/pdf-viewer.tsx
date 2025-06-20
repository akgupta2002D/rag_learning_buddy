"use client"

import { FileText, Search, ZoomIn, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PdfViewerProps {
  panelId: number
}

export function PdfViewer({ panelId }: PdfViewerProps) {
  return (
    <div className="h-full bg-background border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-medium text-foreground">PDF Viewer</h3>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Search className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 p-6">
        <div className="h-full border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center text-center">
          <FileText className="w-16 h-16 text-muted-foreground mb-4" />
          <h4 className="text-lg font-medium text-foreground mb-2">No PDF loaded</h4>
          <p className="text-sm text-muted-foreground">Drop a PDF file here or click to browse</p>
        </div>
      </div>
    </div>
  )
}
