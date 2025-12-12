import { Link } from "react-router-dom";

export default function FraudAIProduct() {
  return (
    <div className="space-y-24">

      {/* 🌟 HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/40 via-orange-100/30 to-white" />
        <div className="section-container relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold">
            Fraud AI & Risk Scoring
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Detect identity fraud before it reaches production.
          </h1>

          <p className="text-sm md:text-base text-slate-600">
            AI models analyze documents, metadata and behavior patterns to highlight
            suspicious applications, synthetic identities and tampered files.
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
          src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=80"
          className="rounded-3xl shadow-xl object-cover max-h-[440px]"
          alt="Fraud AI & risk scoring"
        />

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            A second brain for your risk team.
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            Fraud AI doesn’t replace human judgment — it brings the most suspicious cases to the top
            of the queue, so your team spends time where it really matters.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Document tamper & forgery detection</li>
            <li>Synthetic identity and pattern abuse signals</li>
            <li>Risk scores with reason codes</li>
            <li>Configurable thresholds per role or region</li>
          </ul>
        </div>
      </section>

      {/* ⚡ HIGHLIGHT METRICS */}
      <section className="section-container grid md:grid-cols-3 gap-6">
        {[
          ["Up to 50%", "Reduction in manual fraud review load"],
          ["Real-time", "Fraud signal detection"],
          ["Configurable", "Risk scoring per workflow"],
        ].map(([v, l], i) => (
          <div
            key={i}
            className="p-6 bg-brand-primary text-white rounded-2xl shadow-md text-center"
          >
            <div className="text-2xl font-bold">{v}</div>
            <p className="text-xs mt-1 text-orange-100">{l}</p>
          </div>
        ))}
      </section>

      {/* USE CASES */}
      <section className="section-container space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          Where Fraud AI makes the biggest impact
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Gig & marketplaces",
              desc: "Prevent repeat abuse, fake driver identities and bonus fraud.",
            },
            {
              title: "Fintech & lending",
              desc: "Reduce losses from synthetic identities and fake KYC documents.",
            },
            {
              title: "High-volume hiring",
              desc: "Flag only the riskiest applications for manual review.",
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

      {/* CTA */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Stay ahead of evolving fraud patterns.</h2>
        <p className="text-sm text-orange-200 mt-2">
          Let AI surface risk — while your teams stay in control of the final decision.
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
