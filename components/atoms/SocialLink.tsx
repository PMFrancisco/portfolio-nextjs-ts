type SocialLinkProps = {
  href: string;
  label: string;
};

export const SocialLink: React.FC<SocialLinkProps> = ({ href, label }) => {
  return (
    <a href={href} className="text-emerald-600 font-medium mx-2">
      {label}
    </a>
  );
};
