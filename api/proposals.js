module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const proposals = [
    {
      id: "contra-ghost-note",
      platform: "Contra",
      title: "Ghost Note: Salesforce + Campaign Monitor Build",
      rate: "$135.00/hr ($13,500 Total)",
      text: `Hi,

I specialize in resilient CRM data pipelines and enterprise email delivery architecture. I have extensive experience auditing legacy Campaign Monitor subscriber journeys and synchronizing bidirectional state with Salesforce objects without dropping webhooks or triggering API rate penalties.

Execution Plan for Ghost Note:
1. Architecture Audit: Reviewing your existing Salesforce custom objects, field mappings, and Campaign Monitor custom fields to map all trigger conditions and unsubscribe states.
2. Webhook & Journey Sync: Implementing idempotent webhook handlers that guarantee zero dropped subscriber events and automated retry backoff on third-party API spikes.
3. Journey Construction & Testing: Building and validating the automated email journey stages with strict schema validation and staging sandbox testing before production release.

Verified Proof of Work:
- Live Developer Blueprint: https://github.com/MRomih-Automations/enterprise-n8n-ai-triage
- Verified Client Portfolio: https://contra.com/mohamed_romih_jj5w3q2x

I can begin discovery immediately and deliver initial journey milestones within 5-7 business days. Let's connect to review your exact Salesforce schema.

Best regards,
Mohamed Romih
Autonomous Automation & AI Engineer | MRomih Automations`
    },
    {
      id: "upwork-claude-mcp",
      platform: "Upwork",
      title: "Claude MCP & Voice Integration",
      rate: "$35.00/hr",
      text: `Hi,

I specialize in orchestrating Claude via the Model Context Protocol (MCP) to turn standard LLMs into autonomous agents with real-time tool calling and low-latency voice integration.

Architecture & Execution for Your Project:
1. MCP Protocol Implementation: Scaffolding a lightweight stdio or SSE (Server-Sent Events) MCP server exposing custom tools, local filesystem/database lookups, and external REST APIs directly into Claude's context window.
2. Voice Pipeline: Integrating OpenAI Realtime WebSocket or ElevenLabs Conversational Voice API with interruption handling, sub-800ms latency buffering, and bi-directional streaming.
3. Resilience & Error Handling: Implementing fallback schema parsing, prompt caching, and token usage optimization to prevent timeout degradation.

Verified Proof of Work:
- Live Open-Source Blueprint: https://github.com/MRomih-Automations/enterprise-n8n-ai-triage
- Verified Client Portfolio: https://contra.com/mohamed_romih_jj5w3q2x

I can have an initial MCP proof-of-concept running for you within 48 hours. Let's connect on a brief call or chat to review your exact schema and get started.

Best regards,
Mohamed Romih
Autonomous Automation & AI Engineer`
    },
    {
      id: "upwork-n8n-restore",
      platform: "Upwork",
      title: "n8n Workflow Restoration & Operations",
      rate: "$25.00/hr",
      text: `Hi,

I design and restore mission-critical n8n automations that handle thousands of daily executions with 0% dropped webhooks and zero recurring SaaS task penalties.

How I Will Restore and Fortify Your Workflows:
1. Audit & Root-Cause Fix: Inspecting failed execution logs, node payloads, schema mismatches, and memory exhaustion points to get your broken pipelines operational immediately.
2. Error-Trigger Sub-Workflows: Replacing silent workflow crashes with automated catch-nodes that log failures to an audit database and push instant alerts to Slack/Telegram.
3. Idempotency & Rate Limiting: Ensuring all webhook listeners use deduplication keys so no payload is processed twice, plus backoff retries on rate-limited third-party APIs.

Verified Proof of Work:
- Live Enterprise Blueprint: https://github.com/MRomih-Automations/enterprise-n8n-ai-triage
- Verified Portfolio: https://contra.com/mohamed_romih_jj5w3q2x

Share your current workflow JSON or error logs and I can diagnose the exact breaking point today.

Best regards,
Mohamed Romih
Autonomous Automation & AI Engineer`
    },
    {
      id: "upwork-claude-it-assistant",
      platform: "Upwork",
      title: "Claude Chat & Voice Assistant for IT Consulting",
      rate: "$650.00 Fixed",
      text: `Hi,

As a Computer Science graduate with hands-on experience in enterprise IT infrastructure and LLM agent engineering, I understand both sides of this project: IT consulting workflows and production AI architecture.

Implementation Plan:
1. IT Knowledge Base RAG: Ingesting your consulting playbooks, SOPs, and technical documentation into a vector index with hybrid semantic/keyword retrieval so Claude provides exact technical citations rather than hallucinations.
2. Conversational Agent & Voice Interface: Configuring Claude 3.5 Sonnet with customized system prompts, structured triage output, and voice synthesis (ElevenLabs / Whisper speech-to-text).
3. Integration & Deployment: Connecting the assistant to your client intake portal, ticketing system, or CRM with full conversation history logging.

Verified Proof of Work:
- Live Open-Source Repository: https://github.com/MRomih-Automations/enterprise-n8n-ai-triage
- Verified Portfolio: https://contra.com/mohamed_romih_jj5w3q2x

I can deliver the working end-to-end assistant within 5–7 business days. Let's discuss your preferred voice provider and documentation sources.

Best regards,
Mohamed Romih
Autonomous Automation & AI Engineer`
    }
  ];

  return res.status(200).json(proposals);
};
