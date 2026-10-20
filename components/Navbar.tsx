// "use client";

// import { useState } from "react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header 
//       className="fixed top-0 left-0 w-full z-50 bg-[#F5F0E6]/95 border-b"
//       style={{ borderColor: "rgba(31, 61, 46, 0.1)", backdropFilter: "blur(8px)" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex justify-between items-center">
        
//         {/* Logo */}
//         <a href="/" className="flex items-center gap-2 text-3xl font-serif font-bold" style={{ color: "#1F3D2E", textDecoration: "none" }}>
//           <span style={{ color: "#C4704B" }}>✿</span> Miamara
//         </a>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex gap-10 items-center">
//           <a href="/about" className="text-base font-medium hover:text-[#C4704B] transition-colors" style={{ color: "#1F3D2E", textDecoration: "none" }}>About</a>
//           <a href="#services" className="text-base font-medium hover:text-[#C4704B] transition-colors" style={{ color: "#1F3D2E", textDecoration: "none" }}>Services</a>
//           <a href="#sponsor" className="text-base font-medium hover:text-[#C4704B] transition-colors" style={{ color: "#1F3D2E", textDecoration: "none" }}>Sponsorship</a>
          
//           <a href="#donate" 
//              className="px-8 py-3 rounded-full text-base font-medium transition-transform hover:-translate-y-0.5" 
//              style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", textDecoration: "none", boxShadow: "0 4px 14px rgba(31, 61, 46, 0.2)" }}>
//             Donate
//           </a>
//         </div>

//         {/* Mobile Hamburger */}
//         <button className="md:hidden block p-2" onClick={() => setIsOpen(!isOpen)} style={{ color: "#1F3D2E" }}>
//           <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             {isOpen ? (
//               <path d="M6 18L18 6M6 6l12 12" />
//             ) : (
//               <path d="M4 6h16M4 12h16M4 18h16" />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden w-full absolute top-24 left-0 bg-[#F5F0E6] border-b flex flex-col px-6 py-6 gap-6 shadow-xl"
//              style={{ borderColor: "rgba(31, 61, 46, 0.1)" }}>
//           <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium" style={{ color: "#1F3D2E", textDecoration: "none" }}>About</a>
//           <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium" style={{ color: "#1F3D2E", textDecoration: "none" }}>Services</a>
//           <a href="#sponsor" onClick={() => setIsOpen(false)} className="text-lg font-medium" style={{ color: "#1F3D2E", textDecoration: "none" }}>Sponsorship</a>
//           <a href="#donate" onClick={() => setIsOpen(false)} 
//              className="text-center px-6 py-4 rounded-full font-medium mt-2" 
//              style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", textDecoration: "none" }}>
//             Donate
//           </a>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link"; // We use Next.js Link for internal page navigation

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header 
      className="fixed top-0 left-0 w-full z-50 bg-[#F5F0E6]/95 border-b"
      style={{ borderColor: "rgba(31, 61, 46, 0.1)", backdropFilter: "blur(8px)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-24 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-3xl font-serif font-bold" style={{ color: "#1F3D2E", textDecoration: "none" }}>
          <span style={{ color: "#C4704B" }}>✿</span> Miamara
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/about" className="text-base font-medium hover:text-[#C4704B] transition-colors" style={{ color: "#1F3D2E", textDecoration: "none" }}>About</Link>
          <Link href="/services" className="text-base font-medium hover:text-[#C4704B] transition-colors" style={{ color: "#1F3D2E", textDecoration: "none" }}>Services</Link>
          <Link href="/sponsorship" className="text-base font-medium hover:text-[#C4704B] transition-colors" style={{ color: "#1F3D2E", textDecoration: "none" }}>Sponsorship</Link>
          
          <Link href="/donate" 
             className="px-8 py-3 rounded-full text-base font-medium transition-transform hover:-translate-y-0.5" 
             style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", textDecoration: "none", boxShadow: "0 4px 14px rgba(31, 61, 46, 0.2)" }}>
            Donate
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden block p-2" onClick={() => setIsOpen(!isOpen)} style={{ color: "#1F3D2E" }}>
          <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full absolute top-24 left-0 bg-[#F5F0E6] border-b flex flex-col px-6 py-6 gap-6 shadow-xl"
             style={{ borderColor: "rgba(31, 61, 46, 0.1)" }}>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium" style={{ color: "#1F3D2E", textDecoration: "none" }}>About</Link>
          <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium" style={{ color: "#1F3D2E", textDecoration: "none" }}>Services</Link>
          <Link href="/sponsorship" onClick={() => setIsOpen(false)} className="text-lg font-medium" style={{ color: "#1F3D2E", textDecoration: "none" }}>Sponsorship</Link>
          <Link href="/donate" onClick={() => setIsOpen(false)} 
             className="text-center px-6 py-4 rounded-full font-medium mt-2" 
             style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", textDecoration: "none" }}>
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}