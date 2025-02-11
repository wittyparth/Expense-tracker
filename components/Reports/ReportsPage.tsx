"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DatePickerWithRange } from "@/components/ui/date-picker"
import { Download } from "lucide-react"
import MonthlyChart from "@/components/MonthlyChart"
import SpendingPieChart from "@/components/SpendingPieChart"

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState({ from: new Date(), to: new Date() })
  const [category, setCategory] = useState("all")
  const [account, setAccount] = useState("all")

  const handleExport = (format: "pdf" | "csv") => {
    // Handle export logic
    console.log(`Exporting as ${format}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Financial Reports</h1>

      <div className="grid gap-6 mb-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4">
              <DatePickerWithRange dateRange={dateRange} onDateRangeChange={setDateRange} />
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="transport">Transport</SelectItem>
                  <SelectItem value="utilities">Utilities</SelectItem>
                </SelectContent>
              </Select>
              <Select value={account} onValueChange={setAccount}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Accounts</SelectItem>
                  <SelectItem value="checking">Checking</SelectItem>
                  <SelectItem value="savings">Savings</SelectItem>
                  <SelectItem value="credit">Credit Card</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Income vs. Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <MonthlyChart />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Spending by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <SpendingPieChart />
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-end space-x-2">
        <Button onClick={() => handleExport("pdf")} variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export as PDF
        </Button>
        <Button onClick={() => handleExport("csv")} variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export as CSV
        </Button>
      </div>
    </div>
  )
}

