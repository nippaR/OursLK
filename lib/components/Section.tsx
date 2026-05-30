'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <motion.section
      className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
}
