"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import EMIList from "./EMIList"
import EMIPagination from "./EMIPagination"
import AddEditEMIModal from "./AddEditEMIModal"

export default function EMIPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [editingEMI, setEditingEMI] = useState(null)

  const openAddModal = () => {
    setEditingEMI(null)
    setIsModalOpen(true)
  }

  const openEditModal = (emi) => {
    setEditingEMI(emi)
    setIsModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">EMIs</h1>
        <Button
          onClick={openAddModal}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add EMI
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <EMIList onEdit={openEditModal} />
          <EMIPagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
        </CardContent>
      </Card>

      <AddEditEMIModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} emi={editingEMI} />
    </div>
  )
}

