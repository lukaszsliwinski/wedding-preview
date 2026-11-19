import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import * as rootParams from 'next/root-params';
import { routing } from '@/i18n/routing';

export default getRequestConfig(async () => {
  // Locale from the [locale] segment of the URL; an unsupported locale returns 404
  const locale = await rootParams.locale();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`@/messages/${locale}.json`)).default
  };
});
