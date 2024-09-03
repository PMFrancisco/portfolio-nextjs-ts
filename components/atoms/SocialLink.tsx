type SocialLinkProps = {
  href: string;
  label: string;
};

export const SocialLink: React.FC<SocialLinkProps> = ({ href, label }) => {
  return (
    <a href={href} className="text-emerald-500 dark:text-emerald-300 mx-2">
      {label}
    </a>
  );
};
