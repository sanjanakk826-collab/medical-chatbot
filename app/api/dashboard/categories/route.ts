import { mockCategoryPerformance } from "@/lib/mock-data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const region = searchParams.get("region") || "all"

  return Response.json({ success: true, data: mockCategoryPerformance })
}
