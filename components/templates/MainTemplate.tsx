import { Header } from "../organisms/Header";
import { Hero } from "../organisms/Hero";
import { AboutMe } from "../organisms/AboutMe";
import { Projects } from "../organisms/Projects";
import { Experience } from "../organisms/Experience";
import { Skills } from "../organisms/Skills";
import { Footer } from "../organisms/Footer";

export const MainTemplate: React.FC = () => {
  return (
    <div className="lg:h-screen lg:flex lg:flex-col">
      <Header />
      <div className="lg:flex lg:flex-1 lg:overflow-hidden lg:pt-[32px] lg:pb-[64px] max-w-[1088px] mx-auto gap-8 justify-center">
        <Hero />
        <main className="grid mx-auto max-w-lg p-8 md:px-0 lg:my-8 gap-8 flex-1 lg:overflow-y-auto">
          <AboutMe />
          <Projects />
          <Experience />
          <Skills />
        </main>
      </div>
      <Footer />
    </div>
  );
};