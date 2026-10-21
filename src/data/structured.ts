// Datos estructurados (schema.org) y perfil en texto plano, generados desde los
// mismos datos que pinta la web: una sola fuente de verdad para personas y bots.
import { site } from './site';
import { timeline, education } from './experience';
import { builtItems } from './built';
import { stack } from './stack';
import { aboutLede } from './about';

const stripHtml = (s: string) => s.replace(/<[^>]+>/g, '');

const skills = stack
  .filter((cell) => !['Buscando', 'Aprendiendo', 'Certificaciones', 'Método'].includes(cell.catEs))
  .flatMap((cell) => cell.items.map((item) => item.label));

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: `${site.url}/`,
  inLanguage: ['es', 'en'],
  dateModified: new Date().toISOString().slice(0, 10),
  mainEntity: {
    '@type': 'Person',
    '@id': `${site.url}/#person`,
    name: site.name,
    givenName: site.givenName,
    familyName: site.familyName,
    alternateName: [site.shortName, 'Jose Yordani Jimenez Vasquez', 'Yordani Jimenez', 'Yordan Jimenez', 'YordanPZ'],
    jobTitle: site.jobTitle,
    description: site.descriptionEs,
    email: `mailto:${site.email}`,
    telephone: site.whatsappNumber.replace(/\s+/g, ''),
    url: `${site.url}/`,
    image: `${site.url}/og.png`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Manresa',
      addressRegion: 'Barcelona',
      addressCountry: 'ES',
    },
    knowsLanguage: [
      { '@type': 'Language', name: 'Spanish', alternateName: 'es' },
      { '@type': 'Language', name: 'English', alternateName: 'en', description: 'B1+ (lectura técnica fluida; conversación en desarrollo)' },
    ],
    knowsAbout: skills,
    alumniOf: education.map((e) => ({ '@type': 'EducationalOrganization', name: e.institution })),
    hasCredential: education.map((e) => ({
      '@type': 'EducationalOccupationalCredential',
      name: e.titleEs,
      recognizedBy: { '@type': 'Organization', name: e.institution },
    })),
    seeks: {
      '@type': 'Demand',
      description: 'Puesto de desarrollador Full-Stack, Backend Node.js o Frontend React en remoto (teletrabajo 100%) desde España. Contrato laboral o autónomo. Disponibilidad inmediata.',
    },
    sameAs: [site.linkedinUrl, site.githubUrl],
    subjectOf: { '@type': 'DigitalDocument', name: 'CV (PDF)', url: `${site.url}${site.cvUrl}`, encodingFormat: 'application/pdf' },
  },
};

/** Perfil completo en texto plano (Markdown) para lectores automáticos: /llms.txt */
export function profileText(): string {
  const lines: string[] = [];
  lines.push(`# ${site.name}`, '', `> ${site.descriptionEs}`, '');
  lines.push('## Datos clave');
  lines.push(`- Puesto: ${site.jobTitle}`);
  lines.push(`- Ubicación: ${site.location} · ${site.timezone}`);
  lines.push('- Modalidad buscada: teletrabajo 100% desde España');
  lines.push('- Permiso de trabajo en España en vigor · disponibilidad inmediata');
  lines.push('- Idiomas: español nativo · inglés B1+ (lectura técnica fluida, conversación en desarrollo)');
  lines.push(`- Email: ${site.email} · WhatsApp: ${site.whatsappNumber}`);
  lines.push(`- LinkedIn: ${site.linkedinUrl} · GitHub: ${site.githubUrl}`);
  lines.push(`- CV (PDF): ${site.url}${site.cvUrl}`, '');
  lines.push('## Resumen', '', stripHtml(aboutLede.es), '');
  lines.push('## Experiencia');
  for (const e of timeline) {
    lines.push('', `### ${e.roleEs} · ${e.company} (${e.yearRange}${e.durationEs ? `, ${e.durationEs}` : ''})`);
    if (e.whereEs) lines.push(e.whereEs);
    for (const b of e.bullets) lines.push(`- ${b.es}`);
  }
  lines.push('', '## Proyectos y sistemas construidos');
  for (const item of builtItems) {
    lines.push('', `### ${item.nameEs} (${item.ctxEs})`, item.descEs, `Stack: ${item.stack.join(', ')}`);
  }
  lines.push('', '## Stack');
  for (const cell of stack) {
    const items = cell.items.map((i) => (i.noteEs ? `${i.label} (${i.noteEs})` : i.label)).join(', ');
    lines.push(`- ${cell.catEs}: ${items}`);
  }
  lines.push('', '## Formación');
  for (const e of education) lines.push(`- ${e.titleEs} · ${e.institution} (${e.yearRange})`);
  lines.push('');
  return lines.join('\n');
}
