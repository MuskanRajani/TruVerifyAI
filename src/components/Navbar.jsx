import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium px-2 py-1 transition-all border-b-2 ${
      isActive
        ? "border-brand-primary text-brand-primary"
        : "border-transparent hover:border-brand-primary hover:text-brand-primary"
    }`;

  const dropdownBase =
    "absolute left-0 top-full mt-2 bg-white shadow-lg rounded-xl p-5 text-sm transition-all duration-200";

  // Reset mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false);
        setShowProducts(false);
        setShowIndustries(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ===== MOBILE STYLES UPDATED HERE =====
  const mobileMenuMain =
    "block text-[16px] font-bold text-slate-900 py-2 hover:text-brand-primary transition";

  const mobileNavItem =
    "block text-[14px] font-semibold text-slate-900 py-2 hover:text-brand-primary transition";

  const mobileSectionTitle =
    "text-[12px] uppercase font-bold tracking-wide text-brand-primary pt-2";

  const mobileDivider =
    "h-[1px] w-full bg-gradient-to-r from-orange-200/70 to-transparent my-1 rounded-full";

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="section-container flex items-center justify-between py-2 min-h-[64px]">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <div className="w-[110px]">
            <img src={logo} alt="TruVerifyAI Logo" className="w-full h-auto object-contain" />
          </div>
        </Link>

        {/* DESKTOP NAV — untouched */}
        <nav className="hidden md:flex items-center gap-5 relative translate-x-4">
          <div className="relative group">
            <button className="text-sm font-medium px-2 py-1 border-b-2 border-transparent group-hover:border-brand-primary group-hover:text-brand-primary">
              Products
            </button>
            <div className={`${dropdownBase} w-[700px] grid grid-cols-3 gap-5 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}>
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
                <p className="text-xs text-slate-600">Past employment and role history.</p>
              </Link>
              <Link to="/products/education" className="hover:text-brand-primary block">
                <strong>Education Verification</strong>
                <p className="text-xs text-slate-600">Degrees & certifications.</p>
              </Link>
              <Link to="/products/watchlists" className="hover:text-brand-primary block">
                <strong>Watchlists & Sanctions</strong>
                <p className="text-xs text-slate-600">PEP, AML & sanctions screening.</p>
              </Link>
              <Link to="/products/occupational-health" className="hover:text-brand-primary block">
                <strong>Occupational Health</strong>
                <p className="text-xs text-slate-600">Drug testing & health readiness.</p>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className="text-sm font-medium px-2 py-1 border-b-2 border-transparent group-hover:border-brand-primary group-hover:text-brand-primary">
              Industries
            </button>
            <div className={`${dropdownBase} w-[640px] grid grid-cols-2 gap-5 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0`}>
              <Link to="/industries/financial-services" className="hover:text-brand-primary block">
                <strong>Financial Services</strong>
                <p className="text-xs text-slate-600">KYC, AML, regulated hiring.</p>
              </Link>
              <Link to="/industries/gig" className="hover:text-brand-primary block">
                <strong>Gig & On-demand</strong>
                <p className="text-xs text-slate-600">Drivers, couriers, taskers.</p>
              </Link>
              <Link to="/industries/healthcare" className="hover:text-brand-primary block">
                <strong>Healthcare</strong>
                <p className="text-xs text-slate-600">Clinical staff hiring.</p>
              </Link>
              <Link to="/industries/retail" className="hover:text-brand-primary block">
                <strong>Retail & Ecommerce</strong>
                <p className="text-xs text-slate-600">Store & warehouse roles.</p>
              </Link>
              <Link to="/industries/staffing" className="hover:text-brand-primary block">
                <strong>Staffing & Recruiting</strong>
                <p className="text-xs text-slate-600">BGV hiring packages.</p>
              </Link>
              <Link to="/industries/technology" className="hover:text-brand-primary block">
                <strong>Technology & SaaS</strong>
                <p className="text-xs text-slate-600">Secure remote hiring.</p>
              </Link>
            </div>
          </div>

          <NavLink to="/pricing" className={linkClass}>Pricing</NavLink>
          <NavLink to="/resources" className={linkClass}>Resources</NavLink>
          <NavLink to="/company" className={linkClass}>About Us</NavLink>
        </nav>

        {/* DESKTOP RIGHT — untouched */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-sm font-medium">Client LogIn</Link>
          <Link to="/contact" className="bg-brand-primary text-white px-4 py-2 rounded-full text-xs font-semibold hover:opacity-90">
            Request demo
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setOpen(!open)} className="md:hidden w-7 h-7 flex flex-col items-center justify-center">
          <span className="w-5 h-[2px] bg-slate-700 mb-1 rounded"></span>
          <span className="w-5 h-[2px] bg-slate-700 mb-1 rounded"></span>
          <span className="w-5 h-[2px] bg-slate-700 rounded"></span>
        </button>
      </div>

      {/* ===== MOBILE MENU UPDATED ===== */}
      {open && (
        <div className="md:hidden bg-white px-5 pt-2 pb-4 text-left space-y-2">

             {/* PRODUCTS */}
          <div>
            <button onClick={() => setShowProducts(!showProducts)} className="w-full text-[16px] font-bold py-2 flex justify-between items-center text-slate-900 hover:text-brand-primary transition">
              Products <span className="text-[15px]">{showProducts ? "⌄" : "›"}</span>
            </button>
            {showProducts && (
              <div className="pl-3 border-l border-orange-200 space-y-[5px] mt-1">
                <Link to="/products/identity" className={mobileNavItem} onClick={() => setOpen(false)}>Identity Verification</Link>
                <Link to="/products/criminal" className={mobileNavItem} onClick={() => setOpen(false)}>Criminal Background Checks</Link>
                <Link to="/products/employment" className={mobileNavItem} onClick={() => setOpen(false)}>Employment Verification</Link>
                <Link to="/products/education" className={mobileNavItem} onClick={() => setOpen(false)}>Education Verification</Link>
                <Link to="/products/watchlists" className={mobileNavItem} onClick={() => setOpen(false)}>Watchlists & Sanctions</Link>
                <Link to="/products/occupational-health" className={mobileNavItem} onClick={() => setOpen(false)}>Occupational Health Screening</Link>
              </div>
            )}
          </div>

          {/* INDUSTRIES */}
          <div>
            <button onClick={() => setShowIndustries(!showIndustries)} className="w-full text-[16px] font-bold py-2 flex justify-between items-center text-slate-900 hover:text-brand-primary transition">
              Industries <span className="text-[15px]">{showIndustries ? "⌄" : "›"}</span>
            </button>
            {showIndustries && (
              <div className="pl-3 border-l border-orange-200 space-y-[5px] mt-1">
                <Link to="/industries/financial-services" className={mobileNavItem} onClick={() => setOpen(false)}>Financial Services</Link>
                <Link to="/industries/gig" className={mobileNavItem} onClick={() => setOpen(false)}>Gig & On-demand</Link>
                <Link to="/industries/healthcare" className={mobileNavItem} onClick={() => setOpen(false)}>Healthcare</Link>
                <Link to="/industries/retail" className={mobileNavItem} onClick={() => setOpen(false)}>Retail & Ecommerce</Link>
                <Link to="/industries/staffing" className={mobileNavItem} onClick={() => setOpen(false)}>Staffing & Recruiting</Link>
                <Link to="/industries/technology" className={mobileNavItem} onClick={() => setOpen(false)}>Technology & SaaS</Link>
              </div>
            )}
          </div>

          <NavLink to="/pricing" className={mobileMenuMain} onClick={() => setOpen(false)}>Pricing</NavLink>
          <NavLink to="/resources" className={mobileMenuMain} onClick={() => setOpen(false)}>Resources</NavLink>
          <NavLink to="/company" className={mobileMenuMain} onClick={() => setOpen(false)}>About Us</NavLink>

          {/* MOBILE CTA */}
          <div className="flex justify-center pt-3 mt-2">
            <Link to="/contact" onClick={() => setOpen(false)} className="bg-brand-primary text-white px-6 py-2 rounded-full text-[13px] font-bold tracking-wide shadow-sm hover:opacity-95 transition">
              Contact Sales
            </Link>
          </div>

        </div>
      )}
    </header>
  );
}
