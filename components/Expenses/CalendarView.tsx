"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns"
import { Card, CardContent } from "@/components/ui/card"

export default function CalendarView({ expenses }) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date) => {
    const start = startOfMonth(date)
    const end = endOfMonth(date)
    return eachDayOfInterval({ start, end })
  }

  const getExpenseForDay = (day) => {
    return expenses.filter((expense) => expense.date === format(day, "yyyy-MM-dd"))
  }

  const getColorIntensity = (amount) => {
    const maxAmount = Math.max(...expenses.map((e) => e.amount))
    const intensity = Math.min(Math.floor((amount / maxAmount) * 255), 255)
    return `rgb(255, ${255 - intensity}, ${255 - intensity})`
  }

  const days = getDaysInMonth(currentMonth)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-7 gap-2"
    >
      {days.map((day, index) => {
        const dayExpenses = getExpenseForDay(day)
        const totalAmount = dayExpenses.reduce((sum, e) => sum + e.amount, 0)
        const backgroundColor = totalAmount > 0 ? getColorIntensity(totalAmount) : "transparent"

        return (
          <Card key={index} style={{ backgroundColor }}>
            <CardContent className="p-2 text-center">
              <div className="font-semibold">{format(day, "d")}</div>
              {totalAmount > 0 && <div className="text-xs">${totalAmount.toFixed(2)}</div>}
            </CardContent>
          </Card>
        )
      })}
    </motion.div>
  )
}

