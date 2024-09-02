import { SocialLink } from "../atoms/SocialLink";

export const Footer: React.FC = () => {
  return (
    <footer className="p-4 bg-emerald-200 text-center lg:fixed lg:bottom-0 lg:left-0 lg:right-0 lg:z-10">
      <p>&copy; 2024 Francisco Pérez Muñoz</p>
      <div className="mt-2">
        <SocialLink href="https://github.com" label="GitHub" />
        <SocialLink
          href="https://linkedin.com/in/franciscopm"
          label="LinkedIn"
        />
        <SocialLink
          href="mailto:francisco.perez.munoz@gmail.com"
          label="Correo"
        />
      </div>
    </footer>
  );
};
