'use client';

import { useTranslations } from 'next-intl';
import { SectionList } from './SectionList';
import { experience } from '@/data/experienceData';

export const Experience: React.FC = () => {
  const t = useTranslations('experience');

  const items = experience.map((item) => ({
    title: t(`items.${item.id}.title`),
    subtitle: t(`items.${item.id}.subtitle`),
    period: t(`items.${item.id}.period`),
    description: t(`items.${item.id}.description`),
  }));

  return (
    <SectionList 
      title={t('title')} 
      items={items} 
      type="experience" 
    />
  );
};
