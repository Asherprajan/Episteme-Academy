"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Link href="/" className="flex items-center">
          <span className="text-lg font-bold">EPISTEME ACADEMY</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-amber-500">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-amber-500">
            About Us
          </Link>
          <Link href="/products" className="text-sm font-medium transition-colors hover:text-amber-500">
            Products
          </Link>
          <Link href="/success" className="text-sm font-medium transition-colors hover:text-amber-500">
            Success Stories
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-amber-500">
            Contact
          </Link>
        </nav>
       
        <Button variant="ghost" size="icon" className="ml-auto md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="flex h-16 items-center justify-between px-4 sm:px-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="relative h-8 w-8 sm:h-10 sm:w-32">
                  <Image
                    src="/placeholder.svg?height=40&width=120"
                    alt="Episteme Academy Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-lg font-bold">Episteme</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="grid gap-6 p-6 text-lg font-medium">
              <Link href="/" className="hover:text-amber-500" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="hover:text-amber-500" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/products" className="hover:text-amber-500" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link href="/success" className="hover:text-amber-500" onClick={() => setIsMenuOpen(false)}>
                Success Stories
              </Link>
              <Link href="/contact" className="hover:text-amber-500" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <Button
                className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => setIsMenuOpen(false)}
              >
              
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
