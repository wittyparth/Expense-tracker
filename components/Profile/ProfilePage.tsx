"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1234567890",
    bio: "Loves traveling",
    location: "New York, USA",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Profile updated:", profile)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" value={profile.name} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={profile.email} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" value={profile.phone} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea id="bio" name="bio" value={profile.bio} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" value={profile.location} onChange={handleChange} />
            </div>
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

