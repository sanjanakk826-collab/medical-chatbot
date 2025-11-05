"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ChevronDown } from "lucide-react"

interface FiltersPanelProps {
  onFilterChange?: (filters: FilterState) => void
  onClose?: () => void
}

export interface FilterState {
  dateRange: string
  region: string
  category: string
  status: string
  minPrice: string
  maxPrice: string
}

export function FiltersPanel({ onFilterChange, onClose }: FiltersPanelProps) {
  const [filters, setFilters] = useState<FilterState>({
    dateRange: "last-30-days",
    region: "all",
    category: "all",
    status: "all",
    minPrice: "",
    maxPrice: "",
  })

  const [expandedSections, setExpandedSections] = useState({
    date: true,
    region: true,
    category: true,
    status: true,
    price: true,
  })

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const updateFilter = (key: keyof FilterState, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange?.(newFilters)
  }

  const handleReset = () => {
    const resetFilters: FilterState = {
      dateRange: "last-30-days",
      region: "all",
      category: "all",
      status: "all",
      minPrice: "",
      maxPrice: "",
    }
    setFilters(resetFilters)
    onFilterChange?.(resetFilters)
  }

  return (
    <Card className="w-72 bg-card border border-border p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-card-foreground">Filters</h3>
        <button onClick={onClose} className="p-1 hover:bg-muted rounded transition-colors">
          <X size={18} className="text-muted-foreground" />
        </button>
      </div>

      <div className="space-y-4">
        <div className="border-b border-border/50">
          <button
            onClick={() => toggleSection("date")}
            className="w-full flex items-center justify-between py-2 hover:text-primary transition-colors"
          >
            <span className="font-medium text-sm text-foreground">Date Range</span>
            <ChevronDown size={16} className={`transition-transform ${expandedSections.date ? "rotate-180" : ""}`} />
          </button>
          {expandedSections.date && (
            <div className="space-y-2 pb-4">
              {[
                { value: "last-7-days", label: "Last 7 days" },
                { value: "last-30-days", label: "Last 30 days" },
                { value: "last-90-days", label: "Last 90 days" },
                { value: "all-time", label: "All time" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="dateRange"
                    value={option.value}
                    checked={filters.dateRange === option.value}
                    onChange={(e) => updateFilter("dateRange", e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="border-b border-border/50">
          <button
            onClick={() => toggleSection("region")}
            className="w-full flex items-center justify-between py-2 hover:text-primary transition-colors"
          >
            <span className="font-medium text-sm text-foreground">Region</span>
            <ChevronDown size={16} className={`transition-transform ${expandedSections.region ? "rotate-180" : ""}`} />
          </button>
          {expandedSections.region && (
            <div className="space-y-2 pb-4">
              {[
                { value: "all", label: "All Regions" },
                { value: "north", label: "North America" },
                { value: "europe", label: "Europe" },
                { value: "asia", label: "Asia Pacific" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="region"
                    value={option.value}
                    checked={filters.region === option.value}
                    onChange={(e) => updateFilter("region", e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="border-b border-border/50">
          <button
            onClick={() => toggleSection("category")}
            className="w-full flex items-center justify-between py-2 hover:text-primary transition-colors"
          >
            <span className="font-medium text-sm text-foreground">Category</span>
            <ChevronDown
              size={16}
              className={`transition-transform ${expandedSections.category ? "rotate-180" : ""}`}
            />
          </button>
          {expandedSections.category && (
            <div className="space-y-2 pb-4">
              {[
                { value: "all", label: "All Categories" },
                { value: "electronics", label: "Electronics" },
                { value: "clothing", label: "Clothing" },
                { value: "home", label: "Home & Garden" },
                { value: "sports", label: "Sports" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={filters.category === option.value}
                    onChange={(e) => updateFilter("category", e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="border-b border-border/50">
          <button
            onClick={() => toggleSection("status")}
            className="w-full flex items-center justify-between py-2 hover:text-primary transition-colors"
          >
            <span className="font-medium text-sm text-foreground">Status</span>
            <ChevronDown size={16} className={`transition-transform ${expandedSections.status ? "rotate-180" : ""}`} />
          </button>
          {expandedSections.status && (
            <div className="space-y-2 pb-4">
              {[
                { value: "all", label: "All Status" },
                { value: "active", label: "Active" },
                { value: "pending", label: "Pending" },
                { value: "completed", label: "Completed" },
              ].map((option) => (
                <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    value={option.value}
                    checked={filters.status === option.value}
                    onChange={(e) => updateFilter("status", e.target.value)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm text-foreground">{option.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="border-b border-border/50">
          <button
            onClick={() => toggleSection("price")}
            className="w-full flex items-center justify-between py-2 hover:text-primary transition-colors"
          >
            <span className="font-medium text-sm text-foreground">Price Range</span>
            <ChevronDown size={16} className={`transition-transform ${expandedSections.price ? "rotate-180" : ""}`} />
          </button>
          {expandedSections.price && (
            <div className="space-y-3 pb-4">
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Minimum</label>
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => updateFilter("minPrice", e.target.value)}
                  placeholder="$0"
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Maximum</label>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => updateFilter("maxPrice", e.target.value)}
                  placeholder="$10000"
                  className="w-full bg-background border border-border rounded px-3 py-2 text-sm text-foreground"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 mt-6 pt-4 border-t border-border/50">
        <Button
          onClick={handleReset}
          variant="outline"
          className="flex-1 bg-transparent text-foreground hover:bg-muted"
        >
          Reset
        </Button>
        <Button onClick={onClose} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
          Apply
        </Button>
      </div>
    </Card>
  )
}
