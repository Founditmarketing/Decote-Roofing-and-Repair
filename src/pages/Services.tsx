import { motion } from 'motion/react';
import { Home, Building2, Hammer, Factory, CheckCircle2, ArrowRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../utils/cn';

export default function ServicesPage() {
  const services = [
    {
      id: 'residential',
      title: 'Residential Architecture',
      icon: Home,
      image: '/Residential-1.png',
      description: 'Your residence is your most critical asset. We engineer holistic residential roofing ecosystems to safeguard your property and elevate architectural aesthetics.',
      link: '/residential-specialty',
      features: [
        'Complete Structural Replacement',
        'Precision Leak Isolation & Repair',
        'Atmospheric Damage Restoration',
        'Architectural Shingle Integration',
        'Lifecycle Maintenance Protocols'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Membranes',
      icon: Building2,
      image: '/Commercial.png',
      description: 'Mitigate operational disruption and shield corporate assets with our heavy-duty commercial membranes. Specializing in highly durable low-slope and flat topologies.',
      link: '/commercial-specialty',
      features: [
        'TPO & EPDM Single-Ply Frameworks',
        'Modified Bitumen Engineering',
        'Preventative Asset Management',
        'Thermal-Efficient Coatings',
        'Rapid Emergency Intervention'
      ]
    },
    {
      id: 'metal',
      title: 'Metal Systems',
      icon: Hammer,
      image: '/Metal-Roofing-1.png',
      description: 'The pinnacle of longevity and thermal efficiency. Our premium metal systems establish an impenetrable barrier against severe phenomena while presenting a stark, contemporary profile.',
      link: '/metal-roofing',
      features: [
        'Standing Seam Architecture',
        'Industrial Corrugated Paneling',
        'Custom Fabrication & Coloring',
        'Hurricane-Grade Wind Resistance',
        'Energy Star Certified Matrices'
      ]
    },
    {
      id: 'fabrication',
      title: 'Steel Fabrication',
      icon: Factory,
      image: '/Steel-Fab-1.png',
      description: 'Transcending standard applications, our proprietary in-house steel fabrication division executes custom structural components, complex architectural nuances, and specialized shielding.',
      link: '/steel-fabrication',
      features: [
        'Custom Flashing & Trim Geometry',
        'High-Tensile Steel Supports',
        'Architectural Metal Embellishments',
        'Molecular-Level Welding Operations',
        'On-Site Tactical Fabrication'
      ]
    }
  ];

  const textRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden py-32">
      {/* Premium Hero Section */}
      <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#004AAC] rounded-full blur-[200px] opacity-[0.05]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-[#004AAC] rounded-full blur-[200px] opacity-[0.03]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 }}}} 
            className="max-w-4xl mx-auto"
          >
            <motion.span variants={textRevealVariants} className="text-[#3375C9] text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Our Capabilities</motion.span>
            <motion.h1 variants={textRevealVariants} className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-8 leading-[0.9]">
              COMPREHENSIVE <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">SOLUTIONS</span>
            </motion.h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#004AAC] to-transparent mx-auto mb-8"></div>
            <motion.p variants={textRevealVariants} className="text-xl lg:text-2xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
              Precision engineering applied to residential repair, complex commercial structures, and proprietary metal fabrication.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Advanced Service Profiles */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-40">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;

              return (
                <div key={service.id} id={service.id} className={cn("flex flex-col lg:flex-row gap-16 lg:gap-24 items-center", isEven ? "" : "lg:flex-row-reverse")}>

                  {/* High-End Image Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50, rotateY: isEven ? -10 : 10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full lg:w-1/2 relative perspective-1000"
                  >
                    <div className={cn("absolute inset-0 bg-gradient-to-tr from-[#004AAC]/20 to-transparent blur-[50px] -z-10 transform scale-110", isEven ? "translate-x-10 translate-y-10" : "-translate-x-10 translate-y-10")}></div>
                    
                    <NavLink to={service.link} className="block relative h-[500px] w-full rounded-2xl overflow-hidden glass-dark border border-white/10 p-2 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
                      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-[#050505] to-transparent z-10 opacity-60"></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-xl filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 rounded-full glass border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                        <ArrowRight className="w-8 h-8 text-white" />
                      </div>
                    </NavLink>
                    
                    {/* Floating Tech Badge */}
                    <div className={cn("absolute -bottom-8 z-30 glass-dark border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-xl hidden md:flex items-center gap-4", isEven ? "-right-8" : "-left-8")}>
                      <div className="w-12 h-12 bg-[#004AAC]/20 rounded-xl flex items-center justify-center border border-[#004AAC]/50">
                        <Icon className="w-6 h-6 text-[#3375C9]" />
                      </div>
                      <span className="font-bold uppercase tracking-[0.2em] text-xs text-white/90">Sector {index + 1}</span>
                    </div>
                  </motion.div>

                  {/* Technical Specs Content */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                    className="w-full lg:w-1/2 relative"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center md:hidden backdrop-blur-sm">
                        <Icon className="w-6 h-6 text-[#3375C9]" />
                      </div>
                      <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tighter text-white/90">{service.title}</h2>
                    </div>
                    <div className="w-16 h-px bg-[#004AAC] mb-8"></div>

                    <p className="text-lg text-white/50 font-light leading-relaxed mb-10">
                      {service.description}
                    </p>

                    <div className="glass p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-[#004AAC] rounded-full blur-[50px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
                      <h3 className="text-xs font-bold text-[#3375C9] mb-6 uppercase tracking-[0.3em]">Technical Capabilities</h3>
                      <ul className="space-y-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-4 group/item">
                            <CheckCircle2 className="w-5 h-5 text-white/30 group-hover/item:text-[#004AAC] flex-shrink-0 mt-0.5 transition-colors" />
                            <span className="text-white/80 font-light group-hover/item:text-white transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-12">
                      <NavLink
                        to="/contact"
                        className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm rounded-xl overflow-hidden hover:text-white transition-colors duration-300"
                      >
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-[#004AAC] group-hover:h-full transition-all duration-300 ease-out z-0"></div>
                        <span className="relative z-10 flex items-center gap-3">
                          Deploy Services
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </span>
                      </NavLink>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Strategic Call to Action */}
      <section className="relative py-32 mt-24 border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#004AAC]/5 mix-blend-overlay"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#004AAC] rounded-full blur-[200px] opacity-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-[#3375C9] text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Custom Parameters</span>
          <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tighter text-white mb-8">
            BEYOND STANDARD <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">SPECIFICATIONS</span>
          </h2>
          <p className="text-xl text-white/50 font-light mb-12 max-w-2xl mx-auto">
            Require a specialized structural solution? Command our engineering division to architect a proprietary asset specifically coded for your requirements.
          </p>
          <NavLink
            to="/contact"
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-[#004AAC] text-white font-bold uppercase tracking-widest text-sm overflow-hidden rounded-xl shadow-[0_0_30px_rgba(0,74,172,0.3)] hover:shadow-[0_0_50px_rgba(0,74,172,0.5)] transition-shadow"
          >
            <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full skew-x-12 group-hover:animate-[shine_1.5s_ease-out]"></div>
            <span className="relative z-10 flex items-center gap-3">
              Initiate Custom Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
          </NavLink>
        </div>
      </section>
    </div>
  );
}
