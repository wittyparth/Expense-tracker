import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"

const recentTransactions = [
  {
    id: 1,
    date: "2023-06-01",
    type: "Expense",
    description: "Grocery shopping",
    amount: 85.5,
    category: "Food",
    account: "Credit Card",
  },
  {
    id: 2,
    date: "2023-06-03",
    type: "Income",
    description: "Salary",
    amount: 3000.0,
    category: "Salary",
    account: "Bank Account",
  },
  {
    id: 3,
    date: "2023-06-05",
    type: "Expense",
    description: "Gas station",
    amount: 45.0,
    category: "Transport",
    account: "Debit Card",
  },
  {
    id: 4,
    date: "2023-06-07",
    type: "Expense",
    description: "Restaurant dinner",
    amount: 78.25,
    category: "Food",
    account: "Credit Card",
  },
  {
    id: 5,
    date: "2023-06-10",
    type: "Expense",
    description: "Mobile phone bill",
    amount: 60.0,
    category: "Utilities",
    account: "Bank Account",
  },
  {
    id: 6,
    date: "2023-06-12",
    type: "Income",
    description: "Freelance work",
    amount: 500.0,
    category: "Side Hustle",
    account: "PayPal",
  },
  {
    id: 7,
    date: "2023-06-15",
    type: "Expense",
    description: "Movie tickets",
    amount: 30.0,
    category: "Entertainment",
    account: "Credit Card",
  },
  {
    id: 8,
    date: "2023-06-18",
    type: "Expense",
    description: "Gym membership",
    amount: 50.0,
    category: "Health",
    account: "Debit Card",
  },
  {
    id: 9,
    date: "2023-06-20",
    type: "Income",
    description: "Dividend payment",
    amount: 75.5,
    category: "Investment",
    account: "Investment Account",
  },
  {
    id: 10,
    date: "2023-06-22",
    type: "Expense",
    description: "Online course",
    amount: 199.99,
    category: "Education",
    account: "Credit Card",
  },
]

export default function RecentTransactions() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Account</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentTransactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>
              {transaction.type === "Income" ? (
                <span className="flex items-center text-green-600">
                  <ArrowDownIcon className="mr-1 h-4 w-4" />
                  Income
                </span>
              ) : (
                <span className="flex items-center text-red-600">
                  <ArrowUpIcon className="mr-1 h-4 w-4" />
                  Expense
                </span>
              )}
            </TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell>{transaction.category}</TableCell>
            <TableCell>{transaction.account}</TableCell>
            <TableCell className="text-right">
              <span className={transaction.type === "Income" ? "text-green-600" : "text-red-600"}>
                ${transaction.amount.toFixed(2)}
              </span>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

