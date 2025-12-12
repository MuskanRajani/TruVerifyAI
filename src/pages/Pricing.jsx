export default function Pricing() {
  return (
    <div className="section-container py-10 text-sm space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Pricing</h1>
        <p className="text-slate-600 max-w-2xl">
          Simple, transparent pricing that scales with your hiring volume. All plans include access to the TruVerifyAI
          platform with usage-based pricing for specific checks.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card-soft p-5 flex flex-col">
          <h2 className="font-semibold text-lg mb-1">Launch</h2>
          <p className="text-3xl font-bold mb-1">Pay as you go</p>
          <p className="text-xs text-slate-500 mb-4">for early-stage teams</p>
          <ul className="text-xs text-slate-600 space-y-1 mb-6">
            <li>No minimums</li>
            <li>Core checks for identity & employment</li>
            <li>Email support</li>
          </ul>
          <button className="mt-auto w-full py-2 border rounded-full text-slate-800 hover:bg-slate-50">
            Talk to us
          </button>
        </div>

        <div className="card-soft p-5 flex flex-col relative overflow-hidden border border-orange-200">
          <div className="absolute right-4 top-4 text-[10px] px-2 py-1 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
            Most popular
          </div>
          <h2 className="font-semibold text-lg mb-1">Growth</h2>
          <p className="text-3xl font-bold mb-1">Volume pricing</p>
          <p className="text-xs text-slate-500 mb-4">for scaling companies & marketplaces</p>
          <ul className="text-xs text-slate-600 space-y-1 mb-6">
            <li>Discounted per-check pricing</li>
            <li>Priority support</li>
            <li>Sandbox for integrations</li>
          </ul>
          <button className="mt-auto w-full py-2 rounded-full bg-brand-primary text-white">
            Request quote
          </button>
        </div>

        <div className="card-soft p-5 flex flex-col">
          <h2 className="font-semibold text-lg mb-1">Enterprise</h2>
          <p className="text-3xl font-bold mb-1">Custom</p>
          <p className="text-xs text-slate-500 mb-4">for global and regulated organizations</p>
          <ul className="text-xs text-slate-600 space-y-1 mb-6">
            <li>Custom SLAs & onboarding</li>
            <li>Dedicated success & security review</li>
            <li>Advanced compliance & data residency needs</li>
          </ul>
          <button className="mt-auto w-full py-2 border rounded-full text-slate-800 hover:bg-slate-50">
            Contact sales
          </button>
        </div>
      </div>
    </div>
  )
}