type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
};

export const Heading: React.FC<HeadingProps> = ({ level, children, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`text-${level}xl font-bold ${className}`}>{children}</Tag>;
};
