import React from 'react';
import { Header } from '../organisms/Header';
import { Hero } from '../organisms/Hero';
import { AboutMe } from '../organisms/AboutMe';
import { Projects } from '../organisms/Projects';
import { Experience } from '../organisms/Experience';
import { Skills } from '../organisms/Skills';
import { Comments } from '../organisms/Comments';
import { Footer } from '../organisms/Footer';

export const MainTemplate: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="lg:flex justify-center lg:space-x-8 max-w-[1088px] gap-8 mx-auto">
        <Hero />
        <main className="p-8 flex-1 lg:flex-grow lg:ml-auto  ">
          <AboutMe />
          <Projects />
          <Experience />
          <Skills />
          <Comments />
        </main>
      </div>
      <Footer />
    </div>
  );
};
