"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bar, Pie } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from "chart.js"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title)

const initialBarData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Income",
      data: [3000, 3500, 3200, 3800, 3600, 4000],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
    {
      label: "Expenses",
      data: [2500, 2800, 2600, 3000, 2900, 3200],
      backgroundColor: "rgba(255, 99, 132, 0.6)",
    },
  ],
}

const initialPieData = {
  labels: ["Food", "Transport", "Entertainment", "Utilities", "Shopping"],
  datasets: [
    {
      data: [30, 20, 15, 25, 10],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
      ],
    },
  ],
}

export default function InteractiveCharts() {
  const [barData, setBarData] = useState(initialBarData)
  const [pieData, setPieData] = useState(initialPieData)

  const handleBarClick = (event, elements) => {
    if (elements.length > 0) {
      const datasetIndex = elements[0].datasetIndex
      const index = elements[0].index
      const newData = { ...barData }
      newData.datasets[datasetIndex].data[index] = Math.floor(Math.random() * 5000)
      setBarData(newData)
    }
  }

  const handlePieClick = (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index
      const newData = { ...pieData }
      newData.datasets[0].data[index] = Math.floor(Math.random() * 50)
      setPieData(newData)
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h3 className="text-lg font-semibold mb-2">Monthly Income vs Expenses</h3>
        <Bar
          data={barData}
          options={{
            responsive: true,
            onClick: handleBarClick,
          }}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-lg font-semibold mb-2">Spending Categories</h3>
        <Pie
          data={pieData}
          options={{
            responsive: true,
            onClick: handlePieClick,
          }}
        />
      </motion.div>
    </div>
  )
}

