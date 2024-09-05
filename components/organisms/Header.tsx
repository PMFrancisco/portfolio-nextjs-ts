export const Header: React.FC = () => {
  return (
    <header className="p-4 bg-emerald-600 text-white lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-10">
      <nav className="flex justify-center items-center">
          <a href="#projects" className="mx-2">Proyectos</a>
          <a href="#experience" className="mx-2">Experiencia</a>
          <a href="#studies" className="mx-2">Estudios</a>
          <a href="#skills" className="mx-2">Habilidades</a>
      </nav>
    </header>
  );
};
