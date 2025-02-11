import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"

interface AddEditAccountModalProps {
  isOpen: boolean
  onClose: () => void
  account?: any // Replace with proper type
}

export default function AddEditAccountModal({ isOpen, onClose, account }: AddEditAccountModalProps) {
  const [name, setName] = useState(account?.name || "")
  const [type, setType] = useState(account?.type || "")
  const [balance, setBalance] = useState(account?.balance || "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{account ? "Edit Account" : "Add Account"}</DialogTitle>
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
              <Label htmlFor="type" className="text-right">
                Type
              </Label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Select account type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Bank</SelectItem>
                  <SelectItem value="credit">Credit</SelectItem>
                  <SelectItem value="investment">Investment</SelectItem>
                  <SelectItem value="cash">Cash</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="balance" className="text-right">
                Balance
              </Label>
              <Input
                id="balance"
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
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

