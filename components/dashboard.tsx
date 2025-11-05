"use client"

import { useState } from "react"
import { TopBar } from "./top-bar"
import { KPICards } from "./kpi-cards"
import { DataCharts } from "./data-charts"
import { DetailsTable } from "./details-table"

export function Dashboard() {
  const [dateRange, setDateRange] = useState("last-30-days")
  const [region, setRegion] = useState("all")

  return (
    <main className="flex-1 overflow-auto bg-background">
      <TopBar dateRange={dateRange} setDateRange={setDateRange} region={region} setRegion={setRegion} />
      <div className="p-8 max-w-7xl">
        <KPICards />
        <DataCharts />
        <DetailsTable />
      </div>
    </main>
  )
}
