'use client';

import { useTranslations } from 'next-intl';
import { Heading } from "../atoms/Heading";
import { SocialLink } from "../atoms/SocialLink";
import { LanguageSwitcher } from "../atoms/LanguageSwitcher";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

interface HeroProps {
  activeSection?: string;
}

export const Hero: React.FC<HeroProps> = ({ activeSection }) => {
  const t = useTranslations();

  const navItems = [
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.toolbox'), href: "#toolbox" },
    { label: t('nav.projects'), href: "#projects" },
    { label: t('nav.experience'), href: "#experience" },
    { label: t('nav.studies'), href: "#studies" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  return (
    <section className="h-full flex flex-col p-8 lg:p-12 xl:p-16 bg-emerald-500 text-white relative border-b-4 lg:border-b-0 border-black overflow-y-auto scrollbar-hide">
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>

      <div className="max-w-xl mx-auto lg:mx-0 flex flex-col min-h-full">
        <div className="shrink-0 mb-6 xl:mb-10 pt-4">
            <div className="flex flex-col xl:flex-row xl:items-end gap-6 mb-6">
                <div className="w-20 h-20 lg:w-24 lg:h-24 xl:w-36 xl:h-36 rounded-full overflow-hidden border-4 border-black shadow-neo bg-white shrink-0">
                   <div className="w-full h-full bg-gray-200 flex items-center justify-center text-black font-mono text-2xl lg:text-3xl font-bold">FP</div>
                </div>
                
                <div className="flex flex-col gap-3">
                    <Heading level={1} className="text-4xl lg:text-5xl xl:text-7xl text-white drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] leading-none">
                    {t('hero.name')}
                    </Heading>
                    
                    <div className="inline-block bg-black text-white px-3 py-1 lg:px-4 lg:py-2 transform -rotate-1 shadow-neo border-2 border-white w-fit">
                        <h2 className="text-base lg:text-lg xl:text-xl font-mono font-bold m-0">
                        {t('hero.role')}
                        </h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="shrink-0 flex flex-col mb-8">
            <p className="font-sans text-base lg:text-lg xl:text-xl leading-relaxed mb-8 max-w-md border-l-4 lg:border-l-8 border-black pl-4 lg:pl-6">
            {t('hero.tagline')}
            </p>

            <nav className="hidden lg:flex flex-col gap-2 xl:gap-4">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a 
                        key={item.href} 
                        href={item.href}
                        className={`text-lg lg:text-xl xl:text-2xl font-mono font-bold hover:translate-x-4 transition-transform w-fit flex items-center gap-3 group ${isActive ? 'translate-x-4 text-black' : 'text-white hover:text-black'}`}
                    >
                        <span className={`w-2 h-2 bg-black transition-transform ${isActive ? 'scale-100' : 'scale-0 group-hover:scale-100'}`}></span>
                        {item.label}
                    </a>
                  );
                })}
            </nav>
        </div>

        <div className="shrink-0 mt-auto pb-4">
            <div className="flex gap-4">
                <SocialLink href="https://github.com/pmfrancisco" icon={FaGithub} label={t('social.github')} />
                <SocialLink href="https://linkedin.com/in/franciscopm" icon={FaLinkedin} label={t('social.linkedin')} />
                <SocialLink href="mailto:francisco.perez.munoz@gmail.com" icon={FaEnvelope} label={t('social.email')} />
            </div>
        </div>
      </div>
    </section>
  );
};
