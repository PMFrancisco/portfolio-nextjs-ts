import { ListItem } from '../molecules/ListItem';
import { Heading } from '../atoms/Heading';

type SectionListProps = {
  title: string;                // El título de la sección (Estudios o Experiencia)
  items: {
    title: string;              // Título del ítem (rol o grado)
    subtitle: string;           // Subtítulo del ítem (empresa o centro)
    period: string;             // Período
    description: string;        // Descripción
  }[];
  type: 'experience' | 'studies';  // Tipo de la sección para diferenciar visualmente
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
