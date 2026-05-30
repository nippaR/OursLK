'use client';

import { motion } from 'framer-motion';

export function Process() {
  const steps = [
    {
      number: '1',
      title: 'Discuss Your Business',
      description: 'We start with a conversation to understand your business, goals, target audience, and unique needs.',
    },
    {
      number: '2',
      title: 'Plan the Website',
      description: 'We create a detailed plan including site structure, features, and design direction tailored to your vision.',
    },
    {
      number: '3',
      title: 'Design & Build',
      description: 'Our team designs and develops your website using modern technologies with your feedback throughout.',
    },
    {
      number: '4',
      title: 'Launch & Support',
      description: 'We launch your website and provide ongoing support, maintenance, and updates to keep it running smoothly.',
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

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="process" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[#ff6b35]">Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A simple, transparent process to bring your website vision to life
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={stepVariants}
              className="relative"
            >
              {/* Connection line for larger screens */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-6 w-12 h-1 bg-gradient-to-r from-[#ff6b35] to-transparent opacity-30" />
              )}

              {/* Step Card */}
              <div className="relative z-10 p-6 rounded-xl border border-[#ff6b35]/30 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] hover:border-[#ff6b35]/60 transition-all duration-300 group">
                {/* Step Number */}
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ffd166] flex items-center justify-center text-2xl font-bold text-white mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 10 }}
                >
                  {step.number}
                </motion.div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>

                {/* Step Description */}
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline indicator for mobile */}
        <div className="lg:hidden mt-12 space-y-4">
          <div className="flex justify-center gap-4">
            {steps.map((_, idx) => (
              <motion.div
                key={idx}
                className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-[#ff6b35]' : 'bg-[#ff6b35]/30'}`}
                animate={idx === 0 ? { scale: [1, 1.5, 1] } : {}}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
