import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';
import { Alice, Alex_Brush, Inter } from 'next/font/google';

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-inter'
});

const alice = Alice({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alice'
});

const alexBrush = Alex_Brush({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alex-brush'
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = {
    pl: (await import('@/messages/pl.json')).default,
    en: (await import('@/messages/en.json')).default,
    de: (await import('@/messages/de.json')).default
  }[locale];

  return (
    <html lang={locale} className="overflow-x-hidden">
      <head>
        <title>Karolina & Valentino</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${alice.variable} ${alexBrush.variable} font-inter text-paragraph tracking-[1] leading-6.5 bg-[#f5f5f5]`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <main className="w-screen">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
