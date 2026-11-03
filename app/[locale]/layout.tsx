import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import './globals.css';
import { Alice, Alex_Brush, Inter } from 'next/font/google';

const inter = Inter({
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

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="overflow-x-hidden">
      <head>
        <title>Karolina & Valentino</title>
      </head>
      <body
        className={`${inter.variable} ${alice.variable} ${alexBrush.variable} font-inter text-paragraph tracking-[1] leading-6.5 bg-background`}
      >
        <NextIntlClientProvider>
          <main className="w-screen">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
