import { motion } from 'motion/react';
import { ChevronDown, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://b3600126a9f8f38e474c.cdn6.editmysite.com/uploads/b/b3600126a9f8f38e474c2d9f56a4dd73ccfc39ce59457fc9d759517d59f2d85f/2025-10-04_21-44-51_1759628698.jpg?width=2400" 
          alt="Paint Correction Auto Detailing" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6 border-amber-500/30 text-amber-500 text-xs font-semibold tracking-widest uppercase">
              <MapPin size={14} />
              Serving Lake County, FL
            </div>
          </motion.div>

          <motion.h1 
            className="font-orbitron text-5xl md:text-7xl font-bold text-white leading-tight mb-6 uppercase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lake County's <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-300">Premier Mobile</span><br/>
            Detailing.
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Paint correction, ceramic coating, and deep restorations—brought directly to your driveway. We don't just wash cars; we preserve investments.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#services" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-obsidian font-bold rounded-sm transition-all transform hover:scale-105 uppercase tracking-wider text-center flex items-center justify-center gap-2">
              View Service Packages
              <ChevronDown size={20} />
            </a>
            <a href="#contact" className="px-8 py-4 glass-panel hover:bg-white/10 text-white font-bold rounded-sm transition-all uppercase tracking-wider text-center">
              Get A Free Quote
            </a>
          </motion.div>

          {/* Quick Trust Indicators */}
          <motion.div 
            className="mt-16 flex items-center gap-6 text-sm text-gray-400 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-amber-500" size={20} />
              Fully Insured
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-amber-500" size={20} />
              We Come To You
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
