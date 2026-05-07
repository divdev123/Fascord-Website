import { MapPin, UserCheck, BadgePoundSterling, Shield, Heart, Globe } from "lucide-react"

const reasons = [
  {
    icon: MapPin,
    title: "UK-Wide Coverage",
    description: "Conveniently located for UK-wide service, covering all major cities and surrounding areas."
  },
  {
    icon: UserCheck,
    title: "Single Point of Contact",
    description: "One point of contact for packing, collection and delivery - simplifying your shipping experience."
  },
  {
    icon: BadgePoundSterling,
    title: "Competitive Rates",
    description: "Competitive rates with trusted UK and international couriers for the best value."
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Fully insured shipping and transit cover available for complete peace of mind."
  },
  {
    icon: Heart,
    title: "Friendly Service",
    description: "Friendly local service backed by a national and global logistics network."
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Access to a worldwide network of partners ensuring reliable delivery anywhere."
  }
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Fascord
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Why Choose Fascord?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              For expert advice or a tailored quote, contact Fascord today — your specialists in professional packing and international shipping.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-orange/10 flex items-center justify-center">
                    <reason.icon className="h-5 w-5 text-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{reason.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-navy rounded-2xl p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                    Tell us about your shipment
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-orange resize-none"
                    placeholder="Describe what you need to ship..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-orange text-white font-semibold hover:bg-orange/90 transition-colors"
                >
                  Request a Quote
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
