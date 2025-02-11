import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import "./globals.css"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Track your expenses and manage your finances",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen bg-background text-foreground">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

