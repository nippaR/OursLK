'use client';

import { motion } from 'framer-motion';
import { Button } from './Button';

export function Pricing() {
  const packages = [
    {
      title: 'Starter Website',
      description: 'Best for small businesses that need a simple online presence',
      price: 'LKR 12,000',
      priceNote: '+ hosting charges',
      features: [
        'Up to 5 pages',
        'Mobile responsive',
        'Contact form',
        'Basic SEO',
        'SSL certificate',
        'Email support',
      ],
      highlighted: false,
    },
    {
      title: 'Standard Website',
      description: 'Best for growing businesses that need multiple pages and contact features',
      price: 'LKR 35,000',
      priceNote: '+ free hosting',
      features: [
        'Up to 12 pages',
        'Mobile responsive',
        'E-commerce ready',
        'Payment gateway integration',
        'Contact form & WhatsApp',
        'SEO optimized',
        'SSL certificate',
        'Analytics integration',
        'Monthly support',
      ],
      highlighted: true,
    },
    {
      title: 'Premium Website',
      description: 'Best for businesses that need advanced design, portfolio, and support',
      price: 'LKR 50,000',
      priceNote: '+ free service',
      features: [
        'Unlimited pages',
        'Mobile responsive',
        'E-commerce ready',
        'Payment gateway integration',
        'Contact & WhatsApp integration',
        'Advanced SEO',
        'SSL certificate',
        'Blog/Portfolio section',
        'Priority support',
        'Custom design',
      ],
      highlighted: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#ffd166]/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple, Transparent <span className="text-[#ff6b35]">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Choose the perfect plan for your business. Need something custom? Contact us for a quote.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className={`relative p-8 rounded-xl transition-all duration-300 ${
                pkg.highlighted
                  ? 'border-2 border-[#ff6b35] bg-gradient-to-br from-[#ff6b35]/10 to-[#ffd166]/10 transform md:scale-105'
                  : 'border border-[#ff6b35]/20 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]'
              }`}
              whileHover={{ y: -10 }}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#ff6b35] text-white text-sm font-semibold rounded-full">
                  Popular
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                  <p className="text-gray-400 text-sm">{pkg.description}</p>
                </div>

                {/* Price */}
                <div className="py-6 border-y border-[#ff6b35]/20">
                  <p className="text-gray-300 text-center font-semibold">
                    <span className="text-3xl font-bold text-[#ff6b35]">{pkg.price}</span>
                  </p>
                  <p className="text-gray-400 text-center text-sm mt-1">{pkg.priceNote}</p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {pkg.features.map((feature, fidx) => (
                    <div key={fidx} className="flex items-start gap-3">
                      <span className="text-[#ff6b35] mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button
                  label="Get Started"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  variant={pkg.highlighted ? 'primary' : 'secondary'}
                  className="w-full text-center"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Customization Notice */}
        <motion.div
          className="mt-16 p-8 rounded-xl border border-[#ffd166]/30 bg-[#ffd166]/5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-gray-300">
            Need a custom solution? <span className="text-[#ffd166] font-semibold">Contact us</span> to discuss your unique requirements and get a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
