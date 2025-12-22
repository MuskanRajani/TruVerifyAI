import { Link } from "react-router-dom";

export default function CriminalProduct() {
  return (
    <div className="space-y-24">

      {/* 🌟 HERO */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-orange-100/40 to-white" />

        <div className="section-container relative z-10 max-w-3xl mx-auto text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold">
            Criminal Background Checks
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Responsible criminal screening for trust-critical roles.
          </h1>

          <p className="text-sm md:text-base text-slate-600">
            TruVerifyAI delivers partner-verified criminal record screening with
            fairness, compliance, and regional accuracy built-in.
          </p>

          <Link
            to="/contact"
            className="mt-4 inline-block bg-brand-primary text-white px-8 py-3 rounded-full font-semibold"
          >
            Request a demo
          </Link>
        </div>
      </section>

      {/* 🖼 PROCESS + EXPLANATION */}
      <section className="section-container grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1200"
          className="rounded-3xl shadow-xl object-cover max-h-[440px]"
          alt="Criminal verification workflow"
        />

        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Jurisdiction-aware criminal verification.
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            TruVerifyAI connects with authorized regional partners to fetch legally
            accessible criminal data and presents it with role-based relevance.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Accredited police & court database checks</li>
            <li>Region-specific screening depth</li>
            <li>Smart conviction relevance filtering</li>
            <li>Escalation workflows for compliance teams</li>
          </ul>
        </div>
      </section>

      {/* ⚡ TRUST STRIP */}
      <section className="bg-slate-900 py-14">
        <div className="section-container grid md:grid-cols-3 gap-8 text-center">
          {[
            ["High-risk roles", "Delivery, finance, caregiving & asset handling"],
            ["Regulated hiring", "Healthcare, fintech & staffing companies"],
            ["Customer safety", "Protect people, data & physical assets"],
          ].map(([title, desc], i) => (
            <div key={i} className="text-white px-4">
              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-xs text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 📌 USE CASES */}
      <section className="section-container">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
          Where criminal screening matters most
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Gig & Delivery Platforms",
              desc: "Prevent repeat offenders and protect customers in real-world interactions.",
              img: "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=1000",
            },
            {
              title: "Healthcare & Caregiving",
              desc: "Safeguard patients, clinics and vulnerable populations.",
              img: "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1000",
            },
            {
              title: "Retail & Logistics",
              desc: "Reduce theft risk and improve store security",
              img: "https://images.pexels.com/photos/4481257/pexels-photo-4481257.jpeg?auto=compress&cs=tinysrgb&w=1000",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border shadow-sm hover:shadow-lg transition overflow-hidden bg-white"
            >
              <img
                src={c.img}
                alt={c.title}
                className="h-36 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 mb-1">{c.title}</h3>
                <p className="text-sm text-slate-600">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ❓ CRIMINAL BACKGROUND CHECK FAQs */}
      <section className="section-container py-20">
        <div className="max-w-3xl mx-auto">

          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold text-center mb-3">
            FAQs
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            Criminal background screening — common questions
          </h2>

          <div className="space-y-4">

            {[
              {
                q: "What type of criminal records are checked?",
                a: "TruVerifyAI accesses legally permissible police and court records through accredited regional partners. The scope of checks depends on country, role type, and local regulations."
              },
              {
                q: "Does a criminal record automatically disqualify a candidate?",
                a: "No. Criminal results are contextualized based on recency, severity, and relevance to the role. Final hiring decisions always remain with your organization."
              },
              {
                q: "Are checks compliant with local laws and regulations?",
                a: "Yes. All criminal background checks follow jurisdiction-specific laws, including restrictions on data access, lookback periods, and candidate consent requirements."
              },
              {
                q: "How long does criminal verification take?",
                a: "Turnaround time varies by country and data source. Most checks are completed within a few business days, with real-time status visibility for your team."
              },
              {
                q: "Is candidate consent required?",
                a: "Absolutely. TruVerifyAI ensures explicit candidate consent is collected before initiating any criminal background screening."
              },
              {
                q: "How are sensitive criminal records handled?",
                a: "All data is encrypted in transit and at rest, with strict role-based access controls and audit logs to ensure confidentiality and compliance."
              }
            ].map((item, index) => (
              <details
                key={index}
                className="group border border-slate-200 rounded-xl bg-white p-5 open:shadow-md transition"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="font-medium text-slate-900">
                    {item.q}
                  </span>
                  <span className="text-brand-primary text-xl group-open:rotate-45 transition">
                    +
                  </span>
                </summary>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}

          </div>
        </div>
      </section>


      {/* 🔐 FAIRNESS & COMPLIANCE */}
      <section className="bg-brand-primarySoft py-16">
        <div className="section-container max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-2xl font-bold">Fair, compliant & audit-ready</h2>
          <p className="text-sm text-slate-700">
            TruVerifyAI filters outdated and irrelevant records, ensuring only
            legally permitted and role-relevant information is evaluated.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Make safer hiring decisions without slowing growth.
        </h2>

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
