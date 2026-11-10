'use client';

import { useState } from 'react';

interface GoogleMapProps {
  src: string;
  notice: string;
  buttonLabel: string;
}

const sizeClassName = 'w-full xs:w-sm sm:w-md md:max-lg:w-full h-[400px]';

// The map loads only after a click, so Google receives no visitor data before that.
export default function GoogleMap({ src, notice, buttonLabel }: GoogleMapProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title="Google map"
        className={sizeClassName}
        src={src}
        width="450"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    );
  }

  return (
    <span
      className={`${sizeClassName} flex flex-col items-center justify-center bg-background px-6`}
    >
      <span className="max-sm:text-sm/6">{notice}</span>
      <button type="button" onClick={() => setLoaded(true)} className="mx-auto my-4 rounded-lg border border-black shadow-lg max-sm:text-sm hover:text-theme2 hover:border-theme2 shadow-black/20 hover:shadow-black/10 cursor-pointer px-6 py-2 font-bold transition duration-100">
        {buttonLabel}
      </button>
    </span>
  );
}
