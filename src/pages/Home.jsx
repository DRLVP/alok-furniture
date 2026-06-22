import { motion } from 'motion/react';
import { ArrowRight, Star, Shield, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router';
import heroImg from '../assets/hero-image.jpg';
import sofaImg from '../assets/sofa.jpg';
import bedImg from '../assets/bed.jpg';
import diningImg from '../assets/dining.jpg';
import coffeeTableImg from '../assets/coffee-table.jpg';

const categories = [
  { name: 'Luxury Sofas', image: sofaImg, count: '45+ Items' },
  { name: 'Premium Beds', image: bedImg, count: '32+ Items' },
  { name: 'Dining Sets', image: diningImg, count: '28+ Items' },
  { name: 'Coffee Tables', image: coffeeTableImg, count: '15+ Items' },
];

const testimonials = [
  { name: 'Rajesh Sharma', role: 'Homeowner, Delhi', text: 'The quality of the Chesterfield sofa is outstanding. It completely transformed our living room.', rating: 5 },
  { name: 'Priya Patel', role: 'Interior Designer', text: 'I always recommend Alok Furniture to my clients. Their modern aesthetics combined with durability is unmatched.', rating: 5 },
  { name: 'Amit Desai', role: 'Business Owner', text: 'Bought a premium bed and the finish is excellent. The 0% EMI option made it a very easy decision.', rating: 5 },
];

// Reusable page transition wrapper
export const pageVariants = {
  initial: { opacity: 0, y: 15 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -15 }
};

export const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.4
};

export default function Home() {
  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
      className="overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center -mt-24 pt-24 rounded-b-[3rem] overflow-hidden shadow-2xl">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Luxurious Living Room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight drop-shadow-lg">
              Furniture That <br/>
              <span className="text-gradient-gold italic">Define Your Space.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light drop-shadow-md">
              Crafting premium, modern, and durable furniture since 1995. Elevate your home aesthetics with our bespoke collections.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/catalog" className="bg-brand-gold text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 shadow-xl shadow-brand-gold/20">
                  Explore Collection <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/booking" className="glass text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors duration-300 text-center block border border-white/30">
                  Book Free Visit
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Legacy Section */}
      <section className="py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-dark rounded-3xl p-10 md:p-14 shadow-2xl transform -translate-y-16 relative z-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="px-4">
                <Trophy className="mx-auto text-brand-gold mb-4" size={40} />
                <div className="text-4xl font-serif text-white mb-2 drop-shadow-md">30+</div>
                <div className="text-gray-300 font-medium">Years Legacy</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="px-4">
                <Users className="mx-auto text-brand-gold mb-4" size={40} />
                <div className="text-4xl font-serif text-white mb-2 drop-shadow-md">5k+</div>
                <div className="text-gray-300 font-medium">Happy Homes</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="px-4">
                <Shield className="mx-auto text-brand-gold mb-4" size={40} />
                <div className="text-4xl font-serif text-white mb-2 drop-shadow-md">10yr</div>
                <div className="text-gray-300 font-medium">Warranty</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="px-4">
                <Star className="mx-auto text-brand-gold mb-4" size={40} />
                <div className="text-4xl font-serif text-white mb-2 drop-shadow-md">4.9</div>
                <div className="text-gray-300 font-medium">Customer Rating</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-12 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif text-brand-navy mb-4">Shop by Category</h2>
              <p className="text-gray-500 max-w-2xl">Discover our meticulously curated collections designed for every room in your premium home.</p>
            </div>
            <Link to="/catalog" className="hidden md:flex items-center gap-2 text-brand-navy font-bold hover:text-brand-gold transition-colors">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <motion.div 
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="group relative h-[450px] overflow-hidden cursor-pointer rounded-2xl shadow-lg"
              >
                <img src={category.image} alt={category.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                  <h3 className="text-white text-3xl font-serif mb-2 drop-shadow-md">{category.name}</h3>
                  <p className="text-brand-gold-light text-sm mb-6 font-medium tracking-wide">{category.count}</p>
                  <Link to={`/catalog?category=${category.name}`} className="inline-block border border-white/30 rounded-full px-6 py-2 text-white text-sm tracking-wider uppercase backdrop-blur-md opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:text-brand-navy">
                    Explore
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="my-24 bg-gradient-luxury text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-serif mb-16 text-gradient-gold">Modern · Classy · Durable</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div whileHover={{ y: -10 }} className="glass-dark rounded-3xl p-10 hover:shadow-2xl hover:shadow-brand-gold/10 transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                <Star size={28} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Modern Design</h3>
              <p className="text-gray-400">Contemporary silhouettes that keep your space looking fresh and ahead of the curve.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="glass-dark rounded-3xl p-10 hover:shadow-2xl hover:shadow-brand-gold/10 transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                <Trophy size={28} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Classy Finish</h3>
              <p className="text-gray-400">Premium materials and exquisite detailing that exude luxury in every curve.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} className="glass-dark rounded-3xl p-10 hover:shadow-2xl hover:shadow-brand-gold/10 transition-shadow">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold">
                <Shield size={28} />
              </div>
              <h3 className="text-2xl font-serif text-white mb-4">Durable Build</h3>
              <p className="text-gray-400">Solid wood frames and high-density foams built to withstand generations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 pb-32 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-navy mb-4">What Our Clients Say</h2>
            <p className="text-gray-500">Don't just take our word for it.</p>
          </div>
          <div className="relative overflow-hidden w-full max-w-7xl mx-auto">
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#f8f9fa] to-transparent z-10 pointer-events-none"></div>
            
            <motion.div 
              className="flex w-max gap-8"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              whileHover={{ animationPlayState: "paused" }} // Wait, Framer motion doesn't use animationPlayState like CSS.
            >
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div 
                  key={idx}
                  className="w-[350px] md:w-[450px] p-10 bg-white rounded-3xl shadow-lg border border-gray-100 relative shrink-0"
                >
                  <div className="absolute top-0 right-10 -translate-y-1/2 bg-brand-gold text-white p-3 rounded-full shadow-lg">
                    <Star size={24} fill="currentColor" />
                  </div>
                  <div className="flex text-brand-gold mb-6 gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div>
                    <div className="font-bold text-brand-navy">{testimonial.name}</div>
                    <div className="text-sm text-brand-gold font-medium">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
