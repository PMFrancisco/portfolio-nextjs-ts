# Francisco Pérez - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features internationalization (English/Spanish), Atomic Design architecture, and a clean neobrutalist aesthetic.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Internationalization:** next-intl
- **Icons:** react-icons
- **Analytics:** Vercel Analytics

## Features

- Responsive design with mobile-first approach
- Bilingual support (English/Spanish) with automatic locale detection
- Atomic Design component architecture
- Intersection Observer for active section highlighting
- Split-panel layout (fixed sidebar + scrollable content)
- SEO optimized with dynamic metadata

## Project Structure

```
├── app/
│   └── [locale]/          # i18n routing
│       ├── layout.tsx     # Root layout with metadata
│       └── page.tsx       # Home page
├── components/
│   ├── atoms/             # Basic UI elements (Button, Heading, etc.)
│   ├── molecules/         # Composite components (ProjectCard, SkillItem)
│   ├── organisms/         # Page sections (Hero, About, Projects, etc.)
│   └── templates/         # Page layouts (MainTemplate)
├── data/                  # Static data (projects, skills, experience)
├── i18n/                  # Internationalization config
├── messages/              # Translation files (en.json, es.json)
└── public/
    └── projectImages/     # Project screenshots
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/PMFrancisco/portfolio-nextjs-ts.git

# Navigate to project directory
cd portfolio-nextjs-ts

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

| Command              | Description                  |
| -------------------- | ---------------------------- |
| `npm run dev`        | Start development server     |
| `npm run build`      | Build for production         |
| `npm run start`      | Start production server      |
| `npm run lint`       | Run ESLint                   |
| `npm run lint:fix`   | Fix ESLint errors            |
| `npm run type-check` | Run TypeScript type checking |
| `npm run clean`      | Remove `.next` build folder  |

## Internationalization

The portfolio supports English and Spanish. Language can be switched via the language switcher in the navigation.

- **Default locale:** English (`/en`)
- **Supported locales:** English (`en`), Spanish (`es`)
- Translation files are located in `/messages/`

## Sections

- **Hero** - Introduction with navigation and social links
- **About** - Personal background and skills overview
- **Toolbox** - Technical skills organized by category
- **Projects** - Selected work with screenshots and tech tags
- **Experience** - Professional work history
- **Studies** - Education and certifications
- **Contact** - Contact information and call-to-action

## Deployment

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repository directly to Vercel for automatic deployments.

## License

This project is open source and available under the [MIT License](LICENSE).
