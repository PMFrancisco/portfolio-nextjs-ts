type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({ children, className = "" }) => {
  return <p className={`font-sans text-base leading-relaxed ${className}`}>{children}</p>;
};
