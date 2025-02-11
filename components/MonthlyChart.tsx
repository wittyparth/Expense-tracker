import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", income: 4000, expenses: 2400 },
  { month: "Feb", income: 3000, expenses: 1398 },
  { month: "Mar", income: 2000, expenses: 9800 },
  { month: "Apr", income: 2780, expenses: 3908 },
  { month: "May", income: 1890, expenses: 4800 },
  { month: "Jun", income: 2390, expenses: 3800 },
]

export default function MonthlyChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#4ade80" name="Income" />
        <Bar dataKey="expenses" fill="#f87171" name="Expenses" />
      </BarChart>
    </ResponsiveContainer>
  )
}

