import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { useRoute } from 'wouter';
import { products } from '@/data/mock-data';
import { motion } from 'framer-motion';
import { Check, ShieldAlert, ArrowLeft, Download, Share2 } from 'lucide-react';
import { Link } from 'wouter';

export default function ProductDetailPage() {
  const [match, params] = useRoute('/products/:slug');
  const slug = params?.slug;
  
  const product = products.find(p => p.slug === slug);
  
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <PageLayout title="Product Not Found">
        <div className="py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products" className="text-primary hover:underline">Return to Products</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={product.name} description={product.description}>
      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b border-border py-4">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link href="/products" className="hover:text-primary flex items-center">
              <ArrowLeft className="h-4 w-4 mr-1" /> All Products
            </Link>
            <span className="mx-2">/</span>
            <span>{product.category}</span>
            <span className="mx-2">/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            
            {/* Image Gallery */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-3xl p-8 border shadow-sm aspect-square flex items-center justify-center relative"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                {product.category}
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-xl text-accent font-medium mb-6">
                {product.type}
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-6 py-6 border-y border-border mb-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Dosage</p>
                  <p className="font-semibold text-foreground">{product.dosage}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Application</p>
                  <p className="font-semibold text-foreground">{product.applicationMethod}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Packaging</p>
                  <p className="font-semibold text-foreground">{product.packagingSizes.join(', ')}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-white h-12 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Inquire Now
                </button>
                <button className="px-4 border border-border rounded-lg text-foreground hover:bg-muted transition-colors flex items-center justify-center" title="Download Label">
                  <Download className="h-5 w-5" />
                </button>
                <button className="px-4 border border-border rounded-lg text-foreground hover:bg-muted transition-colors flex items-center justify-center" title="Share">
                  <Share2 className="h-5 w-5" />
                </button>
              </div>

            </motion.div>
          </div>

          {/* Details Tabs */}
          <div className="mt-24">
            <div className="flex border-b border-border gap-8">
              {['description', 'features', 'benefits', 'safety'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-4 text-lg font-semibold capitalize relative transition-colors ${
                    activeTab === tab ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="activeTab" className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-primary" />
                  )}
                </button>
              ))}
            </div>

            <div className="py-8">
              {activeTab === 'description' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
                  <h3 className="text-2xl font-bold mb-4">Product Overview</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-lg">Target Crops</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.targetCrops.map(crop => (
                          <span key={crop} className="bg-muted px-3 py-1.5 rounded-md text-sm font-medium">{crop}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-lg">Target Pests</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.targetPests.map(pest => (
                          <span key={pest} className="bg-accent/20 text-accent-foreground px-3 py-1.5 rounded-md text-sm font-medium">{pest}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'features' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
                  <ul className="space-y-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-6 w-6 text-primary mr-3 shrink-0" />
                        <span className="text-lg text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === 'benefits' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
                  <ul className="space-y-4">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-accent/20 text-accent flex items-center justify-center mr-3 shrink-0 mt-0.5">
                          <Check className="h-4 w-4" />
                        </div>
                        <span className="text-lg text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === 'safety' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-3xl">
                  <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6 flex items-start">
                    <ShieldAlert className="h-8 w-8 text-destructive mr-4 shrink-0" />
                    <div>
                      <h4 className="text-lg font-bold text-destructive mb-2">Safety Information & Precautions</h4>
                      <p className="text-foreground leading-relaxed">{product.safetyInfo}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </PageLayout>
  );
}
