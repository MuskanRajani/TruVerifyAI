export default function Resources() {
  const blog = [
    {
      title: 'Designing fair global background checks',
      summary:
        'How to think about fairness, bias, and transparency when introducing AI into your screening workflows.',
    },
    {
      title: 'From spreadsheets to APIs: modernizing verification',
      summary:
        'What changes when you move from manual email-based verification to integrated, API-driven flows.',
    },
  ]

  const cases = [
    {
      name: 'Remote product company',
      summary: 'Reduced turnaround from 5 days to 24 hours for global hires across 4 continents.',
    },
    {
      name: 'Marketplace workforce',
      summary: 'Improved onboarding speed for delivery partners while catching more fraudulent identities.',
    },
  ]

  return (
    <div className="section-container py-10 text-sm space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Resources</h1>
        <p className="text-slate-600 max-w-2xl">
          Learn how teams around the world are rethinking background checks for remote work, marketplaces, and
          compliance-heavy industries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-semibold mb-3">Blog</h2>
          <div className="space-y-3">
            {blog.map((b) => (
              <div key={b.title} className="card-soft p-4">
                <h3 className="font-medium mb-1">{b.title}</h3>
                <p className="text-xs text-slate-600">{b.summary}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-semibold mb-3">Case studies (sample)</h2>
          <div className="space-y-3">
            {cases.map((c) => (
              <div key={c.name} className="card-soft p-4">
                <h3 className="font-medium mb-1">{c.name}</h3>
                <p className="text-xs text-slate-600">{c.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}