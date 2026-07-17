import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import farmer1 from '@/assets/farmer-1.jpg';
import farmer2 from '@/assets/farmer-2.jpg';
import farmer3 from '@/assets/farmer-3.jpg';

const testimonials = [
  {
    name: "Ahmed Raza",
    location: "Multan, Punjab",
    image: farmer1,
    quote: "Pest Kill Champion completely cleared my wheat field of resistant weeds. My yield increased by 20% this season.",
    rating: 5
  },
  {
    name: "Tariq Mahmood",
    location: "Sukkur, Sindh",
    image: farmer2,
    quote: "As a dealer for 10 years, I trust Pest Kill products because they deliver what they promise. No complaints from my farmers.",
    rating: 5
  },
  {
    name: "Chaudhry Akram",
    location: "Faisalabad, Punjab",
    image: farmer3,
    quote: "Their field team diagnosed my cotton crop issue and recommended Vitex 72WP. It saved my entire crop from late blight.",
    rating: 4
  }
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="py-24 bg-[#0a1e12] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none">
        <Quote className="w-96 h-96" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-accent font-semibold tracking-wide uppercase text-sm mb-4">
            <span className="h-px w-8 bg-accent"></span>
            <span>Voices of Trust</span>
            <span className="h-px w-8 bg-accent"></span>
          </div>
          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            Success Stories
          </h2>
        </motion.div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6">
                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl h-full flex flex-col backdrop-blur-sm relative">
                  <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/20" />
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'fill-accent text-accent' : 'fill-white/10 text-transparent'}`} />
                    ))}
                  </div>
                  <p className="text-white/80 text-lg leading-relaxed flex-grow italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-8 flex items-center gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-14 w-14 rounded-full object-cover border-2 border-primary"
                    />
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-accent">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
