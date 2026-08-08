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
        es: 'Migración de la billetera Tigo Money (Millicom) al portal Mi Tigo: ~15 microservicios de pagos en Node.js sobre Kubernetes, procesando dinero real en producción.',
        en: 'Migrating the Tigo Money wallet (Millicom) into the Mi Tigo portal: ~15 Node.js payment microservices on Kubernetes, processing real money in production.',
      },
      {
        es: 'Frontend y backend de cada funcionalidad: web component en StencilJS embebido en el portal + su microservicio correspondiente.',
        en: 'Frontend and backend of every feature: a StencilJS web component embedded in the portal + its matching microservice.',
      },
      {
        es: 'Cifrado JWE extremo a extremo, API gateway KrakenD, CI/CD con Jenkins + GitLab, E2E con Playwright y pentest externo antes de cada release.',
        en: 'End-to-end JWE encryption, KrakenD API gateway, Jenkins + GitLab CI/CD, Playwright E2E and external pentesting before every release.',
      },
    ],
  },
  {
    yearRange: '2023 — hoy',
    durationEs: '3 años 7 meses',
    durationEn: '3 yrs 7 mos',
    roleEs: 'Full-Stack Developer',
    roleEn: 'Full-Stack Developer',
    company: 'Code Control',
    whereEs: 'Oil & Gas · remoto',
    whereEn: 'Oil & Gas · remote',
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
    yearRange: '2025 — 2026',
    durationEs: '11 meses',
    durationEn: '11 mos',
    roleEs: 'Full-Stack Developer (freelance)',
    roleEn: 'Full-Stack Developer (freelance)',
    company: 'OMATBOL',
    whereEs: 'Olimpiada Matemática Boliviana',
    whereEn: 'Bolivian Math Olympiad',
    bullets: [
      {
        es: 'Plataforma de inscripciones y exámenes online que soportó ~12.000 estudiantes simultáneos en exámenes nacionales (omatbol.com).',
        en: 'Registration and online exam platform that handled ~12,000 concurrent students during national exams (omatbol.com).',
      },
      {
        es: 'Astro SSR + React en el frontend · Strapi 5 + PostgreSQL detrás · JWT y credenciales QR.',
        en: 'Astro SSR + React on the frontend · Strapi 5 + PostgreSQL behind · JWT and QR credentials.',
      },
      {
        es: 'Generación de PDFs, migración de datos y analítica con PostHog.',
        en: 'PDF generation, data migration and PostHog analytics.',
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
    whereEs: 'Cliente: Banco Galicia',
    whereEn: 'Client: Banco Galicia',
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
    yearRange: '2014 — 2020',
    titleEs: 'Técnico · Maestro Mayor de Obras',
    titleEn: 'Technical degree',
    institution: 'Escuela Técnica Otto Krause',
  },
  {
    yearRange: '2022',
    titleEs: 'Certified Scrum Master (CSM)',
    titleEn: 'Certified Scrum Master (CSM)',
    institution: 'Scrum Alliance · UTN FRBA',
  },
];
