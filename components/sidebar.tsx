"use client"

import { Menu, LayoutDashboard, FileText, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  activeView: "dashboard" | "reports" | "admin"
  setActiveView: (view: "dashboard" | "reports" | "admin") => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function Sidebar({ activeView, setActiveView, sidebarOpen, setSidebarOpen }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "reports", label: "Reports", icon: FileText },
    { id: "admin", label: "Admin", icon: Settings },
  ]

  return (
    <aside
      className={`
        bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col
        ${sidebarOpen ? "w-64" : "w-20"}
      `}
    >
      <div className="flex items-center justify-between p-4 border-b border-sidebar-border">
        {sidebarOpen && <h1 className="text-xl font-bold text-sidebar-foreground">DataWH</h1>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-sidebar-foreground hover:bg-sidebar-accent"
        >
          <Menu size={20} />
        </Button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeView === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActiveView(item.id as "dashboard" | "reports" | "admin")}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                ${
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                }
              `}
            >
              <Icon size={20} />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <Button
          variant="outline"
          className="w-full justify-start gap-3 text-sidebar-foreground hover:bg-sidebar-accent bg-transparent"
        >
          <LogOut size={20} />
          {sidebarOpen && <span>Logout</span>}
        </Button>
      </div>
    </aside>
  )
}
