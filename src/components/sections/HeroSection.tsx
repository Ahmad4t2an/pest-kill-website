import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import heroImg from '@/assets/hero.jpg';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 220]);
  const imgOpacity = useTransform(scrollY, [0, 600], [1, 0.4]);

  return (
    <div className="relative w-full overflow-hidden bg-[#081a0c]" style={{ minHeight: 'calc(100dvh - 116px)' }}>
      {/* Parallax Background Image */}
      <motion.div
        style={{ y, opacity: imgOpacity }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        {/* Multi-layer overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#061209]/90 via-[#061209]/60 to-[#061209]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061209]/95 via-transparent to-[#061209]/30" />
      </motion.div>

      {/* Decorative grain texture */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px',
        }}
      />

      {/* Gold accent line — left edge */}
      <div className="absolute left-0 top-0 bottom-0 z-20 w-1 bg-gradient-to-b from-transparent via-accent to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex h-full min-h-[inherit] max-w-7xl flex-col justify-center px-6 pb-[110px] pt-16 lg:px-12 lg:pb-[110px] lg:pt-20">
        <div className="max-w-[700px]">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-5 py-2 text-sm font-semibold text-accent backdrop-blur-sm"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0" />
            PSQCA Certified Excellence Since 2002
          </motion.div>

          {/* Headline */}
          <h1 className="font-serif font-extrabold leading-[1.08] tracking-tight text-white">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Protecting
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Pakistan's
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="block bg-gradient-to-r from-accent via-yellow-300 to-[#e8c97a] bg-clip-text text-transparent pb-2 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Agricultural Future
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-7 max-w-[560px] text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Premium crop protection solutions trusted by <strong className="text-white">500,000+ farmers</strong> across Pakistan.
            Innovative chemistry, proven results, sustainable agriculture.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60"
          >
            {['ISO Certified', '20+ Years Experience', '150+ Products', 'Pan-Pakistan Network'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {item}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link href="/products">
              <Button
                size="lg"
                className="group h-14 w-full bg-accent px-8 text-base font-bold text-[#0a2010] shadow-[0_0_30px_rgba(196,165,74,0.3)] hover:bg-accent/90 hover:shadow-[0_0_40px_rgba(196,165,74,0.5)] sm:w-auto transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/dealers">
              <Button
                size="lg"
                variant="outline"
                className="h-14 w-full border-2 border-white/30 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10 sm:w-auto transition-all duration-300"
              >
                Become a Dealer
              </Button>
            </Link>
            <Button
              size="lg"
              variant="ghost"
              className="group h-14 w-full text-white/80 hover:bg-white/10 hover:text-white sm:w-auto"
            >
              <span className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 group-hover:bg-white/20 transition-all">
                <Play className="h-4 w-4 fill-white pl-0.5" />
              </span>
              Watch Our Story
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-[#061209]/90 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-12">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:divide-x md:divide-white/10">
            {[
              { label: 'Years of Excellence', value: '20+' },
              { label: 'Registered Products', value: '150+' },
              { label: 'Dealer Partners', value: '25,000+' },
              { label: 'Farmers Served', value: '500,000+' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center text-center md:py-1">
                <span className="font-serif text-2xl font-extrabold text-accent md:text-3xl">{stat.value}</span>
                <span className="mt-0.5 text-[0.7rem] font-medium uppercase tracking-widest text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
