import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import heroImg from '@/assets/hero.jpg';

export default function RnDSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Research and Development" 
          className="h-full w-full object-cover filter grayscale blur-[2px]"
        />
        <div className="absolute inset-0 bg-foreground/90 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 text-accent font-semibold tracking-wide uppercase text-sm mb-4">
              <span className="h-px w-8 bg-accent"></span>
              <span>Research & Development</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-white md:text-5xl leading-tight mb-6">
              Innovation at the Heart of Agriculture
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Our state-of-the-art laboratories are constantly developing safer, more effective formulations. We analyze pest resistance patterns across Pakistan to create proactive solutions before outbreaks occur.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 flex-1 min-w-[140px]">
                <div className="text-3xl font-bold text-accent mb-1">50+</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">Scientists</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 flex-1 min-w-[140px]">
                <div className="text-3xl font-bold text-accent mb-1">5</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">Research Labs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 flex-1 min-w-[140px]">
                <div className="text-3xl font-bold text-accent mb-1">200+</div>
                <div className="text-xs text-white/70 uppercase tracking-wider">Annual Trials</div>
              </div>
            </div>

            <div className="mt-10">
              <Link href="/research" className="inline-flex items-center px-8 py-4 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition-colors">
                Explore Our Labs
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {[
              { title: "Crop Science Research", desc: "Studying plant physiology and stress responses." },
              { title: "Formulation Technology", desc: "Developing micro-emulsions and safer suspension concentrates." },
              { title: "Field Trials", desc: "Testing real-world efficacy across 4 distinct climate zones." }
            ].map((pillar, idx) => (
              <div 
                key={idx} 
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-accent font-serif text-xl font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{pillar.title}</h4>
                    <p className="text-sm text-white/60 mt-1">{pillar.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
