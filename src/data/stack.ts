import type { StackCell } from '~/types';

export const stack: StackCell[] = [
  {
    catEs: 'Lenguajes',
    catEn: 'Languages',
    items: [
      { label: 'TypeScript', noteEs: 'dominante · 4 años', noteEn: 'primary · 4 yrs' },
      { label: 'JavaScript' },
      { label: 'SQL · PL/pgSQL' },
    ],
  },
  {
    catEs: 'Frontend',
    catEn: 'Frontend',
    items: [
      { label: 'Next.js 16', noteEs: 'App Router · Server Components · Actions', noteEn: 'App Router · Server Components · Actions' },
      { label: 'React 19' },
      { label: 'Astro · MDX' },
      { label: 'Tailwind 4 · shadcn/ui · Radix' },
    ],
  },
  {
    catEs: 'Backend',
    catEn: 'Backend',
    items: [
      { label: 'Node.js · Express' },
      { label: 'Bun + Hono + Zod' },
      { label: 'Next.js Server Actions' },
      { label: 'Strapi 5 (CMS)' },
    ],
  },
  {
    catEs: 'Datos',
    catEn: 'Data',
    items: [
      { label: 'PostgreSQL', noteEs: 'RLS · functions · migrations', noteEn: 'RLS · functions · migrations' },
      { label: 'Prisma 7' },
      { label: 'Supabase', noteEs: 'Auth · SSR · Storage · Realtime', noteEn: 'Auth · SSR · Storage · Realtime' },
      { label: 'Redis · Valkey', noteEs: 'cache · colas', noteEn: 'cache · queues' },
      { label: 'NoSQL' },
    ],
  },
  {
    catEs: 'Mobile',
    catEn: 'Mobile',
    items: [
      { label: 'React Native' },
      { label: 'Stencil · web components' },
    ],
  },
  {
    catEs: 'UI · UX libs',
    catEn: 'UI · UX libs',
    items: [
      { label: 'React Hook Form + Zod' },
      { label: 'TanStack Query · Table' },
      { label: 'Zustand · Jotai' },
      { label: 'DnD Kit · Recharts · React PDF' },
    ],
  },
  {
    catEs: 'Cloud · DevOps',
    catEn: 'Cloud · DevOps',
    items: [
      { label: 'AWS', noteEs: 'Lambda · CDK · EC2 · SQS', noteEn: 'Lambda · CDK · EC2 · SQS' },
      { label: 'Kubernetes · Jenkins' },
      { label: 'Docker', noteEs: 'multi-stage', noteEn: 'multi-stage' },
      { label: 'GitHub Actions · GitLab CI' },
      { label: 'Cypress · PostHog' },
    ],
  },
  {
    catEs: 'AI · Integraciones',
    catEn: 'AI · Integrations',
    items: [
      { label: 'MCP servers', noteEs: 'servidor propio · CLI', noteEn: 'custom server · CLI' },
      { label: 'WhatsApp Business API' },
      { label: 'Resend · Nodemailer' },
      { label: 'Conekta (payments)' },
    ],
  },
  {
    catEs: 'Método',
    catEn: 'Method',
    items: [
      { label: 'Scrum · OKRs · Kanban' },
      { label: 'Code review riguroso' },
      { label: 'Husky · ESLint · Prettier' },
    ],
  },
  {
    catEs: 'Aprendiendo',
    catEn: 'Learning',
    items: [
      { label: 'Rust' },
      { label: 'Diseño event-driven' },
      { label: 'System design' },
    ],
  },
  {
    catEs: 'Certificaciones',
    catEn: 'Certifications',
    items: [
      { label: 'Scrum Master' },
      { label: 'Agile Coach', noteEs: 'UTN FRBA', noteEn: 'UTN FRBA' },
      { label: 'Front-End con React' },
      { label: 'Agile Kanban' },
    ],
  },
  {
    catEs: 'Buscando',
    catEn: 'Looking for',
    inverted: true,
    items: [
      { label: 'Teletrabajo 100%', noteEs: 'desde España', noteEn: 'from Spain' },
      { label: 'Full-time' },
      { label: 'Equipos de producto' },
    ],
  },
];
