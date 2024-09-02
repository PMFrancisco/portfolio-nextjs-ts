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
    <div className="lg:h-screen lg:flex lg:flex-col">
      <Header />
      <div className="lg:flex lg:flex-1 lg:overflow-hidden lg:pt-[32px] lg:pb-[64px] max-w-[1088px] mx-auto lg:space-x-8 gap-8">
        <Hero />
        <main className="p-8 flex-1 lg:overflow-y-auto lg:flex-grow lg:ml-auto">
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

