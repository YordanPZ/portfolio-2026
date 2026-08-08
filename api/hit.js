// Vercel Serverless Function — notifica por email cada visita real al portfolio.
// Usa las cabeceras de geolocalización que Vercel añade gratis a cada petición
// (x-vercel-ip-*), así que no necesita ningún servicio externo de IP.
// El email se envía con Resend: requiere la variable de entorno RESEND_API_KEY.

const DEST = 'yordanpz@hotmail.com';

const BOT_RE =
  /bot|crawl|spider|slurp|facebookexternalhit|preview|linkedinbot|whatsapp|telegram|discord|headless|lighthouse|monitor|uptime|curl|wget|python-requests|axios|node-fetch|vercel/i;

export default async function handler(req, res) {
  // Solo aceptamos el beacon del navegador (POST)
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false });
    return;
  }

  const h = req.headers;
  const ua = h['user-agent'] || '';

  // Cuerpo enviado por el navegador
  let body = {};
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
  } catch {
    body = {};
  }

  // No notificar: bots, o si soy yo (marca guardada en el navegador)
  if (BOT_RE.test(ua) || body.owner === true) {
    res.status(204).end();
    return;
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    // Sin API key configurada todavía: no hacemos nada (no rompe la web)
    res.status(204).end();
    return;
  }

  // Datos que Vercel entrega en cada petición
  const ip = (h['x-forwarded-for'] || '').split(',')[0].trim() || h['x-real-ip'] || '—';
  const dec = (v) => {
    try { return v ? decodeURIComponent(v) : ''; } catch { return v || ''; }
  };
  const city = dec(h['x-vercel-ip-city']) || '—';
  const region = dec(h['x-vercel-ip-country-region']) || '';
  const country = h['x-vercel-ip-country'] || '';
  const postal = h['x-vercel-ip-postal-code'] || '';
  const tz = h['x-vercel-ip-timezone'] || 'Europe/Madrid';

  const page = (body.page || '/').toString().slice(0, 120);
  const ref = (body.ref || 'directo').toString().slice(0, 200);
  const lang = (body.lang || '').toString().slice(0, 30);

  const when = new Date().toLocaleString('es-ES', {
    timeZone: 'Europe/Madrid',
    dateStyle: 'medium',
    timeStyle: 'short',
  });

  const ubic = [city, region, country].filter(Boolean).join(', ') + (postal ? ` (${postal})` : '');

  const html = `
    <div style="font-family:-apple-system,Segoe UI,Arial,sans-serif;max-width:520px;margin:auto;color:#1b1b1d">
      <h2 style="margin:0 0 4px">👀 Nueva visita a tu portfolio</h2>
      <p style="color:#6b7280;margin:0 0 16px">${when} (hora de España)</p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:6px 0;color:#6b7280;width:130px">Ubicación</td><td style="padding:6px 0"><strong>${ubic || '—'}</strong></td></tr>
        <tr><td style="padding:6px 0;color:#6b7280">Zona horaria</td><td style="padding:6px 0">${tz}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280">Página</td><td style="padding:6px 0">${page}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280">Llegó desde</td><td style="padding:6px 0">${ref}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280">Idioma</td><td style="padding:6px 0">${lang || '—'}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280">IP</td><td style="padding:6px 0">${ip}</td></tr>
        <tr><td style="padding:6px 0;color:#6b7280;vertical-align:top">Dispositivo</td><td style="padding:6px 0;color:#9ca3af;font-size:12px">${ua.slice(0, 180)}</td></tr>
      </table>
      <p style="color:#9ca3af;font-size:12px;margin-top:20px">La ubicación es aproximada (nivel ciudad, según la IP del visitante).</p>
    </div>`;

  try {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${key}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio <onboarding@resend.dev>',
        to: DEST,
        subject: `👀 Visita a tu portfolio — ${city}${country ? ', ' + country : ''}`,
        html,
      }),
    });
  } catch {
    // Nunca romper la experiencia del visitante por un fallo de email
  }

  res.status(204).end();
}
