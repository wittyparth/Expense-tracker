import { motion } from "framer-motion"
import { ArrowDownIcon, ArrowUpIcon, CreditCard, DollarSign, PiggyBank } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const summaryData = [
  {
    title: "Total Income",
    amount: "$5,231.89",
    icon: DollarSign,
    color: "text-green-600",
    bgColor: "bg-green-100",
    change: "+20.1%",
    changeType: "positive",
  },
  {
    title: "Total Expenses",
    amount: "$3,045.50",
    icon: ArrowUpIcon,
    color: "text-red-600",
    bgColor: "bg-red-100",
    change: "+4.75%",
    changeType: "negative",
  },
  {
    title: "Net Savings",
    amount: "$2,186.39",
    icon: PiggyBank,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    change: "+12.5%",
    changeType: "positive",
  },
  {
    title: "Upcoming EMIs",
    amount: "$650.00",
    icon: CreditCard,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
    change: "2 due this month",
    changeType: "neutral",
  },
]

export default function SummaryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {summaryData.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.amount}</div>
              <p className="text-xs text-muted-foreground">
                {item.changeType === "positive" && <ArrowUpIcon className="inline h-4 w-4 text-green-600" />}
                {item.changeType === "negative" && <ArrowDownIcon className="inline h-4 w-4 text-red-600" />}
                <span
                  className={`ml-1 ${
                    item.changeType === "positive"
                      ? "text-green-600"
                      : item.changeType === "negative"
                        ? "text-red-600"
                        : ""
                  }`}
                >
                  {item.change}
                </span>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

