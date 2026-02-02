import { ListItem } from '../molecules/ListItem';
import { Section } from '../atoms/Section';

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

export const SectionList: React.FC<SectionListProps> = ({
  title,
  items,
  type,
}) => {
  return (
    <Section id={type} title={title}>
      <div className="relative">
        <ul className="flex flex-col gap-8">
          {items.map((item, index) => (
            <ListItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              period={item.period}
              description={item.description}
              type={type}
              isLast={index === items.length - 1}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
};
