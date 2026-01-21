import Link from 'next/link';

interface ButtonLinkProps {
  label: string;
  href: string;
}

export default function ButtonLink({ label, href }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="mx-auto my-4 rounded-lg border border-black shadow-lg max-sm:text-sm hover:text-theme2 hover:border-theme2 shadow-black/20 hover:shadow-black/10 px-6 py-2 font-bold transition duration-100"
    >
      {label}
    </Link>
  );
}
