interface Skills {
  programmingLanguages: string[];
  frameworksAndLibraries: string[];
  toolsAndPlatforms: string[];
  databases: string[];
}

interface CategoryMapping {
  [key: string]: string;
}

export const skills: Skills = {
  programmingLanguages: ["JavaScript", "TypeScript", "ES6", "Python", "HTML5", "CSS" ],
  frameworksAndLibraries: ["React", "Next.js", "Express.js", "Nodejs", "Tailwind CSS"],
  toolsAndPlatforms: ["Git", "GitHub", "Docker", "Firebase", "Socket"],
  databases: ["MongoDB", "MySQL", "PostgreSQL"],
};

export const categoryMapping: CategoryMapping = {
  programmingLanguages: "Lenguajes de Programación",
  frameworksAndLibraries: "Frameworks y Librerías",
  toolsAndPlatforms: "Herramientas y Plataformas",
  databases: "Bases de Datos",
};