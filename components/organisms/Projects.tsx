import React from 'react';
import { ProjectCard } from '../molecules/ProjectCard';
import { Heading } from '../atoms/Heading';
import { projects } from '../../data/data';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="p-8">
      <Heading level={2}>Proyectos</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} name={project.name} description={project.description} link={project.link} />
        ))}
      </div>
    </section>
  );
};
