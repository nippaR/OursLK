'use client';

import { motion } from 'framer-motion';

export function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const features = [
    { title: 'Affordable', description: 'Premium quality websites at prices that fit small business budgets' },
    { title: 'Mobile-First', description: 'Responsive designs that look perfect on all devices' },
    { title: 'Fast & Secure', description: 'Modern technology stack ensuring speed and security' },
    { title: 'Expert Support', description: 'Ongoing support to help your business grow online' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-[#ff6b35]">Ours.lk</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              We are a team of passionate web designers and developers dedicated to helping Sri Lankan businesses build a strong online presence with modern, affordable, and high-quality websites.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#ffd166]">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To empower Sri Lankan businesses of all sizes, from restaurants to freelancers and from tuition teachers to travel companies, by providing accessible, modern web solutions that help them reach more customers and grow their business online.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#ef476f]">Why Choose Us</h3>
              <p className="text-gray-300 leading-relaxed">
                We understand the unique needs of Sri Lankan businesses. We provide transparent pricing, clear communication, and professional support throughout the entire process. Your success is our success.
              </p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-lg border border-[#ff6b35]/30 bg-gradient-to-br from-[#ff6b35]/10 to-[#ffd166]/10 hover:border-[#ff6b35]/60 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <h4 className="text-xl font-semibold text-[#ff6b35] mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
