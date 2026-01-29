'use client';

import { useTranslations } from 'next-intl';
import { SectionList } from './SectionList';
import { studies } from '@/data/studiesData';

export const Studies: React.FC = () => {
  const t = useTranslations('studies');

  const items = studies.map((item) => ({
    title: t(`items.${item.id}.title`),
    subtitle: t(`items.${item.id}.subtitle`),
    period: t(`items.${item.id}.period`),
    description: t(`items.${item.id}.description`),
  }));

  return (
    <SectionList 
      title={t('title')} 
      items={items} 
      type="studies" 
    />
  );
};
