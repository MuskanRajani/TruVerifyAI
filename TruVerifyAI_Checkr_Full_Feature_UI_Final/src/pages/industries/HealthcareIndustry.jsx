import { Link } from "react-router-dom";

export default function HealthcareIndustry() {
  return (
    <div className="space-y-28">

      {/* HERO — calm, trust-forward */}
      <section className="relative py-28 bg-gradient-to-br from-emerald-50 via-white to-slate-50">
        <div className="section-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold mb-3">
              Healthcare & Life Sciences
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Credentialed, compliant verification for clinical and care teams.
            </h1>

            <p className="text-sm text-slate-600 mb-5 leading-relaxed">
              Hiring in healthcare demands precision — verifying licenses, clinical credentials,
              and background checks while preserving patient safety and regulatory compliance.
              TruVerifyAI is built to protect patients and institutional reputation with fast,
              auditable verification flows.
            </p>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Support clinical hiring, temporary staffing, and allied health onboarding with
              role-aware screening that distinguishes between patient-facing and back-office roles.
            </p>

            <div className="flex gap-4">
              <Link
                to="/contact"
                className="bg-brand-primary text-white px-7 py-3 rounded-full font-semibold shadow"
              >
                Talk to our healthcare team
              </Link>

              <Link
                to="/industries"
                className="inline-block border border-slate-200 text-slate-800 px-7 py-3 rounded-full font-semibold"
              >
                All industries
              </Link>
            </div>
          </div>

          <img
            src="https://images.pexels.com/photos/3845744/pexels-photo-3845744.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Healthcare professionals discussing"
            className="rounded-3xl shadow-xl object-cover w-full max-h-[520px]"
          />
        </div>
      </section>

      {/* PROBLEM + IMPACT — two-column narrative */}
      <section className="section-container grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why healthcare requires different verification</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            Clinical and care roles carry patient safety and regulatory obligations. Mistakes in
            credentialing or shallow background checks can lead to patient harm, regulatory fines,
            and reputational damage. TruVerifyAI treats healthcare verification as a high-assurance
            workflow with explicit license checks, sanction screening, and time-stamped audit logs.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
            <li>License authenticity & expiry checks (medical, nursing, allied health)</li>
            <li>Regulated criminal & disciplinary registry screening</li>
            <li>Education and specialty training verification</li>
            <li>Binding consent flows and data minimization for sensitive records</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white border shadow p-6">
          <h3 className="font-semibold mb-3">Operational impact</h3>
          <p className="text-sm text-slate-600 mb-3">
            Reduce time-to-place for temporary clinical staff, cut manual compliance hours,
            and improve capacity to scale during seasonal demand or emergency response.
          </p>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3">
              <div className="text-2xl font-bold text-brand-primary">2×</div>
              <div className="text-xs text-slate-500">Faster credentialing</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-brand-primary">80%</div>
              <div className="text-xs text-slate-500">Reduction in manual reviews</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-brand-primary">100%</div>
              <div className="text-xs text-slate-500">Audit trail completeness</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-brand-primary">40+</div>
              <div className="text-xs text-slate-500">Education & licensing regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHTS — three cards with icons */}
      <section className="bg-slate-50 py-16">
        <div className="section-container grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl border shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 mb-4 text-2xl">🩺</div>
            <h4 className="font-semibold mb-2">License & Registry Checks</h4>
            <p className="text-sm text-slate-600">Validate medical, nursing and allied health licenses directly against issuing bodies and sanctions lists.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 mb-4 text-2xl">📋</div>
            <h4 className="font-semibold mb-2">Clinical Education Verification</h4>
            <p className="text-sm text-slate-600">Confirm specialized training, residency completion and continuing medical education records.</p>
          </div>

          <div className="p-6 bg-white rounded-2xl border shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-100 mb-4 text-2xl">🔒</div>
            <h4 className="font-semibold mb-2">Compliance & Audit Trails</h4>
            <p className="text-sm text-slate-600">Time-stamped, consented audit logs and role-based access for regulators and internal quality teams.</p>
          </div>
        </div>
      </section>

      {/* INTEGRATION + WORKFLOW — visual left, steps right */}
      <section className="section-container grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.pexels.com/photos/6077880/pexels-photo-6077880.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Nurse workflow"
          className="rounded-3xl shadow-xl object-cover max-h-[480px] w-full"
        />

        <div>
          <h2 className="text-2xl font-bold mb-4">How it integrates with clinical operations</h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            Seamless integrations with HRIS, rostering systems and vendor portals let you run verification at key
            orchestration points: pre-hire, before shift allocation, or at credential renewal cycles.
          </p>

          <ol className="list-decimal list-inside space-y-3 text-sm text-slate-700">
            <li><strong>Pre-hire validation:</strong> Consent and collect documents at application time.</li>
            <li><strong>Role gating:</strong> Block shift assignment for missing or expired credentials.</li>
            <li><strong>Renewal automation:</strong> Trigger re-verification ahead of license expiry.</li>
            <li><strong>Incident escalation:</strong> Automated alerts for disciplinary or regulatory flags.</li>
          </ol>

          <div className="mt-6">
            <Link to="/contact" className="bg-brand-primary text-white px-6 py-2.5 rounded-full font-semibold">
              Request a healthcare demo
            </Link>
          </div>
        </div>
      </section>

      {/* CASE STUDY SNAPSHOT — succinct */}
      <section className="bg-white py-16">
        <div className="section-container max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-3">Case snapshot — Regional hospital network</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            A multi-hospital network used TruVerifyAI to centralize credential checks across 6 facilities. The result:
            automated license checks reduced manual compliance time by 70% and improved shift coverage during peak periods.
          </p>

          <div className="inline-flex items-center gap-6 mt-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">70%</div>
              <div className="text-xs text-slate-500">Less manual compliance work</div>
            </div>

            <div className="text-center">
              <div className="text-3xl font-bold text-brand-primary">95%</div>
              <div className="text-xs text-slate-500">Faster onboarding for temp staff</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-ish — small accordion style blocks (static) */}
      <section className="section-container">
        <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">Common questions from healthcare teams</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h4 className="font-semibold mb-2">How do you verify licenses?</h4>
            <p className="text-sm text-slate-600">We connect with issuing authorities, education boards and accredited registries where available and supplement with document authenticity checks when direct APIs are unavailable.</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h4 className="font-semibold mb-2">What about privacy?</h4>
            <p className="text-sm text-slate-600">We collect minimal data with explicit consent, encrypt everything at rest and in transit, and provide role-based access to sensitive records.</p>
          </div>

          <div className="p-5 bg-white rounded-2xl border shadow-sm">
            <h4 className="font-semibold mb-2">Can we auto-block expired credentials?</h4>
            <p className="text-sm text-slate-600">Yes — policy rules can automatically block candidate placement or trigger renewal workflows for expired or missing credentials.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA — trust-forward */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">Protect patients and streamline hiring</h2>
        <p className="text-sm text-orange-100 max-w-2xl mx-auto mb-6">
          TruVerifyAI helps hospitals, clinics and staffing agencies verify credentials faster while keeping compliance and safety top of mind.
        </p>

        <Link to="/contact" className="bg-white text-brand-primary px-9 py-3 rounded-full font-semibold">
          Request a healthcare demo
        </Link>
      </section>

    </div>
  );
}
