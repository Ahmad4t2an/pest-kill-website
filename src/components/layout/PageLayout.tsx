import React, { ReactNode, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

import LoadingScreen from './LoadingScreen';
import CookieConsent from './CookieConsent';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
  image?: string;
}

export default function PageLayout({ children, title, description, image }: PageLayoutProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const metaDescription = description || "Pest Kill (Pvt.) Limited — Pakistan's trusted agrochemical innovator providing premium crop protection solutions.";
  const metaTitle = `${title} | Pest Kill Pvt. Ltd.`;

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        {image && <meta property="og:image" content={image} />}
      </Helmet>

      <AnimatePresence>
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-primary/20">
        <Header />
        
        <main className="flex-grow pt-[112px]">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {children}
          </motion.div>
        </main>
        
        <Footer />
        <CookieConsent />
      </div>
    </>
  );
}
