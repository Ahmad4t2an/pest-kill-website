import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function DownloadsPage() {
  return (
    <PageLayout title="Downloads">
      <div className="py-32 text-center bg-background min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Downloads Center</h1>
        <p className="text-muted-foreground">Brochures and Safety Data Sheets will be available here.</p>
      </div>
    </PageLayout>
  );
}
