"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Home, Utensils, Car, Film } from "lucide-react"

const transactions = [
  {
    id: 1,
    date: "2023-06-15",
    description: "Grocery Shopping",
    amount: -85.5,
    icon: ShoppingCart,
    category: "Shopping",
  },
  { id: 2, date: "2023-06-14", description: "Rent Payment", amount: -1200.0, icon: Home, category: "Housing" },
  { id: 3, date: "2023-06-13", description: "Restaurant Dinner", amount: -65.75, icon: Utensils, category: "Food" },
  { id: 4, date: "2023-06-12", description: "Gas Station", amount: -45.0, icon: Car, category: "Transportation" },
  { id: 5, date: "2023-06-11", description: "Movie Tickets", amount: -30.0, icon: Film, category: "Entertainment" },
]

export default function TransactionTimeline() {
  return (
    <div className="space-y-8">
      {transactions.map((transaction, index) => (
        <motion.div
          key={transaction.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex items-center space-x-4"
        >
          <div
            className={`p-2 rounded-full ${
              transaction.amount < 0 ? "bg-red-100 text-red-600" : "bg-green-100 text-green-600"
            }`}
          >
            <transaction.icon className="h-6 w-6" />
          </div>
          <div className="flex-grow">
            <p className="font-semibold">{transaction.description}</p>
            <p className="text-sm text-gray-500">{transaction.date}</p>
          </div>
          <div className={`font-semibold ${transaction.amount < 0 ? "text-red-600" : "text-green-600"}`}>
            ${Math.abs(transaction.amount).toFixed(2)}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

