import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';

export default function DealerNetwork() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 text-primary font-semibold tracking-wide uppercase text-sm mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <span>Our Reach</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl leading-tight mb-6">
              A Nationwide Network of Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 25,000 registered dealers across all four provinces, Pest Kill products are never out of reach. We believe our dealers are partners in our mission to protect Pakistan's agriculture.
            </p>
            
            <ul className="space-y-4 mb-10">
              <li className="flex items-center text-foreground">
                <MapPin className="h-5 w-5 text-accent mr-3" />
                <span className="font-semibold">Punjab:</span> <span className="ml-2 text-muted-foreground">12,000+ Dealers</span>
              </li>
              <li className="flex items-center text-foreground">
                <MapPin className="h-5 w-5 text-accent mr-3" />
                <span className="font-semibold">Sindh:</span> <span className="ml-2 text-muted-foreground">8,000+ Dealers</span>
              </li>
              <li className="flex items-center text-foreground">
                <MapPin className="h-5 w-5 text-accent mr-3" />
                <span className="font-semibold">KPK & Balochistan:</span> <span className="ml-2 text-muted-foreground">5,000+ Dealers</span>
              </li>
            </ul>

            <Link href="/dealers">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-8 h-14">
                Become a Dealer Partner
              </Button>
            </Link>
          </motion.div>

          {/* Map Illustration Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square flex items-center justify-center"
          >
            {/* Abstract Pakistan Map representation */}
            <div className="absolute inset-0 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="relative z-10 w-full h-full max-w-md mx-auto opacity-80 dark:opacity-100">
               {/* We will use a stylistic approach instead of an actual complex SVG map here for simplicity, 
                   representing the network with glowing nodes */}
               <div className="w-full h-full border border-border rounded-full relative animate-[spin_60s_linear_infinite] [animation-play-state:paused] hover:[animation-play-state:running]">
                 <div className="absolute top-[20%] left-[30%] w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary))]"></div>
                 <div className="absolute top-[40%] left-[60%] w-6 h-6 bg-accent rounded-full shadow-[0_0_20px_rgba(var(--accent))]"></div>
                 <div className="absolute top-[60%] left-[40%] w-5 h-5 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary))]"></div>
                 <div className="absolute top-[70%] left-[20%] w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(var(--primary))]"></div>
                 <div className="absolute top-[30%] left-[70%] w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--primary))]"></div>
                 
                 {/* Connecting lines */}
                 <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
                    <path d="M30 20 L60 40 L40 60 L20 70 M60 40 L70 30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary/30" />
                 </svg>
               </div>
               
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <div className="text-center bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-xl">
                   <div className="text-4xl font-extrabold text-foreground">25K+</div>
                   <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mt-1">Active Dealers</div>
                 </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
