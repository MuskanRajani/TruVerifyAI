
import { Link } from "react-router-dom";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "TruVerifyAI helped us bring all of our verification use cases into one clean platform that our teams actually enjoy using.",
    name: "Head of Talent",
    company: "Remote product company (sample)",
  },
  {
    quote:
      "Our operations team finally has a single view of candidate status across identity, employment and criminal checks.",
    name: "VP Operations",
    company: "Gig marketplace (sample)",
  },
  {
    quote:
      "Having clear, auditable workflows makes it easier for us to work with compliance and legal without slowing hiring down.",
    name: "Risk & Compliance Lead",
    company: "Fintech (sample)",
  },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="bg-brand-dark text-white animate-fadeSlideUp">
        <div className="section-container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-300">
              Background checks for modern teams
            </p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              A verification platform built for remote, high-growth and regulated hiring.
            </h1>
            <p className="text-sm md:text-base text-orange-50 max-w-xl">
              TruVerifyAI combines identity, employment, education, criminal (via partners), watchlists and fraud
              scoring in one place — with flows that feel respectful to candidates and reliable to your teams.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="bg-brand-primary px-6 py-3 rounded-full text-sm font-semibold text-white shadow-card"
              >
                Request a demo
              </Link>
              <Link
                to="/products"
                className="border border-orange-300/70 px-6 py-3 rounded-full text-sm text-orange-100 hover:bg-white/5"
              >
                Explore products
              </Link>
            </div>
            <p className="text-[11px] text-orange-100/80">
              Designed for HR, operations, risk and compliance teams hiring across countries.
            </p>
          </div>

          <div className="card-soft bg-slate-900/90 border-orange-500/20 p-5 text-xs text-slate-100 space-y-3">
            <h2 className="text-[13px] font-semibold">A single view of verification</h2>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-900/80 border border-orange-500/20 rounded-xl p-3">
                <p className="text-[11px] text-slate-300 mb-1">Today</p>
                <p className="text-[11px] text-slate-400">
                  Manual emails, PDFs and spreadsheets stitched together for every candidate.
                </p>
              </div>
              <div className="bg-slate-900/80 border border-emerald-400/40 rounded-xl p-3">
                <p className="text-[11px] text-emerald-300 mb-1">With TruVerifyAI</p>
                <p className="text-[11px] text-slate-300">
                  One platform for statuses, documents and escalation paths — across roles and regions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 border-t border-slate-700/70 pt-3">
              <div>
                <div className="text-lg font-semibold text-orange-300">3x</div>
                <div className="text-[11px] text-slate-300">Faster candidate throughput</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-orange-300">40+</div>
                <div className="text-[11px] text-slate-300">Countries designed for</div>
              </div>
              <div>
                <div className="text-lg font-semibold text-orange-300">10k+</div>
                <div className="text-[11px] text-slate-300">Monthly checks supported</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST LOGOS */}
      <section className="bg-white py-10 border-y">
        <div className="section-container">
          <p className="text-center text-xs mb-6 text-slate-500">
            (Sample) Designed for teams like yours
          </p>
          <div className="flex items-center justify-between gap-6 overflow-x-auto opacity-90">
            <img src="https://picsum.photos/seed/logo1/120/40" alt="Logo 1" />
            <img src="https://picsum.photos/seed/logo2/120/40" alt="Logo 2" />
            <img src="https://picsum.photos/seed/logo3/120/40" alt="Logo 3" />
            <img src="https://picsum.photos/seed/logo4/120/40" alt="Logo 4" />
            <img src="https://picsum.photos/seed/logo5/120/40" alt="Logo 5" />
          </div>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">One platform across checks, roles and teams.</h2>
          <p className="text-sm text-slate-600 mb-4">
            TruVerifyAI sits between your ATS or internal tools and the vendors that power individual checks. It gives
            you a single way to set policy, see status and understand risk.
          </p>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
            <li>Candidate-first flows for identity, employment, education and criminal checks.</li>
            <li>Unified statuses and audit logs instead of scattered email threads.</li>
            <li>AI signals layered on top of traditional checks to highlight risk, not replace humans.</li>
          </ul>
        </div>
        <img
          src="https://picsum.photos/seed/platform-hero/900/600"
          alt="TruVerifyAI platform overview"
          className="rounded-3xl shadow-card object-cover max-h-[420px]"
        />
      </section>

      {/* PRODUCTS & SOLUTIONS SNAPSHOT */}
      <section className="section-container grid md:grid-cols-2 gap-8">
        <div className="card-soft p-6 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-orange-500 mb-1">Products</p>
            <h3 className="text-lg font-semibold mb-1">Verification building blocks</h3>
            <p className="text-xs text-slate-600 mb-3">
              Identity, employment, education, criminal (via partners), watchlists and fraud AI — combined in clear
              configurations rather than fixed &quot;packages&quot;.
            </p>
          </div>
          <Link to="/products" className="text-xs text-brand-primary font-semibold">
            Browse all products →
          </Link>
        </div>
        <div className="card-soft p-6 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-orange-500 mb-1">Solutions</p>
            <h3 className="text-lg font-semibold mb-1">Blueprints for real workflows</h3>
            <p className="text-xs text-slate-600 mb-3">
              Configure flows for pre-employment, gig onboarding, internal moves and compliance-heavy roles — in a way
              that your teams can actually maintain.
            </p>
          </div>
          <Link to="/solutions" className="text-xs text-brand-primary font-semibold">
            View solution patterns →
          </Link>
        </div>
      </section>

      {/* INDUSTRIES + SECURITY */}
      <section className="section-container grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 card-soft p-6">
          <h3 className="text-sm font-semibold mb-2">Industries we focus on</h3>
          <div className="grid sm:grid-cols-3 gap-3 text-xs text-slate-700">
            <div className="bg-orange-50 rounded-xl p-3">
              <p className="font-medium mb-1">Gig & marketplaces</p>
              <p>Riders, drivers, shoppers and local providers across regions.</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-3">
              <p className="font-medium mb-1">Fintech & financial services</p>
              <p>Roles with access to payments, credit and sensitive data.</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-3">
              <p className="font-medium mb-1">Healthcare & staffing</p>
              <p>Clinical, support and back-office teams with higher regulatory needs.</p>
            </div>
          </div>
          <Link to="/industries" className="inline-block mt-3 text-xs text-brand-primary font-semibold">
            Explore all industries →
          </Link>
        </div>
        <div className="card-soft p-6">
          <h3 className="text-sm font-semibold mb-2">Security & compliance</h3>
          <ul className="text-xs text-slate-600 space-y-1">
            <li>Role-based access for HR, ops, risk and business users.</li>
            <li>Audit-friendly records of checks, decisions and escalations.</li>
            <li>Built to connect with compliance and legal requirements as you grow.</li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-brand-primarySoft">
        <div className="section-container py-14 space-y-6">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-orange-500 mb-2">
              Customer perspective (sample)
            </p>
            <h2 className="text-2xl font-bold">Why teams lean on TruVerifyAI</h2>
          </div>
          <div className="card-soft p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-2xl text-brand-primary">
              &ldquo;
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              <p>{testimonials[activeTestimonial].quote}</p>
              <p className="text-xs text-slate-500">
                {testimonials[activeTestimonial].name} • {testimonials[activeTestimonial].company}
              </p>
              <div className="flex gap-2 mt-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2 w-6 rounded-full border ${
                      idx === activeTestimonial
                        ? "bg-brand-primary border-brand-primary"
                        : "border-slate-300 bg-white"
                    }`}
                    aria-label={`Show testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-primary text-white">
        <div className="section-container py-16 text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">Start with a single role, expand as you grow.</h2>
          <p className="text-sm text-orange-50 max-w-xl mx-auto">
            Whether you&apos;re hiring a handful of specialists or thousands of gig workers, TruVerifyAI is designed to
            scale your checks without overwhelming your team.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-primary px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold"
            >
              Talk to our team
            </Link>
            <Link
              to="/pricing"
              className="border border-orange-200 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold"
            >
              View pricing approach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
