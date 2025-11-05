"use client"

const tableData = [
  { id: 1, product: "Wireless Headphones", category: "Electronics", revenue: "$2,450", orders: 245, trend: "up" },
  { id: 2, product: "Winter Jacket", category: "Clothing", revenue: "$1,880", orders: 188, trend: "up" },
  { id: 3, product: "Coffee Maker", category: "Home", revenue: "$1,560", orders: 156, trend: "down" },
  { id: 4, product: "Running Shoes", category: "Sports", revenue: "$1,240", orders: 124, trend: "up" },
  { id: 5, product: "Desk Lamp", category: "Home", revenue: "$890", orders: 89, trend: "flat" },
]

export function DetailsTable() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-lg font-semibold text-card-foreground mb-4">Top Products Performance</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Product</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Category</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Revenue</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Orders</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Trend</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} className="border-b border-border hover:bg-primary/5 transition-colors">
                <td className="py-3 px-4 text-sm text-card-foreground font-medium">{row.product}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{row.category}</td>
                <td className="py-3 px-4 text-sm text-card-foreground font-semibold">{row.revenue}</td>
                <td className="py-3 px-4 text-sm text-muted-foreground">{row.orders}</td>
                <td className="py-3 px-4">
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      row.trend === "up"
                        ? "bg-green-500/20 text-green-400"
                        : row.trend === "down"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {row.trend === "up" ? "↑ Up" : row.trend === "down" ? "↓ Down" : "→ Flat"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
