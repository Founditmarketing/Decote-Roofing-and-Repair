import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceLinks = [
    { name: 'Roofing', path: '/roofing-general' },
    { name: 'Siding & Gutters', path: '/siding-gutters' },
    { name: 'Metal Roofing', path: '/metal-roofing' },
    { name: 'Residential', path: '/residential-specialty' },
    { name: 'Commercial', path: '/commercial-specialty' },
    { name: 'Steel Fab', path: '/steel-fabrication' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', isDropdown: true },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 flex justify-center",
          isScrolled ? "pt-4 px-4 sm:px-6 lg:px-8" : "pt-0 px-0"
        )}
      >
        <div
          className={cn(
            "w-full transition-all duration-500",
            isScrolled
              ? "max-w-7xl mx-auto glass-dark rounded-2xl shadow-2xl overflow-visible"
              : "border-b border-white/10"
          )}
        >
          <div className={cn("flex justify-between items-center", isScrolled ? "h-20 px-6 sm:px-8" : "h-24 px-6 sm:px-12")}>
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NavLink to="/" className="flex items-center group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  src="/logo.png"
                  alt="Ducote Roofing"
                  className={cn(
                    "w-auto transition-all duration-500",
                    isScrolled ? "h-12" : "h-16"
                  )}
                />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1 items-center">
              {navLinks.map((link) => (
                link.isDropdown ? (
                  <div
                    key={link.name}
                    className="relative group h-full"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        cn(
                          "relative px-4 py-2 flex items-center gap-1 text-sm font-semibold tracking-widest uppercase transition-colors duration-300",
                          isActive || isServicesOpen ? "text-[#004AAC]" : "text-white/80 hover:text-white"
                        )
                      }
                    >
                      {link.name}
                      <motion.div
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </motion.div>
                    </NavLink>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-0 mt-4 w-64 glass-dark border border-white/10 shadow-2xl rounded-xl overflow-hidden py-3 text-white"
                        >
                          {serviceLinks.map((service, idx) => (
                            <motion.div
                              key={service.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                            >
                              <NavLink
                                to={service.path}
                                className={({ isActive }) =>
                                  cn(
                                    "block px-5 py-3 text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-white/10 hover:pl-6",
                                    isActive ? "text-[#004AAC] bg-white/5" : "text-white/70 hover:text-white"
                                  )
                                }
                              >
                                {service.name}
                              </NavLink>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      cn(
                        "relative px-4 py-2 text-sm font-semibold tracking-widest uppercase transition-colors duration-300 group",
                        isActive ? "text-[#004AAC]" : "text-white/80 hover:text-white"
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        <span className={cn(
                          "absolute bottom-0 left-4 right-4 h-0.5 bg-[#004AAC] transform origin-left transition-transform duration-300",
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        )} />
                      </>
                    )}
                  </NavLink>
                )
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <a
                href="tel:3188806777"
                className="flex items-center gap-2 font-bold transition-colors duration-300 text-white/90 hover:text-[#004AAC]"
              >
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Phone className="w-4 h-4" />
                </div>
                318.880.6777
              </a>
              <NavLink
                to="/contact"
                className="group relative px-6 py-3 rounded-md font-bold text-sm tracking-widest uppercase bg-white text-black overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-shadow"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Get Estimate</span>
                <div className="absolute inset-0 bg-[#004AAC] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="focus:outline-none text-white hover:text-[#004AAC] transition-colors p-2"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/90 lg:hidden flex flex-col justify-center px-6"
          >
            <nav className="flex flex-col space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {link.isDropdown ? (
                    <div className="flex flex-col space-y-4">
                      <span className="text-sm font-bold tracking-widest uppercase text-white/50 border-b border-white/10 pb-2">
                        {link.name}
                      </span>
                      <div className="grid grid-cols-2 gap-4 pl-4">
                        {serviceLinks.map((service) => (
                          <NavLink
                            key={service.name}
                            to={service.path}
                            className={({ isActive }) =>
                              cn(
                                "text-sm font-semibold tracking-wider uppercase",
                                isActive ? "text-[#004AAC]" : "text-white/80"
                              )
                            }
                          >
                            {service.name}
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        cn(
                          "text-4xl font-display font-bold uppercase tracking-tight",
                          isActive ? "text-[#004AAC]" : "text-white hover:text-white/80"
                        )
                      }
                    >
                      {link.name}
                    </NavLink>
                  )}
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-12 space-y-6 border-t border-white/10 pt-8"
            >
              <a
                href="tel:3188806777"
                className="flex items-center gap-4 text-white font-bold text-2xl"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#004AAC]" />
                </div>
                318.880.6777
              </a>
              <NavLink
                to="/contact"
                className="block w-full text-center bg-white text-black px-8 py-4 rounded-lg font-bold uppercase tracking-widest text-lg"
              >
                Get a Free Estimate
              </NavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
