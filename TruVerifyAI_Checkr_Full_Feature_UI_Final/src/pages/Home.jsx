import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Before TruVerifyAI, our team was juggling multiple vendors and endless follow-ups. Now we track identity, employment and criminal checks in one place with full visibility.",
    name: "Priya Mehta",
    company: "Talent Operations Lead, Fintech Startup",
  },
  {
    quote:
      "We onboard thousands of gig workers every month. TruVerifyAI helped us cut our verification turnaround time by more than half without increasing risk.",
    name: "Rohit Sharma",
    company: "Head of Operations, Gig Marketplace",
  },
  {
    quote:
      "Audit trails, role-based access and clean compliance records made our legal and risk reviews far smoother than before.",
    name: "Ananya Rao",
    company: "Risk & Compliance Manager, Financial Services",
  },
  {
    quote:
      "Our staffing clients demand speed and accuracy. TruVerifyAI gave us both, without adding operational burden on recruiters.",
    name: "Neha Kapoor",
    company: "Director, Staffing & Recruitment Firm",
  },
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // ✅ Auto-slide carousel every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-24">
      {/* ✅ HERO — CLEAN, CENTERED */}
      <section className="bg-brand-dark text-white animate-fadeSlideUp">
        <div className="section-container py-20 md:py-28 text-center flex flex-col items-center">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange-300 mb-4">
            Background checks for modern teams
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mb-5">
            A verification platform built for remote, high-growth and regulated hiring.
          </h1>

          <p className="text-sm md:text-base text-orange-50 max-w-2xl mb-7">
            TruVerifyAI combines identity, employment, education, criminal (via partners), watchlists and fraud
            scoring in one place — with flows that feel respectful to candidates and reliable to your teams.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Link
              to="/contact"
              className="bg-brand-primary px-7 py-3 rounded-full text-sm font-semibold text-white shadow-card"
            >
              Request a demo
            </Link>

            <Link
              to="/products"
              className="border border-orange-300/70 px-7 py-3 rounded-full text-sm text-orange-100 hover:bg-white/5"
            >
              Explore products
            </Link>
          </div>

          <p className="text-[11px] text-orange-100/80 max-w-xl">
            Designed for HR, operations, risk and compliance teams hiring across countries.
          </p>
        </div>
      </section>

      {/* ✅ WHY CHOOSE US */}
      <section className="section-container grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-4">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-orange-500">
            Why Choose TruVerifyAI
          </p>

          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            Built for trust, speed, and compliance at global scale.
          </h2>

          <p className="text-sm text-slate-600 max-w-xl">
            TruVerifyAI is designed to remove friction from hiring while keeping your
            compliance, risk, and candidate experience at the center.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <div className="card-soft p-4">
              <h4 className="text-sm font-semibold mb-1">AI-Driven Accuracy</h4>
              <p className="text-xs text-slate-600">
                Automated fraud detection, document checks and risk scoring at scale.
              </p>
            </div>

            <div className="card-soft p-4">
              <h4 className="text-sm font-semibold mb-1">Global Coverage</h4>
              <p className="text-xs text-slate-600">
                Designed for multi-country hiring with region-aware verification flows.
              </p>
            </div>

            <div className="card-soft p-4">
              <h4 className="text-sm font-semibold mb-1">Enterprise Security</h4>
              <p className="text-xs text-slate-600">
                Role-based access, audit logs, and encrypted data handling.
              </p>
            </div>

            <div className="card-soft p-4">
              <h4 className="text-sm font-semibold mb-1">Faster Turnaround</h4>
              <p className="text-xs text-slate-600">
                Reduce candidate wait time without sacrificing verification quality.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-block mt-4 bg-brand-primary text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold"
          >
            Talk to our team
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1560264280-88b68371db39?auto=format&fit=crop&w=1200&q=80"
            alt="HR reviewing candidate background verification documents"
            className="rounded-3xl shadow-card object-cover max-h-[440px] w-full"
          />
        </div>
      </section>

      {/* 🎨 HOW TRUVERIFYAI WORKS */}
      <section className="py-20 bg-gradient-to-b from-orange-50 via-white to-orange-100/40">
        <div className="section-container">
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-block px-4 py-1.5 bg-orange-200/60 rounded-full text-orange-800 text-[11px] font-semibold tracking-[0.25em] uppercase">
              How It Works
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
              A smarter, faster way to run background verification.
            </h2>

            <p className="text-sm text-slate-600">
              TruVerifyAI combines automation, AI decisioning and compliance-aware workflows
              to eliminate delays, reduce fraud risk and simplify every stage of hiring.
            </p>
          </div>

          {/* MAIN STEPS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-14">
            {/* STEP 1 */}
            <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all border border-orange-200/40">
              <div className="w-14 h-14 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-xl font-semibold mb-4">
                1
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">Candidate data collection</h4>
              <p className="text-xs text-slate-600">
                Smart forms securely gather identity, employment, education and address details
                in a candidate-friendly experience.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="p-6 rounded-2xl bg-orange-50 shadow-md hover:shadow-xl transition-all border border-orange-200/60">
              <div className="w-14 h-14 bg-brand-primary text-white rounded-2xl flex items-center justify-center text-xl font-semibold mb-4">
                2
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">AI-powered verification</h4>
              <p className="text-xs text-slate-600">
                Machine learning validates documents, detects tampering, matches faces
                and flags high-risk signals instantly.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all border border-slate-200/60">
              <div className="w-14 h-14 bg-emerald-500 text-white rounded-2xl flex items-center justify-center text-xl font-semibold mb-4">
                3
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">Compliance review layer</h4>
              <p className="text-xs text-slate-600">
                Automated compliance checks align every verification with legal, regional
                and industry-specific standards.
              </p>
            </div>

            {/* STEP 4 */}
            <div className="p-6 rounded-2xl bg-orange-100 shadow-md hover:shadow-xl transition-all border border-orange-300/40">
              <div className="w-14 h-14 bg-purple-600 text-white rounded-2xl flex items-center justify-center text-xl font-semibold mb-4">
                4
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">Unified decision dashboard</h4>
              <p className="text-xs text-slate-600">
                View real-time status, escalations, document trails and approvals
                across roles and regions in one place.
              </p>
            </div>
          </div>

          {/* VALUE ROW */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            <div className="text-center p-6 rounded-2xl bg-white shadow-card">
              <h4 className="font-semibold text-brand-primary mb-1">Faster hiring cycles</h4>
              <p className="text-xs text-slate-600">
                Reduce turnaround time from days to minutes with automated verification layers.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white shadow-card">
              <h4 className="font-semibold text-brand-primary mb-1">Lower operational load</h4>
              <p className="text-xs text-slate-600">
                Eliminate manual follow-ups, spreadsheets and fragmented vendor coordination.
              </p>
            </div>

            <div className="text-center p-6 rounded-2xl bg-white shadow-card">
              <h4 className="font-semibold text-brand-primary mb-1">Audit-ready compliance</h4>
              <p className="text-xs text-slate-600">
                Maintain regulator-friendly records with full traceability and access control.
              </p>
            </div>
          </div>

          {/* METRICS STRIP */}
          <div className="bg-brand-primary rounded-3xl py-10 px-6 text-white grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">3×</div>
              <p className="text-xs text-orange-100">Faster verification turnaround</p>
            </div>

            <div>
              <div className="text-3xl font-bold mb-1">99.9%</div>
              <p className="text-xs text-orange-100">Document accuracy with AI checks</p>
            </div>

            <div>
              <div className="text-3xl font-bold mb-1">40+</div>
              <p className="text-xs text-orange-100">Countries supported at scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 MODERN UNIFIED PRODUCTS + INDUSTRIES */}
      <section className="relative py-20 overflow-hidden">
        {/* Soft background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-sky-50" />
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-primary/20 blur-3xl rounded-full" />
        <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-sky-300/20 blur-3xl rounded-full" />

        <div className="section-container relative z-10">
          {/* HEADER */}
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brand-primary font-semibold">
              What We Offer
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3">
              Products & Industries — built together
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto mt-3">
              TruVerifyAI is designed as one unified system that adapts across verification products
              and real-world industries — without enterprise complexity.
            </p>
          </div>

          {/* UNIFIED GLASS PANEL */}
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl p-10 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* PRODUCTS */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-900">
                  🧩 Products
                </h3>

           {/* PRODUCTS — PURE VERTICAL */}
<div className="flex flex-col gap-4">
  {[
    ["Identity Verification", "ID checks, face match & liveness"],
    ["Employment Verification", "Past work & role validation"],
    ["Criminal Checks", "Partner-based criminal screening"],
  ].map(([title, desc], i) => (
    <div
      key={i}
      className="p-5 rounded-2xl bg-orange-50/60 border border-orange-200/40
                 hover:border-brand-primary hover:shadow-md transition-all"
    >
      <h4 className="font-semibold text-sm text-slate-900">{title}</h4>
      <p className="text-xs text-slate-600 mt-1">{desc}</p>
    </div>
  ))}
</div>




                <a
                  href="/products"
                  className="inline-block mt-5 text-sm font-semibold text-brand-primary hover:underline"
                >
                  Explore all products →
                </a>
              </div>

              {/* INDUSTRIES */}
              <div>
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-slate-900">
                  🌍 Industries
                </h3>

              {/* INDUSTRIES — PURE VERTICAL */}
<div className="flex flex-col gap-4">
  {[
    ["Financial Services", "KYC, AML & compliance hiring"],
    ["Gig & Marketplaces", "High-volume worker onboarding"],
    ["Healthcare", "License & credential screening"],
  ].map(([title, desc], i) => (
    <div
      key={i}
      className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200/40
                 hover:border-sky-400 hover:shadow-md transition-all"
    >
      <h4 className="font-semibold text-sm text-slate-900">{title}</h4>
      <p className="text-xs text-slate-600 mt-1">{desc}</p>
    </div>
  ))}
</div>


                <a
                  href="/industries"
                  className="inline-block mt-5 text-sm font-semibold text-brand-primary hover:underline"
                >
                  Explore all industries →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ TESTIMONIALS — MODERN AUTO CAROUSEL */}
    {/* ⭐ MINIMAL STRIPE-STYLE TESTIMONIAL */}
<section className="py-10 bg-white">
  <div className="section-container text-center">

    <div className="flex flex-col items-center gap-3 max-w-2xl mx-auto">

      <div className="w-8 h-[2px] bg-brand-primary mb-1" />


      {/* Quote */}
      <p className="text-base text-slate-700 leading-relaxed px-4 transition-all duration-500">
        {testimonials[activeTestimonial].quote}
      </p>

      {/* Person */}
      <p className="text-xs text-slate-500">
        <span className="font-semibold text-slate-700">
          {testimonials[activeTestimonial].name}
        </span>{" "}
        • {testimonials[activeTestimonial].company}
      </p>

      {/* Dots */}
      <div className="flex gap-1.5 mt-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTestimonial(idx)}
            className={`h-1.5 w-4 rounded-full transition-all ${
              idx === activeTestimonial
                ? "bg-brand-primary"
                : "bg-slate-300"
            }`}
          />
        ))}
      </div>

    </div>

  </div>
</section>


      {/* FINAL CTA */}
      <section className="bg-brand-primary text-white">
        <div className="section-container py-16 text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold">Start with a single role, expand as you grow.</h2>
          <p className="text-sm text-orange-50 max-w-xl mx-auto">
            Whether you're hiring a handful of specialists or thousands of gig workers, TruVerifyAI is designed to
            scale your checks without overwhelming your team.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="bg-white text-brand-primary px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold"
            >
              Talk to our team
            </Link>

            <Link
              to="/pricing"
              className="border border-orange-200 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold"
            >
              View pricing approach
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
