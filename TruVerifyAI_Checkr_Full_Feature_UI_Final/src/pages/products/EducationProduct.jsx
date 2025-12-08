
export default function EducationProduct() {
  const benefits = ['Capture and review degree certificates and transcripts.', 'Validate institutions, programs and graduation timelines.', 'Support both local and international education journeys.']

  return (
    <div className="bg-white">
      <section className="section-container py-14 sm:py-16 grid md:grid-cols-2 gap-10 items-center text-sm">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-2 text-orange-500">
            Product
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">Education Verification</h1>
          <p className="text-slate-600 mb-4">
            Support verification of degrees and education history for roles where education is a key requirement or regulatory expectation.
          </p>
        </div>
        <img
          src={"https://picsum.photos/seed/education-product/960/640"}
          alt="Education Verification"
          className="w-full rounded-3xl shadow-card object-cover max-h-[420px]"
        />
      </section>

      <section className="section-container py-6 sm:py-8 text-sm">
        <h2 className="text-lg font-semibold mb-3">What this product helps you do</h2>
        <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 max-w-2xl">
          {benefits.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="bg-brand-primarySoft mt-6">
        <div className="section-container py-10 grid md:grid-cols-3 gap-6 text-sm">
          <div className="card-soft p-5">
            <h3 className="text-sm font-semibold mb-1">1. Configure flows</h3>
            <p className="text-xs text-slate-600">
              Decide when this product is used, for which roles, and at what depth — so you don&apos;t over-screen or under-screen.
            </p>
          </div>
          <div className="card-soft p-5">
            <h3 className="text-sm font-semibold mb-1">2. Collect data from candidates</h3>
            <p className="text-xs text-slate-600">
              Candidates complete a mobile-friendly flow to provide documents and consent, with clear expectations up front.
            </p>
          </div>
          <div className="card-soft p-5">
            <h3 className="text-sm font-semibold mb-1">3. Review & move forward</h3>
            <p className="text-xs text-slate-600">
              TruVerifyAI surfaces results with clear statuses and reason codes so your team can decide quickly and fairly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container py-12 text-sm grid md:grid-cols-3 gap-6">
        <div className="card-soft p-5">
          <h3 className="text-sm font-semibold mb-1">People & talent teams</h3>
          <p className="text-xs text-slate-600">
            Give recruiters clarity into what&apos;s being checked and when, without overwhelming them with noise.
          </p>
        </div>
        <div className="card-soft p-5">
          <h3 className="text-sm font-semibold mb-1">Ops & marketplace teams</h3>
          <p className="text-xs text-slate-600">
            Scale verification for high-volume roles while keeping supply flowing and risk in check.
          </p>
        </div>
        <div className="card-soft p-5">
          <h3 className="text-sm font-semibold mb-1">Risk, legal & compliance</h3>
          <p className="text-xs text-slate-600">
            Ensure that checks run consistently according to policy, with audit-ready documentation when you need it.
          </p>
        </div>
      </section>

      <section className="bg-brand-primary text-white">
        <div className="section-container py-14 text-center text-sm">
          <h2 className="text-2xl font-semibold mb-2">See Education Verification in action</h2>
          <p className="text-orange-50 mb-4 max-w-xl mx-auto">
            Walk through a sample candidate journey and see how this product fits into your hiring or onboarding flows.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-2.5 rounded-full bg-white text-brand-primary text-xs sm:text-sm font-medium"
          >
            Request a demo
          </a>
        </div>
      </section>
    </div>
  )
}
