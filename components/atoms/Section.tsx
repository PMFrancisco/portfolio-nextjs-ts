type SectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

import { Heading } from './Heading';

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = '',
}) => {
  return (
    <section id={id} className={`scroll-mt-8 ${className}`}>
      <div className="flex items-center gap-4 mb-8 border-b-4 border-black pb-2">
        <div className="w-6 h-6 bg-black"></div>
        <Heading
          level={2}
          className="uppercase tracking-widest text-xl md:text-2xl"
        >
          {title}
        </Heading>
      </div>
      {children}
    </section>
  );
};
