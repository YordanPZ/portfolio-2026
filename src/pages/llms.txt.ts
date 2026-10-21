import type { APIRoute } from 'astro';
import { profileText } from '~/data/structured';

export const GET: APIRoute = () =>
  new Response(profileText(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
