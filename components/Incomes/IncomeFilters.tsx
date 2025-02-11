import { useState } from "react"
import { CalendarIcon, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

export default function IncomeFilters() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={`w-full justify-start text-left font-normal ${!date && "text-muted-foreground"}`}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        </PopoverContent>
      </Popover>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="salary">Salary</SelectItem>
          <SelectItem value="freelance">Freelance</SelectItem>
          <SelectItem value="investments">Investments</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Account" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="cash">Cash</SelectItem>
          <SelectItem value="bank-account">Bank Account</SelectItem>
          <SelectItem value="paypal">PayPal</SelectItem>
        </SelectContent>
      </Select>

      <div className="relative">
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <Input type="text" placeholder="Search incomes..." className="pl-8" />
      </div>
    </div>
  )
}

