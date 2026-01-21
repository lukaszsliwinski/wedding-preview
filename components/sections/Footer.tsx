import { useTranslations } from 'next-intl';
import moment from 'moment';
import Image from 'next/image';

import SectionHeader from '@/components/shared/SectionHeader';
import FadeInDiv from '@/components/shared/FadeInDiv';
import Card from '@/components/shared/Card';
import Icon from '@/components/shared/Icon';

export default function Footer() {
  const t = useTranslations('footer');

  const years = moment().year().toString() === '2025' ? '2025' : `2025-${moment().year()}`

  return (
    <footer className="relative flex flex-col w-screen items-center" id="contact">
      <SectionHeader header={t('header')} />

      <div className="grid md:grid-cols-2 gap-4 xs:gap-6 lg:gap-10 w-full max-w-4xl px-3 xs:px-6 my-6 md:my-16 max-sm:text-sm">
        <FadeInDiv>
          <Card title="Karolina">
            <p className="flex flex-col text-center mt-4">
              <span className="mb-1">{t('tel')}</span>
              <span className="text-nowrap mb-4 font-bold">{process.env.NEXT_PUBLIC_KARO_TEL}</span>
            </p>
          </Card>
        </FadeInDiv>
        <FadeInDiv>
          <Card title="Valentino">
            <p className="flex flex-col text-center mt-4">
              <span className="mb-1">{t('tel')}</span>
              <span className="text-nowrap mb-4 font-bold">{process.env.NEXT_PUBLIC_VALE_TEL}</span>
            </p>
          </Card>
        </FadeInDiv>
      </div>
      
      <FadeInDiv>
        <div className="w-full md:max-w-2xl flex justify-center items-center px-4 mb-4">
          <div className="picture-frame">
            <Image src="/footer.webp" width="800" height="600" alt="footer photo" />
          </div>
        </div>
        <div className="flex flex-col items-center mb-32">
          <h3 className="text-header font-alice text-2xl md:text-4xl mb-2">{t('text')}</h3>
          <Icon src="/icons/smile.svg" className="w-10 h-10 text-theme1" alt="icon" />
        </div>
      </FadeInDiv>
      <div className="absolute bottom-4 flex justify-center w-full select-none">
        <p className="text-xs">&copy; {years} ŁUKASZ ŚLIWIŃSKI</p>
      </div>
    </footer>
  );
}
