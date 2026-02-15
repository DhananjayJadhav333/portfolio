"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Github, Copy, Send, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "djadhavofficial@gmail.com";
  const phoneNumber = "+91 8432203632";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="pt-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-4"
          >
            Contact
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white tracking-tight"
          >
            Let's Connect.
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            whileHover={{ y: -5 }}
            className="lg:col-span-2 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="relative z-10">
              <div className="mb-8 p-4 w-fit rounded-2xl bg-white/5 text-white border border-white/10">
                <Send size={24} />
              </div>
              <h4 className="text-3xl font-bold text-white mb-4 leading-tight">
                Finding solutions, <br />
                <span className="text-blue-500">building for the world.</span>
              </h4>
              <p className="text-slate-400 mb-10 max-w-lg text-lg leading-relaxed">
                I specialize in translating complex business logic into high-performance
                digital infrastructure. From custom <span className="text-white font-medium">Netsuite development</span>{" "}
                to engineering <span className="text-white font-medium">SaaS products</span>,
                I build for precision, efficiency, and system longevity.
                <span className="block mt-4 text-white/90 font-medium">
                  If you value technical excellence, let's connect.
                </span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 relative z-10">
              <a
                href={`mailto:${email}`}
                className="flex-grow md:flex-initial px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all text-center flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,99,235,0.2)]"
              >
                <Mail size={18} /> {email}
              </a>
              <button
                onClick={copyToClipboard}
                className="p-4 rounded-2xl border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2 active:scale-95"
              >
                <span className="text-sm font-medium">{copied ? "Copied!" : "Copy Email"}</span>
                {!copied && <Copy size={18} />}
              </button>
            </div>
          </motion.div>

          {/* Sidebar Area */}
          <div className="space-y-6 flex flex-col justify-between">
            {/* Location Tile */}
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 flex items-center gap-5 group transition-all hover:bg-white/[0.07]">
              <div className="p-3 rounded-xl bg-white/5 text-white border border-white/10">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-1">Location</p>
                <p className="text-white font-medium">Pune, India</p>
              </div>
            </div>

            {/* Compact Minimalist Social Grid */}
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-3">
              <a
                href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center group"
                title="Call"
              >
                <Phone size={18} className="group-hover:text-blue-500 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/dhananjay-jadhav-9135a0254"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center group"
                title="LinkedIn"
              >
                <Linkedin size={18} className="group-hover:text-blue-500 transition-colors" />
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center group"
                title="GitHub"
              >
                <Github size={18} className="group-hover:text-blue-500 transition-colors" />
              </a>
              <a
                href={`mailto:${email}`}
                className="p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center group"
                title="Email"
              >
                <Mail size={18} className="group-hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full border-t border-white/5 bg-transparent">
        <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="text-slate-400 text-sm font-medium tracking-tight">
              Copyright © {new Date().getFullYear()} Designed & Developed By Dhananjay Jadhav using Next.js
            </p>
            <p className="text-slate-600 text-[10px] font-mono uppercase tracking-[0.3em]">
              NetSuite Developer & Product Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}