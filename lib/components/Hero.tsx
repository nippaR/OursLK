'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button as ShadcnButton } from '@/components/ui/button';
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

  const heroCards = [
    {
      src: '/HeroSection/images.jpg',
      alt: 'E-commerce website UI kit preview',
      title: 'E-commerce',
      subtitle: 'Modern storefront layouts',
    },
    {
      src: '/HeroSection/Hero2.jpg',
      alt: 'Service business website preview',
      title: 'Service Business',
      subtitle: 'Clean booking-focused design',
    },
    {
      src: '/HeroSection/hero3.png',
      alt: 'Fitness landing page preview',
      title: 'Landing Page',
      subtitle: 'Bold conversion-oriented hero',
    },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-24 items-center overflow-hidden pt-24 sm:pt-28"
    >
      <AnimatedBlob />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center space-y-5 text-center md:space-y-7"
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
            className="max-w-5xl text-4xl font-bold leading-[0.95] sm:text-5xl md:text-7xl"
          >
            <span className="block text-white">Websites for</span>
            <span className="block bg-gradient-to-r from-[#ff6b35] via-[#ffd166] to-[#ff6b35] bg-clip-text text-transparent">
              Sri Lankan Businesses
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-3xl text-base leading-8 text-gray-300 sm:text-lg md:text-xl"
          >
            Ours.lk builds modern, affordable, and mobile-friendly websites for shops, restaurants, service businesses, freelancers, and Sri Lankan community organisations. Transform your online presence today.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row"
          >
            <Button
              label="Start a Project"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              variant="primary"
            />
            <ShadcnButton
              type="button"
              variant="outline"
              className="h-11 rounded-full border-[#ff6b35]/35 bg-white/5 px-6 text-sm font-semibold text-white hover:bg-white/10 hover:text-white"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Services
            </ShadcnButton>
          </motion.div>
        </motion.div>

        {/* Hero Image/Mockup Area */}
        <motion.div
          className="mt-14 md:mt-18"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 perspective">
            {heroCards.map((card, idx) => (
              <motion.div
                key={card.src}
                className="group relative h-72 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-sm md:h-[420px]"
                whileHover={{ y: -10, boxShadow: '0 24px 50px rgba(255, 107, 53, 0.2)' }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <div className="inline-flex items-center rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur-md">
                    {card.title}
                  </div>
                  <p className="mt-3 max-w-[16rem] text-sm text-white/70">
                    {card.subtitle}
                  </p>
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
