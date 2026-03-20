export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Server configuration error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !phone || !service) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 8px; overflow: hidden;">
        <div style="background: #004AAC; padding: 24px 32px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 22px;">New Contact Request</h1>
          <p style="color: #cce0ff; margin: 4px 0 0; font-size: 14px;">Ducote Roofing & Repair</p>
        </div>
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333; vertical-align: top;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;"><a href="mailto:${email}" style="color: #004AAC;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333; vertical-align: top;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;"><a href="tel:${phone}" style="color: #004AAC;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #333; vertical-align: top;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #555;">${service}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #333; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #555; white-space: pre-wrap;">${message}</td>
            </tr>` : ''}
          </table>
        </div>
        <div style="background: #f0f0f0; padding: 16px 32px; text-align: center;">
          <p style="margin: 0; color: #999; font-size: 12px;">Sent from the Ducote Roofing & Repair website contact form</p>
        </div>
      </div>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Ducote Roofing <hello@ducoteroofingandrepair.com>',
        to: 'caleb.ducoteroofing@gmail.com',
        reply_to: email,
        subject: `New Contact: ${name} — ${service}`,
        html: emailHtml,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', data);
      return new Response(JSON.stringify({ error: data?.message || 'Failed to send email', details: data }), {
        status: response.status,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Send email error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
