'use client';

import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      title: 'Business Websites',
      description: 'Professional websites for shops, offices, and service businesses',
      icon: '🌐',
    },
    {
      title: 'Restaurant Websites',
      description: 'Online menus, reservations, and ordering systems for restaurants',
      icon: '🍽️',
    },
    {
      title: 'Portfolio Websites',
      description: 'Showcase your work and skills with a stunning online portfolio',
      icon: '🎨',
    },
    {
      title: 'Community Websites',
      description: 'Websites for NGOs, community groups, and organisations',
      icon: '🤝',
    },
    {
      title: 'Website Redesign',
      description: 'Update your old website with modern design and technology',
      icon: '✨',
    },
    {
      title: 'Contact & Integration',
      description: 'WhatsApp integration, contact forms, and messaging systems',
      icon: '📱',
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#ff6b35]/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[#ff6b35]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive web solutions tailored for Sri Lankan businesses and communities
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group p-8 rounded-xl border border-[#ff6b35]/20 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] hover:border-[#ff6b35]/60 transition-all duration-300"
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(255, 107, 53, 0.2)',
              }}
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
              <div className="mt-4 w-12 h-1 bg-gradient-to-r from-[#ff6b35] to-[#ffd166] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
