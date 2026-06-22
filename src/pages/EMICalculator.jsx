import { useStore } from '../store/useStore';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useState } from 'react';
import { pageVariants, pageTransition } from './Home';

function AnimatedNumber({ value }) {
  const [displayValue, setDisplayValue] = useState(value);
  
  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.5,
      onUpdate(v) {
        setDisplayValue(Math.round(v));
      }
    });
    return controls.stop;
  }, [value]);

  return <>{displayValue.toLocaleString('en-IN')}</>;
}

export default function EMICalculator() {
  const { emiAmount, setEmiAmount, emiTenure, setEmiTenure } = useStore();
  const interestRate = 0;

  const emi = Math.round(emiAmount / emiTenure);

  return (
    <motion.div 
      initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
      className="py-20 bg-transparent min-h-screen"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-brand-navy mb-4">Easy EMI Calculator</h1>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">Plan your luxury purchase with our No Cost EMI powered by Bajaj Finserv.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 flex flex-col md:flex-row overflow-hidden">
          
          {/* Sliders Area */}
          <div className="flex-1 p-10 md:p-14 space-y-12">
            <div>
              <div className="flex justify-between mb-6">
                <label className="font-bold text-gray-500 uppercase tracking-widest text-sm">Loan Amount</label>
                <div className="font-serif text-3xl text-brand-navy">₹ <AnimatedNumber value={emiAmount} /></div>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="500000" 
                step="5000"
                value={emiAmount}
                onChange={(e) => setEmiAmount(Number(e.target.value))}
                className="w-full h-3 bg-gray-100 rounded-full appearance-none cursor-pointer accent-brand-gold hover:accent-brand-navy transition-all"
              />
              <div className="flex justify-between text-xs font-bold text-gray-400 mt-4 uppercase tracking-widest">
                <span>₹ 10k</span>
                <span>₹ 5L</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-6">
                <label className="font-bold text-gray-500 uppercase tracking-widest text-sm">Tenure</label>
                <div className="font-serif text-3xl text-brand-navy">{emiTenure} Months</div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[3, 6, 9, 12, 18, 24].map((t) => (
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={t}
                    onClick={() => setEmiTenure(t)}
                    className={`py-3 rounded-xl font-bold transition-all shadow-sm ${emiTenure === t ? 'bg-brand-navy text-brand-gold shadow-brand-navy/20' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'}`}
                  >
                    {t} Mo
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Area */}
          <div className="md:w-2/5 bg-gradient-luxury text-white p-10 md:p-14 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-4 opacity-5 transform scale-150 -translate-y-1/4 translate-x-1/4">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-brand-gold-light text-sm font-bold uppercase tracking-widest mb-4">Monthly EMI</h3>
              <div className="text-5xl font-serif text-white mb-10 flex items-baseline gap-2">
                ₹<AnimatedNumber value={emi} />
                <span className="text-lg text-gray-400 font-sans font-medium">/mo</span>
              </div>
              
              <div className="space-y-6 text-sm text-gray-300 border-t border-white/10 pt-8">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Principal Amount</span>
                  <span className="text-white font-bold text-lg">₹ <AnimatedNumber value={emiAmount} /></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Interest @ {interestRate}%</span>
                  <span className="text-brand-gold font-bold text-lg">₹ 0</span>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-white/10">
                  <span className="font-bold text-white uppercase tracking-widest">Total Payable</span>
                  <span className="text-white font-serif text-2xl">₹ <AnimatedNumber value={emiAmount} /></span>
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="w-full mt-10 bg-brand-gold text-brand-navy py-4 rounded-full font-bold hover:bg-white transition-colors relative z-10 shadow-xl shadow-brand-gold/20"
            >
              Apply for EMI Now
            </motion.button>
          </div>
        </div>

        {/* Info Block */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-12 bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col sm:flex-row items-center gap-8 justify-center max-w-3xl mx-auto text-center sm:text-left">
          <div className="bg-blue-800 text-white font-black px-6 py-3 text-2xl rounded-xl shadow-md tracking-tight rotate-[-2deg]">BAJAJ FINSERV</div>
          <div>
            <h4 className="font-bold text-brand-navy text-lg mb-1">Official Finance Partner</h4>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">Instant approval within 5 minutes. Zero documentation needed for existing EMI network card holders.</p>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
