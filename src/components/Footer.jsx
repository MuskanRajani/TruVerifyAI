import { Link } from 'react-router-dom'
import logo from '../assets/logo-footer.png'

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-slate-200">
      <div className="section-container py-12 grid md:grid-cols-4 gap-10 text-xs sm:text-sm">
        
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

          {/* ✅ ORIGINAL COMPANY DESCRIPTION */}
          <p className="mt-2 text-slate-400 text-sm leading-relaxed max-w-xs">
           TruVerifyAI supports fast-growing teams with reliable, end-to-end background checks.
          </p>

          {/* ✅ SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-4">

            {/* LinkedIn */}
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"
              className="hover:text-white transition">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V7H0v17zM7.5 7h4.8v2.2h.07C13.17 7.78 15.06 7 17.23 7 22.08 7 23 10.05 23 14.08V24h-5v-8.22c0-1.96 0-4.48-2.73-4.48-2.74 0-3.16 2.14-3.16 4.35V24h-5V7z"/>
              </svg>
            </a>

            {/* Twitter/X */}
            <a href="https://twitter.com" target="_blank" rel="noreferrer"
              className="hover:text-white transition">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.56c-.88.39-1.83.65-2.83.77 1.02-.61 1.8-1.58 2.16-2.73-.95.56-2 .97-3.12 1.2-.9-.96-2.19-1.56-3.61-1.56-3.18 0-5.51 2.97-4.79 6.05-4.09-.21-7.72-2.17-10.15-5.15C.38 4.92-.13 7.42 1.21 9.3c-.8-.03-1.55-.25-2.21-.62v.06c0 2.38 1.69 4.37 3.93 4.82-.41.11-.84.17-1.29.17-.31 0-.62-.03-.92-.09.63 1.95 2.45 3.37 4.6 3.41-2.08 1.63-4.7 2.35-7.29 2.04C2.18 22.18 4.77 23 7.55 23c9.14 0 14.31-7.72 13.99-14.65.96-.69 1.8-1.56 2.46-2.54z"/>
              </svg>
            </a>

            {/* GitHub */}
            <a href="https://github.com" target="_blank" rel="noreferrer"
              className="hover:text-white transition">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.41 7.86 10.94.57.11.78-.25.78-.56v-1.97c-3.19.7-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.19-3.11-.12-.3-.52-1.52.11-3.17 0 0 .97-.31 3.18 1.19a11.07 11.07 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.5 3.17-1.19 3.17-1.19.64 1.65.24 2.87.12 3.17.74.81 1.18 1.85 1.18 3.11 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.08.78 2.19v3.24c0 .31.2.68.79.56 4.56-1.53 7.85-5.84 7.85-10.94C23.5 5.74 18.26.5 12 .5z"/>
              </svg>
            </a>

          </div>
        </div>

        {/* ✅ PRODUCT */}
        <div>
          <h4 className="font-semibold mb-3 text-white text-sm">Product</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Identity Verification</li>
            <li>Employment & Education Checks</li>
            <li>Criminal & Watchlists</li>
            <li>Fraud AI & Risk Engine</li>
          </ul>
        </div>

        {/* ✅ SOLUTIONS */}
        <div>
          <h4 className="font-semibold mb-3 text-white text-sm">Solutions</h4>
          <ul className="space-y-2 text-slate-400">
            <li>Pre-employment Screening</li>
            <li>Gig & Contract Workforce</li>
            <li>Compliance Automation</li>
            <li>Enterprise Hiring Workflows</li>
          </ul>
        </div>

        {/* ✅ COMPANY */}
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
      </div>

      {/* ✅ BOTTOM STRIP */}
      <div className="border-t border-slate-800">
        <div className="section-container py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[12px] text-slate-400">
          <span>© {new Date().getFullYear()} TruVerifyAI. All rights reserved.</span>
          <span>Built for secure, compliant & high-scale hiring</span>
        </div>
      </div>
    </footer>
  )
}
