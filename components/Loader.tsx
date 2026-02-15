"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ finishLoading }: { finishLoading: () => void }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(finishLoading, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-[99] flex flex-col items-center justify-center font-mono"
    >
      <div className="mb-8 text-center">
        <motion.h2 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-blue-500 text-sm tracking-[0.3em] uppercase mb-4"
        >
          Initializing Portfolio v3.0
        </motion.h2>
        
        <div className="w-64 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6]"
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
          />
        </div>
      </div>

      <div className="text-[10px] text-slate-500 space-y-1">
        <p>{percent > 20 ? "> Loading SuiteScript 2.1 Modules... OK" : "> Booting..."}</p>
        <p>{percent > 50 ? "> Establishing MongoDB Connection... OK" : ""}</p>
        <p>{percent > 80 ? "> Finalizing UI/UX Engine... OK" : ""}</p>
      </div>

      <span className="absolute bottom-10 text-blue-500/50 text-xs">
        {percent}%
      </span>
    </motion.div>
  );
}