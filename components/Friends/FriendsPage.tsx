"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import FriendsList from "./FriendsList"
import FriendsPagination from "./FriendsPagination"
import AddEditFriendModal from "./AddEditFriendModal"

export default function FriendsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [editingFriend, setEditingFriend] = useState(null)

  const openAddModal = () => {
    setEditingFriend(null)
    setIsModalOpen(true)
  }

  const openEditModal = (friend) => {
    setEditingFriend(friend)
    setIsModalOpen(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Friends</h1>
        <Button
          onClick={openAddModal}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Friend
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <FriendsList onEdit={openEditModal} />
          <FriendsPagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
        </CardContent>
      </Card>

      <AddEditFriendModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} friend={editingFriend} />
    </div>
  )
}

