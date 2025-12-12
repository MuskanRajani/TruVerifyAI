import { Link } from "react-router-dom";

export default function Industries() {
  const industries = [
  {
    title: "Financial Services",
    desc: "Background checks for banking, lending, payments and risk teams with KYC, AML and audit readiness.",
    link: "/industries/financial-services",
    // ✅ Finance / banking specific
    img: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Gig & Marketplaces",
    desc: "High-volume onboarding for drivers, riders and delivery partners with fraud and duplicate detection.",
    link: "/industries/gig",
    // ✅ Delivery rider / gig worker
    img: "https://images.pexels.com/photos/4391474/pexels-photo-4391474.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Healthcare",
    desc: "Credential, license, education and background verification for clinical and patient-facing roles.",
    link: "/industries/healthcare",
    // ✅ Doctor / hospital
    img: "https://images.pexels.com/photos/8460156/pexels-photo-8460156.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Retail & Ecommerce",
    desc: "Fast screening for store staff, warehouse workers and fulfillment teams during peak hiring.",
    link: "/industries/retail",
    // ✅ Warehouse / retail operations
    img: "https://images.pexels.com/photos/6169056/pexels-photo-6169056.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Staffing & Recruitment",
    desc: "Bulk verification for staffing firms managing large candidate pipelines.",
    link: "/industries/staffing",
    // ✅ Recruiter interview / HR hiring
    img: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    title: "Technology & SaaS",
    desc: "Remote-first verification for engineers, product, sales and operations teams worldwide.",
    link: "/industries/technology",
    // ✅ Software engineers / tech team
    img: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];


  return (
    <div className="space-y-20">

      {/* ✅ HEADER — SAME STRUCTURE AS PRODUCTS */}
      <section className="py-16 bg-white border-b">
        <div className="section-container text-center space-y-4">
          <p className="text-xs tracking-[0.25em] uppercase text-brand-primary font-semibold">
            Industries
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Industry-specific background verification
          </h1>

          <p className="text-sm text-slate-600 max-w-2xl mx-auto">
            TruVerifyAI supports high-trust, high-volume and regulated hiring across multiple industries with
            configurable verification workflows.
          </p>
        </div>
      </section>

      {/* ✅ GRID — SAME AS PRODUCTS */}
      <section className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {industries.map((i, index) => (
            <Link
              key={index}
              to={i.link}
              className="group rounded-2xl bg-white border border-slate-200 shadow-sm 
                         hover:shadow-xl hover:border-brand-primary/50 transition-all overflow-hidden"
            >
              {/* ✅ IMAGE */}
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={i.img}
                  alt={i.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* ✅ CONTENT */}
              <div className="p-6 space-y-2">
                <h3 className="font-semibold text-lg text-slate-900">
                  {i.title}
                </h3>

                <p className="text-sm text-slate-600">
                  {i.desc}
                </p>

                <span className="inline-block mt-2 text-sm text-brand-primary font-semibold">
                  View industry →
                </span>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* ✅ CTA — SIMPLE & CLEAN */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Don’t see your industry here?
        </h2>

        <p className="text-sm text-orange-200 mt-2 max-w-xl mx-auto">
          We configure custom verification workflows for unique and hybrid hiring models.
        </p>

        <Link
          to="/contact"
          className="mt-5 inline-block bg-white text-brand-primary px-8 py-3 rounded-full font-semibold"
        >
          Talk to our experts
        </Link>
      </section>

    </div>
  );
}
