"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { Dashboard } from "@/components/dashboard"
import { ReportsView } from "@/components/reports-view"
import { AdminPanel } from "@/components/admin-panel"
import { LandingPage } from "@/components/landing-page"
import { AuthModal } from "@/components/auth-modal"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authMode, setAuthMode] = useState<"signup" | "login" | null>(null)
  const [activeView, setActiveView] = useState<"dashboard" | "reports" | "admin">("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  if (authMode) {
    return <AuthModal mode={authMode} onClose={() => setAuthMode(null)} />
  }

  if (!isAuthenticated) {
    return (
      <LandingPage
        onSignUp={() => {
          setAuthMode("signup")
          setIsAuthenticated(true)
        }}
        onLogin={() => {
          setAuthMode("login")
          setIsAuthenticated(true)
        }}
      />
    )
  }

  const renderView = () => {
    switch (activeView) {
      case "dashboard":
        return <Dashboard />
      case "reports":
        return <ReportsView />
      case "admin":
        return <AdminPanel />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        activeView={activeView}
        setActiveView={setActiveView}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">{renderView()}</div>
    </div>
  )
}
