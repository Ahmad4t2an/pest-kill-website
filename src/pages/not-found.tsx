import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <PageLayout title="Page Not Found">
      <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-serif text-[10rem] font-bold text-primary/20 leading-none">404</h1>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Field Not Found
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-muted-foreground">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="mt-10">
            <a 
              href="/" 
              className="inline-flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-sm font-semibold text-white shadow transition-colors hover:bg-primary/90"
            >
              Return Home
            </a>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
