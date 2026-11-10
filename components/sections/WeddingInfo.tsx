import React from 'react';
import { useLocale, useTranslations } from 'next-intl';
import enJson from '@/messages/en.json';

import Image from 'next/image';
import SectionHeader from '@/components/shared/SectionHeader';
import FadeInDiv from '@/components/shared/FadeInDiv';
import Icon from '@/components/shared/Icon';
import Card from '@/components/shared/Card';

const cards = [
  { key: 'dresscode', icon: '/icons/dresscode.svg' },
  { key: 'presents', icon: '/icons/presents.svg' },
  { key: 'transport', icon: '/icons/transport.svg' },
  { key: 'attractions', icon: '/icons/attractions.svg' }
] as const;

export default function WeddingInfo() {
  const t = useTranslations('weddinginfo');
  const currentLocale = useLocale();
  const items = enJson.weddinginfo.agenda.items;
  const attractions: Record<string, string> = t.raw('cards.attractions.description');

  return (
    <section className="flex flex-col w-screen items-center" id="weddinginfo">
      <SectionHeader header={t('header')} />

      <div className="grid md:grid-cols-3 gap-4 xs:gap-6 md:gap-16 w-full max-w-7xl px-3 xs:px-6 mt-6 md:mt-16">
        {cards.map(({ key, icon }, index) => (
          <React.Fragment key={key}>
            {index % 2 === 1 && (
              <div className="w-full hidden md:flex justify-center items-center">
                <Icon src="/icons/dots_left.svg" className="w-64 h-64 text-theme1" />
              </div>
            )}
            <FadeInDiv className="md:col-span-2">
              <Card icon={icon} title={t(`cards.${key}.header`)}>
                <p className="flex flex-col text-center max-sm:text-sm/6 mt-4 whitespace-pre-wrap">
                  {key === 'attractions'
                    ? Object.entries(attractions).map(([idx, item]) => (
                        <span className="inline-flex md:justify-center items-center mb-3" key={idx}>
                          <Icon
                            src="/icons/heart2.svg"
                            className="w-4 h-4 mt-0.5 text-theme1"
                          />
                          &nbsp;<span className="max-md:text-left max-md:ml-4">{item}</span>
                        </span>
                      ))
                    : t(`cards.${key}.description`)}
                </p>
                {key === 'presents' && (
                  <div className="grid grid-cols-5 gap-x-3  gap-y-6 mt-6 text-theme2">
                    <div className="col-span-2 relative flex justify-center items-center">
                      <Icon src="/icons/nogift.svg" className="w-8 h-8" />
                      <div className="absolute left-0 bottom-0 w-[125%] h-0.5 bg-theme2/50 origin-bottom-left -rotate-37"></div>
                    </div>
                    <div className="flex justify-center items-center">
                      <Icon src="/icons/arrow.svg" className="w-4 h-4" />
                    </div>
                    <div className="col-span-2 flex justify-center items-center">
                      <Icon src="/icons/money.svg" className="w-8 h-8" />
                    </div>
                    <div className="col-span-2 relative flex justify-center items-center">
                      <Icon src="/icons/noflowers.svg" className="w-10 h-10" />
                      <div className="absolute left-0 bottom-2 ml-1 w-[110%] h-0.5 bg-theme2/50 origin-bottom-left -rotate-37"></div>
                    </div>
                    <div className="flex justify-center items-center">
                      <Icon src="/icons/arrow.svg" className="w-4 h-4" />
                    </div>
                    <div className="col-span-2 flex justify-center items-end">
                      <Icon src="/icons/lotto.svg" className="w-8 h-8" />
                    </div>
                  </div>
                )}
              </Card>
            </FadeInDiv>
            {index % 2 === 0 && (
              <div className="w-full hidden md:flex justify-center items-center">
                <Icon src="/icons/dots_right.svg" className="h-64 w-64 text-theme1" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 w-full max-w-6xl gap-4 xs:gap-6 lg:gap-12 px-3 xs:px-6 mt-10 lg:mt-16">
        <FadeInDiv className="w-full flex justify-center items-center lg:order-last">
          <div className="picture-frame">
            <Image
              src="/agenda.webp"
              className="w-[400px] lg:w-[450px]"
              width="450"
              height="600"
              alt="agenda photo"
            />
          </div>
        </FadeInDiv>
        <FadeInDiv>
          <Card title={t('agenda.header')} className="max-w-xl mx-auto">
            <div className="grid grid-cols-4 mt-4 leading-5.5 max-xs:-mx-4">
              {Object.keys(items).map((idx) => (
                <React.Fragment key={idx}>
                  <div className={`font-bold text-right ${currentLocale === 'en' ? 'text-nowrap max-sm:pr-3 text-xs/5.5 xs:text-[15px]/5.5' : ''} pr-5 my-1`}>
                    {t(`agenda.items.${idx}.hour`)}
                  </div>
                  <div className="col-span-3 my-1 max-sm:text-sm/5.5">
                    {t(`agenda.items.${idx}.description`)}
                  </div>
                </React.Fragment>
              ))}
              <div className={`font-bold ${currentLocale === 'en' ? 'xs:pr-8 sm:pr-11' : ''} pr-7 pt-1.5`}>
                <Icon src="/icons/sunrise.svg" className="w-8 h-8 ml-auto text-orange-300" />
              </div>
              <div className="col-span-3 max-sm:text-sm/6 pt-3.5">{t('agenda.return')}</div>
            </div>
          </Card>
        </FadeInDiv>
      </div>
      <FadeInDiv className="flex w-screen justify-center items-center flex-col px-3 xs:px-6 my-6 md:my-16">
        <h3 className="text-header text-2xl md:text-4xl mt-4">{t('confirmation.header')}</h3>
        <p className="flex flex-col max-w-4xl text-center max-sm:text-sm/6 whitespace-pre-wrap mt-4">
          <span>{t.rich('confirmation.description', { b: (chunks) => <b>{chunks}</b> })}</span>
        </p>
      </FadeInDiv>
    </section>
  );
}
