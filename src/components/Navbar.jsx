import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `text-sm font-medium px-3 py-2 transition-all border-b-2 ${
      isActive
        ? "border-brand-primary text-brand-primary"
        : "border-transparent hover:border-brand-primary hover:text-brand-primary"
    }`;

  const dropdownBase =
    "absolute left-0 top-full mt-2 bg-white shadow-xl rounded-xl p-6 text-sm transition-all duration-200";

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="section-container flex items-center justify-between py-4 min-h-[76px]">

        {/* ✅ LOGO FIXED FOR GITHUB PAGES */}
        <Link to="/" className="flex items-center">
          <div className="overflow-hidden w-[100px] sm:w-[120px] md:w-[140px]">
            <img
              src="/TruVerifyAI/logo.png"
              alt="TruVerifyAI Logo"
              className="w-full h-auto object-contain"
            />
          </div>
        </Link>

        {/* ================= NAV LINKS ================= */}
        <nav className="flex items-center gap-6 relative translate-x-6">

          {/* ---------- PRODUCTS DROPDOWN ---------- */}
          <div className="relative group">
            <button className="text-sm font-medium px-3 py-2 border-b-2 border-transparent group-hover:border-brand-primary group-hover:text-brand-primary">
              Products
            </button>

            <div
              className={`${dropdownBase} w-[700px] grid grid-cols-3 gap-6
              opacity-0 invisible translate-y-1
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}
            >
              <Link to="/products/identity" className="hover:text-brand-primary block">
                <strong>Identity Verification</strong>
                <p className="text-xs text-slate-600">AI ID, liveness & fraud detection.</p>
              </Link>

              <Link to="/products/criminal" className="hover:text-brand-primary block">
                <strong>Criminal Background Checks</strong>
                <p className="text-xs text-slate-600">Partner-led criminal screening.</p>
              </Link>

              <Link to="/products/employment" className="hover:text-brand-primary block">
                <strong>Employment Verification</strong>
                <p className="text-xs text-slate-600">Past job role history.</p>
              </Link>

              <Link to="/products/education" className="hover:text-brand-primary block">
                <strong>Education Verification</strong>
                <p className="text-xs text-slate-600">Degrees & certifications.</p>
              </Link>

              <Link to="/products/watchlists" className="hover:text-brand-primary block">
                <strong>Watchlists & Sanctions</strong>
                <p className="text-xs text-slate-600">PEP, AML & global sanctions.</p>
              </Link>

              <Link to="/products/fraud-ai" className="hover:text-brand-primary block">
                <strong>Fraud AI</strong>
                <p className="text-xs text-slate-600">Document tampering & risk scoring.</p>
              </Link>
            </div>
          </div>

          {/* ---------- INDUSTRIES DROPDOWN ---------- */}
          <div className="relative group">
            <button className="text-sm font-medium px-3 py-2 border-b-2 border-transparent group-hover:border-brand-primary group-hover:text-brand-primary">
              Industries
            </button>

            <div
              className={`${dropdownBase} w-[640px] grid grid-cols-2 gap-6
              opacity-0 invisible translate-y-1
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}
            >
              <Link to="/industries/financial-services" className="hover:text-brand-primary block">
                <strong>Financial Services</strong>
                <p className="text-xs text-slate-600">KYC, AML, and compliant onboarding.</p>
              </Link>

              <Link to="/industries/gig" className="hover:text-brand-primary block">
                <strong>Gig & On-demand</strong>
                <p className="text-xs text-slate-600">Drivers, riders, and delivery partners.</p>
              </Link>

              <Link to="/industries/healthcare" className="hover:text-brand-primary block">
                <strong>Healthcare</strong>
                <p className="text-xs text-slate-600">Credential & license verification.</p>
              </Link>

              <Link to="/industries/retail" className="hover:text-brand-primary block">
                <strong>Retail & Ecommerce</strong>
                <p className="text-xs text-slate-600">Store & warehouse hiring.</p>
              </Link>

              <Link to="/industries/staffing" className="hover:text-brand-primary block">
                <strong>Staffing & Recruiting</strong>
                <p className="text-xs text-slate-600">Bulk candidate screening.</p>
              </Link>

              <Link to="/industries/technology" className="hover:text-brand-primary block">
                <strong>Technology & SaaS</strong>
                <p className="text-xs text-slate-600">Remote-ready verification.</p>
              </Link>
            </div>
          </div>

          {/* ---------- STATIC LINKS ---------- */}
          <NavLink to="/pricing" className={linkClass}>
            Pricing
          </NavLink>

          <NavLink to="/resources" className={linkClass}>
            Resources
          </NavLink>

          <NavLink to="/company" className={linkClass}>
            About Us
          </NavLink>
        </nav>

        {/* ---------- RIGHT SIDE BUTTONS ---------- */}
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium">
            Client LogIn
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
