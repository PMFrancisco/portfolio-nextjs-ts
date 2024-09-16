interface Project {
  name: string;
  description: string;
  link: string;
  imageUrl: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    name: "MVP Mera Parivar",
    description:
      "Landing page responsiva y pasarela de pago creada con React, JavaScript y Node.js, con integración de la API de PayPal y GeoIP. Desarrollada para el desafío de tripulación de The Bridge en colaboración con las ONGs ItWillBe y Mera Parivar.",
    link: "#",
    imageUrl: "/projectImages/Mera Parivar MVP screenshot.png",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "Material UI",
      "API PayPal",
    ],
  },
  

  {
    name: "Quest Weaver",
    description:
      "Tablero virtual en tiempo real con Socket.IO, integración con OAuth para autenticación y almacenamiento de estado en PostgresSQL. Permite participación simultánea, sincronización instantánea y personalización.",
    link: "#",
    imageUrl: "/projectImages/Quest Weaver screenshot.png",
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Socket",
      "OAuth 2.0",
    ],
  },
  {
    name: "Biblioteca en Línea",
    description:
      "Aplicación de gestión de usuarios y libros, con funcionalidades de CRUD. Desarrollada con Express y TypeScript, almacenando datos en archivos JSON.",
    link: "https://github.com/PMFrancisco/auj-backend",
    imageUrl: "/projectImages/Library API swagger page screenshot.png",
    skills: [
      "TypeScript",
      "Node.js",
      "Express",
      "Swagger",
      "JSON",
    ],
  },
];

