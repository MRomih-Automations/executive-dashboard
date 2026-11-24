module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { pin } = req.body || {};
  const validPin = process.env.DASHBOARD_PIN;

  if (!validPin) {
    return res.status(500).json({ success: false, error: 'Server authentication PIN not configured in environment variables' });
  }

  if (pin && pin.toString().trim() === validPin.toString().trim()) {
    const timestamp = Date.now();
    const sessionToken = Buffer.from(`auth_${timestamp}_${validPin.slice(0, 3)}`).toString('base64');
    return res.status(200).json({ success: true, token: sessionToken });
  }

  return res.status(401).json({ success: false, error: 'Invalid Executive PIN' });
};
