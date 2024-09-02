import { Button } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

type ProjectCardProps = {
  name: string;
  description: string;
  link: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <Heading level={3}>{name}</Heading>
      <Paragraph>{description}</Paragraph>
      <Button href={link}>Ver más</Button>
    </div>
  );
};
