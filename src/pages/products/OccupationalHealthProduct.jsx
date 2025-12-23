import { Link } from "react-router-dom";

export default function OccupationalHealthProduct() {
  return (
    <div className="space-y-28">

      {/* ================= HERO ================= */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primarySoft/60 via-slate-50 to-white" />
        <div className="section-container relative z-10 max-w-4xl mx-auto text-center space-y-6">

          <p className="text-xs uppercase tracking-[0.3em] text-brand-primary font-semibold">
            Occupational Health Screening
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Occupational Health & Workforce Safety
          </h1>

          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Occupational health screening helps organizations create safer,
            healthier workplaces by ensuring employees meet medical, fitness,
            and regulatory requirements before they begin work.
          </p>

          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            Designed for safety-critical, regulated, and public-facing roles,
            our screening workflows balance compliance with a smooth candidate
            experience.
          </p>

          <Link
            to="/contact"
            className="inline-block bg-brand-primary text-white px-8 py-3 rounded-full font-semibold"
          >
            Request a demo
          </Link>
        </div>
      </section>

      {/* ================= DRUG TESTING ================= */}
      <section className="section-container grid md:grid-cols-2 gap-16 items-center">
        <img
       src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=80"
   alt="Workplace drug testing"
          className="rounded-3xl shadow-lg object-cover h-[440px] w-full"
        />

        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Drug Testing
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            Drug testing is a foundational component of occupational health
            programs. It helps organizations identify substance use that may
            impair judgment, reaction time, or overall workplace safety.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            These screenings are especially important in industries such as
            manufacturing, logistics, transportation, healthcare, and any role
            involving machinery, vehicles, or public trust.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            Testing can be conducted at different stages of employment — including
            pre-employment screening, random testing programs, and post-incident
            investigations — depending on organizational policy and regulatory needs.
          </p>
        </div>
      </section>

      {/* ================= IMMUNIZATION ================= */}
      <section className="section-container grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-5 order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Immunization Verification
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            Immunization verification ensures employees meet mandatory vaccination
            and immunity standards before entering environments where health risks
            must be carefully controlled.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            This is particularly critical for healthcare providers, laboratories,
            manufacturing units, food processing facilities, and public-facing roles
            where exposure risks are higher.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            By validating immunization records upfront, organizations can reduce
            the likelihood of outbreaks, protect vulnerable populations, and remain
            compliant with evolving public health regulations.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80"
          alt="Immunization verification"
          className="rounded-3xl shadow-lg object-cover h-[440px] w-full order-1 md:order-2"
        />
      </section>

      {/* ================= HEALTHCARE CHECKS ================= */}
      <section className="section-container grid md:grid-cols-2 gap-16 items-center">
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1400&q=80"
          alt="Occupational healthcare checks"
          className="rounded-3xl shadow-lg object-cover h-[440px] w-full"
        />

        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Healthcare & Medical Fitness Checks
          </h2>

          <p className="text-sm text-slate-600 leading-relaxed">
            Medical fitness checks assess whether individuals are physically and
            mentally capable of performing the essential duties of their roles
            without putting themselves or others at risk.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            These evaluations are often role-specific and may consider factors such
            as physical endurance, vision, hearing, and overall health suitability
            for demanding or safety-critical tasks.
          </p>

          <p className="text-sm text-slate-600 leading-relaxed">
            Aligning medical assessments with job requirements helps employers
            reduce long-term health risks, improve workforce wellbeing, and maintain
            safer, more productive workplaces.
          </p>
        </div>
      </section>

      {/* ================= FAQs (MATCHES OTHER PAGES) ================= */}
      <section className="section-container pt-8 pb-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold text-center mb-2">
            FAQs
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Occupational Health — frequently asked questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What is occupational health screening?",
                a: "Occupational health screening evaluates whether employees meet medical and fitness requirements necessary for their specific roles."
              },
              {
                q: "Why is drug testing important?",
                a: "Drug testing helps reduce workplace accidents, improve safety, and ensure compliance in regulated environments."
              },
              {
                q: "Which roles require immunization verification?",
                a: "Healthcare, manufacturing, logistics, food processing, and public-facing roles often require immunization checks."
              },
              {
                q: "Are healthcare checks mandatory for all roles?",
                a: "Requirements vary based on role type, risk level, industry regulations, and local laws."
              },
              {
                q: "Can occupational health checks be customized?",
                a: "Yes. Health screening programs can be tailored based on job role, risk profile, and regulatory obligations."
              }
            ].map((item, i) => (
              <details key={i} className="border rounded-xl bg-white p-5">
                <summary className="flex justify-between cursor-pointer font-medium">
                  {item.q}
                  <span className="text-brand-primary text-xl">+</span>
                </summary>
                <p className="mt-3 text-sm text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Simplify occupational health compliance
        </h2>

        <p className="text-sm text-orange-200 mt-2 max-w-xl mx-auto">
          Centralize drug testing, immunization verification, and healthcare
          checks while keeping teams safe, compliant, and productive.
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
