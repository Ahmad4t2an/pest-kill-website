import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function BlogDetailPage() {
  return (
    <PageLayout title="Article">
      <div className="py-32 text-center bg-background min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Article Details</h1>
      </div>
    </PageLayout>
  );
}
