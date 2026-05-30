'use client';

import { motion } from 'framer-motion';

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
      { label: 'WhatsApp', href: 'https://wa.me/94XXXXXXXXX' },
      { label: 'Contact Form', href: '#contact' },
      { label: 'Schedule Call', href: '#contact' },
    ],
  };

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
          </motion.div>

          {/* Links Sections */}
          {Object.entries(links).map(([title, items]) => (
            <motion.div key={title} variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {items.map((item, idx) => (
                  <li key={idx}>
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
}
