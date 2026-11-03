import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/routing';

const flags: Record<Locale, { viewBox: string; shapes: ReactNode }> = {
  en: {
    viewBox: '0 0 60 30',
    shapes: (
      <>
        <clipPath id="flag-gb-diagonals">
          <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
        </clipPath>
        <path fill="#012169" d="M0 0h60v30H0z" />
        <path stroke="#fff" strokeWidth="6" d="m0 0 60 30m0-30L0 30" />
        <path
          stroke="#c8102e"
          strokeWidth="4"
          clipPath="url(#flag-gb-diagonals)"
          d="m0 0 60 30m0-30L0 30"
        />
        <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
        <path stroke="#c8102e" strokeWidth="6" d="M30 0v30M0 15h60" />
      </>
    )
  },
  de: {
    viewBox: '0 0 5 3',
    shapes: (
      <>
        <path fill="#000" d="M0 0h5v1H0z" />
        <path fill="#d00" d="M0 1h5v1H0z" />
        <path fill="#ffce00" d="M0 2h5v1H0z" />
      </>
    )
  },
  pl: {
    viewBox: '0 0 8 5',
    shapes: (
      <>
        <path fill="#fff" d="M0 0h8v2.5H0z" />
        <path fill="#dc143c" d="M0 2.5h8V5H0z" />
      </>
    )
  }
};

interface FlagProps {
  locale: Locale;
}

export default function Flag({ locale }: FlagProps) {
  const { viewBox, shapes } = flags[locale];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      className="w-full h-full"
      aria-hidden="true"
    >
      {shapes}
    </svg>
  );
}
