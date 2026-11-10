import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import GoogleMap from '@/components/GoogleMap';
import SectionHeader from '@/components/shared/SectionHeader';
import FadeInDiv from '@/components/shared/FadeInDiv';
import Card from '@/components/shared/Card';

const bold = (chunks: ReactNode) => <b>{chunks}</b>;

interface LocationCardProps {
  title: string;
  children: ReactNode;
}

function LocationCard({ title, children }: LocationCardProps) {
  return (
    <FadeInDiv>
      <Card title={title}>
        <p className="flex flex-col my-4 md:px-4 whitespace-pre-wrap text-center">{children}</p>
      </Card>
    </FadeInDiv>
  );
}

export default function Location() {
  const t = useTranslations('location');

  return (
    <section className="w-screen min-h-screen flex flex-col items-center" id="location">
      <SectionHeader header={t('header')} />

      <div className="grid md:grid-cols-2 gap-4 xs:gap-6 w-full max-w-6xl px-3 xs:px-6 my-6 md:my-16">
        <LocationCard title={t(`cards.ceremony.header`)}>
          <span className="max-sm:text-sm/6">{t(`cards.ceremony.description`)}</span>
        </LocationCard>

        <LocationCard title={t(`cards.party.header`)}>
          <span className="max-sm:text-sm/6">{t(`cards.party.description`)}</span>
        </LocationCard>

        <LocationCard title={t('cards.hotel.header')}>
          <GoogleMap
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256.57635166406294!2d18.839040367986875!3d49.59534436232696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471417ae50f13b49%3A0x348e3b6c7eece294!2sKiczory!5e0!3m2!1spl!2spl!4v1794305797844!5m2!1spl!2spl"
            notice={t('map.notice')}
            buttonLabel={t('map.button')}
          />
        </LocationCard>

        <LocationCard title={t('cards.accommodation.header')}>
          <span className="max-sm:text-sm/6 mb-3">{t('cards.accommodation.description.intro')}</span>
          <span className="max-sm:text-sm/6">
            {t.rich('cards.accommodation.description.doubleRoom', { b: bold })}
          </span>
          <span className="max-sm:text-sm/6 mb-3">
            {t.rich('cards.accommodation.description.largerRoom', { b: bold })}
          </span>
          <span className="max-sm:text-sm/6 mb-3">{t('cards.accommodation.description.booking')}</span>
          <span className="max-sm:text-sm/6 mb-3">
            <i>{t('cards.accommodation.description.note')}</i>
          </span>
          <span className="max-sm:text-sm/6">
            {t.rich('cards.accommodation.description.checkIn', { b: bold })}
          </span>
          <span className="max-sm:text-sm/6">
            {t.rich('cards.accommodation.description.checkOut', { b: bold })}
          </span>
        </LocationCard>
      </div>
    </section>
  );
}
