'use client';

import { useTranslations } from 'next-intl';
import { Hero } from '../organisms/Hero';
import { About } from '../organisms/About';
import { Projects } from '../organisms/Projects';
import { Experience } from '../organisms/Experience';
import { Toolbox } from '../organisms/Toolbox';
import { Studies } from '../organisms/Studies';
import { Contact } from '../organisms/Contact';
import { useState, useEffect, useRef } from 'react';

export const MainTemplate: React.FC = () => {
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState<string>('');
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return;

    const mediaQuery = window.matchMedia('(min-width: 1024px)');

    const handleWheel = (e: WheelEvent) => {
      if (main.contains(e.target as Node)) return;
      e.preventDefault();
      main.scrollBy({ top: e.deltaY, behavior: 'instant' });
    };

    const update = () => {
      document.removeEventListener('wheel', handleWheel);
      if (mediaQuery.matches) {
        document.documentElement.style.overflow = 'hidden';
        document.addEventListener('wheel', handleWheel, { passive: false });
      } else {
        document.documentElement.style.overflow = '';
      }
    };

    update();
    mediaQuery.addEventListener('change', update);

    return () => {
      document.documentElement.style.overflow = '';
      document.removeEventListener('wheel', handleWheel);
      mediaQuery.removeEventListener('change', update);
    };
  }, []);

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
    <div className="lg:h-screen lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_auto] overflow-hidden bg-cream">
      <a href="#main-content" className="sr-only sr-only-focusable">
        {t('a11y.skipToContent')}
      </a>

      <aside className="lg:h-full lg:min-h-0 lg:overflow-hidden lg:border-r-4 lg:border-black bg-white z-20 relative flex flex-col">
        <Hero activeSection={activeSection} />
      </aside>

      <main
        ref={mainRef}
        id="main-content"
        className="lg:h-full lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain scroll-smooth bg-cream"
      >
        <div className="p-8 md:p-12 lg:p-16 flex flex-col gap-16">
          <About />
          <Toolbox />
          <Projects />
          <Experience />
          <Studies />
          <Contact />
        </div>
      </main>

      <footer className="lg:col-span-2 text-center text-sm font-mono text-gray-600 pb-8 border-t-2 border-gray-200 pt-8 bg-cream">
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </footer>
    </div>
  );
};
