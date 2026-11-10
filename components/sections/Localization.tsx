import { useTranslations } from 'next-intl';

import enJson from '@/messages/en.json';

import GoogleMap from '@/components/GoogleMap';
import SectionHeader from '@/components/shared/SectionHeader';
import FadeInDiv from '@/components/shared/FadeInDiv';
import Card from '@/components/shared/Card';

export default function Localization() {
  const t = useTranslations('localization');
  const cards = enJson.localization.cards;

  return (
    <section className="w-screen min-h-screen flex flex-col items-center" id="localization">
      <SectionHeader header={t('header')} />

      <div className="grid md:grid-cols-2 gap-4 xs:gap-6 w-full max-w-6xl px-3 xs:px-6 my-6 md:my-16">
        {Object.keys(cards).map((idx) => (
          <FadeInDiv key={idx}>
            <Card title={t(`cards.${idx}.header`)}>
              <p className="flex flex-col my-4 md:px-4 whitespace-pre-wrap text-center">
                {(idx === '1' || idx === '2') && (
                  <span className="max-sm:text-sm/6">{t(`cards.${idx}.description`)}</span>
                )}
                {idx === '3' && (
                  <>
                    <GoogleMap
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d256.57635166406294!2d18.839040367986875!3d49.59534436232696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471417ae50f13b49%3A0x348e3b6c7eece294!2sKiczory!5e0!3m2!1spl!2spl!4v1794305797844!5m2!1spl!2spl"
                      notice={t('map.notice')}
                      buttonLabel={t('map.button')}
                    />
                  </>
                )}
                {idx === '4' && (
                  <>
                    <span className="max-sm:text-sm/6 mb-3">{t(`cards.${idx}.description.1`)}</span>
                    <span className="max-sm:text-sm/6">
                      <b>&bull; {t(`cards.${idx}.description.2b`)}</b> -{' '}
                      {t(`cards.${idx}.description.2`)}
                    </span>
                    <span className="max-sm:text-sm/6 mb-3">
                      <b>&bull; {t(`cards.${idx}.description.3b`)}</b> -{' '}
                      {t(`cards.${idx}.description.3`)}
                    </span>
                    <span className="max-sm:text-sm/6 mb-3">{t(`cards.${idx}.description.4`)}</span>
                    <span className="max-sm:text-sm/6 mb-3">
                      <i>{t(`cards.${idx}.description.5i`)}</i>
                    </span>
                    <span className="max-sm:text-sm/6">
                      <b>{t(`cards.${idx}.description.6b`)}</b> {t(`cards.${idx}.description.6`)}
                    </span>
                    <span className="max-sm:text-sm/6">
                      <b>{t(`cards.${idx}.description.7b`)}</b> {t(`cards.${idx}.description.7`)}
                    </span>
                  </>
                )}
              </p>
            </Card>
          </FadeInDiv>
        ))}
      </div>
    </section>
  );
}
