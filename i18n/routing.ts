import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'pl'],
  defaultLocale: 'en',
  // The locale comes only from the URL: no browser detection and no cookie
  localeDetection: false,
  localeCookie: false,
});

export type Locale = (typeof routing.locales)[number];
