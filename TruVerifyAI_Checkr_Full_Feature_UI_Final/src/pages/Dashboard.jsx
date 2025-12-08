
import verificationsChart from "../assets/verifications.png";
import statusChart from "../assets/status.png";
import typesChart from "../assets/types.png";

export default function Dashboard() {
  const rows = [
    { name: "Aditi Sharma", region: "India (Remote)", product: "Identity + Employment", status: "Clear" },
    { name: "Lucas Meyer", region: "Germany", product: "Identity + Criminal", status: "In Review" },
    { name: "Sophia Lee", region: "US", product: "Full Stack", status: "Pending" },
    { name: "Diego Fernandez", region: "Spain", product: "Marketplace", status: "Clear" }
  ];

  return (
    <div className="section-container py-10 space-y-10">

      <div>
        <h1 className="text-2xl font-bold mb-1">Analytics Overview</h1>
        <p className="text-sm text-slate-600">Live demo data for TruVerifyAI screening operations</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6 text-center">
        <div className="card-soft p-4">
          <div className="text-3xl font-bold text-brand-primary">2,480</div>
          <p className="text-sm text-slate-600">Total Verifications</p>
        </div>
        <div className="card-soft p-4">
          <div className="text-3xl font-bold text-brand-primary">94%</div>
          <p className="text-sm text-slate-600">Pass Rate</p>
        </div>
        <div className="card-soft p-4">
          <div className="text-3xl font-bold text-brand-primary">18 hrs</div>
          <p className="text-sm text-slate-600">Avg Turnaround</p>
        </div>
        <div className="card-soft p-4">
          <div className="text-3xl font-bold text-brand-primary">42</div>
          <p className="text-sm text-slate-600">Countries Active</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="card-soft p-4">
          <h3 className="font-semibold mb-2">Weekly Verification Volume</h3>
          <img src={verificationsChart} className="rounded-lg" />
        </div>
        <div className="card-soft p-4">
          <h3 className="font-semibold mb-2">Candidate Status Distribution</h3>
          <img src={statusChart} className="rounded-lg" />
        </div>
        <div className="card-soft p-4">
          <h3 className="font-semibold mb-2">Checks by Type</h3>
          <img src={typesChart} className="rounded-lg" />
        </div>
      </div>

      <div className="card-soft overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-brand-primarySoft">
            <tr>
              <th className="text-left p-3">Candidate</th>
              <th className="text-left p-3">Region</th>
              <th className="text-left p-3">Checks</th>
              <th className="text-left p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.name} className="border-t">
                <td className="p-3">{r.name}</td>
                <td className="p-3">{r.region}</td>
                <td className="p-3">{r.product}</td>
                <td className="p-3">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-xs">
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
