import { mockCustomerSegments } from "@/lib/mock-data"

export async function GET(request: Request) {
  return Response.json({ success: true, data: mockCustomerSegments })
}
