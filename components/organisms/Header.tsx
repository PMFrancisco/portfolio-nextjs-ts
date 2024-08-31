export const Header: React.FC = () => {
  return (
    <header className="p-4 bg-emerald-600 dark:bg-emerald-800 text-white">
      <nav className="flex justify-between items-center">
        <div className="text-lg font-bold">Mi Portfolio</div>
        <div>
          <a href="#about" className="mx-2">Acerca de mí</a>
          <a href="#projects" className="mx-2">Proyectos</a>
          <a href="#experience" className="mx-2">Experiencia</a>
          <a href="#skills" className="mx-2">Habilidades</a>
        </div>
      </nav>
    </header>
  );
};
