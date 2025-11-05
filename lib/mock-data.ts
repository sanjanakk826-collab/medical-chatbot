export interface SalesMetric {
  date: string
  sales: number
  customers: number
  orders: number
}

export interface Product {
  id: number
  product: string
  category: string
  revenue: string
  orders: number
  trend: "up" | "down" | "flat"
  avgRating: number
  status: "active" | "pending" | "discontinued"
}

export interface KPIMetric {
  label: string
  value: string
  change: string
  positive: boolean
}

export interface CategoryPerformance {
  category: string
  revenue: number
  growth: number
  units_sold: number
}

export interface CustomerSegment {
  segment: string
  count: number
  avgOrderValue: number
  retentionRate: number
}

// Mock sales trend data
export const mockSalesTrendData: SalesMetric[] = [
  { date: "Jan 1", sales: 4000, customers: 240, orders: 120 },
  { date: "Jan 8", sales: 3800, customers: 221, orders: 110 },
  { date: "Jan 15", sales: 5200, customers: 290, orders: 150 },
  { date: "Jan 22", sales: 4780, customers: 250, orders: 140 },
  { date: "Jan 29", sales: 5890, customers: 329, orders: 180 },
  { date: "Feb 5", sales: 6390, customers: 370, orders: 200 },
  { date: "Feb 12", sales: 7490, customers: 421, orders: 240 },
]

// Mock products data
export const mockProductsData: Product[] = [
  {
    id: 1,
    product: "Wireless Headphones",
    category: "Electronics",
    revenue: "$2,450",
    orders: 245,
    trend: "up",
    avgRating: 4.8,
    status: "active",
  },
  {
    id: 2,
    product: "Winter Jacket",
    category: "Clothing",
    revenue: "$1,880",
    orders: 188,
    trend: "up",
    avgRating: 4.5,
    status: "active",
  },
  {
    id: 3,
    product: "Coffee Maker",
    category: "Home",
    revenue: "$1,560",
    orders: 156,
    trend: "down",
    avgRating: 4.2,
    status: "active",
  },
  {
    id: 4,
    product: "Running Shoes",
    category: "Sports",
    revenue: "$1,240",
    orders: 124,
    trend: "up",
    avgRating: 4.6,
    status: "active",
  },
  {
    id: 5,
    product: "Desk Lamp",
    category: "Home",
    revenue: "$890",
    orders: 89,
    trend: "flat",
    avgRating: 4.1,
    status: "active",
  },
  {
    id: 6,
    product: "Wireless Mouse",
    category: "Electronics",
    revenue: "$1,520",
    orders: 152,
    trend: "up",
    avgRating: 4.7,
    status: "active",
  },
  {
    id: 7,
    product: "Yoga Mat",
    category: "Sports",
    revenue: "$890",
    orders: 89,
    trend: "up",
    avgRating: 4.4,
    status: "active",
  },
  {
    id: 8,
    product: "Bedsheet Set",
    category: "Home",
    revenue: "$1,120",
    orders: 112,
    trend: "flat",
    avgRating: 4.3,
    status: "active",
  },
]

// Mock KPI data
export const mockKPIData: KPIMetric[] = [
  { label: "Total Sales", value: "$5.2M", change: "+12.5%", positive: true },
  { label: "Total Customers", value: "2,430", change: "+8.3%", positive: true },
  { label: "Average Order Value", value: "$245.80", change: "+4.1%", positive: true },
  { label: "Revenue Growth", value: "24.5%", change: "+2.1%", positive: true },
]

// Mock category performance data
export const mockCategoryPerformance: CategoryPerformance[] = [
  { category: "Electronics", revenue: 12000, growth: 8.5, units_sold: 2450 },
  { category: "Clothing", revenue: 8000, growth: 5.2, units_sold: 1600 },
  { category: "Home", revenue: 6000, growth: 3.1, units_sold: 1200 },
  { category: "Sports", revenue: 4000, growth: 6.8, units_sold: 800 },
]

// Mock customer segments
export const mockCustomerSegments: CustomerSegment[] = [
  { segment: "Premium", count: 342, avgOrderValue: 450, retentionRate: 92 },
  { segment: "Regular", count: 1250, avgOrderValue: 180, retentionRate: 68 },
  { segment: "Occasional", count: 838, avgOrderValue: 85, retentionRate: 35 },
]

// Helper function to get filtered data
export function getFilteredProducts(filters: {
  category?: string
  status?: string
  minPrice?: number
  maxPrice?: number
}): Product[] {
  return mockProductsData.filter((product) => {
    if (filters.category && filters.category !== "all") {
      if (product.category.toLowerCase() !== filters.category.toLowerCase()) return false
    }
    if (filters.status && filters.status !== "all") {
      if (product.status !== filters.status) return false
    }
    return true
  })
}

// Helper to get summary statistics
export function getSummaryStats() {
  const totalSales = mockSalesTrendData.reduce((sum, item) => sum + item.sales, 0)
  const totalOrders = mockSalesTrendData.reduce((sum, item) => sum + item.orders, 0)
  const avgOrderValue = totalSales / totalOrders

  return {
    totalSales: `$${(totalSales / 1000).toFixed(1)}K`,
    totalOrders,
    avgOrderValue: `$${avgOrderValue.toFixed(2)}`,
    totalCustomers: 2430,
  }
}
