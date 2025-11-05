import { mockSalesTrendData } from "@/lib/mock-data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const dateRange = searchParams.get("dateRange") || "last-30-days"

  let filteredData = mockSalesTrendData

  if (dateRange === "last-7-days") {
    filteredData = mockSalesTrendData.slice(-1)
  } else if (dateRange === "last-90-days") {
    // In a real app, generate more data
    filteredData = mockSalesTrendData
  }

  return Response.json({ success: true, data: filteredData })
}
