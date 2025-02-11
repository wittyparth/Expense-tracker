"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ReceiptUploadPreview() {
  const [receipts, setReceipts] = useState([])

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files)
    const newReceipts = files.map((file) => ({
      id: Date.now(),
      name: file.name,
      preview: URL.createObjectURL(file),
    }))
    setReceipts([...receipts, ...newReceipts])
  }

  const removeReceipt = (id) => {
    setReceipts(receipts.filter((receipt) => receipt.id !== id))
  }

  return (
    <div>
      <div className="mb-4">
        <input
          type="file"
          id="receipt-upload"
          className="hidden"
          multiple
          onChange={handleFileUpload}
          accept="image/*"
        />
        <label htmlFor="receipt-upload">
          <Button as="span" variant="outline">
            <Upload className="w-4 h-4 mr-2" />
            Upload Receipts
          </Button>
        </label>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {receipts.map((receipt, index) => (
          <motion.div
            key={receipt.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card>
              <CardContent className="p-2 relative">
                <img
                  src={receipt.preview || "/placeholder.svg"}
                  alt={receipt.name}
                  className="w-full h-32 object-cover rounded"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1 right-1 bg-white rounded-full"
                  onClick={() => removeReceipt(receipt.id)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

