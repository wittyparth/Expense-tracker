"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const cards = [
  {
    id: 1,
    name: "Platinum Card",
    number: "**** **** **** 1234",
    expiry: "12/25",
    background: "bg-gradient-to-r from-gray-700 to-gray-900",
  },
  {
    id: 2,
    name: "Gold Card",
    number: "**** **** **** 5678",
    expiry: "06/24",
    background: "bg-gradient-to-r from-yellow-400 to-yellow-600",
  },
  {
    id: 3,
    name: "Silver Card",
    number: "**** **** **** 9012",
    expiry: "03/26",
    background: "bg-gradient-to-r from-gray-300 to-gray-500",
  },
]

export default function CreditCardCarousel() {
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
            className={`w-full h-56 rounded-xl ${cards[currentIndex].background} text-white p-6 shadow-lg`}
          >
            <div className="flex flex-col h-full justify-between">
              <div className="text-2xl font-bold">{cards[currentIndex].name}</div>
              <div>
                <div className="text-xl">{cards[currentIndex].number}</div>
                <div className="text-sm mt-2">Expires: {cards[currentIndex].expiry}</div>
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

