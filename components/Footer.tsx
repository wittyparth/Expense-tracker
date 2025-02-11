import { Facebook, Twitter, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <nav className="flex space-x-4">
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About Us
              </Link>
              <Link href="/privacy" className="text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <div className="text-muted-foreground text-sm">© 2023 Expense Tracker. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

