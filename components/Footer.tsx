// "use client";

// export default function Footer() {
//   return (
//     <footer className="relative w-full pt-16 pb-8 z-10" style={{ backgroundColor: "#F5F0E6" }}>
      
//       {/* The Wavy Transition from Cream to Deep Green */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
//         <svg 
//           viewBox="0 0 1440 120" 
//           preserveAspectRatio="none" 
//           className="relative block w-full h-[60px] md:h-[100px]"
//           style={{ fill: "#1F3D2E" }}
//         >
//           <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
//         </svg>
//       </div>

//       {/* The Main Footer Content */}
//       <div 
//         className="relative mx-4 md:mx-12 p-8 md:p-16 z-10"
//         style={{ 
//           backgroundColor: "#1F3D2E", 
//           borderRadius: "40px 40px 20% 20%", // Curved bottom corners
//         }}
//       >
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
//           {/* Column 1: Brand & Mission */}
//           <div className="flex flex-col items-start">
//             <a href="/" className="flex items-center gap-2 text-3xl font-serif font-bold mb-6" style={{ color: "#F5F0E6", textDecoration: "none" }}>
//               <span style={{ color: "#C4704B" }}>✿</span> Miamara
//             </a>
//             <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
//               Beating the stigma around mental health in Uganda. We help people transform, find acceptance, and live flourishing lives.
//             </p>
//             <p className="text-sm" style={{ color: "rgba(245, 240, 230, 0.6)" }}>
//               Mbarara, Uganda
//             </p>
//           </div>

//           {/* Column 2: Quick Links */}
//           <div className="flex flex-col items-start md:items-center">
//             <h4 className="text-lg font-serif font-bold mb-6" style={{ color: "#D9C7A7" }}>
//               Explore
//             </h4>
//             <div className="flex flex-col gap-4">
//               <a href="#about" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Our Story</a>
//               <a href="#services" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Services</a>
//               <a href="#sponsor" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Become a Sponsor</a>
//               <a href="#donate" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Donate</a>
//             </div>
//           </div>

//           {/* Column 3: Contact */}
//           <div className="flex flex-col items-start md:items-end text-left md:text-right">
//             <h4 className="text-lg font-serif font-bold mb-6" style={{ color: "#D9C7A7" }}>
//               Get in Touch
//             </h4>
//             <p className="text-base mb-2" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
//               Ashabahebwa Denise
//             </p>
//             <a href="tel:+256780245548" className="text-base mb-2 transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>
//               +256 780 245 548
//             </a>
//             <a href="mailto:deniseamari77@gmail.com" className="text-base mb-6 transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>
//               deniseamari77@gmail.com
//             </a>
            
//             <a 
//               href="#contact" 
//               className="px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1"
//               style={{ backgroundColor: "#C4704B", color: "#F5F0E6", textDecoration: "none", boxShadow: "0 4px 15px rgba(196, 112, 75, 0.3)" }}
//             >
//               Write a Message
//             </a>
//           </div>

//         </div>

//         {/* Bottom Bar / Copyright */}
//         <div className="max-w-6xl mx-auto mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#D9C7A7]/20">
//           <p className="text-sm" style={{ color: "rgba(245, 240, 230, 0.5)" }}>
//             &copy; <DynamicYear /> Miamara Wellness Centre. All rights reserved.
//           </p>
//           <div className="flex gap-6">
//             <a href="#" className="text-sm transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.5)", textDecoration: "none" }}>Privacy Policy</a>
//             <a href="#" className="text-sm transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.5)", textDecoration: "none" }}>Terms of Service</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// // This tiny component isolates the dynamic date so Next.js doesn't crash
// function DynamicYear() {
//   return <>{new Date().getFullYear()}</>;
// }
"use client";

import { useState, useEffect } from "react";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative w-full pt-16 pb-8 z-10" style={{ backgroundColor: "#F5F0E6" }}>
      
      {/* The Wavy Transition from Cream to Deep Green */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px]"
          style={{ fill: "#1F3D2E" }}
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      {/* The Main Footer Content */}
      <div 
        className="relative mx-4 md:mx-12 p-8 md:p-16 z-10"
        style={{ 
          backgroundColor: "#1F3D2E", 
          borderRadius: "40px 40px 20% 20%", // Curved bottom corners
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1: Brand & Mission */}
          <div className="flex flex-col items-start">
            <a href="/" className="flex items-center gap-2 text-3xl font-serif font-bold mb-6" style={{ color: "#F5F0E6", textDecoration: "none" }}>
              <span style={{ color: "#C4704B" }}>✿</span> Miamara
            </a>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
              Beating the stigma around mental health in Uganda. We help people transform, find acceptance, and live flourishing lives.
            </p>
            <p className="text-sm" style={{ color: "rgba(245, 240, 230, 0.6)" }}>
              Mbarara, Uganda
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-start md:items-center">
            <h4 className="text-lg font-serif font-bold mb-6" style={{ color: "#D9C7A7" }}>
              Explore
            </h4>
            <div className="flex flex-col gap-4">
              <a href="/about" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Our Story</a>
              <a href="/services" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Services</a>
              <a href="/sponsorship" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Become a Sponsor</a>
              <a href="/donate" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Donate</a>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <h4 className="text-lg font-serif font-bold mb-6" style={{ color: "#D9C7A7" }}>
              Get in Touch
            </h4>
            <p className="text-base mb-2" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
              Ashabahebwa Denise
            </p>
            <a href="tel:+256780245548" className="text-base mb-2 transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>
              +256 780 245 548
            </a>
            <a href="mailto:deniseamari77@gmail.com" className="text-base mb-6 transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>
              deniseamari77@gmail.com
            </a>
            
            <a 
              href="/contact" 
              className="px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1"
              style={{ backgroundColor: "#C4704B", color: "#F5F0E6", textDecoration: "none", boxShadow: "0 4px 15px rgba(196, 112, 75, 0.3)" }}
            >
              Write a Message
            </a>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="max-w-6xl mx-auto mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#D9C7A7]/20">
          <p className="text-sm" style={{ color: "rgba(245, 240, 230, 0.5)" }}>
            {/* Here is the dynamic year fix */}
            &copy; {year || 2024} Miamara Wellness Centre. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-sm transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.5)", textDecoration: "none" }}>Privacy Policy</a>
            <a href="/terms" className="text-sm transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.5)", textDecoration: "none" }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}