'use client';

import { motion } from 'framer-motion';
import useInView from '@/hooks/useInView';

export default function FadeInDiv({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, isInView } = useInView();

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.2
      }}
    >
      {children}
    </motion.div>
  );
}
