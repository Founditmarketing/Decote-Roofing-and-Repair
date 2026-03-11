import { motion } from 'motion/react';
import { Users, Target, ShieldCheck, Award, Wrench } from 'lucide-react';
import { cn } from '../utils/cn';

export default function AboutPage() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden py-32">
      {/* Premium Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="max-w-4xl mx-auto">
            <motion.div variants={textRevealVariants} className="inline-flex items-center gap-3 mb-8">
              <span className="w-2 h-2 bg-[#004AAC] rounded-full"></span>
              <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-[#3375C9]">The Ducote Standard</span>
              <span className="w-2 h-2 bg-[#004AAC] rounded-full"></span>
            </motion.div>
            
            <motion.h1 variants={textRevealVariants} className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">LEGACY</span>
            </motion.h1>
            
            <motion.p variants={textRevealVariants} className="text-xl lg:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
              A decade of uncompromising structural integrity, engineering excellence, and specialized architectural protection in Louisiana.
            </motion.p>
          </motion.div>
        </div>

        {/* Hero Image Mask */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative"
        >
          <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden glass-dark border border-white/10 p-2 shadow-2xl">
            <img
              src="/Untitled-design-14.png"
              alt="Ducote Roofing Team"
              className="w-full h-full object-cover rounded-xl filter grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:mix-blend-normal transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          </div>
        </motion.div>
      </section>

      {/* Main Narrative */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

            <div className="lg:col-span-6 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="glass p-12 rounded-3xl border border-white/5 relative overflow-hidden backdrop-blur-2xl">
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#004AAC] rounded-full blur-[100px] opacity-20"></div>
                  <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tighter text-white/90 mb-8">
                    FOUNDED ON <br/>ABSOLUTE TRUST
                  </h2>
                  <div className="w-16 h-px bg-[#3375C9] mb-8"></div>

                  <div className="space-y-6 text-lg text-white/50 font-light leading-relaxed">
                    <p>
                      Established in 2012, Ducote Roofing was architected with a singular mandate: to engineer roofing solutions that the residents of Alexandria could unequivocally rely on. We identified a critical gap in the market for contractors who synthesized transparency, precision, and structural longevity.
                    </p>
                    <p>
                      Over ten years, we have evolved from a localized crew into Central Louisiana's paramount roofing authority. However, our foundational statutes remain rigid. We execute based on the sanctity of our commitments, rigorous standards, and an obsession with perfection.
                    </p>
                    <div className="mt-8 p-6 glass-dark border-l-2 border-[#004AAC] rounded-r-xl">
                      <p className="font-display font-medium text-white/90 text-xl tracking-wide italic">
                        "Every structure we secure embodies our unwavering dedication to architectural resilience and pure aesthetic excellence."
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-6 relative h-[600px] w-full hidden lg:block">
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-[90%] h-[80%] rounded-2xl overflow-hidden glass-dark p-2"
              >
                <img
                  src="/Commercial.png"
                  alt="Ducote Roofing History"
                  className="w-full h-full object-cover rounded-xl filter grayscale contrast-125 saturate-50 hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Principles Grid */}
      <section className="py-32 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#3375C9] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">The Differential</span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tighter text-white/90 mb-6">
              ENGINEERING PRINCIPLES
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#004AAC] to-transparent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Bespoke Strategy',
                desc: 'We discard the standard template. Every deployment initiates with a precise architectural audit to align with your specific structural requirements and financial parameters.'
              },
              {
                icon: Users,
                title: 'Elite Specialists',
                desc: 'Our installation squadrons are composed of rigorously trained, elite-tier technicians. We continually invest in advanced aeronautical-grade methodology.'
              },
              {
                icon: ShieldCheck,
                title: 'Impenetrable Quality',
                desc: 'From initial inspection to the final micro-calibration, we enforce draconian quality control to guarantee invulnerability against severe atmospheric conditions.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="group p-10 rounded-2xl glass-dark border border-white/5 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#004AAC]/0 to-[#004AAC]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="w-16 h-16 bg-[#004AAC]/10 rounded-xl flex items-center justify-center mb-8 border border-[#004AAC]/30 group-hover:bg-[#004AAC] group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-[#3375C9] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-display font-medium text-white/90 mb-4 tracking-wide">{value.title}</h3>
                <p className="text-white/50 font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
