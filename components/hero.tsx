import { ArrowRight, Package, Globe, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-orange text-sm font-medium mb-6">
              <Package className="h-4 w-4" />
              Expert Packing & Shipping Solutions
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Professional Shipping You Can Trust
            </h1>
            
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
              Fascord provides professional packing, reliable courier services and secure international shipping for both personal and business customers across the UK and worldwide.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-white">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="bg-orange hover:bg-orange/90 text-white">
                View Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange">200+</div>
                <div className="text-sm text-white/70">Destinations</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange">24/7</div>
                <div className="text-sm text-white/70">Tracking</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-orange">100%</div>
                <div className="text-sm text-white/70">Insured</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Globe className="h-10 w-10 text-orange mb-4" />
                <h3 className="font-semibold text-white text-lg">International Shipping</h3>
                <p className="text-white/70 text-sm mt-2">Ship to over 200 destinations worldwide with full customs documentation.</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Package className="h-10 w-10 text-orange mb-4" />
                <h3 className="font-semibold text-white text-lg">Professional Packing</h3>
                <p className="text-white/70 text-sm mt-2">Industry-approved materials and techniques for secure shipping.</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Truck className="h-10 w-10 text-orange mb-4" />
                <h3 className="font-semibold text-white text-lg">UK Delivery</h3>
                <p className="text-white/70 text-sm mt-2">Nationwide delivery options by road and air for all shipment sizes.</p>
              </div>
              <div className="bg-orange/20 backdrop-blur-sm rounded-2xl p-6 border border-orange/30">
                <div className="text-orange font-bold text-2xl">Free</div>
                <div className="text-white font-medium">Collection Service</div>
                <p className="text-white/70 text-sm mt-2">For orders over £100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
