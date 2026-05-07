import { Palette, Music, Monitor, Microscope, Building, CalendarDays } from "lucide-react"

const items = [
  {
    icon: Palette,
    title: "Art & Antiques",
    description: "Carefully packed paintings, sculptures and antique furniture using custom crating and protective materials."
  },
  {
    icon: Music,
    title: "Musical Instruments",
    description: "From violins and guitars to drum kits and keyboards, packed to protect against impact, vibration and environmental changes."
  },
  {
    icon: Monitor,
    title: "IT & Electronic Equipment",
    description: "Secure shipping for computers, servers and sensitive devices using anti-static and impact-resistant packaging."
  },
  {
    icon: Microscope,
    title: "Medical & Laboratory Equipment",
    description: "High-value and specialist equipment packed with precision and transported under controlled conditions."
  },
  {
    icon: Building,
    title: "Architectural Models & Prototypes",
    description: "Prepared for safe transport with disassembly, cushioning and reinforced packaging where required."
  },
  {
    icon: CalendarDays,
    title: "Exhibition & Marketing Materials",
    description: "Timed deliveries for events, exhibitions and trade shows across the UK or internationally."
  }
]

export function WhatWeShip() {
  return (
    <section id="what-we-ship" className="py-20 lg:py-28 bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-orange text-sm font-medium mb-4">
            Specialist Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-balance">
            What We Pack & Ship
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Our team is experienced in handling fragile, unusual and high-value items. We create bespoke packing and transport solutions for a wide range of shipments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div key={index} className="group flex gap-4">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-xl bg-orange/20 flex items-center justify-center group-hover:bg-orange/30 transition-colors">
                  <item.icon className="h-6 w-6 text-orange" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/80 text-lg">
            If it&apos;s fragile, valuable or irreplaceable, <span className="text-orange font-semibold">Fascord</span> has the expertise to ship it safely.
          </p>
        </div>
      </div>
    </section>
  )
}
