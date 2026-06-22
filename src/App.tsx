import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router';
import { FaFacebook, FaInstagram, FaSquareXTwitter, FaPhone, FaMapPin } from 'react-icons/fa6';
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosMail } from "react-icons/io";


import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import EMICalculator from './pages/EMICalculator';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8">
      <nav className="glass max-w-7xl mx-auto rounded-full px-6 shadow-xl shadow-brand-navy/5">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/src/assets/alok-3.png" alt="Alok Furniture Logo" className="h-10 w-auto object-contain rounded-full" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-800 hover:text-brand-gold font-medium transition-colors">Home</Link>
            <Link to="/catalog" className="text-gray-800 hover:text-brand-gold font-medium transition-colors">Collection</Link>
            <Link to="/emi" className="text-gray-800 hover:text-brand-gold font-medium transition-colors">EMI Calculator</Link>
            <Link to="/contact" className="text-gray-800 hover:text-brand-gold font-medium transition-colors">Contact</Link>
            <Link to="/booking" className="bg-brand-navy text-white px-6 py-2 rounded-full hover:bg-brand-gold hover:text-brand-navy transition-all duration-300 font-medium shadow-md shadow-brand-navy/20">
              Book Visit
            </Link>
          </div>
          <div className="flex md:hidden items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-navy p-2 hover:bg-white/50 rounded-full transition-colors">
              {isOpen ? <FaSquareXTwitter size={24} /> : <RiMenu2Fill size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 glass mx-auto max-w-7xl rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              <Link to="/" className="block text-gray-800 font-medium hover:text-brand-gold" onClick={() => setIsOpen(false)}>Home</Link>
              <Link to="/catalog" className="block text-gray-800 font-medium hover:text-brand-gold" onClick={() => setIsOpen(false)}>Collection</Link>
              <Link to="/emi" className="block text-gray-800 font-medium hover:text-brand-gold" onClick={() => setIsOpen(false)}>EMI Calculator</Link>
              <Link to="/contact" className="block text-gray-800 font-medium hover:text-brand-gold" onClick={() => setIsOpen(false)}>Contact</Link>
              <Link to="/booking" className="block text-brand-gold font-bold" onClick={() => setIsOpen(false)}>Book Visit</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-luxury text-gray-300 py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 pointer-events-none -skew-x-12 transform origin-top-right"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <img src="/src/assets/alok-3.png" alt="Alok Furniture Logo" className="h-14 w-auto object-contain rounded-full" />
          <p className="text-sm mb-6 text-gray-400">Furniture That Define Your Space. Modern, Classy, and Durable pieces crafted to elevate your home aesthetics.</p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy hover:border-transparent transition-all duration-300">
              <FaFacebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy hover:border-transparent transition-all duration-300">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-brand-navy hover:border-transparent transition-all duration-300">
              <FaSquareXTwitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-serif text-xl mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/catalog" className="hover:text-brand-gold transition-colors">Our Collection</Link></li>
            <li><Link to="/emi" className="hover:text-brand-gold transition-colors">EMI Calculator</Link></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">About Us</a></li>
            <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-serif text-xl mb-6">Support</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-brand-gold transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand-gold transition-colors">Shipping & Returns</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-serif text-xl mb-6">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMapPin size={20} className="text-brand-gold shrink-0 mt-1" />
              <span>123 Furniture Avenue, Premium District, New Delhi, India 110001</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone size={20} className="text-brand-gold shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <IoIosMail size={20} className="text-brand-gold shrink-0" />
              <span>hello@alokfurniture.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500 relative z-10">
        &copy; {new Date().getFullYear()} Alok Furniture. All rights reserved. Since 1995.
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 z-50 flex items-center justify-center border-4 border-white/20"
    aria-label="Chat on WhatsApp"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
  >
    <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
  </motion.a>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/emi" element={<EMICalculator />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f8f9fa]">
        <Navbar />
        <main className="flex-grow pt-24">
          <AnimatedRoutes />
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
