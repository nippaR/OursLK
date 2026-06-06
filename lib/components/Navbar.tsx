'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f0f]/80 backdrop-blur-md border-b border-[#ff6b35]/20">
      <div className="mx-auto flex h-20 w-full max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-2xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffd166] bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          Ours.lk
        </motion.div>

        {/* Desktop Navigation */}
        <div className="ml-auto hidden items-center justify-end gap-4 lg:gap-6 md:flex">
          {navLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium tracking-[0.01em] text-white/80 transition-colors duration-300 hover:text-[#ff6b35]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="ml-auto flex h-10 w-10 flex-col justify-center gap-1.5 rounded-full border border-[#ff6b35]/25 bg-white/5 p-2 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle navigation"
        >
          <motion.div
            className="w-full h-0.5 bg-[#ff6b35]"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.div
            className="w-full h-0.5 bg-[#ff6b35]"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.div
            className="w-full h-0.5 bg-[#ff6b35]"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-x-0 top-20 z-40 border-b border-[#ff6b35]/15 bg-[#0f0f0f]/95 px-4 pb-6 pt-4 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-base font-medium text-white/85 transition-colors hover:text-[#ff6b35]"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}
              <Button
                asChild
                className="mt-2 h-11 rounded-full border border-[#ff6b35]/70 bg-[#ff6b35] text-white hover:bg-[#ff8555]"
              >
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Start a Project
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
