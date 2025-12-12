import { Link } from "react-router-dom";

export default function RetailIndustry() {
  return (
    <div className="space-y-28">

      {/* HERO */}
      <section className="relative py-28 bg-gradient-to-br from-orange-50 via-white to-slate-50">
        <div className="section-container grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-primary font-semibold mb-3">
              Retail & Ecommerce
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              Hire store, warehouse and HQ teams with less risk and more speed.
            </h1>

            <p className="text-sm text-slate-600 mb-4 leading-relaxed">
              Retail and commerce teams operate on thin margins, complex supply chains and constant
              seasonal peaks. TruVerifyAI helps screen store staff, warehouse workers and support
              teams for integrity, reliability and safety.
            </p>

            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
              From cash-handling roles to dark-store operations, you get configurable verification
              flows aligned with role sensitivity — without slowing down hiring.
            </p>

            <Link
              to="/contact"
              className="bg-brand-primary text-white px-8 py-3 rounded-full font-semibold shadow"
            >
              Talk to our retail team
            </Link>
          </div>

          <img
            src="https://images.pexels.com/photos/3962294/pexels-photo-3962294.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Retail store staff"
            className="rounded-3xl shadow-2xl object-cover w-full max-h-[520px]"
          />
        </div>
      </section>

      {/* CHALLENGES + IMPACT */}
      <section className="section-container grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Retail hiring comes with its own risk profile.
          </h2>
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            High footfall locations, cash transactions, inventory movement and outsourced logistics
            make retail hiring uniquely complex. Traditional background checks are often slow, siloed
            and inconsistent across regions and store formats.
          </p>

          <ul className="list-disc list-inside text-sm text-slate-700 space-y-2">
            <li>Store theft and shrinkage from internal and external actors</li>
            <li>Fraud in discount, returns and loyalty abuse workflows</li>
            <li>Inventory mismanagement across warehouses and micro-fulfilment centers</li>
            <li>Seasonal spikes requiring fast yet safe hiring decisions</li>
          </ul>
        </div>

        <div className="rounded-2xl bg-white border shadow p-6">
          <h3 className="font-semibold mb-3">Where TruVerifyAI helps</h3>
          <p className="text-sm text-slate-600 mb-3">
            We centralize verification for store, warehouse, delivery and HQ roles,
            while allowing local HR teams to manage their own pipelines and decisions.
          </p>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3">
              <div className="text-2xl font-bold text-brand-primary">30%</div>
              <div className="text-xs text-slate-500">Lower time-to-hire</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-brand-primary">25%</div>
              <div className="text-xs text-slate-500">Reduction in shrink-related incidents*</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-brand-primary">3×</div>
              <div className="text-xs text-slate-500">More visibility across locations</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-brand-primary">Multi-region</div>
              <div className="text-xs text-slate-500">Policies in one place</div>
            </div>
          </div>

          <p className="text-[11px] text-slate-400 mt-3">
            *Illustrative impact; depends on configuration and usage.
          </p>
        </div>
      </section>

      {/* ROLE-BASED FLOWS */}
      <section className="bg-slate-50 py-16">
        <div className="section-container">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Role-aware verification instead of one-size-fits-all
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Store & cash-counter staff",
                points: [
                  "Identity & address verification",
                  "Employment history checks",
                  "Targeted criminal & fraud records (where legal)"
                ]
              },
              {
                title: "Warehouse & dark-store teams",
                points: [
                  "Background checks for inventory and equipment access",
                  "Shift-based and temporary workforce support",
                  "Optional drug screening (region-permitting)"
                ]
              },
              {
                title: "Corporate & HQ roles",
                points: [
                  "Enhanced verification for finance, IT and analytics roles",
                  "Education checks for specialist positions",
                  "Audit-friendly documentation for internal controls"
                ]
              },
            ].map((card, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border shadow-sm">
                <h3 className="font-semibold mb-2">{card.title}</h3>
                <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
                  {card.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE USE CASE STRIP */}
      <section className="section-container grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Multi-store retail chains",
            desc: "Standardize hiring risk policies while keeping local decision-making.",
            img: "https://images.pexels.com/photos/4483773/pexels-photo-4483773.jpeg?auto=compress&cs=tinysrgb&w=1200"
          },
          {
            title: "Ecommerce & fulfilment",
            desc: "Screen warehouse, packing and logistics staff in high-volume hubs.",
            img: "https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200"
          },
          {
            title: "Omnichannel operations",
            desc: "Align risk checks across store, online and marketplace operations.",
            img: "https://images.pexels.com/photos/5632400/pexels-photo-5632400.jpeg?auto=compress&cs=tinysrgb&w=1200"
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
      </section>

      {/* CTA */}
      <section className="bg-brand-primary text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-3">Protect margins while hiring faster.</h2>
        <p className="text-sm text-orange-100 max-w-xl mx-auto mb-6">
          TruVerifyAI helps retail and ecommerce teams balance growth with safety and operational control.
        </p>
        <Link
          to="/contact"
          className="bg-white text-brand-primary px-9 py-3 rounded-full font-semibold"
        >
          Book a retail-focused demo
        </Link>
      </section>

    </div>
  );
}
