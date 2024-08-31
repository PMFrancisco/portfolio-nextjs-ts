import React from 'react';
import { Heading } from '../atoms/Heading';

export const Comments: React.FC = () => {
  return (
    <section id="comments" className="p-8">
      <Heading level={2}>Comentarios</Heading>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
        <p>Sección de comentarios próximamente...</p>
      </div>
    </section>
  );
};
