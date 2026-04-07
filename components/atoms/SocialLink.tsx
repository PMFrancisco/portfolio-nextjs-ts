'use client';

import { IconType } from 'react-icons';
import { useTranslations } from 'next-intl';

type SocialLinkProps = {
  href: string;
  icon: IconType;
  label: string;
};

export const SocialLink: React.FC<SocialLinkProps> = ({
  href,
  icon: Icon,
  label,
}) => {
  const t = useTranslations('a11y');
  const isExternal = href.startsWith('http');
  const isMailto = href.startsWith('mailto:');

  const getAriaLabel = () => {
    if (isExternal) return `${label} ${t('opensInNewTab')}`;
    if (isMailto) return `${label} ${t('opensEmailClient')}`;
    return label;
  };

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={getAriaLabel()}
      className="
        inline-flex items-center justify-center
        w-10 h-10 lg:w-12 lg:h-12
        bg-white text-black font-mono font-bold text-sm lg:text-base
        border-2 border-black shadow-neo
        hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all
        focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-black
        motion-reduce:transition-none motion-reduce:hover:transform-none
      "
    >
      <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
    </a>
  );
};
