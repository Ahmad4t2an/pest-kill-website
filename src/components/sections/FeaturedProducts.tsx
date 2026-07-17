import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Target, Shield, ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import { products } from '@/data/mock-data';

export default function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Take first 4 products
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 text-primary font-semibold tracking-wide uppercase text-sm mb-4">
              <span className="h-px w-8 bg-primary"></span>
              <span>Our Portfolio</span>
            </div>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
              Flagship Solutions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Discover our premium range of agrochemicals designed for specific Pakistani crop challenges. Formulated for maximum efficacy and environmental responsibility.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/products" className="group inline-flex items-center font-semibold text-primary hover:text-primary/80">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card border border-card-border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden bg-white p-6 flex items-center justify-center">
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    {product.category}
                  </span>
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Product Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="font-serif text-xl font-bold text-card-foreground line-clamp-1">{product.name}</h3>
                <p className="text-sm font-medium text-accent mt-1 mb-3">{product.type}</p>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-6 flex-grow">
                  {product.description}
                </p>
                
                <div className="mt-auto border-t border-border pt-4 flex items-center justify-between">
                  <div className="flex gap-2">
                    {product.targetCrops.slice(0, 2).map((crop) => (
                      <span key={crop} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                        {crop}
                      </span>
                    ))}
                  </div>
                  <Link href={`/products/${product.slug}`} className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
