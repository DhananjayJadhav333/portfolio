import "./globals.css";
import BackgroundCells from "@/components/BackgroundCells";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ background: 'none' }}>
      <body className="antialiased" style={{ background: 'none' }}>
        {/* Step 1: Background and Animation */}
        <BackgroundCells /> 
        {/* Navbar added here */}
        <Navbar show={true} />
        
        {/* Step 2: Content (Must be transparent to see through to the canvas) */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}