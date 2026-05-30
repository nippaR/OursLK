'use client';

import { motion } from 'framer-motion';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ label, onClick, href, variant = 'primary', className = '' }: ButtonProps) {
  const baseClass = 'px-8 py-3 rounded-lg font-semibold transition-all duration-300';
  const variantClass = 
    variant === 'primary' 
      ? 'bg-[#ff6b35] text-white hover:bg-[#ff8555] hover:shadow-lg hover:shadow-[#ff6b35]/50' 
      : 'border-2 border-[#ff6b35] text-[#ff6b35] hover:bg-[#ff6b35] hover:text-white';

  const element = (
    <motion.button
      className={`${baseClass} ${variantClass} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {element}
      </a>
    );
  }

  return element;
}
