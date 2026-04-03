"use client";
import React, { useState } from "react";
import { Mail, Smartphone, MapPin, Clock, MessageCircle, Users, Building2, Headphones, ArrowRight, Send, User, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const page = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("/api/contact-us", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } else {
      alert(data.error || "Something went wrong.");
    }
  } catch (err) {
    alert("Failed to send. Please try again.");
  }
};

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">

        {/* ── Header ── */}
        <motion.div {...fadeUp()} className="text-center flex flex-col items-center gap-4">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
            <Headphones className="w-3.5 h-3.5" />
            We're here to help
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Get in Touch with <span className="text-cyan-400">Ebrain Software & Solutions</span>
          </h1>
          <p className="text-blue-200/80 max-w-2xl text-base leading-relaxed">
            Whether you have a high-volume data project or a simple digitization query, our team is ready to assist you.
          </p>
        </motion.div>

        {/* ── Contact Form + Image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Image side */}
          <motion.div {...fadeUp(0.1)} className="relative rounded-3xl overflow-hidden min-h-[400px] lg:min-h-auto">
            <Image
              src="/contactus.avif"
              alt="Contact us"
              fill
              className="object-cover"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/40 to-transparent" />

            {/* Overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col gap-4">
              <h2 className="text-2xl font-extrabold text-white">Let's work together</h2>
              <p className="text-blue-200/80 text-sm leading-relaxed max-w-sm">
                Reach out and our team will get back to you within 4 business hours.
              </p>
              <div className="flex flex-col gap-2.5 mt-2">
                {[
                  { icon: <Mail className="w-4 h-4" />, text: "ebrainsoftwareandsolutions@gmail.com" },
                  { icon: <Smartphone className="w-4 h-4" />, text: "+91 9974710001" },
                  { icon: <MapPin className="w-4 h-4" />, text: "" },
                ].map(({ icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-blue-100">
                    <span className="text-cyan-400 shrink-0">{icon}</span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div {...fadeUp(0.2)} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-8 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Send us a message</h2>
              <p className="text-white text-sm mt-1">Fill in the form and we'll be in touch shortly.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white uppercase tracking-wide">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-blue-300/30 text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-white uppercase tracking-wide">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full bg-white/5 border border-white/10 text-white placeholder-blue-300/30 text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white uppercase tracking-wide">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-blue-300/30 text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white uppercase tracking-wide">Subject</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all appearance-none"
                >
                  <option value="" disabled className="bg-blue-950">Select a topic</option>
                  <option value="business" className="bg-blue-950">Business / Client Inquiry</option>
                  <option value="jobs" className="bg-blue-950">Job / Freelance Application</option>
                  <option value="support" className="bg-blue-950">Support</option>
                  <option value="other" className="bg-blue-950">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-white uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={4}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-blue-300/30 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-1 w-full inline-flex items-center justify-center gap-2 bg-cyan-400 hover:bg-cyan-300 active:scale-95 text-blue-950 font-bold text-sm rounded-xl py-3.5 transition-all duration-200 shadow-lg shadow-cyan-500/20"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

            </form>
          </motion.div>
        </div>

        {/* ── Info Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Business & Clients */}
          <motion.div {...fadeUp(0.1)} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-lg font-bold text-white">For Business & Clients</h2>
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Looking to outsource data entry, transcription, or digitization projects? Connect with our project management team.
            </p>
            <div className="flex flex-col gap-3 mt-1">
              {[
                { icon: <Mail className="w-4 h-4" />, text: "ebrainsoftwareandsolutions.com" },
                { icon: <Clock className="w-4 h-4" />, text: "Response within 4 hours on business days" },
                { icon: <Smartphone className="w-4 h-4" />, text: "Dedicated managers for Enterprise clients" },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3">
                  <span className="text-cyan-400 mt-0.5 shrink-0">{icon}</span>
                  <span className="text-blue-100 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Job Seekers */}
          <motion.div {...fadeUp(0.2)} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                <Smartphone className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-lg font-bold text-white">For Job Seekers & Freelancers</h2>
            </div>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Questions about your application, exam, or joining process? Use the channels below.
            </p>
           <div className="flex flex-col gap-2 mt-1">
  {[
    { label: "Recruitment", value: "Handled via our Careers Page only" },
    { label: "Freelancers", value: "Use WhatsApp support from your joining kit" },
    { label: "CV Submission", value: "contact@ebrainsoftware@gmail.com" },
    { label: "Exam Support", value: "contact@ebrainsoftware@gmail.com" },
  ].map(({ label, value }) => (
    <div
      key={label}
      className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 sm:gap-3 border-b border-white/10 pb-2 last:border-0 last:pb-0"
    >
      <span className="text-white text-xs font-semibold uppercase tracking-wide shrink-0">
        {label}
      </span>
      <span className="text-blue-100 text-xs sm:text-sm sm:text-right break-all">
        {value}
      </span>
    </div>
  ))}
</div>
          </motion.div>

          {/* Headquarters */}
          <motion.div {...fadeUp(0.3)} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Our Headquarters</h2>
            </div>
            <div className="flex flex-col gap-3 mt-1">
              <div className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <p className="text-blue-100 text-sm leading-relaxed">
                  1st Floor, R.M.Nagar Main Road, Doddabanswadi, Bangalore, Karnataka
                </p>
              </div>
              <div className="flex items-start gap-3 bg-white/5 rounded-xl px-4 py-3">
                <Clock className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <div className="text-sm text-blue-100 leading-relaxed">
                  <p className="font-semibold text-white">Mon – Sat: 10:00 AM – 6:00 PM (IST)</p>
                  <p className="text-blue-200/60 text-xs mt-0.5">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Direct Support */}
          <motion.div {...fadeUp(0.4)} className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl p-7 flex flex-col gap-5 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-cyan-400" />
              </div>
              <h2 className="text-lg font-bold text-white">Direct Support Channels</h2>
            </div>
            <div className="flex flex-col gap-3 mt-1">
              <a href="mailto:ebrainsoftwareandsolutions@gmail.com" className="flex items-center justify-between gap-3 bg-white/5 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20 rounded-xl px-4 py-3 transition-all duration-200 group">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-blue-100 text-sm">ebrainsoftwareandsolutions@gmail.com</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="https://wa.me/919974710001" target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 bg-white/5 hover:bg-cyan-400/10 border border-transparent hover:border-cyan-400/20 rounded-xl px-4 py-3 transition-all duration-200 group">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-blue-100 text-sm">WhatsApp: +91 9974710001</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
            <p className="text-blue-300/50 text-xs leading-relaxed border-t border-white/10 pt-4 mt-auto">
              The phone line is for active clients and registered freelancers. New job seekers should apply online first.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default page;