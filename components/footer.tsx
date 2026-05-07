import Link from "next/link"
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/10">
                <Package className="h-6 w-6 text-orange" />
              </div>
              <span className="text-2xl font-bold">Fascord</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Professional packing and shipping solutions for personal and business customers. Trusted by thousands across the UK.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-white/70 hover:text-orange transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#what-we-ship" className="text-white/70 hover:text-orange transition-colors text-sm">
                  What We Ship
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-white/70 hover:text-orange transition-colors text-sm">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-orange transition-colors text-sm">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-orange transition-colors text-sm">
                  Track Shipment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/70 hover:text-orange transition-colors text-sm">
                  International Shipping
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-orange transition-colors text-sm">
                  UK Delivery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-orange transition-colors text-sm">
                  Professional Packing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-orange transition-colors text-sm">
                  Express Air Freight
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-orange transition-colors text-sm">
                  Sea Freight
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <a href="mailto:info@fascord.co.uk" className="text-sm hover:text-orange transition-colors">
                    info@fascord.co.uk
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Phone</p>
                  <a href="tel:+44" className="text-sm hover:text-orange transition-colors">
                    Contact Us
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white/70">Address</p>
                  <p className="text-sm">United Kingdom</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Fascord. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-white/60 hover:text-orange transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-white/60 hover:text-orange transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-white/60 hover:text-orange transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
