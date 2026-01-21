import { useTranslations } from 'next-intl';
import enJson from '@/messages/en.json';

import SectionHeader from '@/components/shared/SectionHeader';
import FadeInDiv from '@/components/shared/FadeInDiv';
import Card from '@/components/shared/Card';

export default function GoodToKnow() {
  const t = useTranslations('goodtoknow');
  const cards = enJson.goodtoknow.cards;

  return (
    <section className="flex flex-col w-screen items-center" id="goodtoknow">
      <SectionHeader header={t('header')} subheader={t('subheader')} />
      <div className="grid md:grid-cols-3 gap-4 xs:gap-6 md:gap-10 w-full max-w-6xl px-3 xs:px-6 my-6 md:my-16">
        {Object.keys(cards).map((idx) => (
          <FadeInDiv key={idx}>
            <Card title={t(`cards.${idx}.header`)} higherHeader={true}>
              <p className="flex flex-col text-center max-sm:text-sm/6 mt-4">
                {t(`cards.${idx}.description`)}
              </p>
              {idx === '1' && (
                <p className="text-lg mt-2">
                  <span>1 EUR &asymp; 4,2 PLN</span>
                  <br />
                  <span>1 CHF &asymp; 4,5 PLN</span>
                </p>
              )}
            </Card>
          </FadeInDiv>
        ))}
      </div>
    </section>
  );
}
