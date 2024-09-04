import { Button } from '../atoms/Button';
import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

type ProjectCardProps = {
  name: string;
  description: string;
  link: string;
  imageUrl: string;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link, imageUrl }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className='w-full h-64 overflow-hidden rounded-lg'>
        <img src={imageUrl} alt={name} className="w-full h-full object-cover hover:scale-125 duration-300" />
      </div>
      <Heading level={3} className='my-2'>{name}</Heading>
      <Paragraph>{description}</Paragraph>
      <Button href={link}>Ver más</Button>
    </div>
  );
};
