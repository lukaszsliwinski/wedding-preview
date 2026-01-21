'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import Flag from 'react-world-flags';
import { motion, useAnimation } from 'framer-motion';

const languageData: Record<Locale, { flag: string }> = {
  en: { flag: 'GB' },
  de: { flag: 'DE' },
  pl: { flag: 'PL' }
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = (pathname.split('/')[1] as Locale) || routing.defaultLocale;

  const changeLocale = (locale: Locale) => {
    const parts = pathname.split('/');
    parts[1] = routing.locales.includes(parts[1] as Locale) ? locale : `${locale}/${parts[1]}`;
    router.push(parts.join('/'));
  };

  // ANIMATIONS //

  // animation controls
  const boxControls = useAnimation();
  const wrapperControls = useAnimation();

  // motion variants
  const cubic = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

  const boxVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: cubic,
        delay: 3
      }
    }
  };

  const wrapperVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: cubic,
        staggerChildren: 0.2,
        delayChildren: 0.05
      }
    }
  };

  const flagVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: cubic
      }
    }
  };

  // animation queue
  useEffect(() => {
    (async () => {
      await boxControls.start('visible');
      await wrapperControls.start('visible');
    })();
  }, []);

  return (
    <motion.div
      className="fixed top-2 right-2 md:right-6 z-50 shadow-xl border border-theme2 bg-theme2/90 p-2 rounded-lg"
      animate={boxControls}
      variants={boxVariants}
      initial="hidden"
    >
      <motion.div
        className="flex gap-3"
        animate={wrapperControls}
        variants={wrapperVariants}
        initial="hidden"
      >
        {routing.locales.map((locale) => (
          <motion.button
            key={locale}
            variants={flagVariants}
            onClick={() => changeLocale(locale)}
            className={`
              w-7 h-7 rounded-full overflow-hidden flex items-center justify-center
              transition border border-theme2
              ${locale === currentLocale ? 'ring-2 ring-theme1 scale-105' : 'hover:scale-110 hover:cursor-pointer'}
            `}
          >
            <Flag
              code={languageData[locale].flag}
              alt="language flag"
              className="object-cover w-full h-full"
            />
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}
