interface Project {
  name: string;
  description: string;
  link: string;
  imageUrl: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    name: "Proyecto 1",
    description: "Descripción del proyecto 1...",
    link: "#",
    imageUrl: "/mockup-portfolio.jpg",
    skills: ["JavaScript", "TypeScript", "React", "Nodejs", "Tailwind CSS"],
  },
   
  {
    name: "Proyecto 2",
    description: "Descripción del proyecto 2...",
    link: "#",
    imageUrl: "/mockup-portfolio.jpg",
    skills: ["JavaScript", "TypeScript", "React", "Nodejs", "Tailwind CSS"],
  },
  {
    name: "Proyecto 3",
    description: "Descripción del proyecto 2...",
    link: "#",
    imageUrl: "/mockup-portfolio.jpg",
    skills: ["JavaScript", "TypeScript", "React", "Nodejs", "Tailwind CSS"],
  },
];
