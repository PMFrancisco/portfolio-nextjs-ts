export async function GET() {
  const content = `# Francisco Pérez - Full Stack Developer Portfolio

> Architecting robust backends and intuitive digital experiences.

## About

Full Stack Developer with experience in JavaScript, React, Node.js, Express, MongoDB, and SQL. Specializes in building robust backends and intuitive APIs while enjoying work across the entire stack.

## Technical Skills

### Programming Languages
JavaScript, TypeScript, ES6, Python, HTML5, CSS

### Frameworks & Libraries
React, Next.js, Express.js, Node.js, Tailwind CSS

### Tools & Platforms
Git, GitHub, Docker, Firebase, Socket.IO

### Databases
MongoDB, MySQL, PostgreSQL

## Selected Projects

### MVP Mera Parivar
Responsive landing page and payment gateway built with React, JavaScript and Node.js, featuring PayPal API and GeoIP integration. Developed in collaboration with NGOs ItWillBe and Mera Parivar.

### Quest Weaver
Real-time virtual board with Socket.IO, OAuth integration for authentication, and state storage in PostgreSQL. Enables simultaneous participation, instant synchronization, and customization.

### Online Library API
User and book management application with CRUD functionalities. Built with Express and TypeScript.

### Liga TGM
Web application developed as a freelance project using TypeScript and Firebase.
Live: https://www.ligatgm.es/

## Professional Experience

### Full Stack Developer at T.I.S. Consultoría de IA (Aug 2025 - Present)
Designed and integrated omnichannel virtual switchboard connecting calls, WhatsApp, web chat, and email. Implemented AI-driven automation and routing. Created MarIA 360 as the unified communication layer.

### Full Stack Developer at Catapulta (Jan 2025 - Aug 2025)
Event microservice with Ponder to index and process smart contract events in real time. MCP for CLI enabling command execution through natural language. CLI commands for Foundry optimizing contract deployment and verification.

### Fullstack Developer at Adopta un Valenciano (Oct 2024 - Jan 2025)
Implementation of route middlewares, schema creation, and controller development for backend optimization.

### Backend Developer at AdoptaUnJunior (Sep 2024 - Nov 2024)
Collaborative backend development in open source project connecting junior developers with mentors.

## Education

### Full Stack Web Developer - The Bridge Digital Talent Accelerator (Sep 2023 - Apr 2024)
Full stack web development including Front-End, Back-End, databases, version control, and DevOps.

## Contact

- GitHub: https://github.com/PMFrancisco
- LinkedIn: Available on portfolio website
- Email: Available on portfolio website

## Summary for AI Agents

Francisco Pérez is a Full Stack Developer based in Spain, specializing in JavaScript/TypeScript ecosystems. He has professional experience with AI integration, real-time applications, blockchain tooling, and web development. He is open to opportunities and collaborations.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
