export interface Skills {
  [key: string]: string[];
}

export const skills: Skills = {
  frontend: [
    'JavaScript',
    'TypeScript',
    'HTML5',
    'CSS',
    'Tailwind CSS',
    'React',
    'React Native',
    'Next.js',
    'Astro',
    'Expo',
  ],
  backend: ['Node.js', 'Express', 'Fastify', 'tRPC', 'Python', 'REST APIs', 'Socket.IO'],
  databases: ['PostgreSQL', 'SQL', 'MongoDB', 'Redis', 'Firebase Firestore', 'Supabase'],
  devops: ['Git', 'GitHub Actions', 'CI/CD', 'Docker', 'Turborepo', 'Vercel', 'Grafana', 'Prometheus'],
  toolsAndTechnologies: [
    'Prisma',
    'Zod',
    'Vitest',
    'Firebase',
    'Stripe',
    'MCP',
    'Microservices',
    'AI integrations',
    'Foundry',
    'Hardhat',
    'Web3',
  ],
};
