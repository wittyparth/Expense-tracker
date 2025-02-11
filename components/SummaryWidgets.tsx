"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const budgetCategories = [
  { name: "Groceries", spent: 80, total: 100 },
  { name: "Entertainment", spent: 60, total: 100 },
  { name: "Transportation", spent: 40, total: 100 },
]

const savingsGoals = [
  { name: "Emergency Fund", current: 5000, target: 10000 },
  { name: "Vacation", current: 2000, target: 5000 },
]

export default function SummaryWidgets() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Budget Categories</CardTitle>
        </CardHeader>
        <CardContent>
          {budgetCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="flex justify-between mb-1">
                <span>{category.name}</span>
                <span>
                  {category.spent}% of ${category.total}
                </span>
              </div>
              <Progress value={category.spent} className="h-2" />
            </motion.div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Savings Goals</CardTitle>
        </CardHeader>
        <CardContent>
          {savingsGoals.map((goal, index) => (
            <motion.div
              key={goal.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <div className="flex justify-between mb-1">
                <span>{goal.name}</span>
                <span>
                  ${goal.current} of ${goal.target}
                </span>
              </div>
              <Progress value={(goal.current / goal.target) * 100} className="h-2" />
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

