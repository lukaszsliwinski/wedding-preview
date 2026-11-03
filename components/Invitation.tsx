import { useTranslations } from 'next-intl';
import Icon from '@/components/shared/Icon';

export default function Invitation() {
  const t = useTranslations('invitation');

  return (
    <div className="w-full h-full sm:w-[800px] max-h-[600px] shadow-2xl mx-auto px-2 bg-background">
      <div className="flex flex-col items-center">
        <div className="h-42 overflow-hidden rotate-180">
          <Icon
            src="/icons/dots_left.svg"
            className="w-[280px] xs:w-[360px] sm:w-[400px] h-[400px] text-theme1 -rotate-45"
            alt="icon"
          />
        </div>
        <span className="text-3xl xs:text-4xl lg:text-5xl font-alex-brush mb-8">
          {t('header')}
        </span>
      </div>
      <p className="flex flex-col text-xs xs:text-sm text-center whitespace-pre-wrap uppercase leading-8 px-8 mb-20">
        <span>{t('text1')}</span>
        <span className="tracking-[4]">{t('text_wider')}</span>
        <span className="inline-block w-px h-8 xs:h-10 bg-black mx-auto my-4 xs:my-5"></span>
        <span className="leading-5">{t('text2')}</span>
      </p>
    </div>
  );
}
