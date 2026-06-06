'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', businessType: '', message: '' });
  };

  const businessTypes = [
    'Restaurant',
    'Shop/Retail',
    'Service Business',
    'Freelancer',
    'Travel/Tourism',
    'Education',
    'Community Organisation',
    'Other',
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
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-[#ff6b35]/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-[#ff6b35]">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to build your online presence? Reach out to us today!
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Quick Contact Options */}
          <motion.a
            variants={itemVariants}
            href="https://wa.me/94756506423"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-xl border border-[#ff6b35]/30 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] hover:border-[#ff6b35]/60 transition-all text-center group"
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">📱</div>
            <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-400 text-sm">Quick chat via WhatsApp</p>
          </motion.a>

          <motion.a
            variants={itemVariants}
            href="mailto:hello@ours.lk"
            className="p-6 rounded-xl border border-[#ff6b35]/30 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] hover:border-[#ff6b35]/60 transition-all text-center group"
            whileHover={{ y: -5 }}
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">✉️</div>
            <h3 className="font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 text-sm">hello@ours.lk</p>
          </motion.a>

          <motion.div
            variants={itemVariants}
            className="p-6 rounded-xl border border-[#ff6b35]/30 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] text-center"
          >
            <div className="text-4xl mb-3">🕐</div>
            <h3 className="font-semibold text-white mb-2">Response Time</h3>
            <p className="text-gray-400 text-sm">Within 24 hours</p>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="p-8 rounded-xl border border-[#ff6b35]/30 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label className="block text-white font-semibold mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#ff6b35]/30 text-white focus:border-[#ff6b35] focus:outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#ff6b35]/30 text-white focus:border-[#ff6b35] focus:outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-white font-semibold mb-2">Phone / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#ff6b35]/30 text-white focus:border-[#ff6b35] focus:outline-none transition-all"
                placeholder="+94 XX XXX XXXX"
              />
            </div>

            {/* Business Type */}
            <div>
              <label className="block text-white font-semibold mb-2">Business Type</label>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#ff6b35]/30 text-white focus:border-[#ff6b35] focus:outline-none transition-all"
              >
                <option value="">Select business type</option>
                {businessTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-[#0f0f0f] border border-[#ff6b35]/30 text-white focus:border-[#ff6b35] focus:outline-none transition-all resize-none"
              placeholder="Tell us about your project and requirements..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              type="submit"
              className="flex-1 px-8 py-3 bg-[#ff6b35] text-white rounded-lg font-semibold hover:bg-[#ff8555] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
            <Button
              label="Chat on WhatsApp"
              href="https://wa.me/94756506423"
              variant="secondary"
              className="flex-1"
            />
          </div>
        </motion.form>
      </div>
    </section>
  );
}
