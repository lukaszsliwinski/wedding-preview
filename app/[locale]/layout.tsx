import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
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

const title = 'Wedding Website';
const description = 'The wedding website template: venue, schedule and practical information for guests traveling to Poland.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    type: 'website',
    title,
    description,
    images: [
      {
        url: 'https://www.wedding.lukaszsliwinski.pl/screen.png',
        width: 1200,
        height: 630,
        alt: 'Landing page wedding website'
      }
    ]
  }
};

type Props = {
  children: React.ReactNode;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${alice.variable} ${alexBrush.variable} font-inter text-paragraph tracking-[1] leading-6.5 bg-background`}
      >
        <NextIntlClientProvider messages={{ landing: messages.landing }}>
          <main className="w-screen">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
