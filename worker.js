export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    const country = request.cf?.country || null;
    const body = await request.json();

    const SB_URL = 'https://itraumqgammtgiouipak.supabase.co';
    const SB_KEY = 'sb_publishable_ySnnol1KpqNs2yBxqkOVHQ_NZP_J8ZN';

    await fetch(`${SB_URL}/rest/v1/gallery_events`, {
      method: 'POST',
      headers: {
        'apikey': SB_KEY,
        'Authorization': `Bearer ${SB_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({ ...body, country })
    });

    return new Response('ok', {
      headers: { 'Access-Control-Allow-Origin': '*' }
    });
  }
};
