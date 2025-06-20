"use client"

import { BookOpen, FileText, Plus } from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-1/6 bg-black border-r border-gray-800 flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-semibold text-white">DocumentAI</h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        <SidebarItem icon={BookOpen} label="Summary & Concepts" active />
        <SidebarItem icon={FileText} label="PDF Viewer" />
        <SidebarItem icon={Plus} label="Extended Content" />
      </nav>
    </div>
  )
}

function SidebarItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: any
  label: string
  active?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${
        active ? "bg-white text-black" : "text-white hover:bg-white hover:text-black"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
