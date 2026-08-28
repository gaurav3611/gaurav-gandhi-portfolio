"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Magnetic from "@/components/ui/Magnetic";
import {
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  SocialIcon,
} from "@/components/icons";
import { contactInfo, socialsFull } from "@/data/contact";

const contactItems = [
  { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}`, icon: EmailIcon },
  { label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/[\s-]/g, "")}`, icon: PhoneIcon },
  { label: "Location", value: contactInfo.location, href: undefined, icon: LocationIcon },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200);
  };

  return (
    <section
      id="contact"
      data-section="contact"
      className="relative py-24"
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              eyebrow="Contact"
              title="Get in Touch"
              description="Let's build something great together."
            />

            <p className="text-white/75 leading-relaxed font-serif mb-8 max-w-lg">
              I&apos;m always open to new opportunities, collaborations, and
              interesting conversations. Feel free to reach out through any of
              the channels below — I usually reply within a day.
            </p>

            {/* Contact items */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {contactItems.map((item) => {
                const Wrapper = item.href ? "a" : "div";
                return (
                  <Wrapper
                    key={item.label}
                    href={item.href}
                    className="group relative flex flex-col items-start gap-4 bg-white border border-white/60 rounded-2xl p-5 hover:border-vermilion/50 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-vermilion/15 to-vermilion/5 flex items-center justify-center group-hover:from-vermilion group-hover:to-vermilion-dark group-hover:text-white transition-colors duration-300">
                      <item.icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[11px] text-stone uppercase tracking-[0.15em] mb-1">
                        {item.label}
                      </div>
                      <div className="text-sm font-semibold text-ink break-words leading-snug">
                        {item.value}
                      </div>
                    </div>
                    {item.href && (
                      <span className="absolute top-4 right-4 text-stone/40 group-hover:text-vermilion group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    )}
                  </Wrapper>
                );
              })}
            </div>

            {/* Socials */}
            <div className="flex flex-wrap gap-3">
              {socialsFull.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 px-4 py-2.5 bg-white border border-white/60 rounded-xl hover:bg-vermilion hover:border-vermilion hover:text-white hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                  title={s.handle}
                >
                  <SocialIcon name={s.icon} size={18} />
                  <span className="text-sm font-medium">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right - form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="bg-white border border-white/60 rounded-2xl p-8 space-y-6 shadow-2xl shadow-black/10"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-elevated border border-line rounded-lg focus:ring-2 focus:ring-vermilion focus:border-transparent outline-none text-ink placeholder-stone transition"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-ink mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-elevated border border-line rounded-lg focus:ring-2 focus:ring-vermilion focus:border-transparent outline-none text-ink placeholder-stone transition"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full px-4 py-3 bg-elevated border border-line rounded-lg focus:ring-2 focus:ring-vermilion focus:border-transparent outline-none text-ink placeholder-stone transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                className="w-full px-4 py-3 bg-elevated border border-line rounded-lg focus:ring-2 focus:ring-vermilion focus:border-transparent outline-none text-ink placeholder-stone resize-none transition"
                required
              />
            </div>

            <Magnetic strength={0.2}>
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-3.5 rounded-xl font-display font-medium transition-all duration-300 ${
                  status === "sent"
                    ? "border-2 border-bamboo text-bamboo bg-bamboo/10"
                    : "bg-vermilion text-white hover:bg-vermilion-dark disabled:opacity-60"
                }`}
              >
                {status === "idle" && "Send Message →"}
                {status === "sending" && (
                  <span className="flex items-center justify-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                )}
                {status === "sent" && "Message Sent ✓"}
              </button>
            </Magnetic>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
