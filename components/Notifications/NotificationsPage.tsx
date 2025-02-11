"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import NotificationList from "./NotificationList"
import NotificationPagination from "./NotificationPagination"

export default function NotificationsPage() {
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Notifications</h1>
      <Card>
        <CardContent className="p-6">
          <NotificationList />
          <NotificationPagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
        </CardContent>
      </Card>
    </div>
  )
}

