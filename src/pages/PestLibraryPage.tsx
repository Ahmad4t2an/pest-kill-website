import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function PestLibraryPage() {
  return (
    <PageLayout title="Pest Library">
      <div className="py-32 text-center bg-background min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Pest & Disease Library</h1>
        <p className="text-muted-foreground">The knowledge base is currently under construction.</p>
      </div>
    </PageLayout>
  );
}
