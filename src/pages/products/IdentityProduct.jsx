import { Link } from "react-router-dom";

export default function IdentityProduct() {
  return (
    <div className="space-y-24">

      {/* 🌟 HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-orange-100/30 to-blue-100/30" />
        <div className="section-container relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold">
            Identity Verification
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Verify identities instantly with AI-driven accuracy.
          </h1>

          <p className="text-sm md:text-base text-slate-600">
            TruVerifyAI provides liveness detection, document validation, and biometric matching  
            — ensuring that every candidate is who they claim to be.
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
          src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=80"
          className="rounded-3xl shadow-xl object-cover max-h-[440px]"
          alt="Identity verification demo"
        />

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Powerful KYC with built-in fraud detection.
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            Identity verification is the first step in preventing fraud and ensuring safe hiring.  
            TruVerifyAI analyzes ID documents, detects tampering, and compares biometric signatures  
            to validate the authenticity of each candidate.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>AI-powered ID document validation</li>
            <li>Face match & passive liveness detection</li>
            <li>Fraud signal scoring for high-risk cases</li>
            <li>Instant results for faster onboarding</li>
          </ul>
        </div>
      </section>

      {/* ⚡ HIGHLIGHT METRICS */}
      <section className="section-container grid md:grid-cols-3 gap-6">
        {[
          ["99.9%", "Document accuracy with AI"],
          ["< 60 sec", "Average verification time"],
          ["40+ regions", "Compliance-ready coverage"],
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
          Where identity verification is mission-critical
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Gig Workforce Platforms",
              desc: "Prevent fake driver, delivery and rider identities at scale.",
            },
            {
              title: "Fintech & Banking",
              desc: "Meet strict KYC onboarding and audit compliance standards.",
            },
            {
              title: "Healthcare & Staffing",
              desc: "Validate identity for patient-facing and regulated roles.",
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
          <h2 className="text-2xl font-bold">Security & Compliance</h2>
          <p className="text-sm text-slate-700">
            All identity data is encrypted at rest and in transit. TruVerifyAI follows GDPR-aligned
            privacy practices, audit logging, and strict access control across all verification data.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Identity verification made simple.</h2>
        <p className="text-sm text-orange-200 mt-2">
          Scale your onboarding with trust, speed, and global compliance.
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
