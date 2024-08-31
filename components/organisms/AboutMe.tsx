import React from 'react';
import { Heading } from '../atoms/Heading';
import { Paragraph } from '../atoms/Paragraph';

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="p-8 bg-">
      <Heading level={2}>Acerca de mí</Heading>
      <Paragraph>Soy un desarrollador Full Stack junior especializado en backend y desarrollo de APIs...</Paragraph>
    </section>
  );
};
