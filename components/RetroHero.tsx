"use client";
import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, PresentationControls, Float, Html } from "@react-three/drei";
import { motion } from "framer-motion";

// The Terminal Screen Content
const ScreenContent = () => {
  const [text, setText] = useState("");
  const fullText = "> Initializing Dhananjay_OS...\n> Loading NetSuite Modules...\n> System Ready.\n\nUser: ~$ ";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[500px] h-[320px] bg-[#1a1a1a] p-6 font-mono text-yellow-500 overflow-hidden relative select-none">
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-20 h-20 border-2 border-yellow-500/50 rounded-lg overflow-hidden grayscale contrast-125 brightness-75 bg-yellow-900/20">
             {/* This replicates the dithered photo look */}
            <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover mix-blend-screen opacity-80" />
          </div>
          <div>
            <p className="text-xs opacity-70">Hi there,</p>
            <p className="text-2xl font-bold bg-yellow-500 text-black px-1">I'M DHANANJAY J.</p>
          </div>
        </div>
        
        <div className="space-y-1">
          <p className="flex items-center gap-2"><span className="text-white">•</span> NetSuite Developer</p>
          <p className="flex items-center gap-2"><span className="text-white">•</span> Full-Stack Engineer</p>
        </div>

        <pre className="mt-6 text-[10px] leading-tight whitespace-pre-wrap lowercase opacity-80">
          {text}
          <span className="animate-pulse">_</span>
        </pre>
      </div>
    </div>
  );
};

export default function RetroHero() {
  return (
    <section className="h-screen w-full bg-[#e8e2d9] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Text (like the video) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none">
        <h1 className="text-[20vw] font-bold leading-none">DHANANJAY</h1>
      </div>

      <div className="w-full h-[70vh]">
        <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          
          <PresentationControls
            global
            config={{ mass: 2, tension: 500 }}
            snap={{ mass: 4, tension: 1500 }}
            rotation={[0, 0.3, 0]}
            polar={[-0.3, 0.3]}
            azimuth={[-1, 1]}
          >
            <Float rotationIntensity={1.5}>
              <group rotation={[0, -0.4, 0]}>
                {/* 3D Laptop Body Mockup */}
                <mesh>
                  <boxGeometry args={[2.5, 0.1, 1.8]} />
                  <meshStandardMaterial color="#333" />
                </mesh>
                <mesh position={[0, 0.8, -0.9]} rotation={[-0.2, 0, 0]}>
                  <boxGeometry args={[2.5, 1.7, 0.1]} />
                  <meshStandardMaterial color="#222" />
                  
                  {/* The Screen Content */}
                  <Html
                    transform
                    distanceFactor={1.14}
                    position={[0, 0, 0.06]}
                    occlude
                  >
                    <ScreenContent />
                  </Html>
                </mesh>
              </group>
            </Float>
          </PresentationControls>
          
          <ContactShadows position={[0, -1.4, 0]} opacity={0.4} scale={10} blur={2.4} />
        </Canvas>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mt-8 z-20"
      >
        <p className="font-mono text-sm text-gray-500 uppercase tracking-widest">
          Scroll to explore filesystem
        </p>
      </motion.div>
    </section>
  );
}