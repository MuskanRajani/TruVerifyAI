import { Link } from "react-router-dom";

export default function EmploymentProduct() {
  return (
    <div className="space-y-24">

      {/* 🌟 HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 via-orange-100/30 to-white" />
        <div className="section-container relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold">
            Employment Verification
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Verify work history without slowing down hiring.
          </h1>

          <p className="text-sm md:text-base text-slate-600">
            Confirm past roles, tenure and employers through automated workflows that replace
            endless phone calls, emails and spreadsheets.
          </p>

          <Link
            to="/contact"
            className="mt-4 inline-block bg-brand-primary text-white px-8 py-3 rounded-full font-semibold"
          >
            Request a demo
          </Link>
        </div>
      </section>

      {/* 🖼 FEATURE IMAGE + DESCRIPTION */}
      <section className="section-container grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
          className="rounded-3xl shadow-xl object-cover max-h-[440px]"
          alt="Employment verification"
        />

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Consistent, auditable employment checks.
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            TruVerifyAI standardizes employment verification by validating previous employers, job titles,
            dates of employment and reason for exit — all through a structured, trackable workflow.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Employer & designation validation</li>
            <li>Joining & relieving date confirmation</li>
            <li>Automated HR / manager reference requests</li>
            <li>Mismatch & anomaly flagging for reviewers</li>
          </ul>
        </div>
      </section>

      {/* ⚡ HIGHLIGHT METRICS */}
      <section className="section-container grid md:grid-cols-3 gap-6">
        {[
          ["2× faster", "Average verification vs. manual"],
          ["95%+", "Verified employment match rate"],
          ["Multi-region", "Support for global employers"],
        ].map(([v, l], i) => (
          <div
            key={i}
            className="p-6 bg-brand-primary text-white rounded-2xl shadow-md text-center"
          >
            <div className="text-3xl font-bold">{v}</div>
            <p className="text-xs mt-1 text-orange-100">{l}</p>
          </div>
        ))}
      </section>

      {/* 🔍 USE CASES */}
      <section className="section-container space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          Where employment verification matters most
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Senior & leadership hiring",
              desc: "Ensure role scope, team size and responsibilities match what’s claimed.",
            },
            {
              title: "IT & tech hiring",
              desc: "Validate project experience and tenure in fast-changing organizations.",
            },
            {
              title: "Staffing & recruitment firms",
              desc: "Deliver verified talent to clients with clear, shareable reports.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl border shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-slate-900 mb-1">{card.title}</h3>
              <p className="text-sm text-slate-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔐 SECURITY & COMPLIANCE */}
      <section className="bg-brand-primarySoft py-16">
        <div className="section-container max-w-4xl text-center space-y-3">
          <h2 className="text-2xl font-bold">Respectful, secure data handling</h2>
          <p className="text-sm text-slate-700">
            Employer and candidate data is handled with encryption, access control and audit logs —
            giving HR, legal and compliance teams the visibility they need.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Build trust into every offer letter.</h2>
        <p className="text-sm text-orange-200 mt-2">
          Make employment verification a standard step in your hiring process.
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
