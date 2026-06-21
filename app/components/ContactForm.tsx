"use client";
import { MoveRight } from "lucide-react";
import React, { useEffect, useState } from "react";

function ContactForm() {
  const initialState = { subject: "", email: "", message: "" };
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [status]);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!form.subject || !form.email || !form.message) return;
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("success");
      setForm(initialState);
    } else {
      setStatus("error");
    }
  }

  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      <div className="space-y-3">
        <label htmlFor="Email">Email</label>
        <input
          type="Email"
          placeholder="something@company.com"
          className="w-80"
          required
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          title="Please enter a valid email address (e.g., user@example.com)"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div className="space-y-3">
        <label htmlFor="Subject">Subject</label>
        <input
          type="text"
          placeholder="A role,a job ,a inquiring "
          className="w-80"
          required
          onChange={(e) => setForm({ ...form, subject: e.target.value })}
        />
      </div>
      <div className=" space-y-3 col-span-2">
        <label htmlFor="Message">Message</label>
        <textarea
          placeholder="Tell me more about it"
          className="w-full h-30 resize-none"
          required
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 bg-primary-200 text-black py-2 font-mono tracking-wide w-50 cursor-pointer hover:bg-primary-400 hover:scale-x-101"
      >
        {status === "loading" ? "sending..." : "Send Message "}
        <MoveRight size={14} />
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm text-start -translate-y-0.5 transition-transform duration-150">
          Message sent!
          <span className="block">
            Thank you for Contacting I&apos;ll get back to you soon.
          </span>
        </p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm text-center  -translate-y-0.5 transition-transform duration-150">
          Something went wrong. Try again or email me directly.
        </p>
      )}
    </form>
  );
}

export default ContactForm;
