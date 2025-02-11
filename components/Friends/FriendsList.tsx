import { Edit, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const friends = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", avatar: "/avatars/alice.jpg" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", avatar: "/avatars/bob.jpg" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", avatar: "/avatars/charlie.jpg" },
  { id: 4, name: "Diana Ross", email: "diana@example.com", avatar: "/avatars/diana.jpg" },
  { id: 5, name: "Ethan Hunt", email: "ethan@example.com", avatar: "/avatars/ethan.jpg" },
]

export default function FriendsList({ onEdit }) {
  return (
    <div className="overflow-x-auto">
      <Table className="hidden md:table">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {friends.map((friend, index) => (
            <TableRow key={friend.id} className={index % 2 === 0 ? "bg-muted/50" : ""}>
              <TableCell className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                </Avatar>
                {friend.name}
              </TableCell>
              <TableCell>{friend.email}</TableCell>
              <TableCell>
                <div className="flex justify-center space-x-2">
                  <Button variant="ghost" size="icon" onClick={() => onEdit(friend)}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="md:hidden space-y-4">
        {friends.map((friend) => (
          <Card key={friend.id}>
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <Avatar className="h-10 w-10 mr-2">
                  <AvatarImage src={friend.avatar} alt={friend.name} />
                  <AvatarFallback>{friend.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{friend.name}</div>
                  <div className="text-sm text-muted-foreground">{friend.email}</div>
                </div>
              </div>
              <div className="flex justify-end space-x-2 mt-2">
                <Button variant="ghost" size="sm" onClick={() => onEdit(friend)}>
                  <Edit className="h-4 w-4 mr-1" /> Edit
                </Button>
                <Button variant="ghost" size="sm">
                  <Trash className="h-4 w-4 mr-1" /> Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

