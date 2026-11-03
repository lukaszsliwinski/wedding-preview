'use client';

import { motion } from 'motion/react';
import Icon from '@/components/shared/Icon';

interface SectionHeaderProps {
  header: string;
  subheader?: string;
}

export default function SectionHeader({ header, subheader }: SectionHeaderProps) {
  return (
    <motion.div
      className="flex w-screen justify-center items-center flex-col bg-theme2 text-theme1 py-8 px-3 md:py-12 origin-center"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: '0px 0px -20% 0px' }}
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
