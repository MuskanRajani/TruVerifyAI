export default function Solutions() {
  const flows = [
    {
      name: 'Pre-employment screening',
      text: 'Design packages per role — from light-touch for interns to deeper checks for finance, risk, and leadership.',
      steps: [
        'Choose modules per role family',
        'Set candidate communication tone',
        'Align with legal and compliance teams',
      ],
      imgSeed: 'preemployment',
    },
    {
      name: 'Gig & contractor onboarding',
      text: 'Onboard riders, drivers, shoppers, and field workers with mobile-friendly flows and clear expectations.',
      steps: [
        'Invite via link, SMS, or API',
        'Mobile-optimized verification screens',
        'Status tracking for ops teams',
      ],
      imgSeed: 'gig',
    },
    {
      name: 'Internal moves & re-screening',
      text: 'For sensitive internal transfers or promotions, ensure checks are updated to match new access levels.',
      steps: [
        'Role-based re-check policies',
        'Historical record review',
        'Escalations for high-risk changes',
      ],
      imgSeed: 'internal',
    },
    {
      name: 'Compliance-driven workflows',
      text: 'Where regulation or client requirements dictate specific checks, encode them into reusable workflows.',
      steps: [
        'Document required packages',
        'Map them into repeatable flows',
        'Create audit-ready output reports',
      ],
      imgSeed: 'compliance',
    },
  ]

  return (
    <div className="bg-white">
      <section className="section-container py-14 sm:py-16 text-sm">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-2 text-orange-500">
          Solutions
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">Blueprints for how teams actually use TruVerifyAI</h1>
        <p className="text-slate-600 max-w-3xl">
          Instead of one-size-fits-all screening, design flows that respect your candidates&apos; time while meeting
          regulatory and risk requirements for each role and geography.
        </p>
      </section>

      {flows.map((f, index) => (
        <section
          key={f.name}
          className={`section-container py-14 sm:py-16 grid md:grid-cols-2 gap-10 items-center ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="relative order-2 md:order-1">
            <img
              src={`https://picsum.photos/seed/${f.imgSeed}/960/640`}
              alt={f.name}
              className="w-full rounded-3xl shadow-card object-cover max-h-[420px]"
            />
          </div>

          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-slate-900">{f.name}</h2>
            <p className="text-sm text-slate-600">{f.text}</p>
            <ol className="list-decimal list-inside text-xs text-slate-600 space-y-1">
              {f.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
          </div>
        </section>
      ))}

      <section className="bg-brand-primarySoft mt-4">
        <div className="section-container py-12 text-sm grid md:grid-cols-3 gap-6">
          <div className="card-soft p-5">
            <h3 className="text-sm font-semibold mb-1">People & talent teams</h3>
            <p className="text-xs text-slate-600">
              Give recruiters and hiring managers a clear view of what&apos;s happening, without exposing unnecessary
              detail.
            </p>
          </div>
          <div className="card-soft p-5">
            <h3 className="text-sm font-semibold mb-1">Ops & marketplace teams</h3>
            <p className="text-xs text-slate-600">
              Manage cohorts, understand where bottlenecks are, and keep supply moving without cutting corners.
            </p>
          </div>
          <div className="card-soft p-5">
            <h3 className="text-sm font-semibold mb-1">Risk, legal & compliance</h3>
            <p className="text-xs text-slate-600">
              See that checks match policy, understand edge cases, and pull audit-ready records when you need them.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}