import { Link } from 'react-router-dom'

const products = [
  {
    key: 'identity',
    name: 'Identity Verification',
    description: 'Verify government IDs, identity data and liveness with AI-assisted checks.',
  },
  {
    key: 'criminal',
    name: 'Criminal Background Checks',
    description: 'Orchestrate compliant criminal screening via regional partners from one platform.',
  },
  {
    key: 'employment',
    name: 'Employment Verification',
    description: 'Confirm past roles, tenure and employment type for global candidates.',
  },
  {
    key: 'education',
    name: 'Education Verification',
    description: 'Validate degrees and education history for sensitive or senior roles.',
  },
  {
    key: 'watchlists',
    name: 'Watchlists & Sanctions',
    description: 'Screen candidates against global watchlists and sanctions where required.',
  },
  {
    key: 'fraud-ai',
    name: 'AI Fraud & Risk Engine',
    description: 'Detect tampered documents, duplicate profiles and high-risk patterns.',
  },
]

export default function ProductIndex() {
  return (
    <div className="section-container py-14 sm:py-16 space-y-10 text-sm">
      <div className="max-w-3xl">
        <p className="text-[11px] font-semibold tracking-[0.25em] uppercase mb-2 text-orange-500">
          Products
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3">Verification products for modern hiring teams</h1>
        <p className="text-slate-600">
          Browse the TruVerifyAI product suite. Each product has its own dedicated page with deeper detail, use cases
          and implementation notes — similar to how leading screening platforms structure their offerings.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((p) => (
          <Link
            key={p.key}
            to={`/products/${p.key}`}
            className="card-soft p-5 flex flex-col justify-between hover:shadow-lg transition-shadow"
          >
            <div>
              <h2 className="text-sm font-semibold mb-1">{p.name}</h2>
              <p className="text-xs text-slate-600 mb-3">{p.description}</p>
            </div>
            <span className="mt-auto text-xs text-brand-primary font-medium">
              View product →
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
