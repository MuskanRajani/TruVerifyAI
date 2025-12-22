import { Link } from "react-router-dom";

export default function OccupationalHealthProduct() {
  return (
    <div className="space-y-28">

      {/* ================= HERO ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/40 via-sky-100/40 to-white" />
        <div className="section-container relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold">
            Occupational Health Screening
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Health-ready teams.<br />Safer workplaces.
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Ensure workforce readiness and regulatory compliance through structured
            occupational health checks designed for modern organizations.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-brand-primary text-white px-8 py-3 rounded-full font-semibold shadow-md"
          >
            Request a demo
          </Link>
        </div>
      </section>

      {/* ================= VALUE HIGHLIGHTS ================= */}
      <section className="section-container grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Safety-first hiring",
            desc: "Reduce workplace incidents and health-related risks from day one."
          },
          {
            title: "Compliance-ready",
            desc: "Meet role-specific and industry health requirements with ease."
          },
          {
            title: "Faster onboarding",
            desc: "Verify health readiness without slowing down hiring cycles."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-3xl p-6 shadow-sm hover:shadow-md transition"
          >
            <h3 className="font-semibold text-lg text-slate-900 mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ================= DRUG TESTING ================= */}
      <section className="section-container grid md:grid-cols-2 gap-16 items-center">
        <img
src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80
"

       alt="Workplace drug testing"
          className="rounded-3xl shadow-xl object-cover h-[460px] w-full"
        />

        <div className="space-y-5">
          <span className="inline-block bg-orange-100 text-orange-700 text-xs px-3 py-1 rounded-full font-semibold">
            Drug Testing
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Proactive substance risk management
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            Drug testing helps employers detect substance use that may affect
            workplace safety, productivity, or decision-making. It is commonly
            used during hiring and throughout employment for safety-sensitive roles.
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Pre-employment drug screening</li>
            <li>• Random & periodic testing programs</li>
            <li>• Post-incident & for-cause testing</li>
            <li>• Policy-aligned compliance workflows</li>
          </ul>
        </div>
      </section>

      {/* ================= IMMUNIZATION ================= */}
      <section className="section-container grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-5 order-2 md:order-1">
          <span className="inline-block bg-sky-100 text-sky-700 text-xs px-3 py-1 rounded-full font-semibold">
            Immunization
          </span>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Verified immunity for critical roles
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            Immunization verification ensures employees meet required health
            standards before entering the workplace. This is essential for
            healthcare, manufacturing, logistics, and public-facing environments.
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            <li>• Vaccination record verification</li>
            <li>• Role-specific immunization requirements</li>
            <li>• Audit-ready documentation</li>
            <li>• Ongoing tracking & renewals</li>
          </ul>
        </div>

        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=80"
          alt="Immunization verification"
          className="rounded-3xl shadow-xl object-cover h-[460px] w-full order-1 md:order-2"
        />
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="section-container py-20 bg-gradient-to-r from-slate-50 to-white rounded-3xl">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold text-center mb-2">
            Process
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">
            How occupational health screening works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                title: "Define requirements",
                desc: "Set health criteria based on role, industry, and regulations."
              },
              {
                title: "Collect information",
                desc: "Candidates securely submit required health details."
              },
              {
                title: "Verify records",
                desc: "Drug tests and immunization records are validated."
              },
              {
                title: "Enable onboarding",
                desc: "Only compliant candidates move forward."
              }
            ].map((step, i) => (
              <div
                key={i}
                className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-10 h-10 mb-4 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQs ================= */}
      <section className="section-container pt-8 pb-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold text-center mb-2">
            FAQs
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Occupational Health — frequently asked questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What is occupational health screening?",
                a: "It verifies whether employees meet medical and safety requirements necessary for their role."
              },
              {
                q: "Is drug testing mandatory?",
                a: "Drug testing requirements depend on role, industry, and local regulations."
              },
              {
                q: "Which roles require immunization checks?",
                a: "Healthcare, manufacturing, logistics, and public-facing roles often require immunization verification."
              },
              {
                q: "Can health requirements be customized?",
                a: "Yes. Requirements can be configured based on role, region, and policy."
              }
            ].map((item, i) => (
              <details
                key={i}
                className="border rounded-2xl bg-white p-5 shadow-sm"
              >
                <summary className="flex justify-between items-center cursor-pointer font-medium">
                  {item.q}
                  <span className="text-brand-primary text-xl">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">
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
          Make health compliance effortless
        </h2>
        <p className="text-sm text-orange-200 mt-2 max-w-2xl mx-auto">
          Centralize occupational health checks while keeping teams safe,
          compliant, and productive.
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
