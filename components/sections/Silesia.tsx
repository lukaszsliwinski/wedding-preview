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

      <div className="flex flex-col w-full max-w-6xl gap-4 xs:gap-6 md:gap-12 px-3 xs:px-6 mt-6 mb-8 md:my-16">
        {Object.keys(sections).map((idx) => {
          const imageFirst = Number(idx) % 2 !== 0;
          const textColumn = imageFirst ? 'md:col-start-2' : 'md:col-start-1';
          const imageColumn = imageFirst ? 'md:col-start-1' : 'md:col-start-3';

          return (
            <FadeInDiv key={idx} className="grid md:grid-cols-3 md:gap-x-12">
              <h3
                className={`text-header text-center md:text-left text-3xl md:text-4xl mt-4 self-end md:col-span-2 ${textColumn}`}
              >
                {t(`sections.${idx}.header`)}
              </h3>
              <div
                className={`flex justify-center items-center md:row-start-1 md:row-span-2 ${imageColumn}`}
              >
                <div className="picture-frame">
                  <Image
                    src={`/silesia${idx}.webp`}
                    className="w-[300px] md:w-[350px] mt-3 md:mt-0"
                    width="350"
                    height="350"
                    alt="silesia photo"
                  />
                </div>
              </div>
              <p
                className={`flex flex-col text-justify mt-4 max-sm:text-sm/6 self-start md:col-span-2 ${textColumn}`}
              >
                {t(`sections.${idx}.description`)}
              </p>
            </FadeInDiv>
          );
        })}
      </div>
    </section>
  );
}
