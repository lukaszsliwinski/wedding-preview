interface IconProps {
  src: string;
  className?: string;
}

// The shape comes from the SVG file (used as a mask) and the color from currentColor, i.e. text-* classes
export default function Icon({ src, className = '' }: IconProps) {
  const mask = `url(${src}) center / contain no-repeat`;

  return (
    <span
      aria-hidden="true"
      className={`block shrink-0 bg-current ${className}`}
      style={{ mask, WebkitMask: mask }}
    />
  );
}
