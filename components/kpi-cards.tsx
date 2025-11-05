"use client"

import { TrendingUp, Users, ShoppingCart, DollarSign, ArrowUpRight, ArrowDownLeft } from "lucide-react"

const kpiData = [
  {
    label: "Total Sales",
    value: "$5.2M",
    change: "+12.5%",
    positive: true,
    icon: DollarSign,
    subtitle: "vs last month",
    trend: [65, 59, 80, 81, 56, 55, 40],
  },
  {
    label: "Total Customers",
    value: "2,430",
    change: "+8.3%",
    positive: true,
    icon: Users,
    subtitle: "vs last month",
    trend: [45, 52, 38, 61, 55, 67, 63],
  },
  {
    label: "Average Order Value",
    value: "$245.80",
    change: "+4.1%",
    positive: true,
    icon: ShoppingCart,
    subtitle: "vs last month",
    trend: [72, 68, 75, 71, 69, 78, 81],
  },
  {
    label: "Revenue Growth",
    value: "24.5%",
    change: "+2.1%",
    positive: true,
    icon: TrendingUp,
    subtitle: "year-over-year",
    trend: [55, 58, 62, 65, 68, 72, 75],
  },
]

function MiniSparkline({ data }: { data: number[] }) {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1
  const width = 100 / (data.length - 1)

  const points = data
    .map((value, index) => {
      const x = width * index
      const y = 40 - ((value - min) / range) * 30
      return `${x},${y}`
    })
    .join(" ")

  return (
    <svg width="100" height="40" viewBox="0 0 100 40" className="mt-2 opacity-60">
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  )
}

export function KPICards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {kpiData.map((item) => {
        const Icon = item.icon
        const TrendIcon = item.positive ? ArrowUpRight : ArrowDownLeft

        return (
          <div
            key={item.label}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors duration-200 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground mb-1">{item.label}</p>
                <p className="text-2xl font-bold text-card-foreground tracking-tight">{item.value}</p>
              </div>
              <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                <Icon size={24} className="text-primary" />
              </div>
            </div>

            <div className="text-primary text-opacity-40">
              <MiniSparkline data={item.trend} />
            </div>

            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
              <div
                className={`flex items-center gap-1 text-sm font-medium ${item.positive ? "text-green-500" : "text-red-500"}`}
              >
                <TrendIcon size={16} />
                <span>{item.change}</span>
              </div>
              <span className="text-xs text-muted-foreground">{item.subtitle}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
