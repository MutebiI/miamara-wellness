
// // "use client";

// // import { useState, useEffect } from "react";
// // import Link from "next/link"; // Added Link for faster page transitions

// // export default function Footer() {
// //   const [year, setYear] = useState<number | null>(null);

// //   useEffect(() => {
// //     setYear(new Date().getFullYear());
// //   }, []);

// //   return (
// //     <footer className="relative w-full pt-16 pb-8 z-10" style={{ backgroundColor: "#F5F0E6" }}>
      
// //       {/* The Wavy Transition from Cream to Deep Green */}
// //       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
// //         <svg 
// //           viewBox="0 0 1440 120" 
// //           preserveAspectRatio="none" 
// //           className="relative block w-full h-[60px] md:h-[100px]"
// //           style={{ fill: "#1F3D2E" }}
// //         >
// //           <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
// //         </svg>
// //       </div>

// //       {/* The Main Footer Content */}
// //       <div 
// //         className="relative mx-4 md:mx-12 p-8 md:p-16 z-10"
// //         style={{ 
// //           backgroundColor: "#1F3D2E", 
// //           borderRadius: "40px 40px 20% 20%", // Curved bottom corners
// //         }}
// //       >
// //         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
// //           {/* Column 1: Brand & Mission */}
// //           <div className="flex flex-col items-start">
// //             <Link href="/" className="flex items-center gap-2 text-3xl font-serif font-bold mb-6" style={{ color: "#F5F0E6", textDecoration: "none" }}>
// //               <span style={{ color: "#C4704B" }}>✿</span> Miamara
// //             </Link>
// //             <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
// //               Beating the stigma around mental health in Uganda. We help people transform, find acceptance, and live flourishing lives.
// //             </p>
// //             <p className="text-sm" style={{ color: "rgba(245, 240, 230, 0.6)" }}>
// //               Mbarara, Uganda
// //             </p>
// //           </div>

// //           {/* Column 2: Quick Links */}
// //           <div className="flex flex-col items-start md:items-center">
// //             <h4 className="text-lg font-serif font-bold mb-6" style={{ color: "#D9C7A7" }}>
// //               Explore
// //             </h4>
// //             <div className="flex flex-col gap-4">
// //               <Link href="/about" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Our Story</Link>
// //               <Link href="/services" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Services</Link>
// //               <Link href="/sponsorship" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Become a Sponsor</Link>
// //               <Link href="/donate" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Donate</Link>
// //             </div>
// //           </div>

// //           {/* Column 3: Contact */}
// //           <div className="flex flex-col items-start md:items-end text-left md:text-right">
// //             <h4 className="text-lg font-serif font-bold mb-6" style={{ color: "#D9C7A7" }}>
// //               Get in Touch
// //             </h4>
// //             <p className="text-base mb-2" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
// //               Ashabahebwa Denise
// //             </p>
// //             <a href="tel:+256780245548" className="text-base mb-2 transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>
// //               +256 780 245 548
// //             </a>
// //             <a href="mailto:deniseamari77@gmail.com" className="text-base mb-6 transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>
// //               deniseamari77@gmail.com
// //             </a>
            
// //             <Link 
// //               href="/contact" 
// //               className="px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1"
// //               style={{ backgroundColor: "#C4704B", color: "#F5F0E6", textDecoration: "none", boxShadow: "0 4px 15px rgba(196, 112, 75, 0.3)" }}
// //             >
// //               Write a Message
// //             </Link>
// //           </div>

// //         </div>

// //         {/* Bottom Bar / Copyright */}
// //         <div className="max-w-6xl mx-auto mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#D9C7A7]/20">
// //           <p className="text-sm" style={{ color: "rgba(245, 240, 230, 0.5)" }}>
// //             &copy; {year || 2024} Miamara Wellness Centre. All rights reserved.
// //           </p>
// //           <div className="flex gap-6">
// //             {/* Updated Links to use Next.js Link */}
// //             <Link href="/privacy" className="text-sm transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.5)", textDecoration: "none" }}>Privacy Policy</Link>
// //             <Link href="/terms" className="text-sm transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.5)", textDecoration: "none" }}>Terms of Service</Link>
// //           </div>
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";

// export default function Footer() {
//   const [year, setYear] = useState<number | null>(null);

//   useEffect(() => {
//     setYear(new Date().getFullYear());
//   }, []);

//   return (
//     <footer className="relative w-full pt-16 pb-12 z-10" style={{ backgroundColor: "#F5F0E6" }}>
      
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
//           // REMOVED the bottom curve so it extends fully to the bottom
//           borderRadius: "40px 40px 0 0", 
//         }}
//       >
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
//           {/* Column 1: Brand & Mission */}
//           <div className="flex flex-col items-start">
//             <Link href="/" className="flex items-center gap-2 text-3xl font-serif font-bold mb-6" style={{ color: "#F5F0E6", textDecoration: "none" }}>
//               <span style={{ color: "#C4704B" }}>✿</span> Miamara
//             </Link>
//             <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
//               Beating the stigma around mental health in Uganda. We help people transform, find acceptance, and live flourishing lives.
//             </p>
//             <div className="flex items-center gap-2 mb-2" style={{ color: "rgba(245, 240, 230, 0.6)" }}>
//               <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
//               <p className="text-sm">Mbarara, Uganda</p>
//             </div>
//           </div>

//           {/* Column 2: Quick Links & Socials */}
//           <div className="flex flex-col items-start md:items-center">
//             <div>
//               <h4 className="text-lg font-serif font-bold mb-6" style={{ color: "#D9C7A7" }}>
//                 Explore
//               </h4>
//               <div className="flex flex-col gap-4 mb-8">
//                 <Link href="/about" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Our Story</Link>
//                 <Link href="/services" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Services</Link>
//                 <Link href="/sponsorship" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Become a Sponsor</Link>
//                 <Link href="/donate" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Donate</Link>
//               </div>
//             </div>

//             {/* Social Media Icons */}
//             <div className="flex gap-4">
//               <a href="#" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-1 hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
//                 <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-1 hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
//                 <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-1 hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
//                 <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
//               </a>
//               <a href="#" target="_blank" rel="noopener noreferrer" className="transition-transform hover:-translate-y-1 hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
//                 <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
//               </a>
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
            
//             <a href="tel:+256780245548" className="flex items-center gap-2 text-base mb-3 transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>
//               <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
//               +256 780 245 548
//             </a>
            
//             <a href="mailto:deniseamari77@gmail.com" className="flex items-center gap-2 text-base mb-6 transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>
//               <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
//               deniseamari77@gmail.com
//             </a>
            
//             <Link 
//               href="/contact" 
//               className="px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1"
//               style={{ backgroundColor: "#C4704B", color: "#F5F0E6", textDecoration: "none", boxShadow: "0 4px 15px rgba(196, 112, 75, 0.3)" }}
//             >
//               Write a Message
//             </Link>
//           </div>

//         </div>

//         {/* Bottom Bar / Copyright */}
//         <div className="max-w-6xl mx-auto mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#D9C7A7]/20">
//           <p className="text-sm" style={{ color: "rgba(245, 240, 230, 0.5)" }}>
//             &copy; {year || 2024} Miamara Wellness Centre. All rights reserved.
//           </p>
//           <div className="flex gap-6">
//             <Link href="/privacy" className="text-sm transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.5)", textDecoration: "none" }}>Privacy Policy</Link>
//             <Link href="/terms" className="text-sm transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.5)", textDecoration: "none" }}>Terms of Service</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative w-full pt-16 z-10" style={{ backgroundColor: "#F5F0E6" }}>
      
      {/* The Wavy Transition from Cream to Deep Green - KEPT INTACT */}
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

      {/* 
        The Main Footer Content. 
        Removed the mx-4 and md:mx-12 so it stretches edge-to-edge. 
      */}
      <div 
        className="relative w-full pt-12 pb-8 px-6 md:px-12 z-10"
        style={{ 
          backgroundColor: "#1F3D2E", 
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          
          {/* Column 1: Brand & Mission */}
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center gap-2 text-3xl font-serif font-bold mb-6" style={{ color: "#F5F0E6", textDecoration: "none" }}>
              <span style={{ color: "#C4704B" }}>✿</span> Miamara
            </Link>
            <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
              Beating the stigma around mental health in Uganda. We help people transform, find acceptance, and live flourishing lives.
            </p>
            
            {/* Refined Location Badge */}
            <div 
              className="flex items-center gap-3 px-4 py-2 rounded-full"
              style={{ backgroundColor: "rgba(217, 199, 167, 0.1)", border: "1px solid rgba(217, 199, 167, 0.2)" }}
            >
              <svg width="18" height="18" fill="none" stroke="#D9C7A7" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <p className="text-sm font-medium" style={{ color: "#D9C7A7" }}>Mbarara, Uganda</p>
            </div>
          </div>

          {/* Column 2: Quick Links & Socials */}
          <div className="flex flex-col items-start md:items-center">
            <div className="text-left md:text-center">
              <h4 className="text-lg font-serif font-bold mb-6" style={{ color: "#D9C7A7" }}>
                Explore
              </h4>
              <div className="flex flex-col gap-4 mb-8">
                <Link href="/about" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Our Story</Link>
                <Link href="/services" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Services</Link>
                <Link href="/sponsorship" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Become a Sponsor</Link>
                <Link href="/donate" className="text-base transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.8)", textDecoration: "none" }}>Donate</Link>
              </div>
            </div>

            {/* Social Media Icons (Soft circular backgrounds) */}
            <div className="flex gap-4">
              {[ 
                { name: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { name: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all hover:-translate-y-1 hover:bg-[#C4704B] group"
                  style={{ backgroundColor: "rgba(217, 199, 167, 0.1)", border: "1px solid rgba(217, 199, 167, 0.2)" }}
                >
                  <svg width="18" height="18" fill="#D9C7A7" viewBox="0 0 24 24" className="group-hover:fill-white transition-colors">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right">
            <h4 className="text-lg font-serif font-bold mb-6" style={{ color: "#D9C7A7" }}>
              Get in Touch
            </h4>
            <p className="text-base mb-6" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
              Ashabahebwa Denise
            </p>
            
            {/* Refined Contact Links */}
            <div className="flex flex-col gap-4 mb-8 md:items-end">
              <a href="tel:+256780245548" className="flex items-center gap-3 transition-colors group" style={{ textDecoration: "none" }}>
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-[#C4704B] transition-colors" style={{ backgroundColor: "rgba(217, 199, 167, 0.1)", border: "1px solid rgba(217, 199, 167, 0.2)" }}>
                  <svg width="14" height="14" fill="none" stroke="#D9C7A7" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <span className="text-base group-hover:text-[#C4704B] transition-colors" style={{ color: "rgba(245, 240, 230, 0.8)" }}>+256 780 245 548</span>
              </a>
              
              <a href="mailto:deniseamari77@gmail.com" className="flex items-center gap-3 transition-colors group" style={{ textDecoration: "none" }}>
                <div className="flex items-center justify-center w-8 h-8 rounded-full group-hover:bg-[#C4704B] transition-colors" style={{ backgroundColor: "rgba(217, 199, 167, 0.1)", border: "1px solid rgba(217, 199, 167, 0.2)" }}>
                  <svg width="14" height="14" fill="none" stroke="#D9C7A7" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <span className="text-base group-hover:text-[#C4704B] transition-colors" style={{ color: "rgba(245, 240, 230, 0.8)" }}>deniseamari77@gmail.com</span>
              </a>
            </div>
            
            <Link 
              href="/contact" 
              className="px-6 py-3 rounded-full font-medium transition-all hover:-translate-y-1"
              style={{ backgroundColor: "#C4704B", color: "#F5F0E6", textDecoration: "none", boxShadow: "0 4px 15px rgba(196, 112, 75, 0.3)" }}
            >
              Write a Message
            </Link>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="max-w-6xl mx-auto mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#D9C7A7]/20">
          <p className="text-sm" style={{ color: "rgba(245, 240, 230, 0.5)" }}>
            &copy; {year || 2024} Miamara Wellness Centre. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.5)", textDecoration: "none" }}>Privacy Policy</Link>
            <Link href="/terms" className="text-sm transition-colors hover:text-[#C4704B]" style={{ color: "rgba(245, 240, 230, 0.5)", textDecoration: "none" }}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}