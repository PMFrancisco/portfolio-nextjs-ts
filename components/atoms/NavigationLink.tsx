interface NavigationLinkProps {
  children: React.ReactNode;
  link: string;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  children,
  link,
}) => {
  return <a href={link}>{children}</a>;
};
