"use client"

import { Button } from "@/components/ui/button"
import { Download, Settings, Filter, X } from "lucide-react"
import { useState } from "react"

interface TopBarProps {
  dateRange: string
  setDateRange: (range: string) => void
  region: string
  setRegion: (region: string) => void
}

export function TopBar({ dateRange, setDateRange, region, setRegion }: TopBarProps) {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [category, setCategory] = useState("all")
  const [status, setStatus] = useState("all")
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")

  const handleResetFilters = () => {
    setDateRange("last-30-days")
    setRegion("all")
    setCategory("all")
    setStatus("all")
    setMinPrice("")
    setMaxPrice("")
  }

  return (
    <div className="border-b border-border bg-card">
      <div className="p-6 max-w-7xl">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-4">
          <div className="flex items-center gap-3 flex-wrap flex-1">
            {/* Date Range Filter */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-muted-foreground uppercase">Date Range</label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="bg-background border border-border rounded px-3 py-2 text-sm text-foreground hover:border-primary/50 transition-colors"
              >
                <option value="last-7-days">Last 7 days</option>
                <option value="last-30-days">Last 30 days</option>
                <option value="last-90-days">Last 90 days</option>
                <option value="all-time">All time</option>
              </select>
            </div>

            {/* Region Filter */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-muted-foreground uppercase">Region</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="bg-background border border-border rounded px-3 py-2 text-sm text-foreground hover:border-primary/50 transition-colors"
              >
                <option value="all">All Regions</option>
                <option value="north">North America</option>
                <option value="europe">Europe</option>
                <option value="asia">Asia Pacific</option>
              </select>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="gap-2 bg-transparent text-foreground hover:bg-primary/10"
            >
              <Filter size={16} />
              {showAdvancedFilters ? "Hide" : "More"} Filters
            </Button>
            <Button variant="outline" size="icon" className="text-foreground bg-transparent hover:bg-primary/10">
              <Download size={18} />
            </Button>
            <Button variant="outline" size="icon" className="text-foreground bg-transparent hover:bg-primary/10">
              <Settings size={18} />
            </Button>
          </div>
        </div>

        {showAdvancedFilters && (
          <div className="border-t border-border/50 pt-4 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
              {/* Category Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-background border border-border rounded px-3 py-2 text-sm text-foreground hover:border-primary/50 transition-colors"
                >
                  <option value="all">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="home">Home & Garden</option>
                  <option value="sports">Sports</option>
                </select>
              </div>

              {/* Status Filter */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-background border border-border rounded px-3 py-2 text-sm text-foreground hover:border-primary/50 transition-colors"
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select>
              </div>

              {/* Min Price */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase">Min Price</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  placeholder="$0"
                  className="bg-background border border-border rounded px-3 py-2 text-sm text-foreground hover:border-primary/50 transition-colors"
                />
              </div>

              {/* Max Price */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold text-muted-foreground uppercase">Max Price</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  placeholder="$10000"
                  className="bg-background border border-border rounded px-3 py-2 text-sm text-foreground hover:border-primary/50 transition-colors"
                />
              </div>

              {/* Reset Button */}
              <div className="flex flex-col gap-2 justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleResetFilters}
                  className="gap-2 bg-background text-foreground hover:bg-destructive hover:text-destructive-foreground"
                >
                  <X size={16} />
                  Reset
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">Active Filters:</span>
              {dateRange !== "last-30-days" && (
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Date: {dateRange}</span>
              )}
              {region !== "all" && (
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Region: {region}</span>
              )}
              {category !== "all" && (
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Category: {category}</span>
              )}
              {status !== "all" && (
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">Status: {status}</span>
              )}
              {(minPrice || maxPrice) && (
                <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                  Price: ${minPrice || "0"} - ${maxPrice || "∞"}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
