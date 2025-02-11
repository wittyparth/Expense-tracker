"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Plus, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ExpenseFilters from "./ExpenseFilters"
import ExpenseList from "./ExpenseList"
import ExpensePagination from "./ExpensePagination"
import AddEditExpenseModal from "./AddEditExpenseModal"
import ExpenseStats from "./ExpenseStats"
import ExpenseChart from "./ExpenseChart"
import ExpenseTrend from "./ExpenseTrend"
import ExpenseCards from "./ExpenseCards"
import CategoryBreakdown from "./CategoryBreakdown"
import CalendarView from "./CalendarView"
import ReceiptUploadPreview from "./ReceiptUploadPreview"

// Mock data
const initialExpenses = [
  { id: 1, date: "2023-06-01", description: "Groceries", category: "Food", amount: 85.5 },
  { id: 2, date: "2023-06-03", description: "Gas", category: "Transport", amount: 45.0 },
  { id: 3, date: "2023-06-05", description: "Electricity Bill", category: "Utilities", amount: 120.75 },
  { id: 4, date: "2023-06-07", description: "Dinner", category: "Food", amount: 65.3 },
  { id: 5, date: "2023-06-10", description: "Movie Tickets", category: "Entertainment", amount: 30.0 },
]

export default function ExpensesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [editingExpense, setEditingExpense] = useState(null)
  const [expenses, setExpenses] = useState(initialExpenses)
  const [filteredExpenses, setFilteredExpenses] = useState(expenses)
  const [filters, setFilters] = useState({
    category: "",
    startDate: "",
    endDate: "",
    minAmount: "",
    maxAmount: "",
  })

  const itemsPerPage = 5

  useEffect(() => {
    applyFilters()
  }, [filters, expenses])

  const openAddModal = () => {
    setEditingExpense(null)
    setIsModalOpen(true)
  }

  const openEditModal = (expense) => {
    setEditingExpense(expense)
    setIsModalOpen(true)
  }

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }])
  }

  const handleEditExpense = (editedExpense) => {
    setExpenses(expenses.map((expense) => (expense.id === editedExpense.id ? editedExpense : expense)))
  }

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id))
  }

  const applyFilters = () => {
    let filtered = expenses
    if (filters.category) {
      filtered = filtered.filter((expense) => expense.category === filters.category)
    }
    if (filters.startDate) {
      filtered = filtered.filter((expense) => new Date(expense.date) >= new Date(filters.startDate))
    }
    if (filters.endDate) {
      filtered = filtered.filter((expense) => new Date(expense.date) <= new Date(filters.endDate))
    }
    if (filters.minAmount) {
      filtered = filtered.filter((expense) => expense.amount >= Number(filters.minAmount))
    }
    if (filters.maxAmount) {
      filtered = filtered.filter((expense) => expense.amount <= Number(filters.maxAmount))
    }
    setFilteredExpenses(filtered)
    setCurrentPage(1)
  }

  const totalPages = Math.ceil(filteredExpenses.length / itemsPerPage)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-between items-center mb-6"
      >
        <div>
          <h1 className="text-3xl font-bold text-foreground">Expenses</h1>
          <p className="text-muted-foreground mt-1">Manage and track your expenses</p>
        </div>
        <div className="flex space-x-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Expenses</SheetTitle>
              </SheetHeader>
              <ExpenseFilters filters={filters} setFilters={setFilters} />
            </SheetContent>
          </Sheet>
          <Button onClick={openAddModal} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Plus className="w-5 h-5 mr-2" />
            Add Expense
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6"
      >
        <ExpenseStats expenses={filteredExpenses} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid gap-6 md:grid-cols-2 mb-6"
      >
        <Card>
          <CardHeader>
            <CardTitle>Expense Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ExpenseTrend expenses={filteredExpenses} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expense by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ExpenseChart expenses={filteredExpenses} />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <ExpenseCards expenses={filteredExpenses} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <CategoryBreakdown expenses={filteredExpenses} />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Calendar View</CardTitle>
          </CardHeader>
          <CardContent>
            <CalendarView expenses={filteredExpenses} />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Receipt Upload Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <ReceiptUploadPreview />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Expense List</CardTitle>
          </CardHeader>
          <CardContent>
            <ExpenseList
              expenses={filteredExpenses.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)}
              onEdit={openEditModal}
              onDelete={handleDeleteExpense}
            />
            {totalPages > 1 && (
              <ExpensePagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            )}
          </CardContent>
        </Card>
      </motion.div>

      <AddEditExpenseModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        expense={editingExpense}
        onAdd={handleAddExpense}
        onEdit={handleEditExpense}
      />
    </div>
  )
}

