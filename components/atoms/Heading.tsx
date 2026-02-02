type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  level: HeadingLevel;
  children: React.ReactNode;
  className?: string;
};

const headingTags = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const;

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = '',
}) => {
  const Tag = headingTags[level];
  const baseStyles = 'font-mono font-bold text-black';

  const sizeStyles: Record<HeadingLevel, string> = {
    1: 'text-4xl lg:text-5xl',
    2: 'text-3xl lg:text-4xl',
    3: 'text-2xl lg:text-3xl',
    4: 'text-xl lg:text-2xl',
    5: 'text-lg',
    6: 'text-base',
  };

  return (
    <Tag className={`${baseStyles} ${sizeStyles[level]} ${className}`}>
      {children}
    </Tag>
  );
};
