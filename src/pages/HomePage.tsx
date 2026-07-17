import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/sections/HeroSection';
import IntroSection from '@/components/sections/IntroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import CropSolutions from '@/components/sections/CropSolutions';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import RnDSection from '@/components/sections/RnDSection';
import DealerNetwork from '@/components/sections/DealerNetwork';
import Testimonials from '@/components/sections/Testimonials';
import FAQSection from '@/components/sections/FAQSection';

export default function HomePage() {
  return (
    <PageLayout 
      title="Home" 
      description="Pest Kill Pvt. Limited - Pakistan's Premier Crop Protection Company"
    >
      <HeroSection />
      <IntroSection />
      <FeaturedProducts />
      <CropSolutions />
      <WhyChooseUs />
      <RnDSection />
      <Testimonials />
      <DealerNetwork />
      <FAQSection />
    </PageLayout>
  );
}
