import React from 'react';
import { motion } from 'framer-motion';
import logoImg from '@/assets/logo.png';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary"
    >
      <div className="flex flex-col items-center">
        {/* Logo with spinning ring */}
        <div className="relative mb-6">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-28 w-28 overflow-hidden rounded-full border-2 border-accent/30 shadow-2xl"
          >
            <img
              src={logoImg}
              alt="Pest Kill"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Spinning accent ring */}
          <motion.div
            className="absolute inset-[-6px] rounded-full border-t-2 border-r-2 border-accent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-serif text-3xl font-bold tracking-wider text-white"
        >
          PEST KILL
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-2 text-xs tracking-[0.25em] uppercase text-accent"
        >
          (Pvt.) Limited
        </motion.p>

        {/* Progress bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '160px' }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeInOut" }}
          className="mt-8 h-0.5 rounded-full bg-accent/70"
        />
      </div>
    </motion.div>
  );
}
