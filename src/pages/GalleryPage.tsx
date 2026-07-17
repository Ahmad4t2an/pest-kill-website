import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function GalleryPage() {
  return (
    <PageLayout title="Gallery">
      <div className="py-32 text-center bg-background min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Photo Gallery</h1>
        <p className="text-muted-foreground">Gallery content is being updated.</p>
      </div>
    </PageLayout>
  );
}
