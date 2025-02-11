import { Edit, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function ExpenseList({ expenses, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <Table className="w-full">
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
          {expenses.map((expense, index) => (
            <TableRow key={expense.id} className={index % 2 === 0 ? "bg-muted/50" : ""}>
              <TableCell>{expense.date}</TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.category}</TableCell>
              <TableCell className="text-right font-medium text-destructive">${expense.amount.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => onEdit(expense)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" onClick={() => onDelete(expense.id)}>
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

