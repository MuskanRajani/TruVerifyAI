export default function AIPlatform() {
  const pillars = [
    {
      name: 'Document AI',
      body: 'OCR and layout-aware parsing tuned for identity, employment, and education documents from multiple regions.',
    },
    {
      name: 'Risk engine',
      body: 'Configurable scoring for identity, employment history, and supporting documents.',
    },
    {
      name: 'Fraud & anomaly detection',
      body: 'Patterns to identify tampered documents, suspicious overlaps, and potential synthetic identities.',
    },
    {
      name: 'Workflow automation',
      body: 'Orchestrate multi-step checks and human-in-the-loop reviews through flexible workflows.',
    },
  ]

  return (
    <div className="section-container py-10 text-sm space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">TruVerifyAI Platform</h1>
        <p className="text-slate-600 max-w-2xl">
          TruVerifyAI is built as an AI-assisted decisioning layer on top of modern verification workflows — combining
          automation with clear, auditable outcomes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {pillars.map((p) => (
          <div key={p.name} className="card-soft p-5">
            <h2 className="font-semibold mb-1">{p.name}</h2>
            <p className="text-xs text-slate-600 mb-3">{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}