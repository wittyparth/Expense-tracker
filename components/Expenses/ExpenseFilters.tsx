import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export default function ExpenseFilters({ filters, setFilters }) {
  const handleChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }))
  }

  const handleReset = () => {
    setFilters({
      category: "",
      startDate: "",
      endDate: "",
      minAmount: "",
      maxAmount: "",
    })
  }

  return (
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select value={filters.category} onValueChange={(value) => handleChange("category", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="food">Food</SelectItem>
            <SelectItem value="transport">Transport</SelectItem>
            <SelectItem value="utilities">Utilities</SelectItem>
            <SelectItem value="entertainment">Entertainment</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="startDate">Start Date</Label>
        <Input
          id="startDate"
          type="date"
          value={filters.startDate}
          onChange={(e) => handleChange("startDate", e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="endDate">End Date</Label>
        <Input
          id="endDate"
          type="date"
          value={filters.endDate}
          onChange={(e) => handleChange("endDate", e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="minAmount">Minimum Amount</Label>
        <Input
          id="minAmount"
          type="number"
          value={filters.minAmount}
          onChange={(e) => handleChange("minAmount", e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="maxAmount">Maximum Amount</Label>
        <Input
          id="maxAmount"
          type="number"
          value={filters.maxAmount}
          onChange={(e) => handleChange("maxAmount", e.target.value)}
        />
      </div>
      <Button onClick={handleReset} variant="outline" className="w-full">
        Reset Filters
      </Button>
    </div>
  )
}

