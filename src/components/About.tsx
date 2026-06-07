import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="bg-[#111216] relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden glass-panel p-2">
              {/* Using a placeholder high-res detailing image */}
              <img 
                src="https://images.unsplash.com/photo-1623472714421-2e6b2fd5cfb6?auto=format&fit=crop&q=80" 
                alt="Detailing Professional at Work" 
                className="w-full h-auto rounded-xl object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-amber-500/10 mix-blend-overlay"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-orbitron text-sm text-amber-500 font-bold tracking-widest uppercase mb-3">
              About Aris
            </h2>
            <h3 className="font-orbitron text-3xl md:text-4xl font-bold text-white mb-6 uppercase leading-tight">
              More Than A Wash.<br/>An <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300">Investment.</span>
            </h3>
            
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                Your car is more than just a way to get around—it's an investment, a statement, and a place you spend countless hours.
              </p>
              <p>
                I treat every vehicle as if it were my own. Utilizing proven techniques, premium chemicals, and an obsessive attention to detail, my goal is to bring back that "fresh off the lot" feel.
              </p>
              <p>
                Whether it's a daily driver needing a refresh or a luxury show car requiring meticulous paint correction, you get the highest standard of care, all while saving you time with convenient, fully-equipped mobile service delivered to your home or office.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-white font-bold font-orbitron text-xl">Aris</p>
                <p className="text-amber-500 text-sm uppercase tracking-wider font-semibold">Founder & Lead Detailer</p>
              </div>
              <div className="w-16 h-1 bg-amber-500"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
