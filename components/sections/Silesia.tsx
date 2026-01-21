import React from 'react';
import { useTranslations } from 'next-intl';
import enJson from '@/messages/en.json';

import Image from 'next/image';
import SectionHeader from '@/components/shared/SectionHeader';
import FadeInDiv from '@/components/shared/FadeInDiv';

export default function Silesia() {
  const t = useTranslations('silesia');
  const sections = enJson.silesia.sections;

  return (
    <section className="flex flex-col w-screen items-center" id="silesia">
      <SectionHeader header={t('header')} />

      <div className="grid md:grid-cols-3 w-full max-w-6xl gap-4 xs:gap-6 md:gap-12 px-3 xs:px-6 mt-6 mb-8 md:my-16">
        {Object.keys(sections).map((idx) => (
          <React.Fragment key={idx}>
            {Number(idx) % 2 !== 0 && (
              <FadeInDiv className="col-span-3 md:col-span-1 w-full hidden md:flex justify-center items-center">
                <div className="picture-frame">
                  <Image src={`/silesia${idx}.webp`} width="350" height="350" alt="silesia photo" />
                </div>
              </FadeInDiv>
            )}
            <FadeInDiv className="md:col-span-2 w-full flex items-center flex-col my-auto">
              <h3 className="w-full text-header text-center md:text-left text-3xl md:text-4xl mt-4">
                {t(`sections.${idx}.header`)}
              </h3>
              <div className="picture-frame">
                <Image
                  src={`/silesia${idx}.webp`}
                  className="block md:hidden mt-3"
                  width="300"
                  height="300"
                  alt="silesia photo"
                />
              </div>
              <p className="flex flex-col text-justify mt-4 max-sm:text-sm/6">
                {t(`sections.${idx}.description`)}
              </p>
            </FadeInDiv>

            {Number(idx) % 2 === 0 && (
              <FadeInDiv className="col-span-3 md:col-span-1 w-full hidden md:flex justify-center items-center">
                <div className="picture-frame">
                  <Image src={`/silesia${idx}.webp`} width="350" height="350" alt="silesia photo" />
                </div>
              </FadeInDiv>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
