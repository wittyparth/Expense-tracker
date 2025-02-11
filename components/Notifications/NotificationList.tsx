import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const initialNotifications = [
  { id: 1, message: "New expense added", isRead: false },
  { id: 2, message: "Monthly report is ready", isRead: false },
  { id: 3, message: "You've exceeded your budget for 'Entertainment'", isRead: false },
  { id: 4, message: "New feature: Track your investments", isRead: true },
  { id: 5, message: "Reminder: Pay your credit card bill", isRead: false },
]

export default function NotificationList() {
  const [notifications, setNotifications] = useState(initialNotifications)

  const markAsRead = (id: number) => {
    setNotifications(notifications.map((notif) => (notif.id === id ? { ...notif, isRead: true } : notif)))
  }

  const dismiss = (id: number) => {
    setNotifications(notifications.filter((notif) => notif.id !== id))
  }

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <Card key={notification.id} className={notification.isRead ? "bg-gray-50" : "bg-white"}>
          <CardContent className="p-4 flex items-center justify-between">
            <p className={`flex-grow ${notification.isRead ? "text-gray-500" : "text-gray-900"}`}>
              {notification.message}
            </p>
            <div className="flex space-x-2">
              {!notification.isRead && (
                <Button variant="outline" size="sm" onClick={() => markAsRead(notification.id)}>
                  <Check className="h-4 w-4 mr-1" />
                  Mark as Read
                </Button>
              )}
              <Button variant="outline" size="sm" onClick={() => dismiss(notification.id)}>
                <X className="h-4 w-4 mr-1" />
                Dismiss
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

