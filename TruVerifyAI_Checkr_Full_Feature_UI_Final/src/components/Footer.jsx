import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-slate-200">
      <div className="section-container py-12 grid md:grid-cols-4 gap-8 text-xs sm:text-sm">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="h-8 px-3 rounded-full bg-white/5 border border-slate-700 text-white text-xs font-semibold flex items-center">
              TruVerifyAI
            </div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
            Orange-native background screening for teams hiring across borders, timezones, and industries.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-slate-100 text-sm">Product</h4>
          <ul className="space-y-1 text-slate-400">
            <li>Identity verification</li>
            <li>Employment checks</li>
            <li>Criminal & watchlists (via partners)</li>
            <li>AI fraud & risk engine</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-slate-100 text-sm">Solutions</h4>
          <ul className="space-y-1 text-slate-400">
            <li>Pre-employment screening</li>
            <li>Contractors & gig workforce</li>
            <li>Compliance automation</li>
            <li>Marketplaces & platforms</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2 text-slate-100 text-sm">Company</h4>
          <ul className="space-y-1 text-slate-400">
            <li><Link to="/company" className="hover:text-slate-100">About</Link></li>
            <li><Link to="/contact" className="hover:text-slate-100">Contact</Link></li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800">
        <div className="section-container py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <span>© {new Date().getFullYear()} TruVerifyAI. All rights reserved.</span>
          <span>Orange-first • Remote-friendly • AI-assisted</span>
        </div>
      </div>
    </footer>
  )
}