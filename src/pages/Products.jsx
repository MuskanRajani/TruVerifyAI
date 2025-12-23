export default function Products() {
  const modules = [
    {
      name: 'Identity Verification',
      text: 'Verify government IDs, passports, and national identifiers with AI-read documents and consistency checks.',
      bullets: [
        'Support for common ID formats',
        'Photo, DOB, and address consistency checks',
        'Duplicate and risky patterns highlighted',
      ],
      imgSeed: 'identity',
    },
    {
      name: 'Employment Verification',
      text: 'Validate roles, tenure, and employment types through document-based flows, tuned for global hiring.',
      bullets: [
        'Offer letters, experience letters, and payslips',
        'Role and duration checks for mid/senior roles',
        'Overlap and gap flagging',
      ],
      imgSeed: 'employment',
    },
    {
      name: 'Criminal Checks (via partners)',
      text: 'Connect regional criminal check providers into a single, unified experience for your recruiters and ops.',
      bullets: [
        'Partner-agnostic orchestration layer',
        'Unified statuses and results UI',
        'Auditable logs across providers',
      ],
      imgSeed: 'criminal',
    },
    {
      name: 'Education Verification',
      text: 'Support degree and education validation for roles that need it — especially regulated or leadership positions.',
      bullets: [
        'Degree and university extraction',
        'Validation against documents provided',
        'Flexible for differing country norms',
      ],
      imgSeed: 'education',
    },
    {
      name: 'Watchlists & Sanctions (roadmap)',
      text: 'Connect to global sanctions and watchlists as your compliance needs evolve.',
      bullets: [
        'Configurable by geography and role',
        'Added as you grow and enter new markets',
        'Centralized logging for internal audits',
      ],
      imgSeed: 'watchlists',
    },
    {
      name: 'AI Fraud & Risk Scoring',
      text: 'Layer pattern-based fraud detection on top of your checks to catch synthetic identities and tampered documents.',
      bullets: [
        'Signals rolled into clear risk tiers',
        'Reason codes for human reviewers',
        'Designed to complement human decisioning',
      ],
      imgSeed: 'fraud',
    },
  ]

  const adoption = [
    { label: 'Identity checks', value: 92 },
    { label: 'Employment checks', value: 81 },
    { label: 'Education checks', value: 63 },
    { label: 'Fraud scoring', value: 54 },
  ]

  return (
    <div className="bg-white">
      {/* Intro */}
      <section className="section-container py-14 sm:py-16 text-sm">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-2 text-orange-500">
          Product stack
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">Everything you need, nothing you don&apos;t</h1>
        <p className="text-slate-600 max-w-3xl">
          TruVerifyAI gives you modular building blocks — identity, employment, education, criminal (via partners),
          watchlists, and Occupational — so you can design the right level of screening for each role and region.
        </p>
      </section>

      {/* Modules long-scroll */}
      {modules.map((m, index) => (
        <section
          key={m.name}
          className={`section-container py-14 sm:py-16 grid md:grid-cols-2 gap-10 items-center ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="relative order-2 md:order-1">
            <img
              src={`https://picsum.photos/seed/${m.imgSeed}/960/640`}
              alt={m.name}
              className="w-full rounded-3xl shadow-card object-cover max-h-[420px]"
            />
            <div className="absolute -bottom-4 -right-4 bg-white/95 border border-orange-100 rounded-2xl shadow-card px-4 py-3 text-[11px] text-slate-600">
              <div className="font-semibold text-slate-800 mb-1">Good to know</div>
              <p>
                This module can be paired with others to create different screening depths per role — without adding new
                tools.
              </p>
            </div>
          </div>

          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-slate-900">{m.name}</h2>
            <p className="text-sm text-slate-600">{m.text}</p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
              {m.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      {/* Adoption chart-style figures */}
      <section className="bg-brand-primarySoft mt-4">
        <div className="section-container py-12 text-sm">
          <h2 className="text-lg font-semibold mb-4">How teams typically adopt the stack</h2>
          <p className="text-xs text-slate-600 mb-4 max-w-xl">
            Most teams start with identity and employment checks, then layer on education and fraud scoring as they
            scale into more regulated roles.
          </p>
          <div className="space-y-3">
            {adoption.map((a) => (
              <div key={a.label}>
                <div className="flex justify-between text-[11px] mb-1 text-slate-700">
                  <span>{a.label}</span>
                  <span>{a.value}% of customers</span>
                </div>
                <div className="h-2 w-full rounded-full bg-orange-100 overflow-hidden">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-accent"
                    style={{ width: `${a.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-container py-14 sm:py-16 text-sm">
        <div className="card-soft p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
            <span>“</span>
          </div>
          <div>
            <p className="text-sm text-slate-700 mb-2">
              TruVerifyAI gave us a product menu we could actually explain internally. We started with two checks and
              layered on more as our risk appetite evolved.
            </p>
            <p className="text-[11px] text-slate-500">
              Sample quote • Head of People Ops, remote-first marketplace
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}