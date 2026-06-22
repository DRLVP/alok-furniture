import { useParams, Link } from 'react-router';
import { products } from '../store/useStore';
import { Shield, Truck, RotateCcw, MessageCircle, Info } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { pageVariants, pageTransition } from './Home';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id)) || products[0];
  const [activeTab, setActiveTab] = useState('description');
  const [selectedColor, setSelectedColor] = useState('Navy Blue');

  // EMI Calculation Simulation
  const tenure = 12;
  const emi = Math.round(product.price / tenure);

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
      className="py-12 bg-transparent min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="text-sm text-gray-400 mb-10 flex gap-2 font-medium tracking-wide">
          <Link to="/" className="hover:text-brand-navy transition-colors">Home</Link> / 
          <Link to="/catalog" className="hover:text-brand-navy transition-colors">Catalog</Link> / 
          <span className="text-brand-navy">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Product Images */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <div className="relative h-[550px] bg-white rounded-3xl border border-gray-100 overflow-hidden group mb-6 shadow-xl shadow-gray-200/50 cursor-crosshair">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-125 origin-center" />
              <div className="absolute top-6 left-6 glass px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-navy rounded-full shadow-sm">
                360° View Available
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1,2,3,4].map((i) => (
                <motion.div whileHover={{ scale: 1.05 }} key={i} className={`h-24 rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${i === 1 ? 'border-brand-navy' : 'border-transparent opacity-60 hover:opacity-100'}`}>
                   <img src={product.image} alt="Thumbnail" className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <div className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">{product.category}</div>
            <h1 className="text-4xl md:text-5xl font-serif text-brand-navy mb-4 leading-tight">{product.name}</h1>
            <div className="text-4xl text-brand-gold mb-8 font-serif">₹{product.price.toLocaleString('en-IN')}</div>

            {/* Bajaj Finance Block */}
            <div className="bg-gradient-to-r from-blue-50 to-transparent border-l-4 border-blue-800 p-6 mb-8 rounded-r-2xl">
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 text-white font-bold text-xs px-3 py-1 rounded-full shadow-sm shrink-0">
                  BAJAJ FINSERV
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-navy flex items-center gap-2">
                    No Cost EMI from ₹{emi.toLocaleString('en-IN')}/mo <Info size={14} className="text-blue-500"/>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 mb-2 font-medium">Pay over {tenure} months. 0% interest.</div>
                  <Link to="/emi" className="text-xs text-blue-600 font-bold hover:underline inline-block uppercase tracking-wider">Calculate EMI</Link>
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-10 leading-relaxed text-lg font-light">
              Experience the epitome of luxury with our {product.name}. Crafted with precision and upholstered in premium materials, it is designed to define your space and provide unparalleled comfort.
            </p>

            {/* Color/Material Picker */}
            <div className="mb-10">
              <h3 className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-widest">Select Material & Color: <span className="text-brand-navy font-medium normal-case ml-2">{selectedColor}</span></h3>
              <div className="flex gap-4">
                {[
                  { name: 'Navy Blue', hex: '#0A192F' },
                  { name: 'Emerald Green', hex: '#047857' },
                  { name: 'Classic Beige', hex: '#D1D5DB' },
                  { name: 'Charcoal Grey', hex: '#374151' },
                ].map(color => (
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full border-4 transition-all shadow-md ${selectedColor === color.name ? 'border-brand-gold ring-2 ring-brand-gold/30 ring-offset-2' : 'border-white'}`}
                    style={{ backgroundColor: color.hex }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="flex-1 bg-brand-navy text-white text-center py-4 rounded-full font-bold hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300 shadow-xl shadow-brand-navy/20">
                Enquire Now
              </motion.a>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                <Link to="/booking" className="block w-full border-2 border-brand-navy text-brand-navy text-center py-4 rounded-full font-bold hover:bg-brand-navy hover:text-white transition-colors duration-300">
                  Book a Store Visit
                </Link>
              </motion.div>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-b border-gray-200 py-8 mb-10">
               <div className="flex items-center gap-3 text-sm text-gray-700 font-medium"><Shield size={20} className="text-brand-gold"/> 10 Year Warranty</div>
               <div className="flex items-center gap-3 text-sm text-gray-700 font-medium"><Truck size={20} className="text-brand-gold"/> Free Pan-India Delivery</div>
               <div className="flex items-center gap-3 text-sm text-gray-700 font-medium"><RotateCcw size={20} className="text-brand-gold"/> 7 Days Easy Return</div>
               <div className="flex items-center gap-3 text-sm text-gray-700 font-medium"><MessageCircle size={20} className="text-brand-gold"/> 24/7 Expert Support</div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <div className="flex gap-8 mb-6 relative">
                <button onClick={() => setActiveTab('description')} className={`text-sm font-bold uppercase tracking-wider transition-colors z-10 ${activeTab === 'description' ? 'text-brand-navy' : 'text-gray-400'}`}>
                  Description
                </button>
                <button onClick={() => setActiveTab('dimensions')} className={`text-sm font-bold uppercase tracking-wider transition-colors z-10 ${activeTab === 'dimensions' ? 'text-brand-navy' : 'text-gray-400'}`}>
                  Dimensions
                </button>
                <div className="absolute bottom-[-12px] left-0 w-full h-0.5 bg-gray-100"></div>
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-[-12px] h-0.5 bg-brand-gold"
                  initial={false}
                  animate={{ 
                    left: activeTab === 'description' ? 0 : '100px', 
                    width: activeTab === 'description' ? '100px' : '95px' 
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-600 text-sm leading-relaxed"
                >
                  {activeTab === 'description' ? (
                    <p>Built with kiln-dried solid hardwood and high-resiliency foam, this piece offers lasting durability. The premium upholstery is both soft to the touch and easy to maintain, making it ideal for everyday luxury living. Designed by our in-house experts to meet modern ergonomic standards without compromising on its classic silhouette.</p>
                  ) : (
                    <ul className="space-y-4">
                      <li className="flex justify-between border-b border-gray-50 pb-2"><span>Width</span> <span className="font-bold text-brand-navy">84 inches</span></li>
                      <li className="flex justify-between border-b border-gray-50 pb-2"><span>Depth</span> <span className="font-bold text-brand-navy">38 inches</span></li>
                      <li className="flex justify-between border-b border-gray-50 pb-2"><span>Height</span> <span className="font-bold text-brand-navy">34 inches</span></li>
                      <li className="flex justify-between border-b border-gray-50 pb-2"><span>Seat Height</span> <span className="font-bold text-brand-navy">18 inches</span></li>
                    </ul>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
