import type { AboutKv } from '~/types';

export const aboutLede = {
  es: 'Cuatro años en producción. Equipos chicos, ciclos cortos, código que pasa revisión. Cubro el stack entero — <em>Next.js</em> y React en el frontend, <em>Node</em> y <em>Bun</em> en el backend, Postgres con Prisma, AWS y Kubernetes cuando el negocio lo pide. Un año como Scrum Master antes de programar full-time dejó la disciplina de planificación — no la nostalgia.',
  en: 'Four years in production. Small teams, short cycles, code that passes review. I cover the full stack — <em>Next.js</em> and React on the frontend, <em>Node</em> and <em>Bun</em> on the backend, Postgres with Prisma, AWS and Kubernetes when the business calls for it. A year as Scrum Master before coding full-time left the planning discipline — not the nostalgia.',
};

export const aboutKvs: AboutKv[] = [
  {
    keyEs: 'Qué traigo a un equipo',
    keyEn: 'What I bring to a team',
    valueEs: 'Dueñidad de feature de punta a punta: descubrimiento, diseño técnico, frontend, backend, datos, despliegue. No paso la pelota.',
    valueEn: "End-to-end feature ownership: discovery, technical design, frontend, backend, data, deploy. I don't pass the ball.",
  },
  {
    keyEs: 'Estilo de código',
    keyEn: 'Code style',
    valueEs: 'TypeScript estricto, tests donde duele, PRs chicos. Code review como ritual, no como trámite.',
    valueEn: 'Strict TypeScript, tests where it hurts, small PRs. Code review as ritual, not paperwork.',
  },
  {
    keyEs: 'Producto, no solo tickets',
    keyEn: 'Product, not just tickets',
    valueEs: 'Vengo de facilitar Scrum: leo backlogs, cuestiono prioridades cuando hace falta, y traduzco entre PM e ingeniería.',
    valueEn: 'Coming from facilitating Scrum: I read backlogs, question priorities when needed, and translate between PM and engineering.',
  },
  {
    keyEs: 'Qué busco en una empresa',
    keyEn: 'What I look for in a company',
    valueEs: 'Lógica de negocio difícil, equipo que revisa código en serio, espacio para tomar decisiones técnicas.',
    valueEn: 'Hard business logic, a team that reviews code seriously, room to make technical calls.',
  },
];
