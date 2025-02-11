"use client"

import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function ExpenseTrend({ expenses }) {
  const sortedExpenses = expenses.sort((a, b) => new Date(a.date) - new Date(b.date))
  const dates = sortedExpenses.map((expense) => expense.date)
  const amounts = sortedExpenses.map((expense) => expense.amount)

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Expense Amount",
        data: amounts,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Expense Trend",
      },
    },
  }

  return <Line options={options} data={data} />
}

