'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';
import Flag from '@/components/shared/Flag';
import { motion, type Variants } from 'motion/react';
import { cubic } from '@/lib/motion';

const languageNames: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  pl: 'Polski'
};

const boxVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: cubic,
      delay: 3,
      when: 'beforeChildren',
      staggerChildren: 0.2,
      delayChildren: 0.05
    }
  }
};

const flagVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: cubic
    }
  }
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const changeLocale = (locale: Locale) => router.push(pathname, { locale });

  return (
    <motion.div
      className="fixed top-2 right-2 md:right-6 z-50 shadow-xl border border-theme2 bg-theme2/90 p-2 rounded-lg"
      animate="visible"
      variants={boxVariants}
      initial="hidden"
    >
      <div className="flex gap-3">
        {routing.locales.map((locale) => (
          <motion.button
            key={locale}
            variants={flagVariants}
            onClick={() => changeLocale(locale)}
            aria-label={languageNames[locale]}
            aria-current={locale === currentLocale ? 'true' : undefined}
            className={`
              w-7 h-7 rounded-full overflow-hidden flex items-center justify-center
              transition border border-theme2
              ${locale === currentLocale ? 'ring-2 ring-theme1 scale-105' : 'hover:scale-110 hover:cursor-pointer'}
            `}
          >
            <Flag locale={locale} />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
