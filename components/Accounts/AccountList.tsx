import { Edit, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

const accounts = [
  { id: 1, name: "Checking Account", type: "Bank", balance: 5000.0 },
  { id: 2, name: "Savings Account", type: "Bank", balance: 10000.0 },
  { id: 3, name: "Credit Card", type: "Credit", balance: -1500.0 },
  { id: 4, name: "Investment Account", type: "Investment", balance: 25000.0 },
  { id: 5, name: "Cash", type: "Cash", balance: 500.0 },
]

export default function AccountList({ onEdit }) {
  return (
    <div className="overflow-x-auto">
      <Table className="hidden md:table">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead className="text-right">Balance</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {accounts.map((account, index) => (
            <TableRow key={account.id} className={index % 2 === 0 ? "bg-muted/50" : ""}>
              <TableCell>{account.name}</TableCell>
              <TableCell>{account.type}</TableCell>
              <TableCell
                className={`text-right font-medium ${account.balance >= 0 ? "text-green-600" : "text-red-600"}`}
              >
                ${account.balance.toFixed(2)}
              </TableCell>
              <TableCell>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => onEdit(account)}>
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
        {accounts.map((account) => (
          <Card key={account.id}>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="font-medium">{account.name}</div>
                <div className={`font-medium ${account.balance >= 0 ? "text-green-600" : "text-red-600"}`}>
                  ${account.balance.toFixed(2)}
                </div>
              </div>
              <div className="text-sm text-muted-foreground mb-4">{account.type}</div>
              <div className="flex justify-end space-x-2">
                <Button variant="ghost" size="sm" onClick={() => onEdit(account)}>
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

