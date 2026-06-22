import { useStore, products } from '../store/useStore';
import { Link, useSearchParams } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { pageVariants, pageTransition } from './Home';

const categories = ['All', 'Sofas', 'Beds', 'Dining', 'Tables'];

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const { categoryFilter, setCategoryFilter } = useStore();

  useEffect(() => {
    const urlCategory = searchParams.get('category');
    if (urlCategory && categories.includes(urlCategory.split(' ')[1] || urlCategory)) {
       setCategoryFilter(urlCategory.includes('Sofa') ? 'Sofas' : 
                         urlCategory.includes('Bed') ? 'Beds' : 
                         urlCategory.includes('Dining') ? 'Dining' : 
                         urlCategory.includes('Table') ? 'Tables' : 'All');
    }
  }, [searchParams, setCategoryFilter]);

  const filteredProducts = products.filter(p => 
    (categoryFilter === 'All' || p.category === categoryFilter)
  );

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
      className="py-12 bg-transparent min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-serif text-brand-navy mb-6">Our Collection</h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">Explore our extensive catalog of premium furniture pieces.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map(cat => (
            <motion.button 
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setCategoryFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all shadow-sm ${
                categoryFilter === cat 
                  ? 'bg-brand-navy text-brand-gold shadow-brand-navy/20 border-transparent' 
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-brand-gold hover:text-brand-navy'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredProducts.map((product, idx) => (
              <motion.div 
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 border border-gray-100 group"
              >
                <div className="relative overflow-hidden h-72 bg-gray-50">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  
                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/10 transition-colors duration-500"></div>

                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-brand-navy text-brand-gold text-xs font-bold px-4 py-2 uppercase tracking-wider rounded-full shadow-md">
                      {product.badge}
                    </div>
                  )}
                  {/* Bajaj EMI Badge */}
                  <div className="absolute top-4 right-4 glass text-[10px] font-bold px-3 py-1.5 text-brand-navy rounded-full shadow-sm">
                    0% EMI
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">{product.category}</div>
                  <h3 className="text-2xl font-serif text-brand-navy mb-2 leading-snug group-hover:text-brand-gold transition-colors">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-6">
                    <Star size={16} className="text-brand-gold" fill="currentColor" />
                    <span className="text-sm text-gray-500 font-medium">{product.rating}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    <div className="text-2xl font-medium text-brand-navy">₹{product.price.toLocaleString('en-IN')}</div>
                    <Link to={`/product/${product.id}`} className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-brand-navy group-hover:bg-brand-gold group-hover:text-white transition-colors shadow-sm">
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
}
