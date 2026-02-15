"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer", // 
    company: "Centium Consulting, Pune", // 
    period: "Feb 2025 - Present", // 
    details: [
      "Spearheaded complex NetSuite integrations with third-party systems like SFTP and Amazon S3.", // [cite: 36, 37]
      "Successfully managed and resolved hundred plus NetSuite customer cases, providing rapid, scalable technical support.", // [cite: 33, 34]
      "Simultaneously managed and delivered end-to-end NetSuite customizations for a diverse portfolio of clients, ensuring high-quality deployments under tight deadlines." // [cite: 28, 29]
    ]
  },
  {
    role: "Associate Software Engineer", // [cite: 21]
    company: "Centium Consulting, Pune", // 
    period: "Dec 2022 - Jan 2025", // [cite: 21]
    details: [
      "Advanced Manufacturing Focused NetSuite Customizations: Automating processes and enhancing system functionality.", // [cite: 22, 23]
      "Executing advanced customizations for diverse client projects in Healthcare and Manufacturing.", // [cite: 27]
      "Developing internal projects/products and maintaining Suite Bundles/SDFs for seamless deployment.", // [cite: 30, 32]
      "Created the entire stack of Advanced PDF Templates for client projects, ensuring branded transaction documents.", // [cite: 28, 29]
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-24 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-blue-500 font-mono text-sm tracking-[0.2em] uppercase mb-4">
            Professional Track Record
          </h2>
          <h3 className="text-4xl font-bold text-white tracking-tight">
            Experience.
          </h3>
        </div>

        <div className="space-y-20">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/10"
            >
              {/* Timeline Bullet */}
              <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h4>
                  <p className="text-blue-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-slate-500 font-mono text-sm mt-2 md:mt-0 px-3 py-1 bg-white/5 rounded-full">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-4">
                {exp.details.map((detail, i) => (
                  <li key={i} className="text-slate-400 leading-relaxed flex gap-3">
                    <span className="text-blue-500 mt-1.5 shrink-0">•</span>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}