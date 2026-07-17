import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function BlogPage() {
  return (
    <PageLayout title="Latest News & Insights">
      <div className="py-32 text-center bg-background min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl font-bold mb-4">Agricultural Insights</h1>
        <p className="text-muted-foreground">Our blog is currently being updated with the latest articles.</p>
      </div>
    </PageLayout>
  );
}
