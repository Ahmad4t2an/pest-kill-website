import React from 'react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are Pest Kill products registered and certified?",
    answer: "Yes, all Pest Kill products are thoroughly tested, EPA registered, and PSQCA certified to ensure they meet the highest safety and efficacy standards."
  },
  {
    question: "How can I become a registered Pest Kill dealer?",
    answer: "You can apply for dealership by filling out the form on our 'Dealers' page or by contacting our regional sales office. Our team will guide you through the vetting and onboarding process."
  },
  {
    question: "Do you offer technical support to farmers?",
    answer: "Absolutely. We have a dedicated team of agronomists across Pakistan who provide on-ground technical support, product training, and field demonstrations to ensure optimal results."
  },
  {
    question: "Are your crop protection solutions environmentally safe?",
    answer: "We are committed to sustainable agriculture. Our products are formulated to be highly targeted, minimizing the impact on beneficial insects and the surrounding environment when used according to label instructions."
  },
  {
    question: "Where can I find dosage and application information?",
    answer: "Detailed dosage, application methods, and safety precautions are provided on every product label and can also be found on the individual product pages of our website."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 text-primary font-semibold tracking-wide uppercase text-sm mb-4">
            <span className="h-px w-8 bg-primary"></span>
            <span>Common Questions</span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left font-serif text-lg font-bold text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
