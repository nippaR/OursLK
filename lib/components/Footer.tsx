'use client';

import type { SVGProps } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 22v-9h3l.45-3.5H13.5V7.26c0-1.01.28-1.7 1.73-1.7H17V2.43c-.31-.04-1.37-.13-2.61-.13-2.59 0-4.36 1.58-4.36 4.48V9.5H7.1V13h2.93v9h3.47Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.5 8.1H3.2V21h3.3V8.1ZM4.85 3A1.91 1.91 0 1 0 4.84 6.82 1.91 1.91 0 0 0 4.85 3ZM21 13.6c0-3.89-2.08-5.7-4.85-5.7a4.18 4.18 0 0 0-3.79 2.08V8.1H9.05V21h3.31v-6.39c0-1.68.32-3.31 2.4-3.31 2.05 0 2.08 1.92 2.08 3.42V21H21v-7.4Z" />
    </svg>
  );
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.2a3.01 3.01 0 0 0-2.12-2.13C19.5 3.56 12 3.56 12 3.56s-7.5 0-9.38.51A3.01 3.01 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3.01 3.01 0 0 0 2.12 2.13c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.01 3.01 0 0 0 2.12-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.62V8.38L15.86 12 9.6 15.62Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Company: [
      { label: 'About', href: '#about' },
      { label: 'Services', href: '#services' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Process', href: '#process' },
    ],
    Services: [
      { label: 'Business Websites', href: '#services' },
      { label: 'Restaurant Websites', href: '#services' },
      { label: 'E-commerce Sites', href: '#services' },
      { label: 'Website Redesign', href: '#services' },
    ],
    Connect: [
      { label: 'Email', href: 'mailto:hello@ours.lk' },
      { label: 'WhatsApp', href: 'https://wa.me/94756506423' },
      { label: 'Contact Form', href: '#contact' },
      { label: 'Schedule Call', href: '#contact' },
    ],
  };

  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/', icon: FacebookIcon },
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: InstagramIcon },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: LinkedinIcon },
    { label: 'YouTube', href: 'https://www.youtube.com/', icon: YoutubeIcon },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <footer className="border-t border-[#ff6b35]/20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid md:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#ff6b35] to-[#ffd166] bg-clip-text text-transparent mb-4">
              Ours.lk
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building modern, affordable, and mobile-friendly websites for Sri Lankan businesses and communities.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Ours.lk on ${social.label}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ff6b35]/25 bg-white/[0.03] text-gray-400 transition-colors duration-300 hover:border-[#ff6b35]/70 hover:bg-[#ff6b35]/10 hover:text-[#ff6b35]"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(links).map(([title, items]) => (
            <motion.div key={title} variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-[#ff6b35] transition-colors duration-300"
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-[#ff6b35]/20 mb-8" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p>&copy; {currentYear} Ours.lk. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#ff6b35] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#ff6b35] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#ff6b35] transition-colors">Sitemap</a>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#ff6b35] text-white flex items-center justify-center hover:bg-[#ff8555] transition-colors duration-300 shadow-lg"
          aria-label="Back to top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <ArrowUp size={20} aria-hidden="true" />
        </motion.button>
      </div>
    </footer>
  );
}
