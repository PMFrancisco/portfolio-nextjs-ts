import { JobItem } from '../molecules/JobItem';
import { Heading } from '../atoms/Heading';
import { experience } from '../../data/data';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="p-8">
      <Heading level={2}>Experiencia Profesional</Heading>
      <ul>
        {experience.map((job) => (
          <JobItem key={job.role} role={job.role} company={job.company} period={job.period} description={job.description} />
        ))}
      </ul>
    </section>
  );
};
