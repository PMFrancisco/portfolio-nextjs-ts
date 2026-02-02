'use client';

import { useTranslations } from 'next-intl';
import { Section } from '../atoms/Section';
import { skills } from '@/data/skillsData';
import { Heading } from '../atoms/Heading';

export const Toolbox: React.FC = () => {
  const t = useTranslations('toolbox');

  const getRotation = (index: number) => {
    const rotations = [
      'rotate-1',
      '-rotate-1',
      'rotate-2',
      '-rotate-2',
      'rotate-0',
      'rotate-3',
      '-rotate-3',
    ];
    return rotations[index % rotations.length];
  };

  return (
    <Section id="toolbox" title={t('title')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, skillList]) => (
          <div
            key={category}
            className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            <Heading
              level={3}
              className="text-xl mb-6 border-b-2 border-black pb-2 inline-block"
            >
              {t(`categories.${category}`)}
            </Heading>
            <div className="flex flex-wrap gap-4">
              {skillList.map((skill: string, index: number) => (
                <div
                  key={skill}
                  className={`
                    relative px-4 py-2 bg-emerald-100 border-2 border-black 
                    text-sm md:text-base font-mono font-bold 
                    shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
                    transition-all duration-200 cursor-default
                    hover:-translate-y-1 hover:translate-x-1 hover:bg-emerald-300 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                    ${getRotation(index)}
                  `}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
