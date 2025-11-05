"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Filter, TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const monthlySalesData = [
  { month: "January", revenue: 45000, target: 50000, orders: 1200 },
  { month: "February", revenue: 52000, target: 50000, orders: 1450 },
  { month: "March", revenue: 48000, target: 55000, orders: 1350 },
  { month: "April", revenue: 61000, target: 50000, orders: 1650 },
  { month: "May", revenue: 55000, target: 55000, orders: 1500 },
  { month: "June", revenue: 67000, target: 60000, orders: 1800 },
]

const departmentMetrics = [
  { department: "Sales", target: 100000, actual: 95000, completion: 95 },
  { department: "Marketing", target: 50000, actual: 48000, completion: 96 },
  { department: "Operations", target: 75000, actual: 72500, completion: 97 },
  { department: "Support", target: 30000, actual: 29500, completion: 98 },
]

const productCategoryMetrics = [
  { category: "Electronics", revenue: 120000, margin: 28, satisfaction: 4.8 },
  { category: "Clothing", revenue: 85000, margin: 35, satisfaction: 4.5 },
  { category: "Home", revenue: 65000, margin: 32, satisfaction: 4.3 },
  { category: "Sports", revenue: 45000, margin: 30, satisfaction: 4.6 },
]

interface ReportMetric {
  label: string
  value: string
  change: string
  icon: typeof TrendingUp
}

const reportMetrics: ReportMetric[] = [
  { label: "Total Revenue", value: "$315K", change: "+8.2%", icon: DollarSign },
  { label: "Total Orders", value: "7,350", change: "+12.5%", icon: ShoppingCart },
  { label: "Avg Order Value", value: "$245", change: "+4.1%", icon: TrendingUp },
  { label: "Customer Count", value: "2,430", change: "+5.3%", icon: Users },
]

export function ReportsView() {
  const [selectedMetric, setSelectedMetric] = useState("revenue")

  return (
    <main className="flex-1 overflow-auto bg-background p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-1">Reports & Analytics</h1>
            <p className="text-muted-foreground">Comprehensive business performance metrics and trends</p>
          </div>
          <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Download size={18} />
            Export Report
          </Button>
        </div>

        {/* Summary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {reportMetrics.map((metric) => {
            const Icon = metric.icon
            return (
              <Card
                key={metric.label}
                className="p-4 bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground uppercase mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold text-card-foreground">{metric.value}</p>
                    <p className="text-xs text-green-500 font-medium mt-2">{metric.change} vs last period</p>
                  </div>
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon size={20} className="text-primary" />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Reports Grid */}
        <div className="space-y-8">
          {/* Monthly Sales Report */}
          <Card className="p-6 bg-card border border-border">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold text-card-foreground">Monthly Sales Performance</h2>
                <p className="text-sm text-muted-foreground mt-1">Revenue vs target and order trends</p>
              </div>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent text-foreground">
                <Filter size={16} />
                Filter
              </Button>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
                <XAxis dataKey="month" stroke="hsl(var(--color-muted-foreground))" />
                <YAxis stroke="hsl(var(--color-muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--color-card))",
                    border: "1px solid hsl(var(--color-border))",
                  }}
                />
                <Legend />
                <Bar dataKey="revenue" fill="hsl(var(--color-chart-1))" radius={[8, 8, 0, 0]} />
                <Bar dataKey="target" fill="hsl(var(--color-chart-2))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Department Performance */}
          <Card className="p-6 bg-card border border-border">
            <h2 className="text-xl font-semibold text-card-foreground mb-6">Department Performance</h2>
            <div className="space-y-4">
              {departmentMetrics.map((dept) => (
                <div key={dept.department} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{dept.department}</span>
                    <span className="text-sm text-muted-foreground">
                      ${dept.actual.toLocaleString()} / ${dept.target.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-chart-1 to-chart-2 h-full rounded-full transition-all duration-300"
                      style={{ width: `${dept.completion}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">{dept.completion}% of target</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Product Category Analysis */}
          <Card className="p-6 bg-card border border-border">
            <h2 className="text-xl font-semibold text-card-foreground mb-6">Product Category Analysis</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Category</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Revenue</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Margin</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Satisfaction</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {productCategoryMetrics.map((category) => (
                    <tr key={category.category} className="border-b border-border hover:bg-primary/5 transition-colors">
                      <td className="py-3 px-4 text-sm font-medium text-card-foreground">{category.category}</td>
                      <td className="py-3 px-4 text-sm text-right font-semibold text-card-foreground">
                        ${category.revenue.toLocaleString()}
                      </td>
                      <td className="py-3 px-4 text-sm text-right text-muted-foreground">{category.margin}%</td>
                      <td className="py-3 px-4 text-sm text-right">
                        <span className="text-yellow-500 font-semibold">{category.satisfaction}/5</span>
                      </td>
                      <td className="py-3 px-4 text-sm text-right">
                        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">
                          Healthy
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
