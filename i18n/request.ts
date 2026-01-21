import { getRequestConfig } from 'next-intl/server';
import { routing } from '@/i18n/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const resolvedLocale = await requestLocale;

  const locale = routing.locales.includes(resolvedLocale as any)
    ? (resolvedLocale as (typeof routing.locales)[number])
    : routing.defaultLocale;

  const messages = {
    en: (await import('@/messages/en.json')).default,
    de: (await import('@/messages/de.json')).default,
    pl: (await import('@/messages/pl.json')).default
  }[locale];

  return { locale, messages };
});
