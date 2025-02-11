"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Car, Utensils, Home, Music } from "lucide-react"

const categoryIcons = {
  Food: Utensils,
  Transport: Car,
  Entertainment: Music,
  Utilities: Home,
  Shopping: ShoppingBag,
}

const categoryColors = {
  Food: "bg-red-100 text-red-600",
  Transport: "bg-blue-100 text-blue-600",
  Entertainment: "bg-purple-100 text-purple-600",
  Utilities: "bg-green-100 text-green-600",
  Shopping: "bg-yellow-100 text-yellow-600",
}

export default function ExpenseCards({ expenses }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {expenses.map((expense, index) => {
        const Icon = categoryIcons[expense.category] || ShoppingBag
        const colorClass = categoryColors[expense.category] || "bg-gray-100 text-gray-600"

        return (
          <motion.div
            key={expense.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="flex items-center p-4">
                <div className={`p-3 rounded-full mr-4 ${colorClass}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{expense.description}</h3>
                  <p className="text-sm text-gray-500">{expense.date}</p>
                </div>
                <div className="text-lg font-bold">${expense.amount.toFixed(2)}</div>
              </CardContent>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}

