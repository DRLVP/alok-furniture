import { useForm } from 'react-hook-form';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { pageVariants, pageTransition } from './Home';

export default function Booking() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
      className="py-12 bg-transparent min-h-screen relative"
    >
      {/* Decorative background blob */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-gold/10 to-transparent pointer-events-none -z-10"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-navy mb-4">Book a Store Visit</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Experience our luxury collection in person with a dedicated design consultant.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          
          {/* Info Side */}
          <div className="md:w-1/3 bg-brand-navy text-white p-10 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-[url('/hero.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h3 className="text-brand-gold font-serif text-2xl mb-8">What to Expect?</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-white/10 p-2 rounded-lg h-fit"><CheckCircle className="text-brand-gold" size={24}/></div>
                  <div>
                    <h4 className="font-bold mb-1">Expert Guidance</h4>
                    <p className="text-sm text-gray-300">1-on-1 consultation with our interior experts.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white/10 p-2 rounded-lg h-fit"><CheckCircle className="text-brand-gold" size={24}/></div>
                  <div>
                    <h4 className="font-bold mb-1">Exclusive Access</h4>
                    <p className="text-sm text-gray-300">Preview new collections before they launch online.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white/10 p-2 rounded-lg h-fit"><CheckCircle className="text-brand-gold" size={24}/></div>
                  <div>
                    <h4 className="font-bold mb-1">Fabric Samples</h4>
                    <p className="text-sm text-gray-300">Feel the premium materials and take swatches home.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-brand-gold mb-2">
                <MapPin size={20} /> <span className="font-bold text-white">Flagship Store</span>
              </div>
              <p className="text-sm text-gray-300">123 Furniture Avenue,<br/>Premium District, New Delhi</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-2/3 p-10 md:p-14">
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
                <h3 className="text-3xl font-serif text-brand-navy mb-4">Booking Confirmed!</h3>
                <p className="text-gray-500 mb-8 max-w-sm">We've received your request. Our consultant will call you shortly to confirm the appointment.</p>
                <button onClick={() => setIsSubmitted(false)} className="text-brand-gold font-bold hover:text-brand-navy transition-colors uppercase tracking-wider text-sm border-b-2 border-brand-gold pb-1">Book Another Visit</button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">Full Name</label>
                    <input 
                      {...register("name", { required: "Name is required" })}
                      className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brand-gold transition-colors font-medium text-brand-navy placeholder-gray-300 bg-transparent"
                      placeholder="Enter your full name"
                    />
                    {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name.message}</span>}
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">Phone Number</label>
                    <input 
                      type="tel"
                      {...register("phone", { required: "Phone is required", pattern: { value: /^[0-9]{10}$/, message: "Invalid phone number" } })}
                      className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brand-gold transition-colors font-medium text-brand-navy placeholder-gray-300 bg-transparent"
                      placeholder="10-digit number"
                    />
                    {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone.message}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div>
                    <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                      <Calendar size={14} className="text-brand-gold" /> Preferred Date
                    </label>
                    <input 
                      type="date"
                      {...register("date", { required: "Date is required" })}
                      className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brand-gold transition-colors font-medium text-brand-navy bg-transparent"
                    />
                    {errors.date && <span className="text-red-500 text-xs mt-1 block">{errors.date.message}</span>}
                  </div>

                  <div>
                    <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                      <Clock size={14} className="text-brand-gold" /> Preferred Time
                    </label>
                    <select 
                      {...register("time", { required: "Time is required" })}
                      className="w-full border-b-2 border-gray-200 py-3 focus:outline-none focus:border-brand-gold transition-colors font-medium text-brand-navy bg-transparent appearance-none"
                    >
                      <option value="">Select a time slot</option>
                      <option value="10:00 AM">10:00 AM - 12:00 PM</option>
                      <option value="12:00 PM">12:00 PM - 02:00 PM</option>
                      <option value="02:00 PM">02:00 PM - 04:00 PM</option>
                      <option value="04:00 PM">04:00 PM - 06:00 PM</option>
                      <option value="06:00 PM">06:00 PM - 08:00 PM</option>
                    </select>
                    {errors.time && <span className="text-red-500 text-xs mt-1 block">{errors.time.message}</span>}
                  </div>
                </div>

                <div className="pt-4">
                  <label className="block text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">Areas of Interest (Optional)</label>
                  <div className="flex flex-wrap gap-3">
                    {['Living Room', 'Bedroom', 'Dining', 'Home Office'].map(area => (
                      <label key={area} className="cursor-pointer">
                        <input type="checkbox" value={area} {...register("interests")} className="peer sr-only" />
                        <div className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-500 peer-checked:bg-brand-navy peer-checked:text-brand-gold peer-checked:border-brand-navy transition-all">
                          {area}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full mt-8 bg-brand-navy text-white py-4 rounded-xl font-bold hover:bg-brand-gold hover:text-brand-navy transition-colors duration-300 shadow-xl shadow-brand-navy/10"
                >
                  Confirm Booking
                </motion.button>
              </form>
            )}
          </div>
        </div>

      </div>
    </motion.div>
  );
}
