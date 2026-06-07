import { motion } from 'motion/react';
import { CheckCircle2, Star } from 'lucide-react';

const packages = [
  {
    id: 'level-1',
    name: 'Level 1 Full Detail',
    price: 'Starting at $150',
    description: 'The essential refresh to keep your vehicle looking sharp and protected.',
    features: [
      'Foam Cannon Hand Wash',
      'Wheels & Tires Deep Cleaned & Dressed',
      '3-Month Spray Sealant Applied',
      'Interior Vacuum & Wipe Down',
      'Glass Cleaned Streak-Free'
    ],
    highlight: false,
  },
  {
    id: 'level-2',
    name: 'Level 2 Full Detail',
    price: 'Starting at $250',
    description: 'A comprehensive detail that revives both the interior and exterior to a profound clean.',
    features: [
      'Everything in Level 1',
      'Exterior Trim Restoration',
      'Iron Decontamination on Paint',
      'Leather Cleaned & Conditioned',
      'Light Carpet/Seat Spot Stain Treatment'
    ],
    highlight: false,
  },
  {
    id: '1-step-correction',
    name: '1-Step Paint Correction',
    price: 'Starting at $400',
    description: 'Removes 50%+ of swirls and light scratches, restoring natural depth, gloss, and color.',
    features: [
      'Full Exterior Decontamination Wash',
      'Clay Bar Treatment',
      'Machine Polish (1-Step Correction)',
      '6-Month Ceramic Paint Sealant',
      'Perfect prep for Ceramic Coating'
    ],
    highlight: true,
  },
  {
    id: 'interior',
    name: 'Interior Detail',
    price: 'Starting at $125',
    description: 'A deep clean tailored strictly to reviving your cabin space.',
    features: [
      'Thorough Vacuuming (incl. trunk)',
      'Steam Cleaned Plastics & Panels',
      'UV Protection Applied to Dash',
      'Shampoo/Stain Treatment (Mats)',
      'Interior Glass Cleaned'
    ],
    highlight: false,
  },
  {
    id: 'exterior',
    name: 'Exterior Detail',
    price: 'Starting at $125',
    description: 'Focus strictly on enhancing and protecting the outside.',
    features: [
      'Foam Wash & Bug/Tar Removal',
      'Chemical & Physical Decontamination (Clay Bar)',
      'Wheel Barrels & Wells Cleaned',
      'Premium Paint Sealant',
      'Tire Shine Applied'
    ],
    highlight: false,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-obsidian relative">
      {/* Subtle geometric background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#FFF 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-3xl md:text-5xl text-white mb-4 uppercase tracking-wide">
            Elite Service <span className="text-amber-500">Packages</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Choose the level of care your vehicle demands. All services are performed at your location with our own spot-free water and power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col group ${
                pkg.highlight 
                  ? 'bg-amber-500/5 border border-amber-500/50 shadow-[0_0_30px_rgba(255,140,0,0.15)] md:col-span-2 lg:col-span-1 lg:row-span-2' 
                  : 'glass-panel hover:bg-white/10 hover:border-white/20'
              } rounded-xl overflow-hidden transition-all duration-300`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 right-0 bg-amber-500 text-obsidian text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wide flex items-center gap-1">
                  <Star size={12} className="fill-obsidian" /> Most Popular
                </div>
              )}
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="font-orbitron text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <div className="text-amber-500 font-semibold mb-4 bg-amber-500/10 inline-block px-3 py-1 rounded-md text-sm w-fit">
                  {pkg.price}
                </div>
                <p className="text-gray-400 text-sm mb-8 flex-1">
                  {pkg.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className={`shrink-0 mt-0.5 ${pkg.highlight ? 'text-amber-500' : 'text-gray-500'}`} />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <a 
                  href={`#contact?package=${pkg.id}`}
                  className={`w-full py-3 rounded-sm font-semibold tracking-wide uppercase transition-all duration-300 text-center text-sm ${
                    pkg.highlight
                      ? 'bg-amber-500 hover:bg-amber-600 text-obsidian'
                      : 'border border-white/20 hover:border-amber-500 hover:text-amber-500 text-white'
                  }`}
                >
                  Select Package
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
