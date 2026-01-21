'use client';

import { useEffect, useState } from 'react';

interface IconProps {
  src: string;
  className?: string;
  alt?: string;
}

export default function Icon({ src, className = '', alt = '' }: IconProps) {
  const [svgContent, setSvgContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchSvg = async () => {
      try {
        const res = await fetch(src);
        if (!res.ok) throw new Error(`Cannot fetch SVG: ${res.statusText}`);
        let svgText = await res.text();

        // Add className to <svg> and set fill/stroke to currentColor
        svgText = svgText.replace(
          /<svg([^>]*)>/,
          `<svg$1 class="${className}" fill="currentColor" stroke="currentColor">`
        );

        setSvgContent(svgText);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSvg();
  }, [src, className]);

  if (!svgContent) return null;

  return (
    <span
      role={alt ? 'img' : undefined}
      aria-label={alt}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
