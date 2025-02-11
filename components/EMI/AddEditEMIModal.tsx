import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { format } from "date-fns"

interface AddEditEMIModalProps {
  isOpen: boolean
  onClose: () => void
  emi?: any // Replace with proper type
}

export default function AddEditEMIModal({ isOpen, onClose, emi }: AddEditEMIModalProps) {
  const [name, setName] = useState(emi?.name || "")
  const [amount, setAmount] = useState(emi?.amount || "")
  const [dueDate, setDueDate] = useState<Date | undefined>(emi ? new Date(emi.dueDate) : undefined)
  const [remainingPayments, setRemainingPayments] = useState(emi?.remainingPayments || "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{emi ? "Edit EMI" : "Add EMI"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dueDate" className="text-right">
                Due Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="dueDate"
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${!dueDate && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dueDate ? format(dueDate, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={dueDate} onSelect={setDueDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="remainingPayments" className="text-right">
                Remaining Payments
              </Label>
              <Input
                id="remainingPayments"
                type="number"
                value={remainingPayments}
                onChange={(e) => setRemainingPayments(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

