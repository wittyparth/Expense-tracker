import { CheckCircle2, Circle } from "lucide-react"

const goals = [
  { name: "Emergency Fund", target: 5000, current: 3500, completed: false },
  { name: "Vacation Savings", target: 2000, current: 2000, completed: true },
  { name: "New Car", target: 15000, current: 7500, completed: false },
]

export default function FinancialGoals() {
  return (
    <div className="space-y-4">
      {goals.map((goal) => (
        <div key={goal.name} className="flex items-center space-x-4">
          {goal.completed ? <CheckCircle2 className="text-green-500" /> : <Circle className="text-muted-foreground" />}
          <div className="flex-1">
            <div className="flex justify-between">
              <span className="font-medium">{goal.name}</span>
              <span className="text-muted-foreground">
                ${goal.current} / ${goal.target}
              </span>
            </div>
            <progress
              className="w-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-bar]:bg-secondary [&::-webkit-progress-value]:bg-primary"
              value={goal.current}
              max={goal.target}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

