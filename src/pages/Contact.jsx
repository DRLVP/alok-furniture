import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { pageVariants, pageTransition } from './Home';

export default function Contact() {
  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
      className="py-12 bg-transparent min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-navy mb-6">Get in Touch</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">We are here to assist you with bespoke furniture solutions and expert advice.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
          
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex gap-6 items-start">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="text-brand-gold" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-brand-navy mb-2">Visit Our Flagship Store</h3>
                <p className="text-gray-500 font-medium">123 Furniture Avenue,<br/>Premium District, New Delhi<br/>India 110001</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex gap-6 items-start">
              <div className="w-14 h-14 bg-brand-navy/5 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="text-brand-navy" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-brand-navy mb-2">Call Us</h3>
                <p className="text-gray-500 font-medium">+91 98765 43210<br/><span className="text-sm text-gray-400 font-normal">Mon-Sun, 10am - 8pm</span></p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex gap-6 items-start">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="text-brand-gold" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-serif text-brand-navy mb-2">Email Us</h3>
                <p className="text-gray-500 font-medium">hello@alokfurniture.com<br/><span className="text-sm text-gray-400 font-normal">We aim to reply within 24 hours</span></p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-luxury p-10 md:p-14 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
              
              <h2 className="text-3xl font-serif text-white mb-8 relative z-10">Send us a Message</h2>
              
              <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-gold-light text-sm font-bold tracking-widest uppercase mb-2">First Name</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all backdrop-blur-sm" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-brand-gold-light text-sm font-bold tracking-widest uppercase mb-2">Last Name</label>
                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all backdrop-blur-sm" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-brand-gold-light text-sm font-bold tracking-widest uppercase mb-2">Email Address</label>
                    <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all backdrop-blur-sm" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-brand-gold-light text-sm font-bold tracking-widest uppercase mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all backdrop-blur-sm" placeholder="+91" />
                  </div>
                </div>

                <div>
                  <label className="block text-brand-gold-light text-sm font-bold tracking-widest uppercase mb-2">Your Message</label>
                  <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all backdrop-blur-sm resize-none" placeholder="How can we help you create your dream space?"></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-brand-gold text-brand-navy w-full py-4 rounded-xl font-bold hover:bg-white transition-colors duration-300 flex justify-center items-center gap-2 shadow-xl shadow-brand-gold/20"
                >
                  Send Message <Send size={20} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
