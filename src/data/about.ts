import type { AboutKv } from '~/types';

export const aboutLede = {
  es: 'Llevo alrededor de cuatro años trabajando en producción, casi siempre en equipos pequeños donde el código se revisa en serio. Mi base es TypeScript con <em>Next.js</em>, React y <em>Node</em>, y me muevo bien con Postgres, Kubernetes y AWS. Dicho esto, no busco repetir lo que ya hice: me interesa más el problema que el stack, y aprendo rápido lo que haga falta (Kubernetes lo aprendí en un mes porque el proyecto lo pedía). Antes de programar a tiempo completo pasé un año como Scrum Master, y esa disciplina de planificación se me quedó.',
  en: "I've spent around four years working on production systems, mostly in small teams where code review is taken seriously. My base is TypeScript with <em>Next.js</em>, React and <em>Node</em>, and I'm comfortable with Postgres, Kubernetes and AWS. That said, I'm not looking to repeat what I've already done: I care more about the problem than the stack, and I pick things up fast when a project needs it (I learned Kubernetes in a month because the job asked for it). Before coding full-time I spent a year as a Scrum Master, and that planning discipline stuck.",
};

export const aboutKvs: AboutKv[] = [
  {
    keyEs: 'Qué traigo a un equipo',
    keyEn: 'What I bring to a team',
    valueEs: 'Me hago cargo de las features de punta a punta, desde el diseño técnico hasta el despliegue. Si algo se rompe, respondo yo.',
    valueEn: "I own features end to end, from technical design to deploy. If something breaks, I'm the one who answers.",
  },
  {
    keyEs: 'Estilo de código',
    keyEn: 'Code style',
    valueEs: 'TypeScript estricto, PRs pequeños y tests donde de verdad aportan. Me tomo el code review en serio, el mío y el de los demás.',
    valueEn: 'Strict TypeScript, small PRs, tests where they actually pay off. I take code review seriously, both giving and receiving it.',
  },
  {
    keyEs: 'Entiendo el producto',
    keyEn: 'I get the product side',
    valueEs: 'Después de un año facilitando Scrum sé leer un backlog y hablar con producto sin traductor. Si una prioridad no tiene sentido, lo digo.',
    valueEn: "After a year facilitating Scrum I can read a backlog and talk to product without a translator. If a priority doesn't make sense, I say so.",
  },
  {
    keyEs: 'Qué busco',
    keyEn: 'What I look for',
    valueEs: 'Un buen equipo y problemas que me hagan aprender. No me cierro a sector ni a stack: me adapto a lo que el proyecto necesite.',
    valueEn: "A good team and problems that make me learn. I'm not picky about sector or stack: I adapt to what the project needs.",
  },
];
