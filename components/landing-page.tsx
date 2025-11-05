"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Zap, Shield } from "lucide-react"

interface LandingPageProps {
  onSignUp: () => void
  onLogin: () => void
}

export function LandingPage({ onSignUp, onLogin }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg" />
          <span className="text-xl font-bold text-gray-900">DataVault</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">
            Pricing
          </a>
          <a href="#docs" className="text-gray-600 hover:text-gray-900 transition">
            Docs
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" onClick={onLogin} className="text-gray-700 hover:text-gray-900">
            Log In
          </Button>
          <Button onClick={onSignUp} className="bg-blue-600 hover:bg-blue-700 text-white">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your <span className="text-blue-600">E-Commerce Data</span> Into Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build your data warehouse in minutes. Real-time analytics, powerful visualizations, and actionable
              insights for your business.
            </p>
            <div className="flex gap-4">
              <Button onClick={onSignUp} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-900 hover:bg-gray-50 bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-2xl p-8 h-80 flex items-center justify-center">
            <BarChart3 className="w-32 h-32 text-blue-400 opacity-20" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-50 px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Everything You Need</h2>
          <p className="text-center text-gray-600 mb-16 text-lg">Powerful tools designed for modern e-commerce teams</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart3,
                title: "Real-Time Dashboards",
                description: "Beautiful, interactive dashboards that update in real-time with your business metrics.",
                color: "text-blue-600",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Lightning-fast queries and visualizations powered by optimized data warehouse architecture.",
                color: "text-red-600",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Enterprise-grade security with ROW LEVEL SECURITY, encryption, and compliance standards.",
                color: "text-blue-600",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-200 transition"
                >
                  <Icon className={`w-12 h-12 ${feature.color} mb-4`} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 text-white px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold mb-2">10K+</p>
            <p className="text-blue-100">Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">99.9%</p>
            <p className="text-blue-100">Uptime</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">2M+</p>
            <p className="text-blue-100">Queries/Day</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">50ms</p>
            <p className="text-blue-100">Avg Response</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Data?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start building your data warehouse today. No credit card required.
          </p>
          <Button onClick={onSignUp} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
            Get Started for Free
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 px-6 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded" />
                <span className="font-semibold text-white">DataVault</span>
              </div>
              <p className="text-sm text-gray-400">Your data warehouse platform</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Product</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Resources</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    API Reference
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-4">Legal</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex items-center justify-between text-sm">
            <p>© 2025 DataVault. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
