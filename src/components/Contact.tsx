import { motion } from 'motion/react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    package: '',
    date: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert('Thank you! We will contact you shortly to confirm your appointment.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <footer id="contact" className="bg-obsidian border-t border-white/10 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-6 uppercase">
              Ready to <span className="text-amber-500">Restore?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Book your mobile detailing appointment today. We bring the water, power, and expertise directly to your location.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Phone className="text-amber-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Call/Text</p>
                  <a href="tel:352-602-0777" className="text-2xl font-bold text-white hover:text-amber-500 transition-colors">352-602-0777</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Mail className="text-amber-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Email</p>
                  <a href="mailto:arisdetailing1@gmail.com" className="text-lg font-medium text-white hover:text-amber-500 transition-colors">arisdetailing1@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Clock className="text-amber-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Operating Hours</p>
                  <p className="text-lg font-medium text-white">Mon - Sun : 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <MapPin className="text-amber-500" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Service Area</p>
                  <p className="text-lg font-medium text-white">Lake County, FL & Surrounding</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            id="mobile-intake-widget"
          >
            <div className="glass-panel p-8 md:p-10 rounded-2xl border-t-2 border-t-amber-500">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-8 uppercase tracking-wide">Request Appointment</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 focus:border-amber-500 text-white placeholder-gray-500 py-3 px-0 outline-none transition-colors"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 focus:border-amber-500 text-white placeholder-gray-500 py-3 px-0 outline-none transition-colors"
                  />
                  <input 
                    type="text" 
                    name="vehicle"
                    required
                    placeholder="Vehicle Make/Model/Year"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 focus:border-amber-500 text-white placeholder-gray-500 py-3 px-0 outline-none transition-colors"
                  />
                </div>

                <div>
                  <select 
                    name="package"
                    required
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 focus:border-amber-500 text-white placeholder-gray-500 py-3 px-0 outline-none transition-colors appearance-none"
                    style={{ backgroundColor: '#0B0C10' }}
                  >
                    <option value="" disabled className="text-gray-500">Select Service Package</option>
                    <option value="level-1">Level 1 Full Detail</option>
                    <option value="level-2">Level 2 Full Detail</option>
                    <option value="interior">Interior Detail</option>
                    <option value="exterior">Exterior Detail</option>
                    <option value="1-step">1-Step Paint Correction</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <input 
                    type="text" 
                    name="date"
                    placeholder="Requested Date (approximate)"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-white/20 focus:border-amber-500 text-white placeholder-gray-500 py-3 px-0 outline-none transition-colors"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-obsidian font-bold rounded-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-transform active:scale-[0.98] mt-4"
                >
                  <Send size={18} />
                  Submit Request
                </button>
              </form>
            </div>
          </motion.div>

        </div>
        
        {/* Real Footer Bottom */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Aris Detailing. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Premium Mobile Detailing in Lake County, FL.</p>
        </div>
      </div>
    </footer>
  );
}
