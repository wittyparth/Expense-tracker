"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const cards = [
  { id: 1, type: "Visa", last4: "1234", name: "John Doe", expiry: "12/24", isDefault: true },
  { id: 2, type: "Mastercard", last4: "5678", name: "John Doe", expiry: "06/25", isDefault: false },
  { id: 3, type: "American Express", last4: "9012", name: "John Doe", expiry: "09/23", isDefault: false },
]

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length)
  }

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            custom={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`w-full h-56 rounded-xl ${
              cards[currentIndex].isDefault ? "shadow-lg shadow-primary/50" : ""
            } text-white p-6`}
            style={{
              background: `linear-gradient(135deg, ${
                cards[currentIndex].type === "Visa"
                  ? "#1a1f71, #0077be"
                  : cards[currentIndex].type === "Mastercard"
                    ? "#eb001b, #f79e1b"
                    : "#2e77bc, #6cc4ee"
              })`,
            }}
          >
            <div className="flex flex-col h-full justify-between">
              <div className="text-2xl font-bold">{cards[currentIndex].type}</div>
              <div>
                <div className="text-xl">**** **** **** {cards[currentIndex].last4}</div>
                <div className="text-sm mt-2">
                  {cards[currentIndex].name} | Expires: {cards[currentIndex].expiry}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full"
        onClick={prevCard}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full"
        onClick={nextCard}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

