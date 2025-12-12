import { Link } from "react-router-dom";

export default function ProductIndex() {
  const products = [
    {
      title: "Identity Verification",
      desc: "AI-powered KYC, ID validation, face match and liveness detection for secure onboarding.",
      link: "/products/identity",
      img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Employment Verification",
      desc: "Instant employer history, role validation and digital reference checks.",
      link: "/products/employment",
      img: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Education Verification",
      desc: "Global verification of degrees, certificates and academic records.",
      link: "/products/education",
      img: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Criminal Background Screening",
      desc: "Jurisdiction-compliant criminal history screening via trusted partners.",
      link: "/products/criminal",
      img: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Watchlists & Sanctions",
      desc: "PEP, AML and sanctions monitoring for high-risk roles.",
      link: "/products/watchlists",
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Fraud AI & Risk Scoring",
      desc: "Detect tampered documents, synthetic identities and fraud patterns.",
      link: "/products/fraud-ai",
      img: "https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
  ];

  return (
    <div className="space-y-20">

      {/* HEADER */}
      <section className="py-16 bg-white border-b">
        <div className="section-container text-center space-y-4">
          <p className="text-xs tracking-[0.25em] uppercase text-brand-primary font-semibold">
            Products
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Background Verification Products Built for Scale
          </h1>

          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            A unified verification platform for identity, employment, education and criminal checks—
            powered by AI for accuracy and speed.
          </p>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((p, i) => (
            <Link
              key={i}
              to={p.link}
              className="group rounded-2xl bg-white border border-slate-200 shadow-sm 
                         hover:shadow-xl hover:border-brand-primary/50 transition-all overflow-hidden"
            >
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 space-y-2">
                <h3 className="font-semibold text-lg text-slate-900">{p.title}</h3>
                <p className="text-sm text-slate-600">{p.desc}</p>
                <span className="inline-block mt-2 text-sm text-brand-primary font-semibold">
                  View product →
                </span>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Smarter, faster verification for global teams</h2>
        <p className="text-sm text-orange-200 mt-2 max-w-xl mx-auto">
          Reduce fraud, accelerate hiring and maintain compliance effortlessly.
        </p>

        <Link
          to="/contact"
          className="mt-5 inline-block bg-white text-brand-primary px-8 py-3 rounded-full font-semibold"
        >
          Request a Demo
        </Link>
      </section>
    </div>
  );
}
