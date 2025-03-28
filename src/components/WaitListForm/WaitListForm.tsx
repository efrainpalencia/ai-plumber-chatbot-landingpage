import React, { FC, useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { useNavigate } from "react-router-dom";

const FORMSPARK_FORM_ID = "QqNQO4Vu6";

const WaitListForm: FC = () => {
  const [submit, submitting] = useFormspark({ formId: FORMSPARK_FORM_ID });
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submit({ name, email, message });

    setSubmitted(true); // Show success message

    // Optional: clear form
    setName("");
    setEmail("");
    setMessage("");

    // Redirect to landing page after 2.5 seconds
    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-col max-w-md mx-auto p-6 bg-stone-800 rounded-xl shadow-md space-y-4"
    >
      {submitted ? (
        <div className="text-green-400 text-center text-lg font-medium">
          🎉 Success! You’ve joined the waitlist. Redirecting...
        </div>
      ) : (
        <>
          <div>
            <label htmlFor="name" className="block text-white mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name Here"
              className="block w-full rounded-lg p-2 text-gray-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Here"
              className="block w-full rounded-lg p-2 text-gray-300"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-1">
              Message (optional)
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What are you interested in?"
              className="block w-full rounded-lg p-2 text-gray-300"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-sky-500 text-white py-2 rounded-md hover:bg-sky-600 transition disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Join Waitlist"}
          </button>
        </>
      )}
    </form>
  );
};

export default WaitListForm;
