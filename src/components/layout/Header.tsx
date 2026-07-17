import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import {
  Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube,
  Menu, X, Search, ChevronDown, Home, Globe,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import logoImg from '@/assets/logo.png';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [location]);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home className="h-3.5 w-3.5" /> },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products', hasSub: true },
    { name: 'Crop Solutions', path: '/crop-solutions' },
    { name: 'Pest Library', path: '/pest-library' },
    {
      name: 'More', path: '#', hasSub: true, subLinks: [
        { name: 'R&D', path: '/research' },
        { name: 'Downloads', path: '/downloads' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
      ]
    },
    { name: 'Dealers', path: '/dealers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* ── TOP BAR ── dark green */}
      <div
        className={`w-full overflow-hidden bg-[#1a4d2e] text-xs font-medium text-white/90 transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0' : 'h-auto opacity-100'
        }`}
      >
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 lg:px-8">
          {/* Left: contact details */}
          <div className="hidden items-center gap-5 md:flex">
            <span className="flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5 text-accent" />
              +92 62 288 1000-1
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-accent" />
              info@pestkill.com.pk
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-accent" />
              Bahawalpur, Punjab, Pakistan
            </span>
          </div>

          {/* Decorative leaf (right side of top bar) */}
          <div
            className="pointer-events-none absolute right-[220px] top-0 bottom-0 hidden w-24 opacity-20 lg:block"
            aria-hidden
          >
            <svg viewBox="0 0 96 48" fill="none" className="h-full w-full">
              <path d="M96 48 C60 40 20 10 0 0 L0 48 Z" fill="white" />
            </svg>
          </div>

          {/* Right: Follow Us + social + language */}
          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden text-white/70 md:inline">Follow Us:</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-3.5 w-3.5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="h-3.5 w-3.5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Youtube className="h-3.5 w-3.5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Linkedin className="h-3.5 w-3.5" /></a>
            </div>
            <div className="flex items-center gap-1 border-l border-white/20 pl-4">
              <Globe className="h-3.5 w-3.5 text-white/70" />
              <button className="flex items-center gap-0.5 font-semibold text-white hover:text-accent transition-colors">
                EN <ChevronDown className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN NAV ── always white */}
      <div
        className={`w-full bg-white transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 lg:px-8">

          {/* Logo block */}
          <Link href="/">
            <div className="flex cursor-pointer items-center gap-3">
              <div className="h-[60px] w-[60px] shrink-0 overflow-hidden rounded-md">
                <img src={logoImg} alt="Pest Kill" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-extrabold tracking-wide text-primary">PEST KILL</span>
                <span className="text-[0.68rem] font-bold tracking-wider text-accent">(PVT.) LIMITED</span>
                <span className="mt-1 flex items-center gap-1 text-[0.6rem] tracking-widest text-accent/80">
                  <span className="block h-px w-4 bg-accent/60" />
                  Since 2002
                  <span className="block h-px w-4 bg-accent/60" />
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-0 lg:flex">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <div key={link.name} className="group relative">
                  {link.path !== '#' ? (
                    <Link href={link.path}>
                      <span
                        className={`relative flex cursor-pointer items-center gap-1.5 px-3 py-5 text-sm font-semibold transition-colors
                          ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
                      >
                        {/* Home gets the green icon box */}
                        {link.icon && (
                          <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-white">
                            {link.icon}
                          </span>
                        )}
                        {link.name}
                        {link.hasSub && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                        {/* Active underline */}
                        {isActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-[3px] rounded-t-full bg-accent" />
                        )}
                      </span>
                    </Link>
                  ) : (
                    <span className="relative flex cursor-pointer items-center gap-1.5 px-3 py-5 text-sm font-semibold text-gray-700 transition-colors hover:text-primary">
                      {link.name}
                      {link.hasSub && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                    </span>
                  )}

                  {/* Dropdown */}
                  {link.subLinks && (
                    <div className="invisible absolute left-0 top-full z-50 min-w-[180px] pt-0 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                      <div className="mt-0 flex flex-col overflow-hidden rounded-b-xl border border-t-0 border-gray-100 bg-white shadow-xl">
                        {link.subLinks.map((sub) => (
                          <Link key={sub.name} href={sub.path}>
                            <span className="block cursor-pointer px-4 py-3 text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors">
                              {sub.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden items-center gap-2 lg:flex">
            <button className="rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-primary">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/dealers">
              <button className="rounded-full border border-primary/50 px-4 py-2 text-sm font-semibold text-primary transition-all hover:border-primary hover:bg-primary/5">
                Become a Dealer
              </button>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-primary lg:hidden"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 top-[72px] z-40 flex flex-col overflow-y-auto bg-white px-4 pb-20 pt-4"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  {link.path !== '#' ? (
                    <Link href={link.path}>
                      <span className="flex items-center gap-2 border-b border-gray-100 py-4 text-base font-semibold text-gray-800 hover:text-primary transition-colors">
                        {link.icon && (
                          <span className="flex h-6 w-6 items-center justify-center rounded bg-primary text-white">
                            {link.icon}
                          </span>
                        )}
                        {link.name}
                      </span>
                    </Link>
                  ) : (
                    <span className="border-b border-gray-100 py-4 text-base font-semibold text-gray-500">
                      {link.name}
                    </span>
                  )}
                  {link.subLinks && (
                    <div className="flex flex-col border-b border-gray-100 pb-2 pl-4">
                      {link.subLinks.map((sub) => (
                        <Link key={sub.name} href={sub.path}>
                          <span className="block py-2.5 text-sm font-medium text-gray-600 hover:text-primary transition-colors">
                            {sub.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/dealers">
                <button className="flex w-full items-center justify-center gap-2 rounded-full border border-primary px-4 py-3 text-sm font-semibold text-primary">
                  <Shield className="h-4 w-4" /> Become a Dealer
                </button>
              </Link>
              <Link href="/contact">
                <button className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-sm font-bold text-white">
                  <FileText className="h-4 w-4" /> Request Quote
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
