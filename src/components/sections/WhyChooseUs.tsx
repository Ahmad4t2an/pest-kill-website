import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2, Map, Users, Lightbulb, Globe } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: "20 Years Expertise",
    desc: "Two decades of understanding local agricultural challenges and delivering proven solutions.",
  },
  {
    icon: CheckCircle2,
    title: "PSQCA Certified Quality",
    desc: "Rigorous quality control ensuring every drop meets the highest national and international standards.",
  },
  {
    icon: Map,
    title: "Nationwide Dealer Network",
    desc: "Over 25,000 active dealers ensuring our products reach every corner of the country.",
  },
  {
    icon: Users,
    title: "Dedicated Farmer Support",
    desc: "Field agronomists working alongside farmers to provide real-time guidance and training.",
  },
  {
    icon: Lightbulb,
    title: "R&D Innovation",
    desc: "Continuous investment in formulation technology to combat evolving pest resistance.",
  },
  {
    icon: Globe,
    title: "Export Grade Products",
    desc: "Manufacturing standards so high, our solutions are trusted in international markets.",
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center space-x-2 text-primary font-semibold tracking-wide uppercase text-sm mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <span>The Pest Kill Advantage</span>
              <span className="h-px w-8 bg-primary"></span>
            </div>
            <h2 className="font-serif text-4xl font-bold md:text-5xl text-foreground">
              Why Choose Pest Kill
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We don't just supply chemicals; we partner with farmers to secure their livelihoods and the nation's food supply.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col relative pl-8"
            >
              {/* Decorative line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20">
                <div className="absolute top-0 left-[-2px] h-8 w-[5px] rounded-full bg-primary"></div>
              </div>
              
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-md text-primary dark:bg-card">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
