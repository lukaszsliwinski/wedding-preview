import { useTranslations } from 'next-intl';
import Image from 'next/image';

import Invitation from '@/components/Invitation';
import FadeInDiv from '@/components/shared/FadeInDiv';

export default function About() {
  const t = useTranslations('about');

  return (
    <section className="flex flex-col w-screen items-center" id="about">
      <FadeInDiv className="flex justify-center w-full max-w-6xl gap-16 px-3 xs:px-6 my-6 lg:my-16">
        <Invitation />
      </FadeInDiv>
      <div className="grid md:grid-cols-2 w-full max-w-6xl gap-4 xs:gap-6 md:gap-16 px-3 xs:px-6 my-6 md:my-16">
        <FadeInDiv className="w-full hidden md:flex justify-center items-center">
          <div className="picture-frame">
            <Image src="/about.webp" width="400" height="450" alt="our story photo" />
          </div>
        </FadeInDiv>
        <FadeInDiv className="w-full flex items-center flex-col my-auto px-4">
          <h2 className="w-full text-header text-center md:text-left text-3xl md:text-5xl mt-4">
            {t('header')}
          </h2>
          <p className="flex flex-col text-justify max-sm:text-sm/6 mt-4">{t('description')}</p>
        </FadeInDiv>
        <FadeInDiv className="w-full flex md:hidden justify-center items-center">
          <div className="picture-frame">
            <Image src="/about.webp" width="400" height="450" alt="our story photo" />
          </div>
        </FadeInDiv>
      </div>
    </section>
  );
}
