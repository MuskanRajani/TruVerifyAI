import emailjs from "@emailjs/browser";
import { useRef } from "react";

export default function Contact() {
  const formRef = useRef();

const handleSubmit = (e) => {
  e.preventDefault();

  const email = formRef.current.email.value.trim().toLowerCase();
  const storageKey = `truverify_contact_${email}`;
  const lastSubmittedAt = localStorage.getItem(storageKey);

  const COOLDOWN_TIME = 30 * 60 * 1000; // 30 minutes
  const now = Date.now();

  if (lastSubmittedAt && now - lastSubmittedAt < COOLDOWN_TIME) {
    alert(
      "We’ve already received your request. Our team will contact you shortly."
    );
    return;
  }

  emailjs
    .sendForm(
      "service_9dvbyer",
        "template_vxvtfvo",
        formRef.current,
        "q7nN8_g51Zs6fTcAe"
    )
    .then(() => {
      localStorage.setItem(storageKey, now.toString());
      alert("Thanks! Our team will contact you shortly.");
      formRef.current.reset();
    })
    .catch(() => {
      alert("Something went wrong. Please try again later.");
    });
};

  return (
    <div className="section-container py-10 text-sm space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Contact</h1>
        <p className="text-slate-600 max-w-2xl">
          Share a bit about your hiring or risk workflows and we&apos;ll follow up
          with a tailored walkthrough of TruVerifyAI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="card-soft p-5 space-y-3"
        >
          <div>
            <label className="block text-xs font-medium mb-1">Full name</label>
            <input name="name" required className="w-full px-3 py-2 border rounded-md text-sm" />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">Work email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded-md text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">Phone number</label>
            <input
              name="phone"
              required
              className="w-full px-3 py-2 border rounded-md text-sm"
              placeholder="+91..."
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">Company</label>
            <input
              name="company"
              required
              className="w-full px-3 py-2 border rounded-md text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">Country / Region</label>
            <input
              name="country"
              required
              className="w-full px-3 py-2 border rounded-md text-sm"
              placeholder="India, US, UK..."
            />
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">
              Approx monthly verifications
            </label>
            <select
              name="volume"
              required
              className="w-full px-3 py-2 border rounded-md text-sm"
            >
              <option value="">Select</option>
              <option>Less than 50</option>
              <option>50 – 200</option>
              <option>200 – 1000</option>
              <option>1000+</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium mb-1">
              What are you looking to verify?
            </label>
            <textarea
              name="message"
              rows={4}
              required
              className="w-full px-3 py-2 border rounded-md text-sm"
              placeholder="Example: employment + criminal checks for healthcare staff"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-full bg-brand-primary text-white text-sm"
          >
            Submit
          </button>
        </form>

        <div className="text-xs text-slate-600 space-y-3">
          <div>
            <h2 className="font-semibold text-sm mb-1">Sales & demos</h2>
            <p>Sales@trueverify.com</p>
          </div>
          <div>
            <h2 className="font-semibold text-sm mb-1">Security & compliance</h2>
            <p>Compliances@trueverify.com</p>
          </div>
           <div>
            <h2 className="font-semibold text-sm mb-1">Billing & Accounts</h2>
            <p>Billing@trueverify.com</p>
          </div>
          <div>
            <h2 className="font-semibold text-sm mb-1">Support</h2>
            <p>Support@trueverify.com</p>
          </div>
          <div>
            <h2 className="font-semibold text-sm mb-1">General Enquiries</h2>
            <p>info@truverify.ai</p>
          </div>
          <div>
            <h2 className="font-semibold text-sm mb-1">Global presence</h2>
            <p>Remote-first • Hiring across timezones</p>
          </div>
        </div>
      </div>
    </div>
  );
}
