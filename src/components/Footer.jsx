import { Link } from 'react-router-dom'
import logo from '../assets/logo-footer.png'

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-slate-200">
      <div className="section-container py-12 grid md:grid-cols-5 gap-10 text-xs sm:text-sm">

        {/* ✅ BRAND SECTION */}
        <div>
          <div className="mb-2 inline-flex items-center">
            <div className="overflow-hidden w-[100px] sm:w-[120px] md:w-[145px]">
              <img
                src={logo}
                alt="TruVerifyAI Logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          <p className="mt-2 text-slate-400 text-sm leading-relaxed max-w-xs">
            TruVerifyAI supports fast-growing teams with reliable, end-to-end background checks.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zM7.5 7h4.8v2.2h.07C13.17 7.78 15.06 7 17.23 7 22.08 7 23 10.05 23 14.08V24h-5v-8.22c0-1.96 0-4.48-2.73-4.48-2.74 0-3.16 2.14-3.16 4.35V24h-5V7z" />
              </svg>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56c-.88.39-1.83.65-2.83.77 1.02-.61 1.8-1.58 2.16-2.73-.95.56-2 .97-3.12 1.2-.9-.96-2.19-1.56-3.61-1.56-3.18 0-5.51 2.97-4.79 6.05-4.09-.21-7.72-2.17-10.15-5.15C.38 4.92-.13 7.42 1.21 9.3c-.8-.03-1.55-.25-2.21-.62v.06c0 2.38 1.69 4.37 3.93 4.82-.41.11-.84.17-1.29.17-.31 0-.62-.03-.92-.09.63 1.95 2.45 3.37 4.6 3.41-2.08 1.63-4.7 2.35-7.29 2.04C2.18 22.18 4.77 23 7.55 23c9.14 0 14.31-7.72 13.99-14.65.96-.69 1.8-1.56 2.46-2.54z" />
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"
              className="hover:text-white transition">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>

          </div>
        </div>

        {/* PRODUCT */}
        <div>
          <h4 className="font-semibold mb-3 text-white text-sm">Product</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Identity Verification</li>
            <li>Employment & Education Checks</li>
            <li>Criminal & Watchlists</li>
            <li>Occupational Health Screening</li>
          </ul>
        </div>

        {/* SOLUTIONS */}
        <div>
          <h4 className="font-semibold mb-3 text-white text-sm">Solutions</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Pre-employment Screening</li>
            <li>Gig & Contract Workforce</li>
            <li>Compliance Automation</li>
            <li>Enterprise Hiring Workflows</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="font-semibold mb-3 text-white text-sm">Company</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <Link to="/company" className="hover:text-white transition">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition">Contact</Link>
            </li>
            <li>Privacy Policy</li>
            <li>Security</li>
          </ul>
        </div>

        {/* ✅ NEW: CONTACT INFO */}
        <div>
          <h4 className="font-semibold mb-3 text-white text-sm">Contact</h4>
          <ul className="space-y-2 text-slate-400">
            <li>
              <span className="block text-slate-500">Email</span>
              Info@truverify.com
            </li>
            <li>
              <span className="block text-slate-500">Phone</span>
              +1-201-279-3907
            </li>
            <li>
              <span className="block text-slate-500">Address</span>
              India • Remote-first
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM STRIP */}
      <div className="border-t border-slate-800">
        <div className="section-container py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-slate-400">
          <span>© {new Date().getFullYear()} TruVerifyAI. All rights reserved.</span>
          <span>Built for secure, compliant & high-scale hiring</span>
        </div>
      </div>
    </footer>
  )
}
