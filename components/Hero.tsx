"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Reduced padding-top to pt-20 for mobile and reset md:pt-0
    <section className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-20 md:pt-0">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="z-10" // Removed mt-4 to pull text up
        >
          <h2 className="text-blue-500 font-mono text-xs md:text-sm tracking-[0.2em] mb-4 uppercase">
            NetSuite Developer & Product Engineer | Pune, India
          </h2>

          <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter mb-6 leading-tight">
            Dhananjay <span className="text-blue-500">Jadhav.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-lg">
            Hi, I’m Dhananjay, an experienced <span className="text-white font-medium">NetSuite Developer</span> specializing in NetSuite{" "}
            <span className="text-white font-medium">customizations and integrations</span>, with expertise in building{" "} 
            <span className="text-white font-medium">SaaS products</span> using
            Next.js and Java.
          </p>

          <div className="flex flex-wrap gap-5">
            <button
              onClick={handleScroll}
              className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all flex items-center gap-2 cursor-pointer"
            >
              Get in Touch <Mail size={18} />
            </button>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/dhananjay-jadhav-9135a0254"
                target="_blank"
                className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/your-username"
                target="_blank"
                className="p-3 rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/50 hover:bg-white/5 transition-all"
              >
                <Github />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Image Container - Reduced gap on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative flex justify-center lg:justify-end mt-4 lg:mt-0"
        >
          <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-blue-600/20 blur-[60px] rounded-full animate-pulse" />
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-2 border-white/10 p-2 transform rotate-3 hover:rotate-0 transition-all duration-500 bg-slate-900">
              <Image
                src="/profile.png"
                alt="Dhananjay Jadhav"
                fill
                priority
                className="object-cover rounded-[1.5rem]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}