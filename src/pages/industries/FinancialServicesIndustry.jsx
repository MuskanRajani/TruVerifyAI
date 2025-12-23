import { Link } from "react-router-dom";

export default function FinancialServicesIndustry() {
  return (
    <div className="space-y-28">

      {/* 🟦 HERO — FINANCIAL TRUST THEME */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100/40 to-white" />

        <div className="section-container relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold">
              Financial Services
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Identity, risk and compliance verification for regulated financial hiring.
            </h1>

            <p className="text-sm md:text-base text-slate-600">
              TruVerifyAI enables banks, fintechs and financial platforms to meet strict
              KYC, AML and fraud-prevention requirements while onboarding faster and safer.
            </p>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="inline-block bg-brand-primary text-white px-7 py-3 rounded-full font-semibold"
              >
                Request a demo
              </Link>

              <Link
                to="/industries"
                className="inline-block border border-brand-primary text-brand-primary px-7 py-3 rounded-full font-semibold"
              >
                View all industries
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="https://images.pexels.com/photos/4386339/pexels-photo-4386339.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Financial compliance and verification"
            className="rounded-3xl shadow-xl object-cover max-h-[460px] w-full"
          />
        </div>
      </section>

      {/* ✅ FINANCIAL VERIFICATION CAPABILITIES */}
      <section className="section-container">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Built for financial-grade background verification
          </h2>
          <p className="text-sm text-slate-600">
            Financial services demand the highest levels of identity trust, fraud prevention
            and regulatory alignment. TruVerifyAI is built exactly for those requirements.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["KYC Identity Verification", "Biometric ID checks aligned with regulatory onboarding requirements."],
            ["AML & Watchlists", "Screen candidates against PEP, sanctions and global enforcement databases."],
            ["Employment & Role Validation", "Confirm experience accurately for sensitive financial roles."],
            ["Criminal Background Screening", "Identify legal risks before granting financial access."],
            ["Occupational Screening", "Detect synthetic identities and forgery-based onboarding attempts."],
            ["Audit Trails & Reporting", "Full traceability for regulators and internal compliance reviews."],
            ["Role-Based Access Controls", "Limit data visibility across HR, risk and security teams."],
            ["Data Encryption & Retention", "Secure candidate data across its entire lifecycle."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🧠 COMPLIANCE WORKFLOW — FINANCIAL STYLE */}
      <section className="bg-slate-50 py-20">
        <div className="section-container max-w-5xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
              How verification works for financial hiring
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Structured, regulator-ready verification designed for fintech and banking workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              ["01", "Candidate submits identity & financial employment data"],
              ["02", "KYC, AML and criminal checks initiated instantly"],
              ["03", "Occupational Health and screening"],
              ["04", "Final compliance report issued with audit logs"],
            ].map(([step, text], i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-brand-primary text-white rounded-xl flex items-center justify-center font-bold mb-3">
                  {step}
                </div>
                <p className="text-sm text-slate-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🎯 FINANCIAL USE CASES */}
      <section className="section-container">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
          Financial services teams that rely on TruVerifyAI
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.pexels.com/photos/4386374/pexels-photo-4386374.jpeg?auto=compress&cs=tinysrgb&w=1000"
              className="h-40 w-full object-cover"
              alt="Fintech onboarding"
            />
            <div className="p-6">
              <h3 className="font-semibold mb-1">Fintech & Digital Banking</h3>
              <p className="text-sm text-slate-600">
                Secure onboarding of analysts, support agents, product and compliance teams.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.pexels.com/photos/6801873/pexels-photo-6801873.jpeg?auto=compress&cs=tinysrgb&w=1000"
              className="h-40 w-full object-cover"
              alt="Credit risk operations"
            />
            <div className="p-6">
              <h3 className="font-semibold mb-1">Credit, Lending & Risk Teams</h3>
              <p className="text-sm text-slate-600">
                Verify roles handling loan approvals, underwriting and fraud investigation.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.pexels.com/photos/7563681/pexels-photo-7563681.jpeg?auto=compress&cs=tinysrgb&w=1000"
              className="h-40 w-full object-cover"
              alt="Investment compliance teams"
            />
            <div className="p-6">
              <h3 className="font-semibold mb-1">Trading & Investment Platforms</h3>
              <p className="text-sm text-slate-600">
                Ensure regulators, clients and markets are protected from insider risk.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 🔐 SECURITY & REGULATORY ASSURANCE */}
      <section className="bg-brand-primarySoft py-16">
        <div className="section-container max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-2xl font-bold">Designed for regulatory confidence</h2>
          <p className="text-sm text-slate-700">
            TruVerifyAI supports regulator-ready documentation, audit-friendly reporting,
            jurisdiction-aware data access and legally aligned screening practices.
          </p>
        </div>
      </section>

      {/* ✅ FINAL CTA */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Power your financial hiring with verified trust.
        </h2>

        <p className="text-sm text-orange-100 mt-2">
          From fintech startups to regulated financial institutions — TruVerifyAI scales with your compliance needs.
        </p>

        <Link
          to="/contact"
          className="mt-5 inline-block bg-white text-brand-primary px-8 py-3 rounded-full font-semibold"
        >
          Talk to our team
        </Link>
      </section>

    </div>
  );
}
