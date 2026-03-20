import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { cn } from '../utils/cn';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || 'Failed to send message');
      }

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      setSubmitError(`Error: ${message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden py-32">
      {/* Abstract Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#004AAC] rounded-full blur-[150px] opacity-[0.07]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#004AAC] rounded-full blur-[150px] opacity-[0.05]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
           className="text-center max-w-3xl mx-auto mb-20 pt-16"
        >
          <span className="text-[#3375C9] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Initiate Contact</span>
          <h1 className="text-5xl sm:text-7xl font-display font-bold tracking-tighter mb-6">
            SECURE YOUR <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">CONSULTATION</span>
          </h1>
          <p className="text-lg text-white/50 font-light leading-relaxed">
            Direct communication with our elite engineering division. Schedule your comprehensive structural audit and begin your project formulation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Contact Information Matrix */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 space-y-8 mt-4"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-display font-medium tracking-wide border-b border-white/10 pb-4 mb-4 text-white/90">
              Command Center
            </motion.h3>

            <motion.div variants={itemVariants} className="group glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all flex items-start gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#004AAC] rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#004AAC]/20 transition-colors">
                <MapPin className="w-6 h-6 text-[#3375C9] group-hover:text-white transition-colors" />
              </div>
              <div className="relative z-10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-1">Headquarters</h4>
                <p className="text-white/50 font-light leading-relaxed">6734 Bayou Rapides Road<br/>Alexandria, LA 71303</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="group glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all flex items-start gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#004AAC] rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#004AAC]/20 transition-colors">
                <Phone className="w-6 h-6 text-[#3375C9] group-hover:text-white transition-colors" />
              </div>
              <div className="relative z-10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-1">Direct Line</h4>
                <a href="tel:3188806777" className="text-2xl font-display font-medium text-white/90 hover:text-white transition-colors block mt-1">
                  318.880.6777
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="group glass p-6 rounded-2xl border border-white/5 hover:border-white/20 transition-all flex items-start gap-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#004AAC] rounded-full blur-[50px] opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="w-14 h-14 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#004AAC]/20 transition-colors">
                <Mail className="w-6 h-6 text-[#3375C9] group-hover:text-white transition-colors" />
              </div>
              <div className="relative z-10">
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-1">Electronic Mail</h4>
                <a href="mailto:caleb.ducoteroofing@gmail.com" className="text-white/50 hover:text-white transition-colors font-light mt-1 block max-w-full truncate">
                  caleb.ducoteroofing@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="group p-6 rounded-2xl glass-dark border border-[#004AAC]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-[#004AAC]/10 to-transparent"></div>
              <div className="relative z-10 flex items-start gap-6">
                <div className="w-14 h-14 bg-[#004AAC]/20 rounded-xl border border-[#004AAC]/40 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#3375C9]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 mb-2">Operational Hours</h4>
                  <ul className="text-white/50 font-light space-y-1 text-sm">
                    <li className="flex justify-between w-40"><span>Mon - Fri:</span> <span className="text-white/80">0700 - 1800</span></li>
                    <li className="flex justify-between w-40"><span>Saturday:</span> <span className="text-white/80">0800 - 1400</span></li>
                    <li className="flex justify-between w-40 text-red-400"><span>Sunday:</span> <span className="opacity-50">Offline</span></li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Interactive Secure Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="glass-dark p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#004AAC] rounded-full blur-[100px] opacity-10"></div>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="h-[500px] flex flex-col items-center justify-center text-center space-y-6"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 12, stiffness: 200 }}
                      className="w-24 h-24 bg-[#004AAC]/20 rounded-full flex items-center justify-center border border-[#004AAC]/50 relative"
                    >
                      <div className="absolute inset-0 rounded-full border border-[#004AAC] animate-ping opacity-20"></div>
                      <CheckCircle2 className="w-12 h-12 text-[#3375C9]" />
                    </motion.div>
                    <div>
                      <h3 className="text-3xl font-display font-medium tracking-wide text-white mb-2">Transmission Successful</h3>
                      <p className="text-white/50 font-light max-w-sm mx-auto">Your tactical request has been logged. An engineering representative will interface with you momentarily.</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8 relative z-10"
                  >
                    {/* Error Message */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-4"
                      >
                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <p className="text-red-300 text-sm font-light">{submitError}</p>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Floating Label Input - Name */}
                      <div className="relative group">
                        <input
                          type="text"
                          id="contact-name"
                          required
                          className="peer w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-[#3375C9] transition-colors placeholder-transparent font-light"
                          placeholder="Name"
                          value={formData.name}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                        <label htmlFor="contact-name" className={cn(
                          "absolute left-0 transition-all duration-300 pointer-events-none tracking-widest uppercase font-semibold text-xs",
                          (focusedField === 'name' || formData.name) ? "text-[#3375C9] -top-3 text-[10px]" : "text-white/40 top-3 text-sm"
                        )}>
                          Applicant Identity
                        </label>
                      </div>

                      {/* Floating Label Input - Phone */}
                      <div className="relative group">
                        <input
                          type="tel"
                          id="contact-phone"
                          required
                          className="peer w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-[#3375C9] transition-colors placeholder-transparent font-light"
                          placeholder="Phone"
                          value={formData.phone}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                        <label htmlFor="contact-phone" className={cn(
                          "absolute left-0 transition-all duration-300 pointer-events-none tracking-widest uppercase font-semibold text-xs",
                          (focusedField === 'phone' || formData.phone) ? "text-[#3375C9] -top-3 text-[10px]" : "text-white/40 top-3 text-sm"
                        )}>
                          Comms Channel (Phone)
                        </label>
                      </div>
                    </div>

                    {/* Floating Label Input - Email */}
                    <div className="relative group">
                      <input
                        type="email"
                        id="contact-email"
                        required
                        className="peer w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-[#3375C9] transition-colors placeholder-transparent font-light"
                        placeholder="Email"
                        value={formData.email}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <label htmlFor="contact-email" className={cn(
                        "absolute left-0 transition-all duration-300 pointer-events-none tracking-widest uppercase font-semibold text-xs",
                        (focusedField === 'email' || formData.email) ? "text-[#3375C9] -top-3 text-[10px]" : "text-white/40 top-3 text-sm"
                      )}>
                        Secure Signal (Email)
                      </label>
                    </div>

                    {/* Custom Select - Service */}
                    <div className="relative group">
                      <select
                        id="contact-service"
                        required
                        className="w-full bg-transparent border-b border-white/20 text-white py-3 focus:outline-none focus:border-[#3375C9] transition-colors font-light appearance-none cursor-pointer"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="" disabled hidden className="text-black">Select Objective</option>
                        <option value="Structural Repair" className="text-black">Structural Repair</option>
                        <option value="New Installation (Res/Com)" className="text-black">New Installation (Res/Com)</option>
                        <option value="Metal Architectures" className="text-black">Metal Architectures</option>
                        <option value="Other Designation" className="text-black">Other Designation</option>
                      </select>
                      <label htmlFor="contact-service" className="absolute left-0 -top-3 text-[#3375C9] text-[10px] tracking-widest uppercase font-semibold pointer-events-none">
                        Mission Parameter
                      </label>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">▼</div>
                    </div>

                    {/* Floating Label Textarea - Message */}
                    <div className="relative group pt-4">
                      <textarea
                        id="contact-message"
                        rows={3}
                        required
                        className="peer w-full bg-white/5 border border-white/10 rounded-xl text-white py-4 px-4 focus:outline-none focus:border-[#3375C9] transition-colors font-light resize-none placeholder-transparent"
                        placeholder="Message"
                        value={formData.message}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      ></textarea>
                      <label htmlFor="contact-message" className={cn(
                        "absolute left-4 transition-all duration-300 pointer-events-none tracking-widest uppercase font-semibold text-xs bg-[#111111] px-2",
                        (focusedField === 'message' || formData.message) ? "text-[#3375C9] top-1 text-[10px]" : "text-white/40 top-8 text-sm bg-transparent"
                      )}>
                        Operational Details
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full h-[60px] flex items-center justify-center font-bold tracking-widest uppercase text-sm overflow-hidden rounded-xl bg-white text-black disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <div className="absolute inset-x-0 bottom-0 h-0 bg-[#004AAC] group-hover:h-full transition-all duration-300 ease-out z-0"></div>
                      <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                        {isSubmitting ? (
                          <>
                            Transmitting...
                            <Loader2 className="w-4 h-4 animate-spin" />
                          </>
                        ) : (
                          <>
                            Transmit Request 
                            <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                          </>
                        )}
                      </span>
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
