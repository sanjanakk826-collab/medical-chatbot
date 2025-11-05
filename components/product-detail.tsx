"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, AlertCircle } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface ProductDetailProps {
  productId?: number
}

const productDetailData = {
  name: "Wireless Headphones Pro",
  sku: "WHP-2024-001",
  category: "Electronics",
  status: "active",
  rating: 4.8,
  reviews: 342,
  price: "$199.99",
  cost: "$89.50",
  margin: 55,
  stock: 1245,
  image: "/wireless-headphones.png",
}

const salesHistory = [
  { week: "Week 1", sales: 120, revenue: 23880, units: 120 },
  { week: "Week 2", sales: 145, revenue: 28929, units: 145 },
  { week: "Week 3", sales: 198, revenue: 39600, units: 198 },
  { week: "Week 4", sales: 165, revenue: 32940, units: 165 },
  { week: "Week 5", sales: 210, revenue: 41990, units: 210 },
]

export function ProductDetail({ productId }: ProductDetailProps) {
  return (
    <main className="flex-1 overflow-auto bg-background p-8">
      <div className="max-w-5xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="outline" className="mb-4 bg-transparent text-foreground">
            ← Back
          </Button>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{productDetailData.name}</h1>
              <p className="text-muted-foreground mt-2">SKU: {productDetailData.sku}</p>
            </div>
            <Badge className="bg-green-500/20 text-green-400">{productDetailData.status}</Badge>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Product Overview */}
          <Card className="lg:col-span-1 p-6 bg-card border border-border">
            <img
              src={productDetailData.image || "/placeholder.svg"}
              alt={productDetailData.name}
              className="w-full rounded-lg mb-6 bg-muted"
            />
            <div className="space-y-4">
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Category</p>
                <p className="text-sm font-semibold text-foreground">{productDetailData.category}</p>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Rating</p>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < Math.floor(productDetailData.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({productDetailData.reviews} reviews)</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-medium text-muted-foreground uppercase mb-1">Stock Level</p>
                <p className="text-sm font-semibold text-foreground">{productDetailData.stock} units</p>
              </div>
            </div>
          </Card>

          {/* Metrics Cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-card border border-border">
                <p className="text-xs font-medium text-muted-foreground uppercase mb-2">Selling Price</p>
                <p className="text-2xl font-bold text-card-foreground">{productDetailData.price}</p>
              </Card>
              <Card className="p-4 bg-card border border-border">
                <p className="text-xs font-medium text-muted-foreground uppercase mb-2">Cost</p>
                <p className="text-2xl font-bold text-card-foreground">{productDetailData.cost}</p>
              </Card>
              <Card className="p-4 bg-card border border-border">
                <p className="text-xs font-medium text-muted-foreground uppercase mb-2">Margin</p>
                <p className="text-2xl font-bold text-green-500">{productDetailData.margin}%</p>
              </Card>
              <Card className="p-4 bg-card border border-border">
                <p className="text-xs font-medium text-muted-foreground uppercase mb-2">30-Day Revenue</p>
                <p className="text-2xl font-bold text-card-foreground">$120K</p>
              </Card>
            </div>

            {/* Quick Stats */}
            <Card className="p-4 bg-card border border-border">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">This Month</p>
                  <p className="text-lg font-bold text-foreground">
                    842 <span className="text-xs text-muted-foreground font-normal">units</span>
                  </p>
                  <p className="text-xs text-green-500 mt-1">+12.5% vs last month</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Conversion</p>
                  <p className="text-lg font-bold text-foreground">3.4%</p>
                  <p className="text-xs text-muted-foreground mt-1">of views to sales</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-2">Trend</p>
                  <p className="flex items-center gap-1 text-lg font-bold text-green-500">
                    <TrendingUp size={16} /> Strong
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">growing category</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Sales History Chart */}
        <Card className="p-6 bg-card border border-border mb-8">
          <h3 className="text-lg font-semibold text-card-foreground mb-6">Sales Trend (Last 5 Weeks)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={salesHistory}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--color-chart-1))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--color-chart-1))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
              <XAxis dataKey="week" stroke="hsl(var(--color-muted-foreground))" />
              <YAxis stroke="hsl(var(--color-muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--color-card))",
                  border: "1px solid hsl(var(--color-border))",
                }}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--color-chart-1))"
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Alerts */}
        <Card className="p-4 bg-amber-500/10 border border-amber-500/30">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-amber-500 mt-0.5" size={20} />
            <div>
              <p className="font-semibold text-amber-700">Stock Alert</p>
              <p className="text-sm text-amber-600 mt-1">
                Inventory for this product will run out in 4 weeks at current sales velocity. Consider reordering.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
