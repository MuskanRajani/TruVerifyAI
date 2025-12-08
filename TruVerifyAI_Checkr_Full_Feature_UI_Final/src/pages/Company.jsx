export default function Company() {
  return (
    <div className="section-container py-10 text-sm space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Company</h1>
        <p className="text-slate-600 mb-3">
          TruVerifyAI is a global-first background screening platform that helps technology-forward companies hire and
          manage talent across borders with confidence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card-soft p-5 space-y-3">
          <h2 className="text-lg font-semibold">Our mission</h2>
          <p className="text-xs text-slate-600">
            Make trustworthy hiring at scale possible — without sacrificing candidate experience or compliance. We
            believe that background checks should be transparent, respectful, and built for the way modern teams hire.
          </p>
        </div>
        <div className="card-soft p-5 space-y-3">
          <h2 className="text-lg font-semibold">Where we&apos;re focused</h2>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
            <li>Remote and hybrid hiring across countries and timezones</li>
            <li>High-growth startups and scale-ups</li>
            <li>Marketplaces and gig platforms needing fast, repeatable checks</li>
          </ul>
        </div>
      </div>

      <div className="card-soft p-5 text-xs text-slate-600">
        <h2 className="text-sm font-semibold mb-1">Working at TruVerifyAI</h2>
        <p>
          We&apos;re building an international, remote-friendly team with experience in risk, compliance, product, and AI.
          As we grow, we&apos;ll be hiring across engineering, design, go-to-market, and operations.
        </p>
      </div>
    </div>
  )
}