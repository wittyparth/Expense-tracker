"use client"

import { useState, useEffect } from "react"
import { CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { format } from "date-fns"

export default function AddEditExpenseModal({ isOpen, onClose, expense, onAdd, onEdit }) {
  const [formData, setFormData] = useState({
    date: new Date(),
    description: "",
    category: "",
    amount: "",
  })

  useEffect(() => {
    if (expense) {
      setFormData({
        date: new Date(expense.date),
        description: expense.description,
        category: expense.category,
        amount: expense.amount.toString(),
      })
    } else {
      setFormData({
        date: new Date(),
        description: "",
        category: "",
        amount: "",
      })
    }
  }, [expense])

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const expenseData = {
      ...formData,
      amount: Number.parseFloat(formData.amount),
      date: format(formData.date, "yyyy-MM-dd"),
    }
    if (expense) {
      onEdit({ ...expenseData, id: expense.id })
    } else {
      onAdd(expenseData)
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{expense ? "Edit Expense" : "Add Expense"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="date" className="text-right">
                Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={`w-full justify-start text-left font-normal ${!formData.date && "text-muted-foreground"}`}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={formData.date}
                    onSelect={(date) => handleChange("date", date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>
              <Select value={formData.category} onValueChange={(value) => handleChange("category", value)}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="food">Food</SelectItem>
                  <SelectItem value="transport">Transport</SelectItem>
                  <SelectItem value="utilities">Utilities</SelectItem>
                  <SelectItem value="entertainment">Entertainment</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="amount" className="text-right">
                Amount
              </Label>
              <Input
                id="amount"
                type="number"
                value={formData.amount}
                onChange={(e) => handleChange("amount", e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              {expense ? "Save Changes" : "Add Expense"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

