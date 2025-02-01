"use client"
import React, { useState } from "react";
import Link from "next/link";

function ContactHero() {
  // Form state management
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ success: false, error: "" });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ success: false, error: "All fields are required!" });
      return;
    }

    // Simulate a successful submission (replace with API call if needed)
    setTimeout(() => {
      setStatus({ success: true, error: "" });
      setFormData({ name: "", email: "", message: "" }); // Reset form
    }, 1000);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-[url('/heropic.png')] bg-cover bg-no-repeat bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6">
              Contact us
            </h1>
            <div className="text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center">
              <Link href="/" className="text-white hover:text-[#FF9F0D] transition-colors duration-300">
                Home
              </Link>
              <span className="text-white">/</span>
              <Link href="/contact" className="text-[#FF9F0D]">Contact</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-2xl mx-auto bg-[#0D0D0D] p-8 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-white text-center mb-6">Get in Touch</h2>

          {/* Success & Error Messages */}
          {status.success && <p className="text-green-500 text-center mb-4">Message sent successfully!</p>}
          {status.error && <p className="text-red-500 text-center mb-4">{status.error}</p>}

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:border-[#FF9F0D] outline-none"
              required
            />

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:border-[#FF9F0D] outline-none"
              required
            />

            {/* Message Textarea */}
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="p-3 border border-gray-600 rounded-lg bg-gray-900 text-white focus:border-[#FF9F0D] outline-none"
              required
            ></textarea>

            {/* Submit Button */}
            <button type="submit" className="bg-[#FF9F0D] text-white py-3 rounded-lg font-bold hover:bg-orange-500 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default ContactHero;
