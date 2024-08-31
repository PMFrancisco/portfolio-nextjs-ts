import React from 'react';
import { SkillItem } from '../molecules/SkillItem';
import { Heading } from '../atoms/Heading';
import { skills } from '../../data/data';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="p-8">
      <Heading level={2}>Habilidades</Heading>
      <ul className="flex flex-wrap">
        {skills.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </ul>
    </section>
  );
};
