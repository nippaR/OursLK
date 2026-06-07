'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

type PortfolioProject = {
  title: string;
  category: string;
  color: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function Portfolio() {
  const projects: PortfolioProject[] = [
    {
      title: 'Sri Lankan Restaurant Website',
      category: 'Restaurant',
      color: 'from-[#ff6b35] to-[#ffd166]',
    },
    {
      title: 'Cleaning Service Website',
      category: 'Service Business',
      color: 'from-[#ffd166] to-[#ff6b35]',
    },
    {
      title: 'Tuition Class Website',
      category: 'Education',
      color: 'from-[#ef476f] to-[#ff6b35]',
    },
    {
      title: 'Travel Agency Website',
      category: 'Tourism',
      color: 'from-[#264653] to-[#ff6b35]',
    },
    {
      title: 'Nithagi Flowers Website',
      category: 'E-commerce',
      color: 'from-[#ff6b35] to-[#ef476f]',
      href: 'https://nithagi-flowers.vercel.app/',
      imageSrc: '/HeroSection/Portfolio6.png',
      imageAlt: 'Nithagi Flowers website preview',
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-[#ff6b35]">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Sample projects showcasing our design and development expertise
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-xl"
              whileHover={{ scale: 1.05 }}
            >
              {/* Background with gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`} />

              {/* Card Content */}
              <div className="relative p-8 h-80 flex flex-col justify-between border border-[#ff6b35]/30 rounded-xl backdrop-blur-sm">
                <div>
                  <span className="inline-block px-3 py-1 text-sm text-[#ff6b35] bg-[#ff6b35]/10 rounded-full mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>

                {/* Image Placeholder */}
                <div className="relative h-40 w-full overflow-hidden rounded-lg bg-gradient-to-br from-white/10 to-white/5 text-gray-400 text-sm transform transition-transform duration-300 group-hover:scale-110">
                  {project.imageSrc ? (
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt ?? `${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <div className="text-center">
                        <div className="mb-2 text-4xl">🌐</div>
                        <p>Website Preview</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent rounded-xl flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    {project.href ? (
                      <Button
                        asChild
                        className="h-11 rounded-full border border-[#ff6b35]/70 bg-[#ff6b35] px-6 text-white hover:bg-[#ff8555]"
                      >
                        <Link href={project.href} target="_blank" rel="noopener noreferrer">
                          View Project
                        </Link>
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        className="h-11 rounded-full border border-[#ff6b35]/70 bg-[#ff6b35] px-6 text-white hover:bg-[#ff8555]"
                      >
                        View Project
                      </Button>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
