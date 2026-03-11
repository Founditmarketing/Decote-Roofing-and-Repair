import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Maximize2 } from 'lucide-react';
import { cn } from '../utils/cn';

const categories = ['All', 'Residential', 'Commercial', 'Metal', 'Custom'];

const projects = [
  { id: 1, title: 'Modern Metal Roof', category: 'Metal', image: '/Metal-Roofing-1.png' },
  { id: 2, title: 'Commercial Flat Roof', category: 'Commercial', image: '/Commercial.png' },
  { id: 3, title: 'Suburban Shingle', category: 'Residential', image: '/Residential-1.png' },
  { id: 4, title: 'Custom Steel Flashing', category: 'Custom', image: '/Steel-Fab-1.png' },
  { id: 5, title: 'Warehouse Coating', category: 'Commercial', image: '/flat-roof-coatings-ure-a-sil-02.jpg' },
  { id: 6, title: 'Standing Seam Metal', category: 'Metal', image: '/modern-standing-seam-roof.png' },
  { id: 7, title: 'Estate Solution', category: 'Residential', image: '/Untitled-design-2024-01-19T190307.289.png' },
  { id: 8, title: 'Architectural Project', category: 'Residential', image: '/Untitled-design-2024-01-19T191940.161.png' },
  { id: 9, title: 'Complex Detail', category: 'Residential', image: '/Untitled-design-2024-01-19T185616.379.png' },
  { id: 10, title: 'Slate Roof Installation', category: 'Residential', image: '/Untitled-design-5.png' },
  { id: 11, title: 'Copper Flashing Accent', category: 'Custom', image: '/Untitled-design-6.png' },
  { id: 12, title: 'TPO Commercial System', category: 'Commercial', image: '/Untitled-design-7.png' },
  { id: 13, title: 'Flat Roof Maintenance', category: 'Commercial', image: '/Untitled-design-8.png' },
  { id: 14, title: 'Steel Fabrication Shop', category: 'Custom', image: '/Untitled-design-9.png' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white">
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/Untitled-design-2024-01-19T185941.007.png"
            alt="Project Gallery"
            className="w-full h-full object-cover filter grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-[#3375C9] text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Our Archive</span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6 leading-[0.9]">
              VISUAL <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">EVIDENCE</span>
            </h1>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#004AAC] to-transparent mx-auto mb-8"></div>
            <p className="text-lg lg:text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
              Explore our comprehensive portfolio of specialized roofing architecture and precision steel fabrication deployed across Louisiana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Sorting & Grid */}
      <section className="py-12 relative z-10 bg-[#050505] flex-grow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Premium Filter Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "relative px-8 py-3 rounded-full font-bold uppercase tracking-[0.2em] text-xs transition-all duration-300 overflow-hidden group",
                  filter === cat ? "text-black" : "text-white/50 hover:text-white"
                )}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-white"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {filter !== cat && (
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </motion.div>

          {/* Staggered Masonry-style Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 relative">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] bg-[#0a0a0a] border border-white/5 hover:border-white/20"
                  onClick={() => setSelectedImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Hover Content Details */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-[#3375C9] font-bold text-[10px] uppercase tracking-[0.3em] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-display font-medium tracking-wide leading-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* Centered Icon Reveal */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
                    <div className="w-16 h-16 rounded-full glass-dark border border-white/20 flex items-center justify-center backdrop-blur-md">
                      <Maximize2 className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                <ZoomIn className="w-10 h-10 text-white/20" />
              </div>
              <p className="text-white/40 text-lg font-light tracking-wide uppercase">No assets identified for this classification.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Cinematic Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050505]/95 p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute top-8 right-8 w-12 h-12 glass border border-white/20 text-white hover:bg-white hover:text-black transition-colors rounded-full flex items-center justify-center z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-[90vh] w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-white/10 p-2 glass-dark"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Architectural focus"
                className="w-full h-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 pt-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none">
                 <p className="text-white/50 text-xs font-bold uppercase tracking-[0.4em] text-center">Architectural View</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
