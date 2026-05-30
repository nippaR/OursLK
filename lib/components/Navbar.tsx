'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffd166] bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            Ours.lk
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="text-white hover:text-[#ff6b35] transition-colors duration-300"
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
            className="md:hidden w-8 h-8 flex flex-col justify-between"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-full h-0.5 bg-[#ff6b35]"
              animate={isOpen ? { rotate: 45, y: 11 } : { rotate: 0, y: 0 }}
            />
            <motion.div
              className="w-full h-0.5 bg-[#ff6b35]"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.div
              className="w-full h-0.5 bg-[#ff6b35]"
              animate={isOpen ? { rotate: -45, y: -11 } : { rotate: 0, y: 0 }}
            />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0f0f0f] z-40 mt-16 flex flex-col items-center justify-start pt-20"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, idx) => (
              <motion.a
                key={idx}
                href={link.href}
                className="text-2xl text-white py-4 hover:text-[#ff6b35] transition-colors"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
