"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Mail, Package } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="hidden lg:flex items-center justify-end gap-6 py-2 text-sm border-b border-border/40">
          <a href="mailto:info@fascord.co.uk" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            info@fascord.co.uk
          </a>
          <a href="tel:+441onal" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            Contact Us
          </a>
        </div>

        {/* Main nav */}
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-navy">
              <Package className="h-6 w-6 text-orange" />
            </div>
            <span className="text-2xl font-bold text-navy">Fascord</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#what-we-ship" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              What We Ship
            </Link>
            <Link href="#why-us" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Why Choose Us
            </Link>
            <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-orange text-white hover:bg-orange/90">
              Get a Quote
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <nav className="flex flex-col gap-4">
              <Link href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="#what-we-ship" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                What We Ship
              </Link>
              <Link href="#why-us" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Why Choose Us
              </Link>
              <Link href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
              <div className="pt-4 border-t border-border/40">
                <a href="mailto:info@fascord.co.uk" className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  info@fascord.co.uk
                </a>
              </div>
              <Button className="bg-orange text-white hover:bg-orange/90 w-full">
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
