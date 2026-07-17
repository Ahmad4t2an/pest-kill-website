import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Award, Target, Users, ShieldCheck, Factory } from 'lucide-react';
import galleryImg4 from '@/assets/gallery-4.jpg';
import galleryImg2 from '@/assets/gallery-2.jpg';

export default function AboutPage() {
  return (
    <PageLayout title="About Us">
      {/* Page Header */}
      <div className="bg-foreground py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-bold md:text-6xl"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
          >
            Rooted in Pakistan's agricultural heritage, driven by global scientific innovation.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="min-w-0"
            >
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">A Legacy of Protection</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Founded in 2002, Pest Kill (Pvt.) Limited began with a singular vision: to empower Pakistani farmers with world-class crop protection solutions. We understood that local challenges required specialized approaches.
                </p>
                <p>
                  Today, we stand as one of the nation's premier agrochemical companies, offering an extensive portfolio of herbicides, insecticides, fungicides, and plant growth regulators. Our manufacturing facilities are PSQCA certified, ensuring every batch meets rigorous international standards.
                </p>
                <p>
                  Our commitment goes beyond chemicals. We invest heavily in Research and Development, creating formulations that are safer for the environment, highly effective against pests, and economically viable for the farmer.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 min-w-0"
            >
              <div className="space-y-4 min-w-0">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
                  <img src={galleryImg2} alt="Laboratory" className="w-full h-full object-cover" />
                </div>
                <div className="bg-primary/10 p-6 rounded-2xl">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">2002</div>
                  <div className="text-sm font-semibold text-foreground">Year Established</div>
                </div>
              </div>
              <div className="space-y-4 pt-12 min-w-0">
                <div className="bg-accent/20 p-6 rounded-2xl">
                  <div className="text-3xl sm:text-4xl font-bold text-accent-foreground mb-2">150+</div>
                  <div className="text-sm font-semibold text-foreground">Registered Products</div>
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/5] bg-muted">
                  <img src={galleryImg4} alt="Manufacturing" className="w-full h-full object-cover" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="mb-24">
            <h2 className="font-serif text-4xl font-bold text-center text-foreground mb-16">Our Journey</h2>
            <div className="relative border-l-2 border-primary/20 ml-4 md:mx-auto md:w-full md:max-w-3xl">
              {[
                { year: "2002", title: "Foundation", desc: "Pest Kill established with a focus on core agricultural needs." },
                { year: "2008", title: "PSQCA Certification", desc: "Achieved national quality standards for manufacturing." },
                { year: "2015", title: "R&D Expansion", desc: "Opened state-of-the-art laboratory for custom formulations." },
                { year: "2020", title: "Nationwide Reach", desc: "Crossed 20,000 active dealers across all provinces." },
                { year: "2024", title: "Export Ready", desc: "Meeting global standards for international markets." },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10 ml-8 relative md:ml-0 md:flex md:items-center md:justify-between"
                >
                  <div className="absolute -left-10 md:left-1/2 md:-ml-3 mt-1.5 h-6 w-6 rounded-full bg-primary border-4 border-background z-10"></div>
                  
                  <div className={`md:w-5/12 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'}`}>
                    <span className="text-accent font-bold text-xl">{item.year}</span>
                    <h3 className="text-xl font-bold text-foreground mt-1">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.desc}</p>
                  </div>
                  
                  <div className={`hidden md:block md:w-5/12 ${idx % 2 === 0 ? 'md:order-2' : ''}`}></div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
