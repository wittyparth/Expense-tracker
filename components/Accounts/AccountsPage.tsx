"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import AccountList from "./AccountList"
import AccountPagination from "./AccountPagination"
import AddEditAccountModal from "./AddEditAccountModal"

export default function AccountsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [editingAccount, setEditingAccount] = useState(null)

  const openAddModal = () => {
    setEditingAccount(null)
    setIsModalOpen(true)
  }

  const openEditModal = (account) => {
    setEditingAccount(account)
    setIsModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Accounts</h1>
        <Button
          onClick={openAddModal}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Account
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <AccountList onEdit={openEditModal} />
          <AccountPagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
        </CardContent>
      </Card>

      <AddEditAccountModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} account={editingAccount} />
    </div>
  )
}

