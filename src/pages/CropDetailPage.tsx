import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { useRoute } from 'wouter';
import { crops, products } from '@/data/mock-data';
import { motion } from 'framer-motion';
import { Link } from 'wouter';

export default function CropDetailPage() {
  const [match, params] = useRoute('/crop-solutions/:crop');
  const cropId = params?.crop;
  
  const crop = crops.find(c => c.id === cropId);
  
  // Find products that target this crop
  const recommendedProducts = products.filter(p => p.targetCrops.includes(crop?.name || ''));

  if (!crop) {
    return (
      <PageLayout title="Crop Not Found">
        <div className="py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Crop Not Found</h1>
          <Link href="/crop-solutions" className="text-primary hover:underline">Return to Crop Solutions</Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title={`${crop.name} Protection`} image={crop.image}>
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={crop.image} alt={crop.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center space-x-2 text-accent font-semibold tracking-wide uppercase text-sm mb-4">
              <span className="h-px w-8 bg-accent"></span>
              <span>Crop Solution</span>
              <span className="h-px w-8 bg-accent"></span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4">{crop.name}</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Comprehensive protection protocols from planting to harvest.</p>
          </motion.div>
        </div>
      </div>

      <div className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          
          <div className="mb-16 text-center">
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Recommended Products for {crop.name}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our specially formulated agrochemicals proven to deliver optimal results for {crop.name} cultivation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {recommendedProducts.length > 0 ? (
              recommendedProducts.map((product) => (
                <div key={product.id} className="group flex flex-col bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
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
                  <div className="p-6">
                    <Link href={`/products/${product.slug}`}>
                      <h3 className="font-serif text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">{product.name}</h3>
                    </Link>
                    <p className="text-sm font-medium text-accent mt-1">{product.type}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12 bg-muted/50 rounded-2xl">
                <p className="text-lg text-muted-foreground">Detailed product recommendations for {crop.name} are currently being updated.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
