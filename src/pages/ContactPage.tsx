import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { contactInfo } from '@/data/mock-data';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <PageLayout title="Contact Us">
      {/* Header */}
      <div className="bg-foreground py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-5xl font-bold md:text-6xl"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-white/80"
          >
            Our agricultural experts are ready to assist you.
          </motion.p>
        </div>
      </div>

      <div className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card border rounded-2xl p-8 shadow-sm"
            >
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input type="text" className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input type="text" className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <input type="email" className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <select className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none">
                    <option>Product Inquiry</option>
                    <option>Dealership</option>
                    <option>Technical Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea rows={4} className="w-full p-3 rounded-md border bg-background focus:ring-2 focus:ring-primary focus:outline-none" placeholder="How can we help you?"></textarea>
                </div>
                <Button className="w-full h-12 bg-primary text-white hover:bg-primary/90 font-semibold text-lg">
                  <Send className="mr-2 h-5 w-5" /> Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-8"
            >
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Corporate Headquarters</h3>
                    <p className="text-muted-foreground">{contactInfo.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Phone & WhatsApp</h3>
                    <p className="text-muted-foreground">{contactInfo.phone}</p>
                    <p className="text-muted-foreground">{contactInfo.mobile}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Business Hours</h3>
                    <p className="text-muted-foreground">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-2xl overflow-hidden h-64 bg-muted border relative flex items-center justify-center">
                <MapPin className="h-10 w-10 text-primary opacity-50 absolute" />
                <span className="text-muted-foreground font-medium z-10 bg-background/80 px-4 py-2 rounded-md">Interactive Map Loaded Here</span>
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIi8+Cjwvc3ZnPg==')]"></div>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
