"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Sunburst } from "@nivo/sunburst"

export default function CategoryBreakdown({ expenses }) {
  const [hoveredCategory, setHoveredCategory] = useState(null)

  const getCategoryData = () => {
    const categories = {}
    expenses.forEach((expense) => {
      if (!categories[expense.category]) {
        categories[expense.category] = {
          name: expense.category,
          children: [],
        }
      }
      categories[expense.category].children.push({
        name: expense.description,
        value: expense.amount,
      })
    })
    return {
      name: "Expenses",
      children: Object.values(categories),
    }
  }

  const data = getCategoryData()

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="h-[400px]">
      <Sunburst
        data={data}
        width={400}
        height={400}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="value"
        cornerRadius={2}
        borderColor={{ theme: "background" }}
        colors={{ scheme: "nivo" }}
        childColor={{ from: "color", modifiers: [["brighter", 0.1]] }}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 1.4]] }}
        onMouseEnter={(data) => setHoveredCategory(data)}
        onMouseLeave={() => setHoveredCategory(null)}
      />
      {hoveredCategory && (
        <div className="text-center mt-4">
          <p className="font-semibold">{hoveredCategory.id}</p>
          <p>${hoveredCategory.value.toFixed(2)}</p>
        </div>
      )}
    </motion.div>
  )
}

