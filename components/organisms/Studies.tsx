import { JobItem } from '../molecules/JobItem';
import { Heading } from '../atoms/Heading';
import { studies } from '../../data/studiesData';

export const Studies: React.FC = () => {
  return (
    <section id="studies">
      <Heading level={2}>Estudios y certificaciones</Heading>
      <ul>
        {studies.map((study) => (
          <JobItem key={study.degree} role={study.degree} company={study.center} period={study.period} description={study.description} />
        ))}
      </ul>
    </section>
  );
};
