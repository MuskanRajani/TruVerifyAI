import { Link } from "react-router-dom";

export default function EducationProduct() {
  return (
    <div className="space-y-28">

      {/* 🎓 HERO — EDUCATION + TRUST THEME */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-indigo-100/40 to-white" />

        <div className="section-container relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold">
              Education Verification
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Verify academic credentials with global accuracy and zero guesswork.
            </h1>

            <p className="text-sm md:text-base text-slate-600">
              TruVerifyAI validates degrees, institutions, courses and completion records to ensure
              your candidates meet real-world qualification requirements — not just résumé claims.
            </p>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="inline-block bg-brand-primary text-white px-7 py-3 rounded-full font-semibold"
              >
                Request a demo
              </Link>

              <Link
                to="/products"
                className="inline-block border border-brand-primary text-brand-primary px-7 py-3 rounded-full font-semibold"
              >
                View all products
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <img
            src="https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Education verification and degree validation"
            className="rounded-3xl shadow-xl object-cover max-h-[460px] w-full"
          />
        </div>
      </section>

      {/* ✅ WHAT WE VERIFY — DETAILED GRID */}
      <section className="section-container">
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            What TruVerifyAI verifies across education records
          </h2>
          <p className="text-sm text-slate-600">
            Our verification engine goes beyond surface-level document checks to ensure full academic authenticity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            ["Degree authenticity", "Confirm awarded degrees directly against submitted documents and source data."],
            ["University legitimacy", "Detect fake, unaccredited or blacklisted institutions automatically."],
            ["Course & specialization", "Ensure the field of study matches the job’s real qualification needs."],
            ["Study duration", "Validate enrollment periods, graduation timelines and overlaps."],
            ["Transcript integrity", "Detect tampering, mismatches and manual edits in marksheets."],
            ["Mode of education", "Differentiate full-time, online, distance and hybrid programs."],
            ["Equivalency validation", "Normalize international degrees across regional education systems."],
            ["Active vs revoked status", "Identify degrees that are suspended, revoked or under investigation."],
          ].map(([title, desc], i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-slate-900 mb-2">{title}</h3>
              <p className="text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* 🌍 GLOBAL COVERAGE + COMPLIANCE */}
      <section className="section-container grid md:grid-cols-2 gap-12 items-center">

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Built for global academic verification at scale
          </h2>

          <p className="text-sm text-slate-600">
            TruVerifyAI supports multi-country education verification with region-specific rules,
            local education boards and internationally recognized equivalency standards.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>40+ countries supported across major education regions</li>
            <li>Localized document formats and grading systems</li>
            <li>GDPR-aligned data processing and consent tracking</li>
            <li>Audit-ready verification trails for regulators</li>
          </ul>
        </div>

        <img
          src="https://images.pexels.com/photos/5940836/pexels-photo-5940836.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Global education verification coverage"
          className="rounded-3xl shadow-xl object-cover max-h-[420px] w-full"
        />
      </section>

      {/* 🎯 HIGH-IMPACT USE CASES */}
      <section className="section-container">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-12">
          Where education verification is mission-critical
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.pexels.com/photos/8553860/pexels-photo-8553860.jpeg?auto=compress&cs=tinysrgb&w=1000"
              className="h-40 w-full object-cover"
              alt="Tech hiring graduates"
            />
            <div className="p-6">
              <h3 className="font-semibold mb-1">Technology & SaaS Hiring</h3>
              <p className="text-sm text-slate-600">
                Prevent résumé exaggeration across engineering, data science and product roles.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.pexels.com/photos/8460095/pexels-photo-8460095.jpeg?auto=compress&cs=tinysrgb&w=1000"
              className="h-40 w-full object-cover"
              alt="Healthcare credential verification"
            />
            <div className="p-6">
              <h3 className="font-semibold mb-1">Healthcare & Life Sciences</h3>
              <p className="text-sm text-slate-600">
                Validate clinical qualifications to protect patients and meet regulatory requirements.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1000"
              className="h-40 w-full object-cover"
              alt="Campus hiring programs"
            />
            <div className="p-6">
              <h3 className="font-semibold mb-1">Campus & Graduate Programs</h3>
              <p className="text-sm text-slate-600">
                Stop fake degrees and backdated certificates before early-career onboarding.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ❓ EDUCATION VERIFICATION FAQs */}
      <section className="section-container py-20">
        <div className="max-w-3xl mx-auto">

          <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold text-center mb-3">
            FAQs
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 text-center mb-10">
            Education verification — frequently asked questions
          </h2>

          <div className="space-y-4">

            {[
              {
                q: "What education credentials can be verified?",
                a: "TruVerifyAI verifies degrees, diplomas, certifications and course completions based on documents provided by the candidate and institution-specific validation processes."
              },
              {
                q: "Do you contact universities and colleges directly?",
                a: "Verification is performed through document review, institution validation processes and trusted third-party sources where available, depending on country and institution."
              },
              {
                q: "How do you handle international education checks?",
                a: "International education verification is supported across multiple regions, with country-specific handling for formats, institutions and document standards."
              },
              {
                q: "How long does education verification take?",
                a: "Timelines vary based on institution responsiveness and geography. Most education checks are completed within a few business days with real-time status tracking."
              },
              {
                q: "What happens if an education record cannot be verified?",
                a: "If verification cannot be completed, the case is clearly flagged with reasons and supporting notes, allowing your team to make an informed decision."
              },
              {
                q: "Is candidate consent required for education checks?",
                a: "Yes. TruVerifyAI ensures candidate authorization is collected before initiating any education verification."
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


      {/* 🔐 SECURITY + DATA INTEGRITY */}
      <section className="bg-brand-primarySoft py-16">
        <div className="section-container max-w-4xl mx-auto text-center space-y-3">
          <h2 className="text-2xl font-bold">Education data protected by enterprise-grade security</h2>
          <p className="text-sm text-slate-700">
            All records are encrypted in transit and at rest, role-based access is enforced,
            and every verification is logged with complete audit visibility.
          </p>
        </div>
      </section>

      {/* ✅ FINAL CTA */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Stop academic fraud before it enters your organization.
        </h2>

        <p className="text-sm text-orange-100 mt-2">
          Verify degrees, courses and institutions globally — in minutes.
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
