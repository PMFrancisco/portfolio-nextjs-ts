import { experience } from '../../data/experienceData';
import { SectionList } from './SectionList';

export const Experience: React.FC = () => {
  return (
    <SectionList 
      title="Experiencia Profesional" 
      items={experience} 
      type="experience" 
    />
  );
};