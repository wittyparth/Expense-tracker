import { motion } from "framer-motion"
import { AlertTriangle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const upcomingPayments = [
  { id: 1, dueDate: "2023-06-30", description: "Car Loan EMI", amount: 450, isOverdue: false },
  { id: 2, dueDate: "2023-06-25", description: "Credit Card Bill", amount: 200, isOverdue: true },
  { id: 3, dueDate: "2023-07-05", description: "Home Rent", amount: 1200, isOverdue: false },
  { id: 4, dueDate: "2023-07-10", description: "Internet Bill", amount: 50, isOverdue: false },
]

export default function UpcomingPayments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Payments</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {upcomingPayments.map((payment, index) => (
            <motion.li
              key={payment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div
                className={`flex items-center justify-between p-4 rounded-lg ${payment.isOverdue ? "bg-red-50" : "bg-gray-50"}`}
              >
                <div className="flex items-center space-x-4">
                  {payment.isOverdue && <AlertTriangle className="h-5 w-5 text-red-500" />}
                  <div>
                    <p className={`font-medium ${payment.isOverdue ? "text-red-700" : "text-gray-700"}`}>
                      {payment.description}
                    </p>
                    <p className="text-sm text-gray-500">Due: {payment.dueDate}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <p className={`font-medium ${payment.isOverdue ? "text-red-700" : "text-gray-700"}`}>
                    ${payment.amount}
                  </p>
                  <Button variant="outline" size="sm">
                    <Check className="h-4 w-4 mr-1" />
                    Mark Paid
                  </Button>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

