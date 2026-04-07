'use client';

import { useTranslations } from 'next-intl';
import { Hero } from '../organisms/Hero';
import { About } from '../organisms/About';
import { Projects } from '../organisms/Projects';
import { Experience } from '../organisms/Experience';
import { Toolbox } from '../organisms/Toolbox';
import { Studies } from '../organisms/Studies';
import { Contact } from '../organisms/Contact';
import { useState, useEffect } from 'react';

export const MainTemplate: React.FC = () => {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      if (
        [
          'about',
          'toolbox',
          'projects',
          'experience',
          'studies',
          'contact',
        ].includes(section.id)
      ) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-cream">
      <a href="#main-content" className="sr-only sr-only-focusable">
        {t('a11y.skipToContent')}
      </a>

      <aside className="lg:fixed lg:top-0 lg:left-0 lg:w-1/2 lg:h-[calc(100vh-86px)] lg:border-r-4 lg:border-black bg-white z-20 flex flex-col">
        <Hero activeSection={activeSection} />
      </aside>

      <main
        id="main-content"
        className="lg:ml-[50%] bg-cream"
      >
        <div className="p-8 md:p-12 lg:p-16 lg:pb-32 flex flex-col gap-16">
          <About />
          <Toolbox />
          <Projects />
          <Experience />
          <Studies />
          <Contact />
        </div>
      </main>

      <footer className="lg:fixed lg:bottom-0 lg:left-0 lg:w-full text-center text-sm font-mono text-gray-600 pb-8 border-t-2 border-gray-200 pt-8 bg-cream z-10">
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </footer>
    </div>
  );
};
