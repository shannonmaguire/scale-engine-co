const RECIPIENT = process.env.CONTACT_RECIPIENT || 'wasifmehmood238@gmail.com';
// Use Resend's sandbox sender. Replace with a verified domain once available.
const FROM_ADDRESS = process.env.CONTACT_FROM || 'Creator Wealth Tools <onboarding@resend.dev>';

const escapeHtml = (value = '') =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildHtml = (payload) => {
  const rows = Object.entries(payload)
    .map(([key, val]) => {
      const displayValue = typeof val === 'boolean' ? (val ? 'Yes' : 'No') : String(val ?? '');
      return `
        <tr>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.05em;">${escapeHtml(key)}</td>
          <td style="padding:8px 12px;border:1px solid #e5e7eb;font-size:14px;">${escapeHtml(displayValue)}</td>
        </tr>
      `;
    })
    .join('');

  return `
    <div style="font-family:Inter,Segoe UI,system-ui,-apple-system,sans-serif;color:#111827;">
      <h2 style="font-size:20px;margin-bottom:16px;">New CWT Studio Contact Request</h2>
      <p style="margin-bottom:24px;color:#374151;">A new lead has submitted the contact form. Review the intake details below.</p>
      <table style="border-collapse:collapse;width:100%;max-width:640px;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>
  `;
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('Missing RESEND_API_KEY environment variable');
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Email service not configured' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }

  try {
    const payload = JSON.parse(event.body || '{}');

    const requiredFields = ['fullName', 'email', 'company', 'serviceInterest', 'challenge'];
    const missing = requiredFields.filter((field) => !payload[field]);

    if (missing.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: `Missing required fields: ${missing.join(', ')}` }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    const html = buildHtml(payload);
    const subject = `New Contact: ${payload.fullName} · ${payload.company}`;

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [RECIPIENT],
        reply_to: payload.email,
        subject,
        html,
        text: `New contact submission from ${payload.fullName} (${payload.email}).`,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('Resend API error:', errorText);
      return {
        statusCode: 502,
        body: JSON.stringify({ error: 'Failed to deliver email via Resend' }),
        headers: { 'Content-Type': 'application/json' },
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
      headers: { 'Content-Type': 'application/json' },
    };
  } catch (error) {
    console.error('Unhandled contact function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Unexpected server error' }),
      headers: { 'Content-Type': 'application/json' },
    };
  }
};
