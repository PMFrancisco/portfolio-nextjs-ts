import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';
import { SkillItem } from './SkillItem';

type ProjectCardProps = {
  name: string;
  description: string;
  link: string;
  imageUrl: string;
  skills: string[];
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link, imageUrl, skills }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className='w-full h-64 overflow-hidden rounded-lg'>
        <img src={imageUrl} alt={name} className="w-full h-full object-cover hover:scale-125 duration-300" />
      </div>
      <Heading level={3} className='my-2'>{name}</Heading>
      <Paragraph>{description}</Paragraph>
      <ul className="flex flex-wrap">
        {skills.map((skill) => (
          <SkillItem key={skill} skill={skill} />
        ))}
      </ul>
    </div>
  );
};
