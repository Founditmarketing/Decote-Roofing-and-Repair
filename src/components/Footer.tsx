import { NavLink, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import LeadCaptureForm from './LeadCaptureForm';

export default function Footer() {
  const location = useLocation();

  if (location.pathname === '/contact') {
    return null;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-24 pb-12 border-t border-white/10 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#004AAC] rounded-full blur-[150px] opacity-10 pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#004AAC] rounded-full blur-[120px] opacity-5 pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20"
        >

          {/* Company Info */}
          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-8">
            <NavLink to="/" className="inline-block group">
              <img
                src="/logo.png"
                alt="Ducote Roofing"
                className="h-16 w-auto group-hover:opacity-80 transition-opacity"
              />
            </NavLink>
            <p className="text-white/60 leading-relaxed max-w-sm text-lg font-light">
              Elevating the standard of roofing in Alexandria since 2012. Uncompromising quality for residential and commercial structures.
            </p>
            <div className="inline-flex items-center gap-3 glass-dark px-5 py-3 rounded-full border border-white/10 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#004AAC]/20">
                <ShieldCheck className="w-5 h-5 text-[#3375C9]" />
                <div className="absolute inset-0 rounded-full border border-[#004AAC] animate-ping opacity-20"></div>
              </div>
              <span className="font-semibold text-xs tracking-[0.2em] uppercase text-white/90">Servicing Alexandria, LA</span>
            </div>
          </motion.div>

          {/* Quick Links & Contact Info */}
          <motion.div variants={itemVariants} className="lg:col-span-4 lg:ml-auto">
            <h4 className="text-sm font-bold mb-8 uppercase tracking-[0.2em] text-[#3375C9]">Connect</h4>
            <ul className="space-y-6">
              <li>
                <a href="tel:3188806777" className="group flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#004AAC] transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#004AAC]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <Phone className="w-5 h-5 text-white/70 group-hover:text-white relative z-10" />
                  </div>
                  <span className="text-xl font-display font-medium text-white/80 group-hover:text-white transition-colors">318.880.6777</span>
                </a>
              </li>
              <li>
                <a href="mailto:caleb.ducoteroofing@gmail.com" className="group flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#004AAC] transition-colors relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#004AAC]/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <Mail className="w-5 h-5 text-white/70 group-hover:text-white relative z-10" />
                  </div>
                  <span className="text-base font-light text-white/60 group-hover:text-white transition-colors truncate max-w-[200px] sm:max-w-none">
                    caleb.ducoteroofing@gmail.com
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 bg-white/5">
                    <MapPin className="w-5 h-5 text-white/70" />
                  </div>
                  <span className="text-base font-light text-white/60 pt-3 leading-relaxed">
                    6734 Bayou Rapides Road<br />Alexandria, LA
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <a
                href="https://www.facebook.com/DucoteRoofingAndRepair"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white hover:text-[#3375C9] transition-colors group"
              >
                Follow on Facebook
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Lead Capture */}
          <motion.div variants={itemVariants} className="lg:col-span-4">
            <h4 className="text-sm font-bold mb-8 uppercase tracking-[0.2em] text-[#3375C9]">Request Estimate</h4>
            <div className="glass-dark p-6 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px]"></div>
              <LeadCaptureForm />
            </div>
          </motion.div>

        </motion.div>

        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-white/40 text-sm font-light tracking-wide">
            &copy; {new Date().getFullYear()} Ducote Roofing. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-light tracking-wide text-white/40">
            <span className="hover:text-white cursor-pointer transition-colors relative group">
              Privacy Policy
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
            </span>
            <span className="hover:text-white cursor-pointer transition-colors relative group">
              Terms of Service
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
