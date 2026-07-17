import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { crops } from '@/data/mock-data';

export default function CropSolutions() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Select first 6 crops for display
  const displayCrops = crops.slice(0, 6);

  return (
    <section className="py-24 bg-foreground text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
      
      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 text-accent font-semibold tracking-wide uppercase text-sm mb-4">
              <span className="h-px w-8 bg-accent"></span>
              <span>Crop Solutions</span>
              <span className="h-px w-8 bg-accent"></span>
            </div>
            <h2 className="font-serif text-4xl font-bold md:text-5xl">
              Protecting Every Crop, Every Season
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Tailored protection protocols for Pakistan's most vital crops. We offer specialized regimens from pre-planting to pre-harvest.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCrops.map((crop, idx) => (
            <motion.div
              key={crop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <Link href={`/crop-solutions/${crop.id}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  {/* Image */}
                  <img 
                    src={crop.image} 
                    alt={crop.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity group-hover:opacity-80"></div>
                  <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-primary/50 rounded-2xl"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="font-serif text-2xl font-bold text-white mb-2">{crop.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-accent font-medium">{crop.productCount} Products Recommended</p>
                      <div className="h-10 w-10 rounded-full bg-primary/80 flex items-center justify-center opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/crop-solutions">
            <button className="inline-flex items-center px-6 py-3 rounded-full border border-white/30 hover:bg-white hover:text-foreground transition-all duration-300 font-semibold">
              View All Crop Solutions
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
