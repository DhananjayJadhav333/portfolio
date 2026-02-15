"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Mail, Cpu } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home", icon: <Home size={18} /> },
  { name: "Tech Stack", href: "#techstack", icon: <Cpu size={18} /> },
//   { name: "Projects", href: "#projects", icon: <Cpu size={18} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
];

interface NavbarProps {
  show: boolean;
}

export default function Navbar({ show }: NavbarProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.nav 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          // Positioned top-left, horizontal, glass-morphism style
          className="fixed top-6 left-6 z-[100] flex items-center gap-1 p-1.5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl"
        >
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="group flex items-center gap-2 px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <span className="group-hover:text-blue-500 transition-colors">
                {item.icon}
              </span>
              {/* Labels hide on very small mobile screens to keep the top-left clean */}
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] hidden md:block">
                {item.name}
              </span>
            </Link>
          ))}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}