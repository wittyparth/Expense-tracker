"use client"

import { Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend)

export default function ExpenseChart({ expenses }) {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount
    return acc
  }, {})

  const data = {
    labels: Object.keys(categoryTotals),
    datasets: [
      {
        data: Object.values(categoryTotals),
        backgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 86, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(153, 102, 255, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  }

  return <Pie data={data} />
}

