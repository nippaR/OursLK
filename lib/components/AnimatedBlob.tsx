'use client';

import { motion } from 'framer-motion';
import { useMousePosition } from '@/lib/hooks/useMousePosition';

export function AnimatedBlob() {
  const { x, y } = useMousePosition();

  return (
    <motion.div
      className="fixed pointer-events-none w-80 h-80 rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(255, 107, 53, 0.4) 0%, rgba(255, 107, 53, 0.1) 70%, rgba(255, 107, 53, 0) 100%)',
        filter: 'blur(40px)',
      }}
      animate={{
        x: x - 160,
        y: y - 160,
      }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 30,
      }}
    />
  );
}
