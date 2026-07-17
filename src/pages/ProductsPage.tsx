import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { products } from '@/data/mock-data';

const categories = ["All", "Herbicide", "Fungicide", "Insecticide", "Plant Growth Regulator", "Micronutrient"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.targetCrops.join(' ').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout title="Products">
      {/* Header */}
      <div className="bg-foreground py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-bold md:text-6xl"
          >
            Product Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
          >
            Premium crop protection solutions formulated for maximum efficacy.
          </motion.p>
        </div>
      </div>

      <div className="py-12 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          
          {/* Filters and Search */}
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between bg-card p-4 rounded-xl border shadow-sm">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat 
                      ? 'bg-primary text-white' 
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative max-w-xs w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search products, crops..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>
          </div>

          {/* Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="group flex flex-col bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/products/${product.slug}`}>
                    <div className="aspect-square p-6 bg-white flex items-center justify-center relative cursor-pointer">
                      <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                        {product.category}
                      </span>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-serif text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer line-clamp-1">{product.name}</h3>
                    </Link>
                    <p className="text-sm font-medium text-accent mt-1 mb-3">{product.type}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {product.description}
                    </p>
                    <div className="mt-auto">
                      <Link href={`/products/${product.slug}`} className="text-primary font-semibold text-sm hover:underline inline-flex items-center">
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold text-foreground">No products found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or filters.</p>
              <button 
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="mt-4 text-primary font-medium hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

        </div>
      </div>
    </PageLayout>
  );
}
