import { Edit, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const incomes = [
  { id: 1, date: "2023-06-01", description: "Salary", category: "Salary", amount: 5000.0 },
  { id: 2, date: "2023-06-05", description: "Freelance Project", category: "Freelance", amount: 1500.0 },
  { id: 3, date: "2023-06-10", description: "Dividend Payment", category: "Investments", amount: 200.5 },
  { id: 4, date: "2023-06-15", description: "Side Gig", category: "Freelance", amount: 500.0 },
  { id: 5, date: "2023-06-20", description: "Rental Income", category: "Real Estate", amount: 1200.0 },
]

export default function IncomeList({ onEdit }) {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {incomes.map((income) => (
            <TableRow key={income.id}>
              <TableCell>{income.date}</TableCell>
              <TableCell>{income.description}</TableCell>
              <TableCell>{income.category}</TableCell>
              <TableCell className="text-right text-green-600 font-medium">${income.amount.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => onEdit(income)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

