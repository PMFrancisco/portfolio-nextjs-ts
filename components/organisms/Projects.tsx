import { ProjectCard } from '../molecules/ProjectCard';
import { Heading } from '../atoms/Heading';
import { projects } from '../../data/projectsData';

export const Projects: React.FC = () => {
  return (
    <section id="projects">
      <Heading level={2}>Proyectos</Heading>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.name} name={project.name} description={project.description} link={project.link} />
        ))}
      </div>
    </section>
  );
};
