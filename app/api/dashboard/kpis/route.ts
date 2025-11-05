import { mockKPIData, getSummaryStats } from "@/lib/mock-data"

export async function GET(request: Request) {
  const stats = getSummaryStats()

  const kpis = [
    { ...mockKPIData[0], value: stats.totalSales },
    { ...mockKPIData[1], value: stats.totalCustomers.toString() },
    { ...mockKPIData[2], value: stats.avgOrderValue },
    { ...mockKPIData[3] },
  ]

  return Response.json({ success: true, data: kpis })
}
