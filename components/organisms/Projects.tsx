'use client';

import { useTranslations } from 'next-intl';
import { ProjectCard } from '../molecules/ProjectCard';
import { Section } from '../atoms/Section';
import { projects } from '@/data/projectsData';

export const Projects: React.FC = () => {
  const t = useTranslations('projects');

  return (
    <Section id="projects" title={t('title')}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={t(`items.${project.id}.name`)}
            description={t(`items.${project.id}.description`)}
            link={project.link}
            imageUrl={project.imageUrl}
            skills={project.skills}
            viewProjectLabel={t('viewProject')}
          />
        ))}
      </div>
    </Section>
  );
};
