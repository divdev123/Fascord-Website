import { Package, Globe, Truck, Plane, Ship, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Package,
    title: "Local Collection & Professional Packing",
    description: "We arrange collection from homes and businesses across the UK. Our specialists use industry-approved materials and techniques to pack fragile, valuable and bulky items securely."
  },
  {
    icon: Globe,
    title: "International Courier & Freight",
    description: "Ship to over 200 destinations worldwide with full customs documentation and end-to-end tracking. Ideal for individuals, students, manufacturers and businesses sending goods overseas."
  },
  {
    icon: Truck,
    title: "UK & Large Item Delivery",
    description: "From furniture and musical instruments to high-value technology and machinery, we provide nationwide delivery options by road and air, tailored to your shipment size and urgency."
  },
  {
    icon: Plane,
    title: "Express Air Freight",
    description: "When time is critical, our express air freight service ensures your shipment arrives as quickly as possible with priority handling and real-time tracking."
  },
  {
    icon: Ship,
    title: "Sea Freight Services",
    description: "Cost-effective shipping for larger consignments via sea freight. Perfect for non-urgent bulk shipments with competitive rates and reliable transit times."
  },
  {
    icon: Clock,
    title: "Economy Options",
    description: "Budget-friendly shipping solutions for those with flexible timescales. Get great value without compromising on the safety and security of your items."
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Comprehensive Shipping Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From one-off parcels to ongoing business shipments, our services are built around flexibility, protection and dependable delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-orange/10 transition-colors">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-orange transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
