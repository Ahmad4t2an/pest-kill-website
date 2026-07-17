import React from 'react';
import { Link } from 'wouter';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram, ArrowRight } from 'lucide-react';
import { contactInfo } from '@/data/mock-data';
import { Button } from '@/components/ui/button';
import logoImg from '@/assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10 bg-primary">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 md:flex-row lg:px-8">
          <div className="max-w-xl text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold md:text-3xl">Stay Updated with Agricultural Innovations</h3>
            <p className="mt-2 text-white/80">Join our newsletter to receive the latest crop protection strategies and company news.</p>
          </div>
          <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4">
              <div className="h-[70px] w-[70px] shrink-0 overflow-hidden rounded-lg bg-white/5 p-1">
                <img src={logoImg} alt="Pest Kill Logo" className="h-full w-full object-contain" />
              </div>
              <div className="hidden flex-col leading-none lg:flex">
                <span className="font-serif text-2xl font-extrabold tracking-wide text-white">PEST KILL</span>
                <span className="mt-0.5 text-sm font-bold tracking-wider text-accent">(PVT.) LIMITED</span>
                <span className="mt-1.5 flex items-center gap-1.5 text-[0.65rem] tracking-widest text-accent/70">
                  <span className="h-px w-4 bg-accent/50" />Since 2002<span className="h-px w-4 bg-accent/50" />
                </span>
              </div>
            </div>
            <p className="mt-6 pr-6 text-sm leading-relaxed text-white/70">
              Pakistan's trusted agrochemical innovator providing premium crop protection solutions. We combine scientific precision with deep agricultural heritage to protect harvests and empower farmers across the nation.
            </p>
            <div className="mt-8 flex space-x-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary hover:text-white"><Facebook className="h-4 w-4" /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary hover:text-white"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary hover:text-white"><Linkedin className="h-4 w-4" /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary hover:text-white"><Youtube className="h-4 w-4" /></a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-primary hover:text-white"><Instagram className="h-4 w-4" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold">Quick Links</h4>
            <ul className="mt-6 flex flex-col space-y-3 text-sm text-white/70">
              <li><Link href="/about"><span className="flex items-center hover:text-accent transition-colors cursor-pointer"><ArrowRight className="mr-2 h-3 w-3" /> About Us</span></Link></li>
              <li><Link href="/research"><span className="flex items-center hover:text-accent transition-colors cursor-pointer"><ArrowRight className="mr-2 h-3 w-3" /> Research & Development</span></Link></li>
              <li><Link href="/dealers"><span className="flex items-center hover:text-accent transition-colors cursor-pointer"><ArrowRight className="mr-2 h-3 w-3" /> Dealer Network</span></Link></li>
              <li><Link href="/careers"><span className="flex items-center hover:text-accent transition-colors cursor-pointer"><ArrowRight className="mr-2 h-3 w-3" /> Careers</span></Link></li>
              <li><Link href="/blog"><span className="flex items-center hover:text-accent transition-colors cursor-pointer"><ArrowRight className="mr-2 h-3 w-3" /> Latest News</span></Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-serif text-lg font-bold">Solutions</h4>
            <ul className="mt-6 flex flex-col space-y-3 text-sm text-white/70">
              <li><Link href="/products?category=herbicide"><span className="flex items-center hover:text-accent transition-colors cursor-pointer"><ArrowRight className="mr-2 h-3 w-3" /> Herbicides</span></Link></li>
              <li><Link href="/products?category=fungicide"><span className="flex items-center hover:text-accent transition-colors cursor-pointer"><ArrowRight className="mr-2 h-3 w-3" /> Fungicides</span></Link></li>
              <li><Link href="/products?category=insecticide"><span className="flex items-center hover:text-accent transition-colors cursor-pointer"><ArrowRight className="mr-2 h-3 w-3" /> Insecticides</span></Link></li>
              <li><Link href="/crop-solutions"><span className="flex items-center hover:text-accent transition-colors cursor-pointer"><ArrowRight className="mr-2 h-3 w-3" /> Crop Solutions</span></Link></li>
              <li><Link href="/pest-library"><span className="flex items-center hover:text-accent transition-colors cursor-pointer"><ArrowRight className="mr-2 h-3 w-3" /> Pest Library</span></Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-bold">Contact Us</h4>
            <ul className="mt-6 flex flex-col space-y-4 text-sm text-white/70">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-accent shrink-0" />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-accent shrink-0" />
                <span>{contactInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-accent shrink-0" />
                <span>{contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-4 py-6 text-xs text-white/50 md:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Pest Kill (Pvt.) Limited. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link href="#"><span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span></Link>
            <Link href="#"><span className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</span></Link>
            <Link href="#"><span className="hover:text-white cursor-pointer transition-colors">Sitemap</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
