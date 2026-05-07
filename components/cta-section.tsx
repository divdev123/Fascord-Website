import { Download, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Download Brochure */}
          <div className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Download Our Brochure</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Find out all about Fascord services, pricing, and how we can help with your shipping needs.
            </p>
            <Button variant="outline" className="w-full">
              Download PDF
            </Button>
          </div>

          {/* Find Service Centre */}
          <div className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-orange" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Find a Service Centre</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Use our Location Finder to find your nearest Service Centre for drop-offs and collections.
            </p>
            <Button variant="outline" className="w-full">
              Find Location
            </Button>
          </div>

          {/* Partner With Us */}
          <div className="bg-card rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Partner With Us</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Join our network of partners and grow your business with Fascord&apos;s trusted shipping solutions.
            </p>
            <Button variant="outline" className="w-full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
