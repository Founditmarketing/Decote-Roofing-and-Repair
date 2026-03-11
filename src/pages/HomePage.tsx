import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { NavLink } from 'react-router-dom';
import {
  ShieldCheck, Wrench, Award, Home, Building2,
  Droplets, Hammer, Factory, ArrowRight, Star
} from 'lucide-react';
import { cn } from '../utils/cn';

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacityHeroText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const yHeroVideo = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleHeroVideo = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const galleryImages = [
    '/Untitled-design-2024-01-19T185941.007.png',
    '/Untitled-design-2024-01-19T190307.289.png',
    '/Untitled-design-2024-01-19T191940.161.png',
    '/Untitled-design-5.png',
    '/Untitled-design-6.png',
    '/Untitled-design-7.png',
  ];

  const services = [
    {
      title: 'Roofing (General)',
      description: 'Comprehensive solutions crafted to withstand the harshest elements.',
      icon: Home,
      link: '/services',
      image: '/Roofinhg.png'
    },
    {
      title: 'Siding & Gutters',
      description: 'Defend your exterior with precision-engineered water management systems.',
      icon: Droplets,
      link: '/siding-gutters',
      image: '/Siding-Gutters-1.png'
    },
    {
      title: 'Metal Roofing',
      description: 'Eternal durability realized through high-gauge metal architecture.',
      icon: Hammer,
      link: '/metal-roofing',
      image: '/Metal-Roofing-1.png'
    },
    {
      title: 'Residential Specialty',
      description: 'Bespoke roofing designs tailored exclusively for modern residencies.',
      icon: Home,
      link: '/residential-specialty',
      image: '/Residential-1.png'
    },
    {
      title: 'Commercial Specialty',
      description: 'Fortifying commercial enterprises with heavy-duty structural membranes.',
      icon: Building2,
      link: '/commercial-specialty',
      image: '/Commercial.png'
    },
    {
      title: 'Steel Fabrication',
      description: 'Flawless steel fabrication to anchor your most ambitious projects.',
      icon: Factory,
      link: '/steel-fabrication',
      image: '/Steel-Fab-1.png'
    }
  ];

  const whyChooseUs = [
    { title: 'Licensed & Insured', description: 'Zero compromise. Full liability coverage and state certifications for absolute peace of mind.', icon: ShieldCheck },
    { title: 'Modern Techniques', description: 'Leveraging cutting-edge installation practices and aeronautical-grade weatherproofing.', icon: Wrench },
    { title: 'Premium Materials', description: 'Forging partnerships with elite manufacturers. Only the highest echelon of materials is utilized.', icon: Award }
  ];

  const textRevealVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white overflow-hidden selection:bg-[#004AAC] selection:text-white">

      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: yHeroVideo, scale: scaleHeroVideo }}
          className="absolute inset-0 z-0 will-change-transform"
        >
          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/Ducote-Website-Horizontal.mp4" type="video/mp4" />
          </video>
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/50"></div>
          <div className="absolute inset-0 mix-blend-overlay bg-[#004AAC]/20"></div>
        </motion.div>

        <motion.div
          style={{ y: yHeroText, opacity: opacityHeroText }}
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16"
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={textRevealVariants} className="inline-flex flex-col mb-8">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-[#004AAC] rounded-full animate-pulse shadow-[0_0_10px_#004AAC]"></span>
                <span className="text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-white/80">Est. 2012 | Alexandria, LA</span>
              </div>
              <div className="h-px bg-gradient-to-r from-[#004AAC] to-transparent w-full mt-3 opacity-50"></div>
            </motion.div>

            <motion.h1 variants={textRevealVariants} className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter leading-[0.95] mb-8">
              <span className="block text-white/90">ELEVATING</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">THE STANDARD</span>
              <span className="block text-[#004AAC] drop-shadow-[0_0_15px_rgba(0,74,172,0.3)]">OF ROOFING</span>
            </motion.h1>

            <motion.p variants={textRevealVariants} className="text-xl lg:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-12">
              Uncompromising craftsmanship. Architectural integrity. We engineer resilient residential and commercial roofing systems designed to conquer the elements.
            </motion.p>

            <motion.div variants={textRevealVariants} className="flex flex-col sm:flex-row gap-6">
              <NavLink
                to="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-[#004AAC] text-white font-bold uppercase tracking-widest text-sm overflow-hidden"
              >
                <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full skew-x-12 group-hover:animate-[shine_1.5s_ease-out]"></div>
                <span className="relative z-10 flex items-center gap-3">
                  Begin Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
              </NavLink>
              <a
                href="tel:3188806777"
                className="group relative inline-flex items-center justify-center px-10 py-5 bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-colors font-bold uppercase tracking-widest text-sm backdrop-blur-sm"
              >
                Consult an Expert
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 rotate-90 mb-4">Scroll</span>
          <div className="w-px h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute inset-0 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* About Section - Asymmetric Premium Layout */}
      <section className="py-32 relative z-10 bg-[#050505] overflow-hidden">
        {/* Glow Element */}
        <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-[#004AAC] rounded-full blur-[200px] opacity-[0.03] -translate-y-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Image Composition */}
            <div className="lg:col-span-6 relative h-[600px] sm:h-[700px] w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-0 right-0 w-[80%] h-[75%] rounded-lg overflow-hidden glass-dark p-2 z-10 shadow-2xl skew-y-2 transform origin-top-right"
              >
                <img src="/Untitled-design-14.png" alt="Commercial Roofing" className="w-full h-full object-cover filter contrast-125 saturate-50" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent mix-blend-multiply"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-10 left-0 w-[60%] h-[50%] rounded-lg overflow-hidden glass p-2 z-20 shadow-[0_30px_60px_rgba(0,0,0,0.8)] -skew-y-1 transform origin-bottom-left"
              >
                <img src="/Untitled-design-2024-01-19T185616.379.png" alt="Residential Team" className="w-full h-full object-cover filter grayscale opacity-90 hover:grayscale-0 transition-all duration-700" />
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 z-30 glass-dark border border-white/20 p-6 rounded-2xl flex flex-col items-center shadow-2xl backdrop-blur-xl"
              >
                <span className="text-5xl font-display font-bold text-[#3375C9] mb-1">10+</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-bold whitespace-nowrap">Years of Mastery</span>
              </motion.div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 relative z-30">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.span variants={textRevealVariants} className="text-[#3375C9] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">The Ducote Legacy</motion.span>
                <motion.h2 variants={textRevealVariants} className="text-5xl sm:text-6xl font-display font-bold tracking-tighter mb-8 text-white/90">
                  ARCHITECTING <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">CONFIDENCE</span>
                </motion.h2>
                
                <div className="w-16 h-px bg-[#004AAC] mb-8"></div>
                
                <motion.p variants={textRevealVariants} className="text-lg text-white/50 font-light leading-relaxed mb-6">
                  Based in Alexandria, Ducote Roofing & Repair transcends standard contracting. We are architects of protection, specializing in engineering elite residential and commercial roofing systems that defy time and weather.
                </motion.p>
                <motion.p variants={textRevealVariants} className="text-lg text-white/50 font-light leading-relaxed mb-12">
                  Our manifesto is simple: Flawless execution. Transparent communication. Absolute structural integrity. We don't just secure buildings; we secure legacies.
                </motion.p>
                
                <motion.div variants={textRevealVariants}>
                  <NavLink to="/about" className="group inline-flex items-center gap-4 text-sm font-bold tracking-[0.2em] uppercase text-white hover:text-[#3375C9] transition-colors">
                    Discover Our Process
                    <div className="w-12 h-px bg-white/30 group-hover:w-24 group-hover:bg-[#3375C9] transition-all duration-300"></div>
                  </NavLink>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Ultra Premium Cards */}
      <section className="py-32 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div>
              <span className="text-[#3375C9] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Capabilities</span>
              <h2 className="text-5xl sm:text-6xl font-display font-bold tracking-tighter text-white/90">
                OUR ENGINEERING <br/>DIVISIONS
              </h2>
            </div>
            <div className="w-full md:w-1/3 text-white/50 font-light leading-relaxed">
              Precision-driven divisions structured to address the complex requirements of modern infrastructure.
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  className="group relative h-[450px] rounded-xl overflow-hidden glass-dark border border-white/5 hover:border-white/20 transition-all duration-500 cursor-pointer"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                  
                  <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                    <div className="w-12 h-12 rounded bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 group-hover:bg-[#004AAC] group-hover:border-[#004AAC] transition-colors duration-500">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-medium text-white mb-3 tracking-wide">{service.title}</h3>
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 overflow-hidden transition-all duration-500">
                      <p className="text-white/60 font-light text-sm mb-6 max-w-[90%] border-l border-[#004AAC] pl-4">
                        {service.description}
                      </p>
                    </div>
                    
                    <NavLink
                      to={service.link}
                      className="absolute bottom-8 right-8 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </NavLink>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us & Data */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-[#3375C9] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">The Differential</span>
              <h2 className="text-4xl sm:text-5xl font-display font-bold tracking-tighter text-white/90 mb-12">
                WHY WE LEAD THE SECTOR
              </h2>
              
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group flex gap-6 p-6 rounded-lg border border-transparent hover:border-white/10 hover:bg-white/[0.02] transition-colors duration-300 cursor-default"
                    >
                      <div className="mt-1 flex-shrink-0">
                        <Icon className="w-6 h-6 text-[#3375C9] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-xl font-display text-white/90 mb-2 tracking-wide">{item.title}</h4>
                        <p className="text-white/40 font-light text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="relative flex flex-col justify-center">
              {/* Abstract Info Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-dark p-12 rounded-2xl border border-white/10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#004AAC] rounded-full blur-[100px] opacity-20"></div>
                
                <div className="relative z-10 flex flex-col gap-10">
                  <div className="flex flex-col gap-2 border-b border-white/10 pb-10">
                    <span className="text-7xl font-display tracking-tighter font-bold text-white">5.0</span>
                    <div className="flex gap-1 text-[#3375C9]">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mt-2">Perfect Google Rating</span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <span className="text-5xl font-display tracking-tighter font-bold text-white">100%</span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mt-2">Satisfaction Commitment</span>
                    <p className="text-sm font-light text-white/50 mt-4 max-w-sm">Every project is shielded by our rigorous quality assurance protocol and extended warranties.</p>
                  </div>
                  
                  <a href="https://www.google.com/search?q=Ducote+Roofing+%26+Repair+Alexandria+Reviews" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white mt-4 hover:text-[#3375C9] transition-colors w-fit">
                    Read Public Verifications
                    <span className="w-8 h-px bg-white group-hover:w-12 group-hover:bg-[#3375C9] transition-all"></span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Continuous Marquee */}
      <section className="py-24 bg-[#050505] overflow-hidden flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 w-full text-center">
          <span className="text-[#3375C9] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Client Perspectives</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tighter text-white/90">
            FIELD REPORTS
          </h2>
        </div>

        <div className="relative flex overflow-hidden w-full group py-10">
          <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="flex gap-8 px-4 w-max items-center"
          >
            {[...Array(2)].fill([
              { name: "Sarah Jenkins", text: "Immaculate execution. Professional, precise, and completely silent during operation. The site was pristine post-install." },
              { name: "Michael Roberts", text: "The engineering on our commercial roof was superior. Transparent pricing and exact scheduling adherence." },
              { name: "Brandon Lewis", text: "They managed the entire insurance labyrinth seamlessly. The resulting structure is impenetrable." },
              { name: "David Chen", text: "Incredible attention to detail. The metal roofing installation was completed ahead of schedule with zero defects." }
            ]).flat().map((review, i) => (
              <div key={i} className="w-[350px] sm:w-[450px] p-8 rounded-2xl glass border border-white/5 hover:border-white/20 transition-colors flex-shrink-0 flex flex-col justify-between h-[250px]">
                <div>
                  <div className="flex text-[#3375C9] mb-4">
                    { [...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <p className="text-white/70 font-light leading-relaxed text-sm lg:text-base italic">"{review.text}"</p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#004AAC]"></div>
                  <span className="font-bold text-white uppercase tracking-wider text-xs">{review.name}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Slider - Premium Depth */}
      <section className="py-24 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <span className="text-[#3375C9] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Visual Evidence</span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tighter text-white/90">
            RECENT DEPLOYMENTS
          </h2>
        </div>

        <div className="relative flex overflow-hidden w-full group pb-10">
          <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-[10%] bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>
          
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
            className="flex gap-6 px-3 w-max"
          >
            {[...galleryImages, ...galleryImages].map((img, index) => (
              <div key={index} className="w-[280px] md:w-[400px] h-[350px] flex-shrink-0 rounded-lg overflow-hidden glass-dark border border-white/5 p-2">
                <img
                  src={img}
                  alt={`Installation ${index + 1}`}
                  className="w-full h-full object-cover rounded hover:scale-105 transition-transform duration-700 filter grayscale hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </motion.div>
        </div>
        
        <div className="text-center mt-8">
          <NavLink to="/gallery" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors">
            Access Full Archive
            <ArrowRight className="w-4 h-4" />
          </NavLink>
        </div>
      </section>
    </div>
  );
}
