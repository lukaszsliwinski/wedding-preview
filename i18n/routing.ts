import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'pl'],
  defaultLocale: 'en',
  localeDetection: false,
  localeCookie: false,
});

export type Locale = (typeof routing.locales)[number];
