'use client';

import { useTranslations } from 'next-intl';
import { Section } from '../atoms/Section';
import { Paragraph } from '../atoms/Paragraph';

export const About: React.FC = () => {
  const t = useTranslations('about');

  return (
    <Section id="about" title={t('title')}>
      <div className="relative bg-[#fffBEB] border-2 border-black shadow-neo overflow-hidden">
        <div className="h-10 bg-[#e5e5e5] border-b-2 border-black flex items-center justify-between px-4">
          <div className="text-xs font-mono text-gray-500 font-bold">NOTES</div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
        </div>

        <div
          className="p-6 md:p-8 relative min-h-[300px]"
          style={{
            backgroundImage: 'linear-gradient(#9ca3af 1px, transparent 1px)',
            backgroundSize: '100% 2rem',
            backgroundPosition: '0 1.5rem',
          }}
        >
          <div className="absolute top-0 left-8 md:left-12 bottom-0 w-0.5 bg-red-300 h-full z-0"></div>
          <div className="relative z-10 pl-6 md:pl-10">
            <Paragraph className="mb-8 font-mono text-lg !leading-[2rem] text-gray-800">
              {t('paragraph1')}
            </Paragraph>
            <Paragraph className="mb-8 font-mono text-lg !leading-[2rem] text-gray-800">
              {t('paragraph2')}
            </Paragraph>
            <Paragraph className="font-mono text-lg !leading-[2rem] text-gray-800">
              {t('paragraph3')}
            </Paragraph>
          </div>
        </div>
      </div>
    </Section>
  );
};
