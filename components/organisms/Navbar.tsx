import { NavigationLink } from "../atoms/NavigationLink";

export const Navbar = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <header className="w-full h-12 flex items-center justify-center gap-6 bg-slate-100 opacity-75 hover:opacity-100 shadow-md">
      {links.map((link, index) => (
        <NavigationLink key={index} link={link.link}>
          {link.name}
        </NavigationLink>
      ))}
    </header>
  );
};
