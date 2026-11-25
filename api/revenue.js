// In-memory ledger storage for serverless runtime (persists across warm invocations)
let transactions = [];
let collectedRevenue = 0.00;
const UNLOCK_GOAL = 15.00;

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'POST') {
    const { client, platform, amount } = req.body || {};
    const parsedAmount = parseFloat(amount);
    if (!isNaN(parsedAmount) && parsedAmount > 0) {
      collectedRevenue += parsedAmount;
      transactions.unshift({
        id: Date.now(),
        client: client || 'Direct Client',
        platform: platform || 'Contra',
        amount: parsedAmount,
        date: new Date().toISOString()
      });
    }
    return res.status(200).json(getLedgerStatus());
  }

  return res.status(200).json(getLedgerStatus());
};

function getLedgerStatus() {
  const progressPercent = Math.min(100, Math.round((collectedRevenue / UNLOCK_GOAL) * 100));
  const isUnlocked = collectedRevenue >= UNLOCK_GOAL;

  return {
    collected_revenue: collectedRevenue,
    unlock_goal: UNLOCK_GOAL,
    progress_percent: progressPercent,
    is_unlocked: isUnlocked,
    status_label: isUnlocked 
      ? "🎉 UPWORK CONNECTS UNLOCKED ($15+ EARNED)" 
      : `$${collectedRevenue.toFixed(2)} / $${UNLOCK_GOAL.toFixed(2)} (${progressPercent}%) TO CONNECTS UNLOCK`,
    transactions: transactions
  };
}
