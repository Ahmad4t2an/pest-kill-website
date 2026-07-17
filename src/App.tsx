import { lazy, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from 'next-themes';
import { HelmetProvider } from 'react-helmet-async';

import HomePage from '@/pages/HomePage';
import NotFound from '@/pages/not-found';

// Lazy load other pages
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ProductsPage = lazy(() => import('@/pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetailPage'));
const CropSolutionsPage = lazy(() => import('@/pages/CropSolutionsPage'));
const CropDetailPage = lazy(() => import('@/pages/CropDetailPage'));
const PestLibraryPage = lazy(() => import('@/pages/PestLibraryPage'));
const PestDetailPage = lazy(() => import('@/pages/PestDetailPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const DownloadsPage = lazy(() => import('@/pages/DownloadsPage'));
const BlogPage = lazy(() => import('@/pages/BlogPage'));
const BlogDetailPage = lazy(() => import('@/pages/BlogDetailPage'));
const DealersPage = lazy(() => import('@/pages/DealersPage'));
const CareersPage = lazy(() => import('@/pages/CareersPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/products/:slug" component={ProductDetailPage} />
      <Route path="/crop-solutions" component={CropSolutionsPage} />
      <Route path="/crop-solutions/:crop" component={CropDetailPage} />
      <Route path="/pest-library" component={PestLibraryPage} />
      <Route path="/pest-library/:slug" component={PestDetailPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/downloads" component={DownloadsPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogDetailPage} />
      <Route path="/dealers" component={DealersPage} />
      <Route path="/careers" component={CareersPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
              <Suspense fallback={null}>
                <Router />
              </Suspense>
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
