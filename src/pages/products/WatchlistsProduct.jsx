import { Link } from "react-router-dom";

export default function WatchlistsProduct() {
  return (
    <div className="space-y-24">

      {/* ================= HERO ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-100/30 to-white" />
        <div className="section-container relative z-10 max-w-3xl mx-auto text-center space-y-5">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold">
            Watchlists & Sanctions Screening
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Reduce regulatory and reputational risk before it becomes a problem.
          </h1>

          <p className="text-sm md:text-base text-slate-600">
            Screen candidates against global sanctions, PEP and AML watchlists —
            with structured review, audit trails and compliance-ready decisions.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-brand-primary text-white px-8 py-3 rounded-full font-semibold"
          >
            Request a demo
          </Link>
        </div>
      </section>

      {/* ================= OVERVIEW + IMAGE ================= */}
      <section className="section-container grid md:grid-cols-2 gap-14 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            One consolidated view of global risk exposure.
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            Watchlist and sanctions screening is essential for regulated and
            trust-sensitive roles. TruVerifyAI aggregates multiple international
            risk sources and presents potential matches with context.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            Instead of raw alerts, your teams get structured signals,
            confidence indicators and decision-ready workflows.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>PEP (Politically Exposed Persons)</li>
            <li>Global sanctions & embargo lists</li>
            <li>AML & financial crime watchlists</li>
            <li>Centralized audit & review trail</li>
          </ul>
        </div>

        <img
          src="https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Compliance and risk screening dashboard"
          className="rounded-3xl shadow-xl object-cover max-h-[460px] w-full"
        />
      </section>

      {/* ================= HOW IT WORKS (WITH VISUALS) ================= */}
      <section className="bg-slate-50 py-20">
        <div className="section-container">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">
            How watchlist screening works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Screening",
                desc: "Candidate details are checked against global risk databases.",
                img: "https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Match confidence",
                desc: "Potential matches are scored by similarity and relevance.",
                img: "https://images.pexels.com/photos/6693651/pexels-photo-6693651.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Human review",
                desc: "Compliance teams validate matches with supporting context.",
                img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
              },
              {
                title: "Decision logging",
                desc: "Final decisions are recorded with full audit history.",
                img: "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800"
              }
            ].map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border shadow-sm overflow-hidden"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-36 w-full object-cover"
                />
                <div className="p-5">
                  <h4 className="font-semibold mb-1">{s.title}</h4>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO USES THIS ================= */}
      <section className="section-container py-20">
        <h2 className="text-2xl font-bold text-center mb-12">
          Common use cases across industries
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Fintech & Payments",
              desc: "Support AML programs and regulator expectations.",
              img: "https://images.pexels.com/photos/7567527/pexels-photo-7567527.jpeg?auto=compress&cs=tinysrgb&w=900"
            },
            {
              title: "Banking & NBFCs",
              desc: "Ensure leadership and risk roles meet compliance thresholds.",
              img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=900"
            },
            {
              title: "Enterprise & Regulated Firms",
              desc: "Add diligence for senior and trust-sensitive positions.",
              img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900"
            }
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border bg-white shadow-sm overflow-hidden"
            >
              <img
                src={c.img}
                alt={c.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1">{c.title}</h3>
                <p className="text-sm text-slate-600">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FAQs ================= */}
<section className="section-container pt-8 pb-12">
  <div className="max-w-3xl mx-auto">
    <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold text-center mb-2">
      FAQs
    </p>

    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
      Watchlists & sanctions — frequently asked questions
    </h2>

    <div className="space-y-4">
      {[
        {
          q: "What watchlists are checked?",
          a: "Global sanctions lists, PEP databases and regulatory enforcement lists depending on region."
        },
        {
          q: "How often is watchlist data updated?",
          a: "Data sources are refreshed regularly to ensure current risk indicators."
        },
        {
          q: "What happens when a match is found?",
          a: "Matches are flagged with confidence indicators and reviewed by compliance teams."
        },
        {
          q: "Can false positives occur?",
          a: "Yes. Contextual data and match strength help reduce unnecessary escalations."
        },
        {
          q: "Is this required for all roles?",
          a: "Typically used for regulated, senior or trust-sensitive positions."
        }
      ].map((item, i) => (
        <details
          key={i}
          className="border rounded-xl bg-white p-5 hover:shadow-sm transition"
        >
          <summary className="flex justify-between cursor-pointer font-medium">
            {item.q}
            <span className="text-brand-primary text-xl">+</span>
          </summary>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  </div>
</section>


      {/* ================= CTA ================= */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Stay ahead of regulatory expectations.
        </h2>
        <p className="text-sm text-orange-200 mt-2 max-w-xl mx-auto">
          Add watchlist and sanctions screening wherever trust and compliance matter.
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
