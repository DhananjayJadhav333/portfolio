"use client";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import Loader from "@/components/Loader";
import Hero from "@/components/Hero"; // The original clean Hero
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Matches your existing loader duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Navbar stays hidden until isLoading is false */}
      <Navbar show={!isLoading} />

      <main className="relative">
        {isLoading ? (
          <div className="fixed inset-0 z-[150] flex items-center justify-center bg-[#0a0a0a]">
            {/* Replace this with your actual Loader component */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-blue-500 font-mono tracking-widest"
            >
              <Loader finishLoading={function (): void {  } } />
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <section id="home">
              <Hero />
            </section>

            
              <TechStack />
            
            
            <Experience />
            <Education />
            <Footer />

          </motion.div>
        )}
      </main>
    </>
  );
}