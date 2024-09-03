import { Heading } from '../atoms/Heading';
import { skills } from '../../data/data';
import { SkillCategory } from '../molecules/SkillCategory';

export const Skills: React.FC = () => {
  return (
    <section id="skills">
      <Heading level={2} className='mb-4'>Habilidades</Heading>
      {Object.entries(skills).map(([category, skillList]) => (
        <SkillCategory key={category} category={category} skillList={skillList} />
      ))}
    </section>
  );
};