import { Link } from "react-router-dom";

export default function Company() {
  return (
    <div className="space-y-28">

      {/* ✅ HERO — SPLIT INTRO (NEW COMPANY POSITIONING) */}
      <section className="section-container grid md:grid-cols-2 gap-12 items-center pt-24">
        <div className="space-y-5">
          <p className="text-xs tracking-[0.25em] uppercase text-brand-primary font-semibold">
            About TruVerifyAI
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            A new standard for trust in modern hiring.
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-xl">
            TruVerifyAI is a next-generation background verification platform built for modern,
            distributed and high-growth teams. We combine automation, AI-driven checks and
            compliance-aware workflows to help companies hire with speed, accuracy and confidence.
          </p>

          <p className="text-sm text-slate-600 max-w-xl">
            From identity verification to fraud detection and criminal screening, our platform
            acts as a unified trust layer behind every hiring decision.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-brand-primary text-white px-8 py-3 mt-4 rounded-full text-sm font-semibold shadow hover:opacity-90"
          >
            Talk to our team
          </Link>
        </div>

        <img
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1400&q=80"
          alt="Team collaboration"
          className="rounded-3xl shadow-xl object-cover max-h-[480px] w-full"
        />
      </section>

      {/* ✅ OUR PURPOSE */}
      <section className="section-container grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
          alt="Purpose"
          className="rounded-3xl shadow-lg object-cover max-h-[440px]"
        />

        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-slate-900">Why We Exist</h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            Hiring today is global, fast-moving and highly regulated. Yet background
            verification is still slow, fragmented and heavily manual for many organizations.
            Teams struggle with email-based checks, scattered vendors and inconsistent compliance.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            TruVerifyAI exists to fix this gap. We are building a single platform where verification,
            risk analysis and compliance all come together — reducing friction for candidates
            and giving organizations a clear, auditable way to make trusted hiring decisions.
          </p>
        </div>
      </section>

      {/* ✅ WHAT WE ARE BUILDING */}
      <section className="section-container max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-bold text-slate-900">What We Are Building</h2>

        <p className="text-sm text-slate-600 leading-relaxed">
          TruVerifyAI is being built as a deeply configurable verification platform that adapts across
          industries like gig platforms, fintech, healthcare, staffing, retail and technology.
        </p>

        <p className="text-sm text-slate-600 leading-relaxed">
          Instead of rigid packages, we enable teams to choose exactly the checks they need —
          identity, employment, education, criminal screening, watchlists and fraud AI — and apply
          them across roles, regions and risk profiles.
        </p>
      </section>

      {/* ✅ OUR PRINCIPLES */}
      <section className="section-container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Principles</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Trust Above Everything",
              desc: "Every system we design is built with security, auditability and compliance at its core.",
            },
            {
              title: "AI With Responsibility",
              desc: "Our AI enhances decisions while keeping humans in full control of outcomes.",
            },
            {
              title: "Candidate Respect",
              desc: "Verification must be transparent, fair and privacy-first for every candidate.",
            },
            {
              title: "Built for Scale",
              desc: "Our platform is designed to grow from small teams to global enterprises.",
            },
            {
              title: "Industry-Aware",
              desc: "Each workflow is adapted to real-world hiring needs and regulatory conditions.",
            },
            {
              title: "Speed With Accuracy",
              desc: "We reduce turnaround time without sacrificing verification quality.",
            },
          ].map((v, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border shadow-sm p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2 text-slate-900">{v.title}</h3>
              <p className="text-sm text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ HOW WE THINK ABOUT TRUST */}
      <section className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Approach to Trust & Compliance
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            Trust is not just about passing checks — it’s about building fair, explainable and
            regulation-ready decisions. That’s why we combine automated verification with
            transparency, audit logs and region-aware compliance logic.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            As we grow, our platform continues to evolve alongside changing regulations,
            emerging fraud patterns and new hiring models.
          </p>
        </div>

      <img
  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=80"
  alt="Hiring analytics dashboard"
  className="rounded-3xl shadow-xl object-cover max-h-[440px]"
/>

      </section>

      {/* ✅ CTA */}
      <section className="bg-brand-primary text-white py-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          We are just getting started.
        </h2>

        <p className="text-sm text-orange-200 mt-3 max-w-xl mx-auto">
          Whether you’re early-stage or already scaling globally, TruVerifyAI is built to
          support your hiring trust infrastructure from day one.
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block bg-white text-brand-primary px-8 py-3 rounded-full font-semibold"
        >
          Talk to our team
        </Link>
      </section>

    </div>
  );
}
