"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import SummaryCards from "./SummaryCards"
import SpendingPieChart from "./SpendingPieChart"
import UpcomingPayments from "./UpcomingPayments"
import QuickActions from "./QuickActions"
import AddExpenseModal from "./AddExpenseModal"
import BudgetProgress from "./BudgetProgress"
import FinancialGoals from "./FinancialGoals"
import CardCarousel from "./CardCarousel"
import SummaryWidgets from "./SummaryWidgets"
import InteractiveCharts from "./InteractiveCharts"
import TransactionTimeline from "./TransactionTimeline"

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6"
      >
        <div className="mb-4 sm:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Welcome back, John!</h1>
          <p className="text-muted-foreground mt-1">Here's your financial overview for today.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Transaction
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Alert className="mb-6">
          <TrendingUp className="h-4 w-4" />
          <AlertTitle>Great job!</AlertTitle>
          <AlertDescription>You've reduced your spending by 15% compared to last month. Keep it up!</AlertDescription>
        </Alert>
      </motion.div>

      <div className="grid gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <SummaryCards />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <QuickActions />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <CardCarousel />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <SummaryWidgets />
        </motion.div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="budgets">Budgets & Goals</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Income vs. Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <InteractiveCharts />
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
                    <CardTitle>Spending by Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <SpendingPieChart />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
          <TabsContent value="transactions">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>Your last 10 transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <TransactionTimeline />
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
          <TabsContent value="budgets">
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Budget Progress</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <BudgetProgress />
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
                    <CardTitle>Financial Goals</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <FinancialGoals />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          <UpcomingPayments />
        </motion.div>
      </div>

      <AddExpenseModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

