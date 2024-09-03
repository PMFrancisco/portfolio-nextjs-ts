interface Project {
  name: string;
  description: string;
  link: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface Skills {
  programmingLanguages: string[];
  frameworksAndLibraries: string[];
  toolsAndPlatforms: string[];
  databases: string[];
}

interface CategoryMapping {
  [key: string]: string;
}

export const projects: Project[] = [
  {
    name: "Proyecto 1",
    description: "Descripción del proyecto 1...",
    link: "#",
  },
  {
    name: "Proyecto 2",
    description: "Descripción del proyecto 2...",
    link: "#",
  },
  {
    name: "Proyecto 3",
    description: "Descripción del proyecto 2...",
    link: "#",
  },
];

export const experience: Experience[] = [
  {
    role: "Mozo especialista",
    company: "Avanza Outsourcing",
    period: "2015 - Presente",
    description: "Responsabilidades en el puesto...",
  },
];

export const skills: Skills = {
  programmingLanguages: ["JavaScript", "TypeScript", "HTML5", "CSS", "ES6"],
  frameworksAndLibraries: ["React", "Next.js", "Express.js", "Nodejs", "Tailwind CSS"],
  toolsAndPlatforms: ["Git", "GitHub", "Docker", "Firebase"],
  databases: ["MongoDB", "MySQL", "PostgreSQL"],
};

export const categoryMapping: CategoryMapping = {
  programmingLanguages: "Lenguajes de Programación",
  frameworksAndLibraries: "Frameworks y Librerías",
  toolsAndPlatforms: "Herramientas y Plataformas",
  databases: "Bases de Datos",
};
