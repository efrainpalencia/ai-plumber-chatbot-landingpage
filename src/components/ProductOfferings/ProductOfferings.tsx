import React, { useState } from "react";
import WaitListForm from "../WaitListForm/WaitListForm";
import Modal from "../Modal/Modal";

const offerings = [
  {
    title: "Starter Plan – “Lead Catcher”",
    subtitle:
      "🛠️ Perfect for solo plumbers who just need a simple way to never miss a lead again.",
    price: "$149/mo",
    discount: "$75/mo",
    features: [
      "24/7 AI chatbot (on your website)",
      "Captures name, phone, email, location, job type",
      "Basic FAQ automation (hours, services, service area)",
      "Instant email lead notifications",
      "Monthly chatbot report (leads captured)",
      "Basic customization (colors, logo)",
      "1 update/month",
    ],
  },
  {
    title: "Pro Plan – “BookedBot”",
    subtitle:
      "💼 Our most popular plan. Turn visitors into jobs with automated booking, lead follow-up, and review requests.",
    price: "$299/mo",
    discount: "$150/mo",
    features: [
      "GPT-4-powered smart conversations",
      "Lead qualification questions (urgency, issue type, location)",
      "Google Calendar or Calendly integration (let customers book appointments!)",
      "SMS alerts for new leads",
      "Automated review request system (via text or email)",
      "Bi-weekly chatbot optimization",
      "Custom branding & tone of voice",
    ],
  },
  {
    title: "Elite Plan – “PipeLine Pro”",
    subtitle:
      "🚀 Built for growing teams and franchise-style plumbing operations that want full AI-powered automation.",
    price: "$599/mo",
    discount: "$300/mo",
    features: [
      "AI agent with basic memory (recognizes repeat customers)",
      "CRM integration (HubSpot, Pipedrive, or custom)",
      "Multi-channel chatbot: Website, SMS, Facebook Messenger",
      "AI call screening option (Twilio + Whisper integration)",
      "Multi-location routing (if you serve multiple zones)",
      "Monthly strategy session & performance review",
      "Priority support & feature rollouts",
    ],
  },
];

const ProductOfferings = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          AI Chatbot Service Packages for Busy Plumbers
        </h2>
        <p className="text-lg text-gray-300">
          Get More Jobs. Miss Fewer Calls. Grow While You Work.
        </p>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {offerings.map((item) => (
          <div
            key={item.title}
            className="bg-stone-800 rounded-xl p-6 shadow-lg flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-base italic mb-2">{item.subtitle}</p>
              <p className="text-xl text-sky-500 font-medium mb-4 line-through">
                {item.price}
              </p>
              <p className="text-xl text-orange-400 font-medium mb-4">
                {item.discount}
              </p>
              <ul className="text-gray-300 space-y-2 list-disc list-inside">
                {item.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <button
              className="mt-6 px-5 py-3 bg-sky-500 text-white rounded-md hover:bg-sky-300 transition"
              onClick={() => setModalOpen(true)}
            >
              Join Waitlist
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Waitlist Form */}
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <h4 className="text-2xl font-semibold mb-4 text-white">
          Join Our Waitlist
        </h4>
        <WaitListForm />
      </Modal>
    </section>
  );
};

export default ProductOfferings;
