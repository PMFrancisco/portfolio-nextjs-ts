import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

type ListItemProps = {
  title: string;      
  subtitle: string;     
  period: string;      
  description: string;  
  type?: 'experience' | 'studies';
};

export const ListItem: React.FC<ListItemProps> = ({ title, subtitle, period, description, type }) => {
  return (
    <li className={`${type === 'experience' ? 'experience-class' : 'studies-class'}`}>
      <Heading level={3}>{title}</Heading>
      <Paragraph className="italic">{subtitle}</Paragraph>  
      <Paragraph className="italic">{period}</Paragraph>
      <Paragraph>{description}</Paragraph>
    </li>
  );
};
