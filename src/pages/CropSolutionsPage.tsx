import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { crops } from '@/data/mock-data';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function CropSolutionsPage() {
  return (
    <PageLayout title="Crop Solutions" description="Tailored protection protocols for Pakistan's most vital crops.">
      {/* Header */}
      <div className="bg-foreground py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-bold md:text-6xl"
          >
            Crop Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
          >
            Select your crop to view recommended treatment regimens and pest management strategies.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crops.map((crop, idx) => (
              <motion.div
                key={crop.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link href={`/crop-solutions/${crop.id}`}>
                  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-md">
                    <img 
                      src={crop.image} 
                      alt={crop.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="font-serif text-3xl font-bold text-white mb-2">{crop.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 font-medium">{crop.productCount} Products</span>
                        <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
