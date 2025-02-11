import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExpensePaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function ExpensePagination({ currentPage, totalPages, onPageChange }: ExpensePaginationProps) {
  return (
    <div className="flex justify-center items-center space-x-2 mt-6">
      <Button variant="outline" size="icon" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          variant={currentPage === index + 1 ? "default" : "outline"}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

