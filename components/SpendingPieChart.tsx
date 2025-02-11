import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Rent", value: 800 },
  { name: "Utilities", value: 200 },
  { name: "Entertainment", value: 150 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

export default function SpendingPieChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

