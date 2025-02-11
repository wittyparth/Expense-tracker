import { motion } from "framer-motion"
import { DollarSign, PlusCircle, CreditCard, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"

const actions = [
  { icon: PlusCircle, label: "Add Expense", color: "bg-red-500 hover:bg-red-600" },
  { icon: DollarSign, label: "Add Income", color: "bg-green-500 hover:bg-green-600" },
  { icon: CreditCard, label: "Add EMI", color: "bg-yellow-500 hover:bg-yellow-600" },
  { icon: BarChart, label: "View Reports", color: "bg-blue-500 hover:bg-blue-600" },
]

export default function QuickActions() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <motion.div
          key={action.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <Button
            variant="default"
            className={`w-full h-24 ${action.color} text-white flex flex-col items-center justify-center space-y-2`}
          >
            <action.icon className="h-6 w-6" />
            <span>{action.label}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  )
}

