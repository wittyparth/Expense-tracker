import { Progress } from "@/components/ui/progress"

const budgets = [
  { category: "Food", spent: 450, limit: 500 },
  { category: "Transportation", spent: 200, limit: 300 },
  { category: "Entertainment", spent: 150, limit: 200 },
]

export default function BudgetProgress() {
  return (
    <div className="space-y-4">
      {budgets.map((budget) => (
        <div key={budget.category} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{budget.category}</span>
            <span className="text-muted-foreground">
              ${budget.spent} / ${budget.limit}
            </span>
          </div>
          <Progress value={(budget.spent / budget.limit) * 100} />
        </div>
      ))}
    </div>
  )
}

