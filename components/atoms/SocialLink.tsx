import { IconType } from "react-icons";

type SocialLinkProps = {
  href: string;
  icon: IconType;
  label: string;
};

export const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, label }) => {
  return (
    <a 
      href={href} 
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        inline-flex items-center justify-center 
        w-10 h-10 lg:w-12 lg:h-12
        bg-white text-black font-mono font-bold text-sm lg:text-base
        border-2 border-black shadow-neo 
        hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all
      "
    >
      <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
    </a>
  );
};
