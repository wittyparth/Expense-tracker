"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import IncomeFilters from "./IncomeFilters"
import IncomeList from "./IncomeList"
import IncomePagination from "./IncomePagination"
import AddEditIncomeModal from "./AddEditIncomeModal"

export default function IncomesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [editingIncome, setEditingIncome] = useState(null)

  const openAddModal = () => {
    setEditingIncome(null)
    setIsModalOpen(true)
  }

  const openEditModal = (income) => {
    setEditingIncome(income)
    setIsModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Incomes</h1>
        <Button onClick={openAddModal} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg">
          <Plus className="w-5 h-5 mr-2" />
          Add Income
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <IncomeFilters />
          <IncomeList onEdit={openEditModal} />
          <IncomePagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
        </CardContent>
      </Card>

      <AddEditIncomeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} income={editingIncome} />
    </div>
  )
}

