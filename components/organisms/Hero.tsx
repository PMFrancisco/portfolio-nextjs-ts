import React from 'react';
import { Heading } from '../atoms/Heading';

export const Hero: React.FC = () => {
  return (
    <section className="flex-1 bg-emerald-600 dark:bg-emerald-800 p-8 lg:sticky lg:top-0 lg:h-auto lg:flex lg:items-start">
      <div className="max-w-lg mx-auto lg:mx-0">
        <Heading level={1} className="text-white">Hola, soy Francisco Pérez</Heading>
        <p className="text-white mt-4">
          Soy un desarrollador full stack junior, especializado en el backend y el desarrollo de APIs. Bienvenido a mi portafolio.
        </p>
      </div>
    </section>
  );
};
