export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Demo-only frontend: later you can connect this form to your backend API.')
  }

  return (
    <div className="section-container py-10 text-sm space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Contact</h1>
        <p className="text-slate-600 max-w-2xl">
          Share a bit about your hiring or risk workflows and we&apos;ll follow up with a tailored walkthrough of TruVerifyAI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={handleSubmit} className="card-soft p-5 space-y-3">
          <div>
            <label className="block text-xs font-medium mb-1">Full name</label>
            <input className="w-full px-3 py-2 border rounded-md text-sm" required />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Work email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-md text-sm" required />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">Company</label>
            <input className="w-full px-3 py-2 border rounded-md text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1">What are you looking to verify?</label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border rounded-md text-sm"
              placeholder="Example: pre-employment checks for global engineering hires and marketplace workers."
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-full bg-brand-primary text-white text-sm"
          >
            Submit
          </button>
        </form>

        <div className="text-xs text-slate-600 space-y-3">
          <div>
            <h2 className="font-semibold text-sm mb-1">Sales & demos</h2>
            <p>hello@truverify.ai</p>
          </div>
          <div>
            <h2 className="font-semibold text-sm mb-1">Security & compliance</h2>
            <p>security@truverify.ai</p>
          </div>
          <div>
            <h2 className="font-semibold text-sm mb-1">Global presence</h2>
            <p>Remote-first • Hiring across timezones</p>
          </div>
        </div>
      </div>
    </div>
  )
}