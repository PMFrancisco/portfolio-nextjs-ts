import { ListItem } from '../molecules/ListItem';
import { Heading } from '../atoms/Heading';

type SectionListProps = {
  title: string;
  items: {
    title: string;
    subtitle: string;
    period: string;             
    description: string; 
  }[];
  type: 'experience' | 'studies';
};

export const SectionList: React.FC<SectionListProps> = ({ title, items, type }) => {
  return (
    <section id={type}>
      <Heading level={2}>{title}</Heading>
      <ul>
        {items.map((item, index) => (
          <ListItem 
            key={index} 
            title={item.title} 
            subtitle={item.subtitle} 
            period={item.period} 
            description={item.description} 
            type={type} 
          />
        ))}
      </ul>
    </section>
  );
};
