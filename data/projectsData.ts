export interface Project {
  id: string;
  link: string;
  imageUrl: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    id: 'meraParivar',
    link: '#',
    imageUrl: '/projectImages/mera-parivar-mvp.webp',
    skills: [
      'JavaScript',
      'React',
      'Node.js',
      'Express',
      'Material UI',
      'API PayPal',
    ],
  },
  {
    id: 'questWeaver',
    link: '#',
    imageUrl: '/projectImages/quest-weaver.webp',
    skills: [
      'JavaScript',
      'React',
      'Node.js',
      'Tailwind CSS',
      'Socket',
      'OAuth 2.0',
    ],
  },
  {
    id: 'libraryApi',
    link: 'https://github.com/PMFrancisco/auj-backend',
    imageUrl: '/projectImages/library-api-swagger.webp',
    skills: ['TypeScript', 'Node.js', 'Express', 'Swagger', 'JSON'],
  },
  {
    id: 'ligatgm',
    link: 'https://www.ligatgm.es/',
    imageUrl: '/projectImages/ligatgm.webp',
    skills: ['TypeScript', 'Firebase'],
  },
];
