import { Link } from "react-router-dom";

export default function GigIndustry() {
  return (
    <div className="space-y-28">

      {/* HERO */}
      <section className="relative py-28 bg-gradient-to-br from-orange-50 via-white to-orange-100">
        <div className="section-container grid md:grid-cols-2 gap-14 items-center">

          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold mb-3">
              Gig & Marketplaces
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight">
              High-volume onboarding without sacrificing trust or safety.
            </h1>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              Gig platforms operate at massive scale with thin margins and zero tolerance for fraud. 
              TruVerifyAI enables marketplaces to verify drivers, riders, sellers and service providers 
              with real-time identity checks, fraud detection and compliance-aware workflows — without 
              slowing down onboarding.
            </p>

            <p className="text-sm text-slate-600 mb-7 leading-relaxed">
              Whether you're onboarding 500 workers a day or launching in multiple cities at once,
              TruVerifyAI adapts instantly to your growth.
            </p>

            <Link
              to="/contact"
              className="bg-brand-primary text-white px-8 py-3 rounded-full font-semibold shadow-md"
            >
              Talk to our onboarding team
            </Link>
          </div>

          <img
            src="https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg?auto=compress&cs=tinysrgb&w=1400"
            className="rounded-3xl shadow-2xl object-cover"
            alt="Gig worker onboarding"
          />
        </div>
      </section>

      {/* BUSINESS CHALLENGES */}
      <section className="section-container grid md:grid-cols-3 gap-10">

        {[
          {
            title: "Fraud & fake identities",
            text: "Duplicate driver accounts, forged documents and mule networks directly impact platform safety, revenue and brand trust.",
          },
          {
            title: "Onboarding drop-off",
            text: "Long verification times cause candidates to abandon platforms before completing activation.",
          },
          {
            title: "Operational overload",
            text: "Manual reviews, document checks and exception handling create massive support backlogs.",
          },
        ].map((c, i) => (
          <div key={i} className="bg-white p-7 rounded-2xl shadow-md border">
            <h3 className="font-semibold text-lg text-slate-900 mb-2">{c.title}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{c.text}</p>
          </div>
        ))}

      </section>

      {/* SOLUTION FLOW */}
      <section className="bg-slate-100 py-20">
        <div className="section-container grid md:grid-cols-2 gap-14 items-center">

          <img
            src="https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg?auto=compress&cs=tinysrgb&w=1400"
            className="rounded-3xl shadow-xl"
            alt="Mobile verification flow"
          />

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Mobile-first verification built for speed.
            </h2>

            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              TruVerifyAI replaces slow manual verification with AI-powered identity validation,
              document authenticity checks and selfie-based liveness detection — all optimized for
              low-end mobile devices.
            </p>

            <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
              <li>Selfie-based liveness & face match</li>
              <li>Government ID document verification</li>
              <li>Duplicate identity & account detection</li>
              <li>Region-wise policy enforcement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* USE CASE STRIP */}
      <section className="section-container grid md:grid-cols-3 gap-10 text-center">

        {[
          {
            title: "Ride-hailing platforms",
            desc: "Activate verified drivers in minutes instead of days.",
            img: "https://images.pexels.com/photos/4386336/pexels-photo-4386336.jpeg?auto=compress&cs=tinysrgb&w=1200"
          },
          {
            title: "Delivery & logistics",
            desc: "Protect customers and inventory with verified riders.",
            img: "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=1200"
          },
          {
            title: "Freelancer marketplaces",
            desc: "Eliminate fake profiles and identity misuse.",
            img: "https://images.pexels.com/photos/3184653/pexels-photo-3184653.jpeg?auto=compress&cs=tinysrgb&w=1200"
          },
        ].map((u, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={u.img} className="h-40 w-full object-cover" />
            <div className="p-6">
              <h4 className="font-semibold text-slate-900 mb-1">{u.title}</h4>
              <p className="text-sm text-slate-600">{u.desc}</p>
            </div>
          </div>
        ))}

      </section>

      {/* CTA */}
      <section className="bg-brand-primary text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-3">
          Build a trusted gig platform at scale.
        </h2>

        <p className="text-sm text-orange-100 max-w-xl mx-auto mb-6">
          From launch-stage marketplaces to global platforms, TruVerifyAI secures
          your onboarding without slowing growth.
        </p>

        <Link
          to="/contact"
          className="bg-white text-brand-primary px-9 py-3 rounded-full font-semibold"
        >
          Start verifying today
        </Link>
      </section>

    </div>
  );
}
