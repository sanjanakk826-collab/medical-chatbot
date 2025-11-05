import { getFilteredProducts } from "@/lib/mock-data"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")
  const status = searchParams.get("status")

  const filteredProducts = getFilteredProducts({
    category: category || "all",
    status: status || "all",
  })

  return Response.json({ success: true, data: filteredProducts })
}
