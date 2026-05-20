import type { TimelineEntry, EducationEntry } from '~/types';

export const timeline: TimelineEntry[] = [
  {
    yearRange: '2026 — hoy',
    durationEs: 'Actualmente',
    durationEn: 'Current',
    isCurrent: true,
    roleEs: 'Full-Stack Developer',
    roleEn: 'Full-Stack Developer',
    company: 'Boring Soft',
    whereEs: 'Consultora · cliente Tigo',
    whereEn: 'Consultancy · Tigo account',
    bullets: [
      {
        es: 'Asignado a Tigo (telco multinacional). Desarrollo y mantenimiento de varios microservicios en producción.',
        en: 'Assigned to Tigo (multinational telco). Building and maintaining multiple production microservices.',
      },
      {
        es: 'Web components con StencilJS — pensados para vivir en múltiples productos de la empresa.',
        en: 'StencilJS web components — designed to live across multiple company products.',
      },
      {
        es: 'CI/CD con Jenkins · despliegues sobre Kubernetes · cultura enterprise.',
        en: 'CI/CD with Jenkins · Kubernetes deployments · enterprise culture.',
      },
    ],
  },
  {
    yearRange: '2023 — hoy',
    durationEs: '3 años 5 meses',
    durationEn: '3 yrs 5 mos',
    roleEs: 'Full-Stack Developer',
    roleEn: 'Full-Stack Developer',
    company: 'Code Control',
    whereEs: 'Argentina',
    whereEn: 'Argentina',
    bullets: [
      {
        es: 'Construcción de plataformas multi-tenant en Next.js (App Router) usadas a diario por equipos de operaciones.',
        en: 'Built multi-tenant platforms on Next.js (App Router) used daily by ops teams.',
      },
      {
        es: 'Modelado de datos en Postgres con Prisma · migraciones con cero downtime.',
        en: 'Postgres data modeling with Prisma · zero-downtime migrations.',
      },
      {
        es: 'Optimización de rendimiento en producción y adaptación móvil.',
        en: 'Production performance work and mobile adaptation.',
      },
      {
        es: 'Planificación de sprint y refinement junto al PO.',
        en: 'Sprint planning and refinement with the PO.',
      },
    ],
  },
  {
    yearRange: '2024 — 2025',
    durationEs: '1 año',
    durationEn: '1 yr',
    roleEs: 'Full-Stack Developer',
    roleEn: 'Full-Stack Developer',
    company: 'Bairu.io',
    whereEs: "Techstars '24 · Bolivia",
    whereEn: "Techstars '24 · Bolivia",
    bullets: [
      {
        es: 'Migración de monolito a microservicios serverless en AWS (Lambda + CDK).',
        en: 'Monolith → serverless microservices on AWS (Lambda + CDK).',
      },
      {
        es: 'Eventos entre servicios con SQS · autenticación con Authorizer.',
        en: 'Inter-service events via SQS · Authorizer-based auth.',
      },
      {
        es: 'Frontends en React y Next.js, integraciones con WhatsApp Business API.',
        en: 'React and Next.js frontends, WhatsApp Business API integrations.',
      },
      {
        es: 'Persistencia mixta SQL/NoSQL según el caso de uso.',
        en: 'Mixed SQL/NoSQL persistence per use case.',
      },
    ],
  },
  {
    yearRange: '2021 — 2022',
    durationEs: '1 año 3 meses',
    durationEn: '1 yr 3 mos',
    roleEs: 'Scrum Master',
    roleEn: 'Scrum Master',
    company: 'Proguide Global Services',
    whereEs: 'Argentina',
    whereEn: 'Argentina',
    bullets: [
      {
        es: 'Facilitación de ceremonias y escalado de Scrum entre equipos.',
        en: 'Ceremony facilitation and Scrum scaling across teams.',
      },
      {
        es: 'Implementación de OKRs y coaching en agilidad.',
        en: 'OKR rollout and agility coaching.',
      },
      {
        es: 'Soporte al Product Owner en armado y priorización de backlog.',
        en: 'Product Owner support on backlog grooming and prioritization.',
      },
    ],
  },
];

export const education: EducationEntry[] = [
  {
    yearRange: '2015 — 2020',
    titleEs: 'Técnico en programación',
    titleEn: 'Programming, Technical degree',
    institution: 'Escuela Técnica Otto Krause',
  },
  {
    yearRange: '2022',
    titleEs: 'Scrum Master · Agile Coach',
    titleEn: 'Scrum Master · Agile Coach',
    institution: 'UTN FRBA',
  },
];
