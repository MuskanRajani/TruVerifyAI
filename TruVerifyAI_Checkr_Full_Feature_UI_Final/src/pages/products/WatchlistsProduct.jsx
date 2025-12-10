import { Link } from "react-router-dom";

export default function WatchlistsProduct() {
  return (
    <div className="space-y-24">

      {/* 🌟 HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/40 via-orange-100/30 to-white" />
        <div className="section-container relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold">
            Watchlists & Sanctions
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Screen candidates against global risk lists in one click.
          </h1>

          <p className="text-sm md:text-base text-slate-600">
            Check individuals against PEP, AML and international sanctions databases to reduce
            regulatory and reputational risk.
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
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1400&q=80"
          className="rounded-3xl shadow-xl object-cover max-h-[440px]"
          alt="Watchlists & sanctions screening"
        />

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            One view of global risk signals.
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            TruVerifyAI surfaces potential matches across global watchlists, then lets your
            compliance or risk team review, annotate and document decisions in a single place.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>PEP (Politically Exposed Persons) checks</li>
            <li>International sanctions & enforcement lists</li>
            <li>AML and financial crime watchlists</li>
            <li>Case notes and decision audit trails</li>
          </ul>
        </div>
      </section>

      {/* ⚡ HIGHLIGHT METRICS */}
      <section className="section-container grid md:grid-cols-3 gap-6">
        {[
          ["2000+", "Lists monitored via partners"],
          ["Real-time", "Risk list updates"],
          ["Single view", "Consolidated match review"],
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

      {/* USE CASES */}
      <section className="section-container space-y-8">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          Ideal for risk-sensitive hiring
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Fintech & payments",
              desc: "Screen high-risk and high-value roles handling customer funds.",
            },
            {
              title: "Banking & NBFCs",
              desc: "Support AML programs with consistent candidate screening.",
            },
            {
              title: "Compliance-heavy roles",
              desc: "Add an extra layer of diligence for senior and regulated positions.",
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
        <h2 className="text-2xl md:text-3xl font-bold">Stay ahead of regulatory expectations.</h2>
        <p className="text-sm text-orange-200 mt-2">
          Add watchlist screening wherever compliance and reputation matter most.
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
