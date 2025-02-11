import { Edit, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

const emis = [
  { id: 1, name: "Car Loan", amount: 500, dueDate: "2023-07-15", remainingPayments: 24 },
  { id: 2, name: "Home Loan", amount: 1500, dueDate: "2023-07-01", remainingPayments: 180 },
  { id: 3, name: "Personal Loan", amount: 300, dueDate: "2023-07-10", remainingPayments: 12 },
  { id: 4, name: "Education Loan", amount: 400, dueDate: "2023-07-05", remainingPayments: 36 },
  { id: 5, name: "Appliance Loan", amount: 100, dueDate: "2023-07-20", remainingPayments: 6 },
]

export default function EMIList({ onEdit }) {
  return (
    <div className="overflow-x-auto">
      <Table className="hidden md:table">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead className="text-center">Remaining Payments</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {emis.map((emi, index) => (
            <TableRow key={emi.id} className={index % 2 === 0 ? "bg-muted/50" : ""}>
              <TableCell>{emi.name}</TableCell>
              <TableCell className="text-right font-medium">${emi.amount.toFixed(2)}</TableCell>
              <TableCell>{emi.dueDate}</TableCell>
              <TableCell className="text-center">{emi.remainingPayments}</TableCell>
              <TableCell>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => onEdit(emi)}>
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
      <div className="md:hidden space-y-4">
        {emis.map((emi) => (
          <Card key={emi.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">{emi.name}</div>
                <div className="font-medium">${emi.amount.toFixed(2)}</div>
              </div>
              <div className="text-sm text-muted-foreground mb-2">Due: {emi.dueDate}</div>
              <div className="text-sm text-muted-foreground mb-4">Remaining: {emi.remainingPayments} payments</div>
              <div className="flex justify-end space-x-2">
                <Button variant="ghost" size="sm" onClick={() => onEdit(emi)}>
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash className="h-4 w-4 mr-1" /> Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

