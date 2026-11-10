'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { motion, useAnimation } from 'motion/react';
import { cubic } from '@/lib/motion';
import useCountdown from '@/hooks/useCountdown';

const weddingDate = new Date('2027-09-04T15:00:00');
const units = ['days', 'hours', 'minutes', 'seconds'] as const;

const timerItemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: cubic
    }
  }
};

// Only this component re-renders every second, not the whole Landing section
function Countdown() {
  const t = useTranslations('landing');
  const timeLeft = useCountdown(weddingDate);

  return units.map((unit) => {
    const value = timeLeft?.[unit];

    return (
      <motion.div
        key={unit}
        variants={timerItemVariants}
        className="max-md:flex max-md:flex-col max-md:items-center mb-2"
      >
        <span className="inline-block min-w-13 md:mr-2 md:ml-3 text-center md:text-right text-xl xs:text-2xl sm:text-3xl">
          {value ?? '00'}
        </span>
        <span className="text-sm sm:text-base mt-3 uppercase">{t(unit, { count: value ?? 0 })}</span>
      </motion.div>
    );
  });
}

export default function Landing() {
  const t = useTranslations('landing');

  // ANIMATIONS //

  // animation controls
  const barTextControls = useAnimation();
  const barBgControls = useAnimation();
  const timerControls = useAnimation();

  // motion variants
  const barTextVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1.4,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
        mass: 1.6
      }
    },
    standardSize: {
      scale: 1,
      transition: {
        duration: 1,
        ease: cubic
      }
    }
  };

  const barBgVariants = {
    hFull: { height: '100%', marginBottom: '0' },
    hFit: {
      height: 'auto',
      margin: 'auto',
      transition: {
        duration: 1.2,
        ease: cubic,
        delay: 1.2
      }
    }
  };

  const timerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: cubic,
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  // animation queue
  useEffect(() => {
    (async () => {
      barTextControls.start('visible').then(() => barTextControls.start('standardSize'));

      await barBgControls.start('hFit');
      await timerControls.start('visible');
    })();
  }, [barTextControls, barBgControls, timerControls]);

  return (
    <section
      className="relative flex justify-center items-end w-screen h-screen bg-cover bg-top bg-no-repeat bg-[url('@/public/landing.webp')]"
      id="landing"
    >
      <LanguageSwitcher />
      <motion.div
        className="flex flex-col items-center justify-center w-full gap-y-2 sm:gap-y-4 text-white bg-white/10 backdrop-blur shadow font-alice"
        animate={barBgControls}
        variants={barBgVariants}
        initial="hFull"
      >
        <motion.div
          className="text-center mt-4 sm:mt-5 mx-2"
          animate={barTextControls}
          variants={barTextVariants}
          initial="hidden"
        >
          <h1 className="text-3xl sm:text-5xl text-center">
            Karolina <br className="md:hidden" />
            <span className="text-xl md:text-4xl">&</span>
            <br className="md:hidden" /> Valentino
          </h1>
          <p className="text-lg sm:text-2xl">{t('date')}</p>
        </motion.div>
        <motion.div
          className="max-md:grid max-md:grid-cols-4 max-md:gap-4 md:flex md:max-w-3xl lg:max-w-5xl mb-2 sm:mb-3 mx-auto"
          initial="hidden"
          animate={timerControls}
          variants={timerVariants}
        >
          <Countdown />
        </motion.div>
      </motion.div>
    </section>
  );
}
