export default function Industries() {
  const sections = [
    {
      id: 'gig',
      title: 'Gig platforms & last-mile logistics',
      text: 'Onboard thousands of drivers, riders, shoppers, and providers with flows designed for speed and trust. Reduce drop-off while catching risky or duplicate profiles early.',
      bullets: [
        'Mobile-first journeys optimized for low-friction signups',
        'Configurable region-by-region checks',
        'Flags for duplicate identities and suspicious patterns',
      ],
      img: 'https://picsum.photos/seed/gig-orange/960/640',
    },
    {
      id: 'fintech',
      title: 'Fintech & financial services',
      text: 'Hire for high-trust roles handling payments, credit, and risk analysis while staying aligned with evolving regulations.',
      bullets: [
        'Stronger identity and address verification defaults',
        'Support for role-based screening depth',
        'Audit-friendly logs and risk reason codes',
      ],
      img: 'https://picsum.photos/seed/fintech-orange/960/640',
    },
    {
      id: 'healthcare',
      title: 'Healthcare & life sciences',
      text: 'Support compliance-heavy roles in clinical, research, and patient-facing environments with document-based verification today and deeper integrations over time.',
      bullets: [
        'Education and license verification (document-based)',
        'Additional checks for sensitive or regulated positions',
        'Configurable by facility type and geography',
      ],
      img: 'https://picsum.photos/seed/health-orange/960/640',
    },
    {
      id: 'staffing',
      title: 'Staffing & recruitment firms',
      text: 'Deliver a differentiated candidate experience while meeting client SLAs across multiple regions and job families.',
      bullets: [
        'Bulk cohort creation and tracking',
        'Recruiter-friendly dashboards and statuses',
        'White-label ready candidate communications (roadmap)',
      ],
      img: 'https://picsum.photos/seed/staffing-orange/960/640',
    },
    {
      id: 'tech',
      title: 'Technology & product companies',
      text: 'Verify engineers, PMs, designers, and GTM teams as you hire across hubs, remote regions, and timezones.',
      bullets: [
        'Experience and overlap checks for senior roles',
        'Education and credential verification',
        'Support for hiring across multiple entities and regions',
      ],
      img: 'https://picsum.photos/seed/tech-orange/960/640',
    },
  ]

  return (
    <div className="bg-white">
      <section className="section-container py-14 sm:py-16 text-sm">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-2 text-orange-500">
          Industries
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">Where TruVerifyAI fits best</h1>
        <p className="text-slate-600 max-w-2xl">
          Built with fast-moving, technology-forward organizations in mind — from marketplace platforms and delivery
          networks to fintech, healthcare, and staffing providers.
        </p>
      </section>

      {sections.map((s, index) => (
        <section
          key={s.id}
          className={`section-container py-16 sm:py-20 grid md:grid-cols-2 gap-10 items-center ${
            index % 2 === 1 ? 'md:flex-row-reverse' : ''
          }`}
        >
          <div className="relative order-2 md:order-1">
            <img
              src={s.img}
              alt={s.title}
              className="w-full rounded-3xl shadow-card object-cover max-h-[420px]"
            />
            <div className="absolute -bottom-4 -right-4 bg-white/95 border border-orange-100 rounded-2xl shadow-card px-4 py-3 text-[11px] text-slate-600">
              <div className="font-semibold text-slate-800 mb-1">Why this matters</div>
              <p>
                High-volume, trust-sensitive hiring needs flows that feel smooth for candidates but rigorous for your
                risk and compliance teams.
              </p>
            </div>
          </div>

          <div className="space-y-4 order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-slate-900">{s.title}</h2>
            <p className="text-sm text-slate-600">{s.text}</p>
            <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-brand-primarySoft mt-4">
        <div className="section-container py-12 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold mb-1">Have a different use case?</h2>
            <p className="text-xs text-slate-700 max-w-xl">
              Many verification flows don&apos;t fit neatly into a single industry. TruVerifyAI is designed to handle
              mixed use cases — from internal mobility to vendor, partner, or community checks.
            </p>
          </div>
          <a
            href="/contact"
            className="px-5 py-2 rounded-full bg-brand-primary text-white text-xs sm:text-sm font-medium shadow-card"
          >
            Talk to us about your industry
          </a>
        </div>
      </section>
    </div>
  )
}