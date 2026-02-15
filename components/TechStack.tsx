"use client";
import { motion } from "framer-motion";
import { 
  Terminal, 
  Settings2, 
  Share2, 
  Code2, 
  Database, 
  ShieldCheck, 
  CreditCard, 
  Layers,
  Cpu // Importing directly from Lucide
} from "lucide-react";

const stack = [
  { 
    title: "ERP Specialization", 
    tech: "Suitescript 2.0/2.1", 
    sub: "Expert in User Event, Client, Suitelet, Restlet, and Map-Reduce (2.1).", 
    icon: <Terminal className="text-orange-500" />, 
    className: "md:col-span-2" 
  },
  { 
    title: "Customization", 
    tech: "NetSuite Customizations", 
    sub: "Manufacturing & Healthcare solutions; O2C/P2P cycles.", 
    icon: <Settings2 className="text-emerald-500" />, 
    className: "md:col-span-1" 
  },
  { 
    title: "Connectivity", 
    tech: "NetSuite Integrations", 
    sub: "High-volume syncs using SFTP, Amazon S3, and Custom APIs.", 
    icon: <Share2 className="text-blue-500" />, 
    className: "md:col-span-1" 
  },
  { 
    title: "Framework", 
    tech: "Next.js", 
    sub: "Modern React architecture with server-side capabilities.", 
    icon: <Code2 className="text-blue-400" />, 
    className: "md:col-span-1" 
  },
  { 
    title: "Core Language", 
    tech: "Java", 
    sub: "Enterprise-grade backend logic and SQL management.", 
    icon: <Cpu className="text-red-500" />, 
    className: "md:col-span-1" 
  },
  { 
    title: "Design", 
    tech: "Tailwind & Advanced PDF", 
    sub: "Branded transaction templates and responsive UI.", 
    icon: <Layers className="text-cyan-400" />, 
    className: "md:col-span-1" 
  },
  { 
    title: "Identity", 
    tech: "Auth0 by Okta", 
    sub: "Implementing secure OIDC/OAuth2 authentication flows.", 
    icon: <ShieldCheck className="text-orange-400" />, 
    className: "md:col-span-1" 
  },
  { 
    title: "Data Layer", 
    tech: "MongoDB & NoSQL", 
    sub: "Scalable document-based database architecture.", 
    icon: <Database className="text-purple-500" />, 
    className: "md:col-span-1" 
  },
  { 
    title: "Fintech", 
    tech: "Stripe & Razorpay", 
    sub: "Global and Domestic Payment Gateway implementation.", 
    icon: <CreditCard className="text-emerald-400" />, 
    className: "md:col-span-1" 
  },
  
];

export default function TechStack() {
  return (
    <section id="techstack" className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-12">
          Technical Arsenal
        </h2>
        <h1 className="text-4xl font-bold text-white tracking-tight mb-12">
          Integrated Tech Stack
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stack.map((item, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              className={`p-8 rounded-3xl border border-white/5 bg-white/5 hover:border-blue-500/30 transition-all ${item.className}`}
            >
              <div className="mb-6 p-3 w-fit rounded-2xl bg-black/40">
                {item.icon}
              </div>
              <h4 className="text-slate-400 text-sm mb-1">{item.title}</h4>
              <p className="text-white text-xl font-bold">{item.tech}</p>
              <p className="text-slate-500 text-sm mt-3 font-mono leading-relaxed">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}