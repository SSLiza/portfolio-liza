"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }
    
    setStatus("sending");
    
    // Simulate API submission
    setTimeout(() => {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <section className="scroll-mt-24 py-12 sm:py-16 bg-brand-bg relative overflow-hidden border-t border-brand-border/60" id="contact">
      <div className="absolute inset-0 grid-bg pointer-events-none -z-20"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-brand-surface border border-brand-border/80 rounded-[2.5rem] p-8 md:p-16 shadow-2xl flex flex-col md:grid md:grid-cols-2 gap-16 relative">
          
          {/* Info Column */}
          <div className="flex flex-col justify-center" data-purpose="contact-info">
            <span className="text-emerald-400 font-sans font-semibold text-xs tracking-wider uppercase mb-1">
              GET IN TOUCH
            </span>
            <h2 className="text-4xl font-extrabold mb-6 text-white tracking-tight">Let&apos;s Work Together</h2>
            <p className="text-gray-400 mb-12 leading-relaxed font-sans">
              Have a web application project, an API integration need, or want to optimize your page speeds? Let&apos;s collaborate and build something amazing together.
            </p>
            
            <div className="space-y-8">
              {/* Email Card */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-300 border border-brand-primary/20 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-mono tracking-widest">Email Address</p>
                  <a
                    href="mailto:shajedasultanaliza2002@gmail.com"
                    className="font-bold text-gray-200 hover:text-brand-accent transition-colors font-mono text-sm sm:text-base"
                  >
                    shajedasultanaliza2002@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-300 border border-brand-primary/20 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-mono tracking-widest">Phone Number</p>
                  <a
                    href="tel:+8801616190004"
                    className="font-bold text-gray-200 hover:text-brand-accent transition-colors font-mono"
                  >
                    +880 1616190004
                  </a>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-emerald-950/80 rounded-xl flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-300 border border-emerald-500/30 shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.258-1.116z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-mono tracking-widest">WhatsApp Direct</p>
                  <a
                    href="https://wa.me/8801616190004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-400 hover:underline transition-colors font-mono flex items-center gap-1.5"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center text-brand-accent group-hover:scale-110 transition-transform duration-300 border border-brand-primary/20 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-mono tracking-widest">Location</p>
                  <p className="font-bold text-gray-200">Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="flex flex-col justify-center" data-purpose="contact-form-container">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-semibold mb-2 text-gray-300">YOUR NAME</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-brand-border bg-zinc-950 px-4 py-3 text-white focus:border-brand-accent focus:ring-2 focus:ring-brand-primary/10 focus:outline-none transition-all"
                    placeholder="Enter your name"
                    type="text"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-semibold mb-2 text-gray-300">EMAIL ADDRESS</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-brand-border bg-zinc-950 px-4 py-3 text-white focus:border-brand-accent focus:ring-2 focus:ring-brand-primary/10 focus:outline-none transition-all"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-mono font-semibold mb-2 text-gray-300">MESSAGE SUMMARY</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border border-brand-border bg-zinc-950 px-4 py-3 text-white focus:border-brand-accent focus:ring-2 focus:ring-brand-primary/10 focus:outline-none transition-all"
                  placeholder="Outline your project scope or questions..."
                  rows={4}
                  required
                ></textarea>
              </div>

              {/* Status Message */}
              {status === "success" && (
                <div className="bg-emerald-950/40 text-brand-accent p-4 rounded-xl border border-brand-primary/20 text-sm font-semibold font-mono animate-fadeIn">
                  🎉 Message sent successfully! I will get back to you shortly.
                </div>
              )}
              {status === "error" && (
                <div className="bg-rose-950/40 text-rose-400 p-4 rounded-xl border border-rose-900/50 text-sm font-semibold font-mono animate-fadeIn">
                  ⚠️ Error sending message: {errorMsg}
                </div>
              )}

              <button
                disabled={status === "sending"}
                className={`w-full bg-brand-primary text-white font-bold py-4 rounded-xl shadow-lg hover:bg-brand-dark transition-all transform hover:-translate-y-[1px] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer border border-brand-primary/20`}
                type="submit"
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
