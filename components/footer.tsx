import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container grid gap-8 px-4 py-10 md:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8 sm:h-10 sm:w-32">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Episteme Academy Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Empowering South Mumbai's students with expert education resources since 2010.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/" className="text-sm hover:text-amber-500">
              Home
            </Link>
            <Link href="/about" className="text-sm hover:text-amber-500">
              About Us
            </Link>
            <Link href="/products" className="text-sm hover:text-amber-500">
              Products
            </Link>
            <Link href="/success" className="text-sm hover:text-amber-500">
              Success Stories
            </Link>
            <Link href="/contact" className="text-sm hover:text-amber-500">
              Contact
            </Link>
          </nav>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Products</h3>
          <nav className="flex flex-col gap-2">
            <Link href="/products" className="text-sm hover:text-amber-500">
              Mathematics Book
            </Link>
            <Link href="/products" className="text-sm hover:text-amber-500">
              IMP Notes
            </Link>
            <Link href="/products" className="text-sm hover:text-amber-500">
              Video Lectures
            </Link>
          </nav>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Contact Us</h3>
          <nav className="flex flex-col gap-3">
            <Link
              href="mailto:contact@epistemeacademy.com"
              className="flex items-center gap-2 text-sm hover:text-amber-500"
            >
              <Mail className="h-4 w-4" />
              contact@epistemeacademy.com
            </Link>
            <Link href="tel:+919876543210" className="flex items-center gap-2 text-sm hover:text-amber-500">
              <Phone className="h-4 w-4" />
              +91 98765 43210
            </Link>
            <div className="flex gap-4 mt-2">
              <Link href="#" className="text-gray-500 hover:text-amber-500">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-amber-500">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-amber-500">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col sm:flex-row justify-between items-center px-4 py-6 md:px-6">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Episteme Academy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-amber-500">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-amber-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
