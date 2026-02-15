import "./globals.css";
import BackgroundCells from "@/components/BackgroundCells";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" style={{ background: '#020617' }}>
      <body className="antialiased relative" style={{ background: 'transparent' }}>
        {/* The Neural Network Canvas */}
        <div className="fixed inset-0 z-0">
           <BackgroundCells />
        </div>
        
        {/* The Page Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}