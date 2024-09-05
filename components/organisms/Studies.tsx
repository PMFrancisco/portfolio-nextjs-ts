import { studies } from '../../data/studiesData';
import { SectionList } from './SectionList';

export const Studies: React.FC = () => {
  return (
    <SectionList 
      title="Estudios y certificaciones" 
      items={studies} 
      type="studies" 
    />
  );
};
