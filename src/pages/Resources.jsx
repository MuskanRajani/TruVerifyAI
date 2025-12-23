import { Link } from "react-router-dom";

export default function Resources() {
  const blogs = [
    {
      title: "What Is Background Verification & Why It Matters in 2025",
      desc: "A practical guide to identity checks, employment verification, criminal screening and compliance risks.",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
      tag: "BGV Basics",
      url: "https://en.wikipedia.org/wiki/Background_check",
    },
    {
      title: "AI in Background Checks: Reality vs Hype",
      desc: "How AI improves fraud detection, document validation and candidate trust at scale.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
      tag: "AI & Fraud",
      url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_fraud_detection",
    },
    {
      title: "How Gig Platforms Stop Fake Riders",
      desc: "Duplicate detection, liveness checks and behavioral fraud signals in the gig economy.",
      img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80",
      tag: "Gig Economy",
      url: "https://en.wikipedia.org/wiki/Gig_economy",
    },
    {
      title: "KYC & AML Compliance for Fintech Hiring",
      desc: "Hiring for financial access roles while staying compliant across global regulations.",
      img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1400&q=80",
      tag: "Fintech",
      url: "https://en.wikipedia.org/wiki/Know_your_customer",
    },
    {
      title: "Criminal Background Checks: What’s Legal?",
      desc: "A breakdown of legality, jurisdiction rules and ethical screening practices.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
      tag: "Compliance",
      url: "https://www.eeoc.gov/laws/guidance",
    },
    {
      title: "How Staffing Firms Scale Verification",
      desc: "Bulk verification workflows, SLA management and automation for recruitment agencies.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
      tag: "Staffing",
      url: "https://en.wikipedia.org/wiki/Employment_screening",
    },
  ];

  const books = [
    {
      title: "The Future of Digital Identity",
      desc: "Identity verification, biometrics & fraud prevention in the digital-first world.",
      img: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.worldbank.org/en/topic/digitaldevelopment",
    },
    {
      title: "Hiring in a Regulated World",
      desc: "A practical guide to global compliance, AML, KYC and hiring laws.",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.shrm.org/resourcesandtools",
    },
    {
      title: "Fraud Risk Management Handbook",
      desc: "Frameworks for identifying, preventing and auditing fraud risks.",
      img: "https://images.unsplash.com/photo-1535905748047-14b2415c77d5?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.acfe.com/fraud-resources",
    },
  ];

  const webinars = [
    {
      title: "Preventing Identity Fraud in Remote Hiring",
      desc: "Live expert discussion on identity misuse, doc fraud and onboarding security.",
      img: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.youtube.com/@GoogleCloud",
    },
    {
      title: "Compliance & Criminal Screening Best Practices",
      desc: "Legal perspectives on ethical & jurisdiction-aware background checks.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.youtube.com/@SHRM",
    },
    {
      title: "Scaling Verification for Gig Platforms",
      desc: "How marketplaces handle thousands of checks daily with automation.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
      url: "https://www.youtube.com/@McKinsey",
    },
  ];

  return (
    <div className="space-y-28">

      {/* HERO */}
      <section className="relative py-24 bg-slate-950 text-white text-center">
        <div className="section-container max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-orange-300 font-semibold">
            Resources & Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">
            Learn About Background Verification, Fraud & Compliance
          </h1>
          <p className="text-sm text-orange-100">
            Educational content, expert webinars and recommended books for HR, compliance and ops leaders.
          </p>
        </div>
      </section>

      {/* BLOGS */}
      <section className="section-container">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <span className="text-sm text-slate-500">Updated regularly</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((b, i) => (
            <a key={i} href={b.url} target="_blank" rel="noopener noreferrer" className="block">
              <div className="group bg-white rounded-2xl overflow-hidden border shadow hover:shadow-xl transition">
                <div className="h-52 overflow-hidden">
                  <img src={b.img} alt={b.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-[11px] text-brand-primary font-semibold uppercase">{b.tag}</span>
                  <h3 className="font-semibold text-lg text-slate-900">{b.title}</h3>
                  <p className="text-sm text-slate-600">{b.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* BOOKS */}
     <section className="bg-slate-50 py-20">
  <div className="section-container">
    <h2 className="text-3xl font-bold mb-12 text-center">
      Recommended Books
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      {books.map((b, i) => (
        <a
          key={i}
          href={b.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-white rounded-2xl overflow-hidden border shadow hover:shadow-lg transition">
            <img src={b.img} alt={b.title} className="h-64 w-full object-cover" />
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-slate-600">{b.desc}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* WEBINARS */}
   <section className="bg-slate-900 py-20">
  <div className="section-container">
    <h2 className="text-3xl font-bold mb-12 text-white text-center">
      Expert Webinars
    </h2>

    <div className="grid md:grid-cols-3 gap-12">
      {webinars.map((w, i) => (
        <a
          key={i}
          href={w.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="bg-white rounded-2xl overflow-hidden border shadow hover:shadow-xl transition">
            <img src={w.img} alt={w.title} className="h-64 w-full object-cover" />
            <div className="p-6 space-y-2">
              <h3 className="font-semibold text-lg">{w.title}</h3>
              <p className="text-sm text-slate-600">{w.desc}</p>
              <span className="text-sm font-semibold text-brand-primary">
                Watch now →
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* CTA */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-3xl font-bold">Want curated learning for your team?</h2>
        <p className="text-sm text-orange-200 mt-2">
          Get playbooks, expert sessions and compliance learning tailored to your industry.
        </p>
        <Link to="/contact" className="mt-6 inline-block bg-white text-brand-primary px-9 py-3 rounded-full font-semibold">
          Contact us
        </Link>
      </section>

    </div>
  );
}
