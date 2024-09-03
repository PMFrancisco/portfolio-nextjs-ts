import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

export const AboutMe: React.FC = () => {
  return (
    <section id="about">
      <Heading level={2}>Acerca de mí</Heading>
      <Paragraph>Soy un desarrollador Full Stack junior especializado en stack MERN.</Paragraph>
    </section>
  );
};
