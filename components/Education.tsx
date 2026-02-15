"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, School } from "lucide-react";

const education = [
  {
    degree: "PG - Diploma in Advance Computing",
    institution: "Centre for Development of Advanced Computing (C-DAC), Pune",
    year: "2022",
    icon: <Award className="text-blue-500" />,
  },
  {
    degree: "BE (Computer Engineering)",
    institution: "Vidyavardhini's College of Engineering And Technology, Mumbai University",
    year: "2018",
    icon: <GraduationCap className="text-emerald-500" />,
  },
  {
    degree: "Secondary & Higher Secondary Education",
    institution: "Jawahar Navodaya Vidyalaya (JNV), Bhusawal",
    year: "2013",
    icon: <School className="text-orange-400" />,
  },
];

export default function Education() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Educational Background
          </h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">Academic Credentials.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group flex flex-col min-h-[360px]"
            >
              <div className="mb-8 p-4 w-fit rounded-2xl bg-black/40 group-hover:scale-110 transition-transform border border-white/5">
                {edu.icon}
              </div>
              
              <div className="flex-grow">
                <p className="text-blue-400 font-mono text-xs mb-3 tracking-widest uppercase">
                  {edu.year}
                </p>
                <h4 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-blue-400 transition-colors">
                  {edu.degree}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {edu.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}