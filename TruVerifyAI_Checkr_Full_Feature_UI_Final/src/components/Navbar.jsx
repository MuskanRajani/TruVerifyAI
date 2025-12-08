
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium px-3 py-2 transition-all border-b-2 ${
      isActive
        ? "border-brand-primary text-brand-primary"
        : "border-transparent hover:border-brand-primary hover:text-brand-primary"
    }`;

  const dropdownBase =
    "absolute top-full left-0 mt-3 bg-white shadow-xl rounded-xl p-6 text-sm transition-all duration-200";

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="section-container flex items-center justify-between py-4">
        <Link to="/" className="text-lg font-bold text-brand-primary">
          TruVerifyAI
        </Link>

        <nav className="flex items-center gap-5 relative">
          {/* PRODUCTS */}
          <div
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
            className="relative"
          >
            <button className="text-sm font-medium px-3 py-2 border-b-2 border-transparent hover:border-brand-primary hover:text-brand-primary">
              Products
            </button>

            {productsOpen && (
              <div className={`${dropdownBase} w-[700px] grid grid-cols-3 gap-6 animate-fadeIn`}>
                <Link to="/products/identity" className="hover:text-brand-primary">
                  <strong>Identity Verification</strong>
                  <p className="text-xs text-slate-600">AI ID, liveness & fraud detection</p>
                </Link>
                <Link to="/products/criminal" className="hover:text-brand-primary">
                  <strong>Criminal Checks</strong>
                  <p className="text-xs text-slate-600">Partner-led checks</p>
                </Link>
                <Link to="/products/employment" className="hover:text-brand-primary">
                  <strong>Employment</strong>
                  <p className="text-xs text-slate-600">Work history verification</p>
                </Link>
                <Link to="/products/education" className="hover:text-brand-primary">
                  <strong>Education</strong>
                  <p className="text-xs text-slate-600">Degree validation</p>
                </Link>
                <Link to="/products/watchlists" className="hover:text-brand-primary">
                  <strong>Watchlists</strong>
                  <p className="text-xs text-slate-600">AML & sanctions</p>
                </Link>
                <Link to="/products/fraud-ai" className="hover:text-brand-primary">
                  <strong>Fraud AI</strong>
                  <p className="text-xs text-slate-600">Risk scoring</p>
                </Link>
              </div>
            )}
          </div>

          {/* SOLUTIONS */}
          <div
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
            className="relative"
          >
            <button className="text-sm font-medium px-3 py-2 border-b-2 border-transparent hover:border-brand-primary hover:text-brand-primary">
              Solutions
            </button>

            {solutionsOpen && (
              <div className={`${dropdownBase} w-[600px] grid grid-cols-2 gap-6 animate-fadeIn`}>
                <Link to="/solutions" className="hover:text-brand-primary">
                  <strong>Pre-employment</strong>
                  <p className="text-xs text-slate-600">Candidate screening</p>
                </Link>
                <Link to="/solutions" className="hover:text-brand-primary">
                  <strong>Gig workforce</strong>
                  <p className="text-xs text-slate-600">High-volume checks</p>
                </Link>
                <Link to="/solutions" className="hover:text-brand-primary">
                  <strong>Internal mobility</strong>
                  <p className="text-xs text-slate-600">Employee movement</p>
                </Link>
                <Link to="/solutions" className="hover:text-brand-primary">
                  <strong>Compliance automation</strong>
                  <p className="text-xs text-slate-600">Audit-ready workflows</p>
                </Link>
              </div>
            )}
          </div>

          {/* INDUSTRIES */}
          <div
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
            className="relative"
          >
            <button className="text-sm font-medium px-3 py-2 border-b-2 border-transparent hover:border-brand-primary hover:text-brand-primary">
              Industries
            </button>

            {industriesOpen && (
              <div className={`${dropdownBase} w-[640px] grid grid-cols-3 gap-6 animate-fadeIn`}>
                <Link to="/industries" className="hover:text-brand-primary">
                  <strong>Gig Economy</strong>
                  <p className="text-xs text-slate-600">Marketplaces & delivery</p>
                </Link>
                <Link to="/industries" className="hover:text-brand-primary">
                  <strong>Fintech</strong>
                  <p className="text-xs text-slate-600">KYC, AML onboarding</p>
                </Link>
                <Link to="/industries" className="hover:text-brand-primary">
                  <strong>Healthcare</strong>
                  <p className="text-xs text-slate-600">Clinicians & staff</p>
                </Link>
                <Link to="/industries" className="hover:text-brand-primary">
                  <strong>Staffing</strong>
                  <p className="text-xs text-slate-600">Temp & contract roles</p>
                </Link>
                <Link to="/industries" className="hover:text-brand-primary">
                  <strong>Technology</strong>
                  <p className="text-xs text-slate-600">Remote & global teams</p>
                </Link>
                <Link to="/industries" className="hover:text-brand-primary">
                  <strong>Retail</strong>
                  <p className="text-xs text-slate-600">Frontline workforce</p>
                </Link>
              </div>
            )}
          </div>

          <NavLink to="/ai-platform" className={linkClass}>Platform</NavLink>
          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/resources" className={linkClass}>Resources</NavLink>
          <NavLink to="/company" className={linkClass}>Company</NavLink>
        </nav>

        <div className="flex gap-3">
          <Link to="/login" className="text-sm font-medium">
            Log in
          </Link>
          <Link
            to="/contact"
            className="bg-brand-primary text-white px-5 py-2 rounded-full text-xs font-semibold hover:opacity-90"
          >
            Request demo
          </Link>
        </div>
      </div>
    </header>
  );
}
