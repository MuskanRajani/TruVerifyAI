import { Link } from "react-router-dom";

export default function StaffingIndustry() {
  return (
    <div className="space-y-28">

      {/* HERO */}
      <section className="relative py-28 bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        <div className="section-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold mb-3">
              Staffing & Recruitment
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Client-ready background checks for every shortlisted candidate.
            </h1>

            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              Staffing and recruitment firms win or lose based on speed, reliability and trust.
              TruVerifyAI helps you deliver verified candidates to clients with clear, consistent
              screening — without drowning your team in manual work.
            </p>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Configure client-specific packages, SLAs and reporting formats from a single, unified platform.
            </p>

            <Link
              to="/contact"
              className="bg-brand-primary text-white px-8 py-3 rounded-full font-semibold shadow"
            >
              Talk to our staffing team
            </Link>
          </div>

          <img
            src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Staffing team collaboration"
            className="rounded-3xl shadow-2xl object-cover w-full max-h-[520px]"
          />
        </div>
      </section>

      {/* CLIENT & CANDIDATE VIEW */}
      <section className="section-container grid md:grid-cols-2 gap-12">
        <div className="rounded-2xl bg-white border shadow p-6">
          <h2 className="text-xl font-semibold mb-2">For your clients</h2>
          <p className="text-sm text-slate-600 mb-3">
            Offer differentiated, verified talent instead of just resumes.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Pre-defined screening templates by client or role group</li>
            <li>Client-branded reports and access portals (roadmap-style)</li>
            <li>Clear statuses: in-progress, completed, flagged, escalation</li>
            <li>Audit-friendly records for regulated industries</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white border shadow p-6">
          <h2 className="text-xl font-semibold mb-2">For your recruiters</h2>
          <p className="text-sm text-slate-600 mb-3">
            Allow recruiters to focus on sourcing and relationships — not chasing documents.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
            <li>Central dashboard across candidates, clients and roles</li>
            <li>Automated reminders and candidate self-serve document upload</li>
            <li>Bulk cohort creation for hiring campaigns</li>
            <li>Flags and summaries instead of raw data overload</li>
          </ul>
        </div>
      </section>

      {/* WORKFLOW WITH IMAGE */}
      <section className="bg-slate-50 py-20">
        <div className="section-container grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Recruitment meeting"
            className="rounded-3xl shadow-xl object-cover max-h-[460px] w-full"
          />
          <div>
            <h2 className="text-2xl font-bold mb-4">How verification fits into your staffing workflow</h2>
            <ol className="list-decimal list-inside text-sm text-slate-700 space-y-2 mb-4">
              <li><strong>Shortlist:</strong> Recruiter identifies candidate for a specific client role.</li>
              <li><strong>Trigger:</strong> Client-specific verification package is automatically applied.</li>
              <li><strong>Collect:</strong> Candidate completes flows and uploads documents via mobile-friendly forms.</li>
              <li><strong>Review:</strong> Recruiter sees summarized results and risk signals.</li>
              <li><strong>Share:</strong> Client receives structured, easy-to-read verification summary.</li>
            </ol>
            <p className="text-sm text-slate-600">
              All actions are tracked with timestamps and user attribution, keeping you ready for
              audits, disputes and SLA reviews.
            </p>
          </div>
        </div>
      </section>

      {/* INDUSTRY USE CASE CARDS */}
      <section className="section-container">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
          Agencies that benefit the most
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "IT & tech staffing",
              desc: "Screen engineers and contractors with checks aligned to client security needs.",
              img: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1000"
            },
            {
              title: "Healthcare staffing",
              desc: "Verify licenses, education and criminal history for clinical roles.",
              img: "https://images.pexels.com/photos/6129682/pexels-photo-6129682.jpeg?auto=compress&cs=tinysrgb&w=1000"
            },
            {
              title: "Light industrial & logistics",
              desc: "Support high-volume hiring for shift-based and seasonal roles.",
              img: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1000"
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
          Turn verification into a competitive advantage.
        </h2>
        <p className="text-sm text-orange-100 max-w-2xl mx-auto mb-6">
          Offer clients faster, cleaner and more trustworthy candidate verification — without scaling your back-office manually.
        </p>
        <Link
          to="/contact"
          className="bg-white text-brand-primary px-9 py-3 rounded-full font-semibold"
        >
          Book a call with us
        </Link>
      </section>

    </div>
  );
}
