'use client';

import { motion } from 'framer-motion';
import { Button as ShadcnButton } from '@/components/ui/button';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ label, onClick, href, variant = 'primary', className = '' }: ButtonProps) {
  const variantClass =
    variant === 'primary'
      ? 'border border-[#ff6b35]/70 bg-[#ff6b35] text-white shadow-[0_16px_40px_rgba(255,107,53,0.28)] hover:bg-[#ff8555]'
      : 'border border-[#ff6b35]/35 bg-white/5 text-white hover:bg-white/10 hover:border-[#ff6b35]/70';

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <ShadcnButton
          asChild
          className={`h-11 rounded-full px-6 text-sm font-semibold tracking-[0.01em] transition-all duration-300 ${variantClass} ${className}`}
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            {label}
          </a>
        </ShadcnButton>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <ShadcnButton
        type="button"
        onClick={onClick}
        className={`h-11 rounded-full px-6 text-sm font-semibold tracking-[0.01em] transition-all duration-300 ${variantClass} ${className}`}
      >
        {label}
      </ShadcnButton>
    </motion.div>
  );
}
