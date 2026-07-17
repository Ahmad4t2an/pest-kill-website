import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('pestkill-cookie-consent');
    if (!consent) {
      // Small delay to not overwhelm on initial load
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('pestkill-cookie-consent', 'true');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 sm:pb-8 md:flex md:justify-center pointer-events-none"
        >
          <div className="pointer-events-auto flex flex-col gap-4 rounded-xl border bg-card p-6 shadow-2xl sm:flex-row sm:items-center sm:gap-6 md:max-w-4xl">
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">We value your privacy</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex shrink-0 gap-3 sm:flex-col lg:flex-row">
              <Button variant="outline" onClick={() => setIsVisible(false)} className="flex-1">
                Decline
              </Button>
              <Button onClick={acceptCookies} className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                Accept All
              </Button>
            </div>
            <button 
              onClick={() => setIsVisible(false)} 
              className="absolute right-4 top-4 text-muted-foreground hover:text-foreground sm:hidden"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
