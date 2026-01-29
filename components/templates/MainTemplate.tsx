"use client";

'use client';

import { useTranslations } from 'next-intl';
import { Hero } from "../organisms/Hero";
import { About } from "../organisms/About";
import { Projects } from "../organisms/Projects";
import { Experience } from "../organisms/Experience";
import { Toolbox } from "../organisms/Toolbox";
import { Studies } from "../organisms/Studies";
import { Contact } from "../organisms/Contact";
import { useState, useEffect } from "react";

export const MainTemplate: React.FC = () => {
  const t = useTranslations('footer');
  const [activeSection, setActiveSection] = useState<string>("");

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
        root: null, // viewport
        rootMargin: "-20% 0px -60% 0px", // triggers when element is near the top
        threshold: 0
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      // Only observe sections that are actually in the nav list
      if (["about", "toolbox", "projects", "experience", "studies", "contact"].includes(section.id)) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:h-screen lg:grid lg:grid-cols-2 overflow-hidden bg-cream">
      {/* Left Panel: Fixed Sidebar (50%) */}
      {/* Added overflow-y-auto to handle short screens/tall content */}
      <aside className="lg:h-full lg:overflow-hidden lg:border-r-4 lg:border-black bg-white z-20 relative flex flex-col">
        <Hero activeSection={activeSection} />
      </aside>

      {/* Right Panel: Scrollable Content (50%) */}
      <main className="lg:h-full lg:overflow-y-auto scroll-smooth bg-cream">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col gap-16">
           <About />
           <Toolbox />
           <Projects />
           <Experience />
           <Studies />
           <Contact />
           <footer className="text-center text-sm font-mono text-gray-500 pb-8 border-t-2 border-gray-200 pt-8 mt-8">
             {t('copyright', { year: new Date().getFullYear() })}
           </footer>
        </div>
      </main>
    </div>
  );
};
