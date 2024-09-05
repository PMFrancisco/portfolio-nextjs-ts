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
    imageUrl: "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&h=1280&q=80",
    skills: ["JavaScript", "TypeScript", "React", "Nodejs", "Tailwind CSS"],
  },
   
  {
    name: "Proyecto 2",
    description: "Descripción del proyecto 2...",
    link: "#",
    imageUrl: "https://via.placeholder.com/300x200",
    skills: ["JavaScript", "TypeScript", "React", "Nodejs", "Tailwind CSS"],
  },
  {
    name: "Proyecto 3",
    description: "Descripción del proyecto 2...",
    link: "#",
    imageUrl: "https://via.placeholder.com/300x200",
    skills: ["JavaScript", "TypeScript", "React", "Nodejs", "Tailwind CSS"],
  },
];
