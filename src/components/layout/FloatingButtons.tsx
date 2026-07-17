import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { contactInfo } from '@/data/mock-data';

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    // Format mobile number for WhatsApp link
    const formattedNumber = contactInfo.mobile.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${formattedNumber}?text=Hello%20Pest%20Kill%20Team,%20I%20would%20like%20to%20inquire%20about...`, '_blank');
  };

  return (
    <div className="fixed bottom-6 z-40 flex w-full pointer-events-none justify-between px-6 items-end">
      {/* WhatsApp Button - Left */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={handleWhatsApp}
        className="pointer-events-auto group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute left-full ml-4 hidden w-max rounded-md bg-foreground px-3 py-2 text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 sm:block">
          Chat with us
          <span className="absolute top-1/2 -left-1 -translate-y-1/2 border-[6px] border-transparent border-r-foreground"></span>
        </span>
      </motion.button>

      {/* Back to Top Button - Right */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={scrollToTop}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-colors hover:bg-accent/80 focus:outline-none focus:ring-4 focus:ring-accent/40"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
