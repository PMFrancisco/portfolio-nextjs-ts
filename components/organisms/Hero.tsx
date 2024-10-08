import { Heading } from "../atoms/Heading";
import { Paragraph } from "../atoms/Paragraph";

export const Hero: React.FC = () => {
  return (
    <section className="flex-1 lg:sticky top-0 bg-gradient-to-b from-emerald-600 from-15% to-emerald-200 to-95% p-8 lg:flex lg:items-start lg:justify-end">
      <div className="items-end max-w-lg lg:mt-16 mx-auto lg:mx-0">
        <Heading level={1} className="text-gray-100">
          Hola, soy Francisco Pérez
        </Heading>
        <Paragraph className="text-gray-700 lg:text-gray-100 font-semibold mt-4">
          Soy un desarrollador full stack junior, especializado en el backend y
          el desarrollo de APIs. Bienvenido a mi portafolio.
        </Paragraph>
      </div>
    </section>
  );
};
