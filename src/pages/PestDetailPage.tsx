import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function PestDetailPage() {
  return (
    <PageLayout title="Pest Details">
      <div className="py-32 text-center bg-background min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Pest Details</h1>
      </div>
    </PageLayout>
  );
}
