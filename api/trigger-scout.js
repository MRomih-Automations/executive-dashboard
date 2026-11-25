module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const token = process.env.GH_PAT;
  if (!token) {
    return res.status(500).json({ success: false, error: 'GitHub PAT not configured on server' });
  }

  const owner = 'MRomih-Automations';
  const repo = 'revenue-scout-cron';
  const workflowId = 'scout_cron.yml';

  try {
    const dispatchRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/actions/workflows/${workflowId}/dispatches`, {
      method: 'POST',
      headers: {
        'Authorization': `token ${token}`,
        'User-Agent': 'ExecutiveDashboard',
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ref: 'main' })
    });

    if (dispatchRes.status === 204) {
      return res.status(200).json({
        success: true,
        message: 'Cloud scout triggered! GitHub Actions runner active. Push alert incoming to @RomihCO_bot.'
      });
    }

    const err = await dispatchRes.text();
    return res.status(dispatchRes.status).json({ success: false, error: err });
  } catch (e) {
    return res.status(500).json({ success: false, error: e.message });
  }
};
