import { Link } from "react-router-dom";

export default function TechnologyIndustry() {
  return (
    <div className="space-y-28">

      {/* HERO */}
      <section className="relative py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
        <div className="section-container grid md:grid-cols-2 gap-12 items-center text-white">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-orange-300 font-semibold mb-3">
              Technology & SaaS
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Secure background screening for remote-first tech teams.
            </h1>

            <p className="text-sm text-slate-200 mb-5 leading-relaxed">
              Engineering, product, security and data teams often get access to source code,
              infrastructure and sensitive customer information from day one. TruVerifyAI helps
              you verify who you&apos;re hiring — with checks designed for high-trust roles.
            </p>

            <p className="text-sm text-slate-200 mb-6 leading-relaxed">
              Combine identity, employment, education and optional criminal checks into a single,
              repeatable workflow that fits modern, remote hiring.
            </p>

            <Link
              to="/contact"
              className="bg-white text-brand-primary px-8 py-3 rounded-full font-semibold shadow"
            >
              Secure your next hire
            </Link>
          </div>

          <img
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Engineering team"
            className="rounded-3xl shadow-2xl object-cover w-full max-h-[520px] border border-slate-600"
          />
        </div>
      </section>

      {/* RISK & NEEDS GRID */}
      <section className="section-container">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
          Why tech teams take verification seriously
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Source code access",
              desc: "Engineers and contractors may access proprietary codebases, architectures and algorithms."
            },
            {
              title: "Customer data & PII",
              desc: "Support, data and infra teams work with user data subject to strict privacy standards."
            },
            {
              title: "Infrastructure control",
              desc: "DevOps and SRE roles control production systems, credentials and deployment pipelines."
            },
          ].map((c, i) => (
            <div key={i} className="p-6 bg-white rounded-2xl border shadow-sm">
              <h3 className="font-semibold mb-2">{c.title}</h3>
              <p className="text-sm text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VERIFICATION LAYERS WITH IMAGE */}
      <section className="bg-slate-50 py-20">
        <div className="section-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Layered checks for high-trust technical roles
            </h2>
            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Instead of blanket rules, TruVerifyAI supports role-based configurations so you can
              tighten checks for critical positions while keeping low-friction flows for others.
            </p>
            <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
              <li>Identity verification with liveness and document checks</li>
              <li>Employment verification to validate prior roles and tenure</li>
              <li>Education and certification checks for specialized functions</li>
              <li>Optional criminal checks for infrastructure and security roles (where legal)</li>
            </ul>
          </div>

          <img
            src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Developer working remotely"
            className="rounded-3xl shadow-xl object-cover max-h-[460px] w-full"
          />
        </div>
      </section>

      {/* REMOTE & GLOBAL HIRING */}
      <section className="section-container grid md:grid-cols-2 gap-12 items-start">
        <div className="rounded-2xl bg-white border shadow p-6">
          <h3 className="font-semibold mb-2">Designed for remote & distributed teams</h3>
          <p className="text-sm text-slate-600 mb-3 leading-relaxed">
            Whether you&apos;re hiring in one hub or across 20+ countries, TruVerifyAI helps you keep
            policies consistent while adapting to local rules.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
            <li>Country-specific check configurations</li>
            <li>Candidate-friendly mobile flows</li>
            <li>Timezone-friendly communication & reminders</li>
            <li>Role-based access for HR, managers and security teams</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white border shadow p-6">
          <h3 className="font-semibold mb-2">Align with your security posture</h3>
          <p className="text-sm text-slate-600 mb-3 leading-relaxed">
            Use verification to support your security, compliance and vendor frameworks — from SOC 2
            to ISO or customer security questionnaires.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
            <li>Evidence for customer and board-level reporting</li>
            <li>Risk-tagged profiles for sensitive roles</li>
            <li>Exportable audit logs for security reviews</li>
            <li>Support for internal policy attestations (roadmap-style)</li>
          </ul>
        </div>
      </section>

      {/* IMAGE STRIP USE CASES */}
      <section className="section-container">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
          Where tech teams use TruVerifyAI the most
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Product & engineering orgs",
              desc: "Screen full-time and contract engineers building your core applications.",
              img: "https://images.pexels.com/photos/3861973/pexels-photo-3861973.jpeg?auto=compress&cs=tinysrgb&w=1000"
            },
            {
              title: "Cybersecurity & infra teams",
              desc: "Add additional guardrails for people with privileged access.",
              img: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1000"
            },
            {
              title: "Customer support & ops",
              desc: "Ensure trust when teams access user accounts, billing and internal tools.",
              img: "https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1000"
            },
          ].map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img src={item.img} className="h-40 w-full object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Make secure hiring part of your tech culture.
        </h2>
        <p className="text-sm text-orange-100 max-w-2xl mx-auto mb-6">
          TruVerifyAI helps you keep verification, security and candidate experience in the same conversation.
        </p>
        <Link
          to="/contact"
          className="bg-white text-brand-primary px-9 py-3 rounded-full font-semibold"
        >
          Book a security-focused demo
        </Link>
      </section>

    </div>
  );
}
