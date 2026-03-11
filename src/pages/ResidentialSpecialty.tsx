import { motion } from 'motion/react';
import { Home, ShieldCheck, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function ResidentialSpecialtyPage() {
  const textRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden py-32">
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 }}}} className="max-w-4xl mx-auto">
            <motion.div variants={textRevealVariants} className="inline-flex items-center gap-3 mb-8">
              <Home className="w-5 h-5 text-[#3375C9]" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#3375C9]">Elevated Homes</span>
            </motion.div>
            <motion.h1 variants={textRevealVariants} className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
              RESIDENTIAL <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">EXCELLENCE</span>
            </motion.h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#004AAC] to-transparent mx-auto mb-8"></div>
            <motion.p variants={textRevealVariants} className="text-xl lg:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
              Bespoke domestic fortifications. We bridge the gap between high-end aesthetic form and uncompromising structural function.
            </motion.p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative"
        >
          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden glass-dark border border-white/10 p-2 shadow-2xl">
            <img
              src="/Untitled-design-2024-01-19T190307.289.png"
              alt="Residential Excellence"
              className="w-full h-full object-cover rounded-xl filter grayscale opacity-60 mix-blend-luminosity hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
          </div>
        </motion.div>
      </section>

      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
              <span className="text-[#3375C9] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Architectural Distinction</span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tighter text-white/90 mb-6">CUSTOM CONFIGURATIONS</h2>
              <div className="w-16 h-px bg-[#004AAC] mb-8"></div>
              <div className="space-y-6 text-white/50 font-light leading-relaxed">
                <p>Standardized materials fall short on premium estates. We orchestrate deployments using advanced heavy-weight shingles, genuine slate, and architectural accents that redefine geometric profiles.</p>
                <div className="glass p-6 rounded-xl border border-white/5 space-y-4 mt-8">
                  <div className="flex items-center gap-4"><CheckCircle2 className="w-5 h-5 text-[#3375C9]"/><span className="text-white/80">Dimensional Architectural Shingles</span></div>
                  <div className="flex items-center gap-4"><CheckCircle2 className="w-5 h-5 text-[#3375C9]"/><span className="text-white/80">Copper & Lead Coated Flashing Accents</span></div>
                  <div className="flex items-center gap-4"><CheckCircle2 className="w-5 h-5 text-[#3375C9]"/><span className="text-white/80">Precision Pitch Engineering</span></div>
                </div>
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }} className="relative h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#004AAC]/20 to-transparent blur-[50px] -z-10 translate-x-10 translate-y-10"></div>
              <div className="h-full w-full glass-dark border border-white/10 rounded-2xl p-2 overflow-hidden shadow-2xl">
                <img src="/Untitled-design-5.png" alt="Estate Solution" className="w-full h-full object-cover rounded-xl filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700"/>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#004AAC] rounded-full blur-[200px] opacity-[0.05] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tighter text-white mb-6">INITIATE ARCHITECTURAL PLAN</h2>
          <p className="text-lg text-white/50 font-light mb-10 max-w-xl mx-auto">Authorize an objective structural assessment and secure your high-end architectural assets today.</p>
          <NavLink to="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-xl overflow-hidden hover:text-white transition-colors duration-300">
            <div className="absolute inset-x-0 bottom-0 h-0 bg-[#004AAC] group-hover:h-full transition-all duration-300 ease-out z-0"></div>
            <span className="relative z-10 flex items-center gap-3">Deploy Architect Team <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" /></span>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
