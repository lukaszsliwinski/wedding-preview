'use client';

import { motion } from 'framer-motion';
import Icon from '@/components/shared/Icon';
import useInView from '@/hooks/useInView';

interface SectionHeaderProps {
  header: string;
  subheader?: string;
}

export default function SectionHeader({ header, subheader }: SectionHeaderProps) {
  const { ref, isInView } = useInView();
  return (
    <motion.div
      ref={ref}
      className="flex w-screen justify-center items-center flex-col bg-theme2 text-theme1 py-8 px-3 md:py-12 origin-center"
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : {}}
      transition={{
        type: 'spring',
        stiffness: 80,
        damping: 18,
        mass: 1.5
      }}
    >
      <Icon src="/icons/header.svg" className="w-20 h-8 sm:w-40 sm:h-12" alt="header icon" />
      <h2 className="text-center text-2xl sm:text-5xl mt-1 md:mt-4">{header}</h2>
      {subheader && (
        <p className="flex flex-col max-w-4xl text-center m-4 md:mb-8 opacity-75 max-sm:text-sm/6">
          {subheader}
        </p>
      )}
    </motion.div>
  );
}
