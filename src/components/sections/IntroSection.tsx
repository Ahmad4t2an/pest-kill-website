import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Target, Users, Leaf, Microscope } from 'lucide-react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import scientistImg from '@/assets/scientist.jpg';

const values = [
  { icon: Microscope, title: "Innovation", desc: "Advanced R&D driving next-gen solutions." },
  { icon: ShieldCheck, title: "Integrity", desc: "Uncompromising ethics in all we do." },
  { icon: Award, title: "Quality", desc: "PSQCA certified manufacturing excellence." },
  { icon: Leaf, title: "Sustainability", desc: "Protecting earth for future generations." },
];

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export default function IntroSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          
          {/* Left: Image Comp */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-2xl">
              <img 
                src={scientistImg} 
                alt="Scientist in agricultural lab" 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="h-10 w-10 flex items-center justify-center rounded-full bg-accent text-foreground">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-tight">ISO 9001:2015</p>
                    <p className="text-xs text-white/80">Certified Facility</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -left-8 -top-8 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -right-8 -bottom-8 -z-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute -right-6 top-1/4 z-20 flex w-48 flex-col items-center justify-center rounded-xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur-md dark:bg-foreground/90 dark:border-white/10"
            >
              <Users className="mb-2 h-8 w-8 text-primary" />
              <span className="text-3xl font-extrabold text-foreground dark:text-white">500k+</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Farmers Reached</span>
            </motion.div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 text-primary font-semibold tracking-wide uppercase text-sm mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <span>About Pest Kill</span>
            </div>
            
            <h2 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:leading-[1.1]">
              Pakistan's Premier <br />
              <span className="text-primary">Crop Protection</span> Company
            </h2>
            
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Established in 2002, Pest Kill (Pvt.) Limited has emerged as a beacon of trust and innovation in Pakistan's agricultural sector. We blend global scientific advancements with deep local knowledge to deliver agrochemicals that ensure food security and prosperity.
            </p>
            
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              From state-of-the-art formulations to rigorous field trials, our commitment to quality is unwavering. We don't just sell products; we deliver comprehensive crop solutions.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <val.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{val.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Link href="/about">
                <Button className="h-12 px-8 bg-foreground text-background hover:bg-primary shadow-lg transition-all duration-300">
                  Discover Our Story
                </Button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
