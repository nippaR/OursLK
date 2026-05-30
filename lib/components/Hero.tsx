'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';
import { AnimatedBlob } from './AnimatedBlob';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <AnimatedBlob />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-6 md:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Tagline */}
          <motion.div variants={itemVariants}>
            <p className="text-[#ff6b35] font-semibold text-lg md:text-xl">Welcome to Ours.lk</p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="block text-white">Websites for</span>
            <span className="block bg-gradient-to-r from-[#ff6b35] via-[#ffd166] to-[#ff6b35] bg-clip-text text-transparent">
              Sri Lankan Businesses
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Ours.lk builds modern, affordable, and mobile-friendly websites for shops, restaurants, service businesses, freelancers, and Sri Lankan community organisations. Transform your online presence today.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <Button
              label="Start a Project"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
            />
            <Button
              label="View Services"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              variant="secondary"
            />
          </motion.div>
        </motion.div>

        {/* Hero Image/Mockup Area */}
        <motion.div
          className="mt-16 md:mt-20"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 perspective">
            {['Website Preview 1', 'Website Preview 2', 'Website Preview 3'].map((_, idx) => (
              <motion.div
                key={idx}
                className="h-64 md:h-72 bg-gradient-to-br from-[#ff6b35]/20 to-[#ffd166]/20 rounded-xl border border-[#ff6b35]/30 flex items-center justify-center"
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(255, 107, 53, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-[#ff6b35]/20 rounded-lg" />
                  <p className="text-gray-400">Business Website</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#ff6b35] rounded-full flex justify-center">
          <motion.div
            className="w-1 h-2 bg-[#ff6b35] rounded-full mt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
