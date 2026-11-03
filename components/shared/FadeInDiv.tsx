'use client';

import { motion } from 'motion/react';
import { cubic } from '@/lib/motion';

export default function FadeInDiv({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -20% 0px' }}
      transition={{
        duration: 0.6,
        ease: cubic,
        delay: 0.2
      }}
    >
      {children}
    </motion.div>
  );
}
