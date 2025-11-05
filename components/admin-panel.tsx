"use client"

import { Activity, Database, RotateCw, AlertCircle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

const etlJobs = [
  {
    id: 1,
    name: "Sales Data Sync",
    status: "running",
    lastRun: "2 minutes ago",
    duration: "2m 15s",
    successRate: 98.5,
  },
  {
    id: 2,
    name: "Customer Data Import",
    status: "completed",
    lastRun: "1 hour ago",
    duration: "5m 42s",
    successRate: 99.2,
  },
  { id: 3, name: "Inventory Update", status: "failed", lastRun: "3 hours ago", duration: "1m 30s", successRate: 87.3 },
  {
    id: 4,
    name: "Revenue Reconciliation",
    status: "completed",
    lastRun: "12 hours ago",
    duration: "8m 25s",
    successRate: 99.8,
  },
]

const jobPerformance = [
  { time: "12 AM", duration: 245, records: 12500 },
  { time: "3 AM", duration: 198, records: 10200 },
  { time: "6 AM", duration: 312, records: 15800 },
  { time: "9 AM", duration: 267, records: 13400 },
  { time: "12 PM", duration: 289, records: 14600 },
  { time: "3 PM", duration: 156, records: 7900 },
  { time: "6 PM", duration: 423, records: 21200 },
  { time: "9 PM", duration: 334, records: 16700 },
]

const dataQualityMetrics = [
  { table: "sales_transactions", records: 2500000, quality: 98.5, lastSync: "2 min ago" },
  { table: "customers", records: 850000, quality: 99.2, lastSync: "15 min ago" },
  { table: "inventory", records: 125000, quality: 87.3, lastSync: "1 hour ago" },
  { table: "products", records: 45000, quality: 99.8, lastSync: "5 min ago" },
  { table: "orders", records: 1200000, quality: 96.4, lastSync: "3 min ago" },
]

export function AdminPanel() {
  return (
    <main className="flex-1 overflow-auto bg-background">
      <div className="p-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor ETL jobs, data quality, and warehouse health</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-card border border-border">
            <div className="flex items-center gap-3 mb-2">
              <Database size={20} className="text-primary" />
              <p className="text-sm text-muted-foreground">Total Tables</p>
            </div>
            <p className="text-2xl font-bold text-card-foreground">24</p>
            <p className="text-xs text-green-500 mt-2">5.2M records synced</p>
          </Card>
          <Card className="p-6 bg-card border border-border">
            <div className="flex items-center gap-3 mb-2">
              <Activity size={20} className="text-blue-500" />
              <p className="text-sm text-muted-foreground">Jobs Running</p>
            </div>
            <p className="text-2xl font-bold text-card-foreground">2</p>
            <p className="text-xs text-blue-500 mt-2">Average: 4m 12s</p>
          </Card>
          <Card className="p-6 bg-card border border-border">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle size={20} className="text-green-500" />
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            <p className="text-2xl font-bold text-card-foreground">96.8%</p>
            <p className="text-xs text-green-500 mt-2">142 completed jobs</p>
          </Card>
          <Card className="p-6 bg-card border border-border">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle size={20} className="text-red-500" />
              <p className="text-sm text-muted-foreground">Failed Jobs</p>
            </div>
            <p className="text-2xl font-bold text-card-foreground">3</p>
            <p className="text-xs text-red-500 mt-2">Requires attention</p>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Job Duration Trend */}
          <Card className="p-6 bg-card border border-border">
            <h2 className="text-lg font-semibold text-card-foreground mb-6">Job Duration Trend</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={jobPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
                <XAxis dataKey="time" stroke="hsl(var(--color-muted-foreground))" />
                <YAxis stroke="hsl(var(--color-muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--color-card))",
                    border: "1px solid hsl(var(--color-border))",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="duration"
                  stroke="hsl(var(--color-chart-1))"
                  strokeWidth={2}
                  name="Duration (sec)"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Records Processed */}
          <Card className="p-6 bg-card border border-border">
            <h2 className="text-lg font-semibold text-card-foreground mb-6">Records Processed</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={jobPerformance}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
                <XAxis dataKey="time" stroke="hsl(var(--color-muted-foreground))" />
                <YAxis stroke="hsl(var(--color-muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--color-card))",
                    border: "1px solid hsl(var(--color-border))",
                  }}
                />
                <Bar dataKey="records" fill="hsl(var(--color-chart-2))" radius={[8, 8, 0, 0]} name="Records" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* ETL Jobs Status */}
        <Card className="p-6 bg-card border border-border mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-card-foreground">ETL Jobs Status</h2>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <RotateCw size={16} />
              Refresh
            </Button>
          </div>

          <div className="space-y-3">
            {etlJobs.map((job) => (
              <div
                key={job.id}
                className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-primary/5 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-medium text-card-foreground">{job.name}</p>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        job.status === "running"
                          ? "bg-blue-500/20 text-blue-400"
                          : job.status === "completed"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Last run: {job.lastRun} · Duration: {job.duration} · Success Rate: {job.successRate}%
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{job.successRate}%</p>
                    <p className="text-xs text-muted-foreground">Success</p>
                  </div>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Data Quality Metrics */}
        <Card className="p-6 bg-card border border-border">
          <h2 className="text-lg font-semibold text-card-foreground mb-6">Data Quality Metrics by Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Table Name</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Record Count</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Data Quality</th>
                  <th className="text-right py-3 px-4 text-sm font-semibold text-muted-foreground">Last Sync</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {dataQualityMetrics.map((metric) => (
                  <tr key={metric.table} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="py-3 px-4 text-sm font-medium text-card-foreground font-mono">{metric.table}</td>
                    <td className="py-3 px-4 text-sm text-right text-muted-foreground">
                      {(metric.records / 1000000).toFixed(2)}M
                    </td>
                    <td className="py-3 px-4 text-sm text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 bg-muted rounded-full h-2">
                          <div
                            className={`h-full rounded-full ${metric.quality >= 95 ? "bg-green-500" : metric.quality >= 85 ? "bg-yellow-500" : "bg-red-500"}`}
                            style={{ width: `${metric.quality}%` }}
                          />
                        </div>
                        <span className="font-semibold text-card-foreground w-12 text-right">{metric.quality}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-sm text-right text-muted-foreground">{metric.lastSync}</td>
                    <td className="py-3 px-4 text-sm text-center">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${metric.quality >= 95 ? "bg-green-500/20 text-green-400" : metric.quality >= 85 ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"}`}
                      >
                        {metric.quality >= 95 ? "Healthy" : metric.quality >= 85 ? "Warning" : "Critical"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </main>
  )
}
