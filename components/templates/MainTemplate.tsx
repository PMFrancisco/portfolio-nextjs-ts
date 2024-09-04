import { Header } from "../organisms/Header";
import { Hero } from "../organisms/Hero";
import { AboutMe } from "../organisms/AboutMe";
import { Projects } from "../organisms/Projects";
import { Experience } from "../organisms/Experience";
import { Skills } from "../organisms/Skills";
import { Footer } from "../organisms/Footer";

export const MainTemplate: React.FC = () => {
  return (
    <div className="lg:h-screen lg:flex lg:flex-col bg-gray-100">
      <Header />
      <div className="lg:flex lg:flex-1 lg:overflow-hidden lg:pt-[32px] lg:pb-[64px] gap-8 justify-center">
        <Hero />
        <main className="mx-auto p-8 md:px-0 lg:my-8 flex-1 lg:overflow-y-auto flex justify-center lg:justify-start bg-">
          <div className="flex flex-col max-w-lg gap-8 lg:mr-4">
            <AboutMe />
            <Projects />
            <Experience />
            <Skills />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};
