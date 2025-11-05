"use client"

import {
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts"

const salesTrendData = [
  { date: "Jan 1", sales: 4000, customers: 240, orders: 120 },
  { date: "Jan 8", sales: 3800, customers: 221, orders: 110 },
  { date: "Jan 15", sales: 5200, customers: 290, orders: 150 },
  { date: "Jan 22", sales: 4780, customers: 250, orders: 140 },
  { date: "Jan 29", sales: 5890, customers: 329, orders: 180 },
  { date: "Feb 5", sales: 6390, customers: 370, orders: 200 },
  { date: "Feb 12", sales: 7490, customers: 421, orders: 240 },
]

const productSalesData = [
  { name: "Electronics", value: 1200 },
  { name: "Clothing", value: 800 },
  { name: "Home", value: 600 },
  { name: "Sports", value: 400 },
]

const categoryPerformanceData = [
  { category: "Electronics", revenue: 12000, growth: 8.5 },
  { category: "Clothing", revenue: 8000, growth: 5.2 },
  { category: "Home", revenue: 6000, growth: 3.1 },
  { category: "Sports", revenue: 4000, growth: 6.8 },
]

const COLORS = [
  "hsl(var(--color-chart-1))",
  "hsl(var(--color-chart-2))",
  "hsl(var(--color-chart-3))",
  "hsl(var(--color-chart-4))",
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
        <p className="text-sm font-medium text-card-foreground">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-xs" style={{ color: entry.color }}>
            {entry.name}: {entry.value.toLocaleString()}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function DataCharts() {
  return (
    <div className="space-y-6 mb-8">
      <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-card-foreground">Sales & Customer Trend</h3>
          <span className="text-xs text-muted-foreground">Last 6 weeks</span>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={salesTrendData}>
            <defs>
              <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--color-chart-1))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--color-chart-1))" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
            <XAxis dataKey="date" stroke="hsl(var(--color-muted-foreground))" />
            <YAxis stroke="hsl(var(--color-muted-foreground))" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Area
              type="monotone"
              dataKey="sales"
              stroke="hsl(var(--color-chart-1))"
              fillOpacity={1}
              fill="url(#colorSales)"
            />
            <Line type="monotone" dataKey="customers" stroke="hsl(var(--color-chart-2))" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales by category pie chart */}
        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Sales Distribution by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={productSalesData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {productSalesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--color-card))",
                  border: "1px solid hsl(var(--color-border))",
                }}
                formatter={(value) => `$${value.toLocaleString()}`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Revenue by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryPerformanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
              <XAxis dataKey="category" stroke="hsl(var(--color-muted-foreground))" />
              <YAxis stroke="hsl(var(--color-muted-foreground))" />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="revenue" fill="hsl(var(--color-chart-1))" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
