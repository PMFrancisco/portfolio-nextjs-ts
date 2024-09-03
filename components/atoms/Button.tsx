type ButtonProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <a href={href} className="px-4 py-2 bg-emerald-500 dark:bg-emerald-700 text-white rounded-lg">
      {children}
    </a>
  );
};
