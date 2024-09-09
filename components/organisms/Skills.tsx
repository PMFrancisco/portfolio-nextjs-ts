import { Heading } from '../atoms/Heading';
import { skills } from '../../data/skillsData';
import { SkillCategory } from '../molecules/SkillCategory';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className='lg:pb-20'>
      <Heading level={2}>Habilidades</Heading>
      {Object.entries(skills).map(([category, skillList]) => (
        <SkillCategory key={category} category={category} skillList={skillList} />
      ))}
    </section>
  );
};