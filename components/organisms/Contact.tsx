'use client';

import { useTranslations } from 'next-intl';
import { Section } from "../atoms/Section";
import { Button } from "../atoms/Button";
import { Paragraph } from "../atoms/Paragraph";

export const Contact: React.FC = () => {
  const t = useTranslations('contact');

  return (
    <Section id="contact" title={t('title')}>
      <div className="bg-white border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="bg-black text-white px-4 py-2 flex items-center justify-between border-b-2 border-black">
          <div className="font-mono font-bold text-sm tracking-widest">MESSAGE_SYSTEM.EXE</div>
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-white border border-gray-500"></div>
            <div className="w-3 h-3 bg-white border border-gray-500"></div>
            <div className="w-3 h-3 bg-emerald-500 border border-white"></div>
          </div>
        </div>

        <div className="p-8 md:p-12 text-center bg-gray-50">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-black mb-6">
            {t('headline')}
          </h2>
          <Paragraph className="text-gray-700 mb-8 max-w-lg mx-auto font-medium text-lg">
            {t('description')}
          </Paragraph>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button href="mailto:francisco.perez.munoz@gmail.com" className="w-full md:w-auto">
              {t('sayHello')}
            </Button>
            <div className="h-px w-12 bg-black md:hidden"></div> {/* Mobile divider */}
            <span className="font-mono font-bold text-gray-400 hidden md:block">-- OR --</span>
            <Button href="https://linkedin.com/in/franciscopm" variant="outline" className="w-full md:w-auto">
              {t('connectLinkedIn')}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
