// export default function ImpactStats() {
//   const stats = [
//     { number: "24/7", label: "Community Support", desc: "Walking beside you every step of the way." },
//     { number: "100%", label: "Confidential", desc: "A safe, stigma-free space for your story." },
//     { number: "2x", label: "Monthly Meetups", desc: "In-person sponsor & member gatherings." },
//     { number: "1", label: "Shared Mission", desc: "To help you rise, be accepted, and thrive." },
//   ];

//   return (
//     <section className="relative w-full py-24 z-20 overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      
//       {/* Wavy top border to transition from the Founder's Story */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
//         <svg 
//           viewBox="0 0 1440 120" 
//           preserveAspectRatio="none" 
//           className="relative block w-full h-[60px] md:h-[100px]"
//           style={{ fill: "#1F3D2E" }} // Matches Founder Story background
//         >
//           <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
//         </svg>
//       </div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10 pt-12">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center scroll-rotate">
          
//           {stats.map((stat, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <span 
//                 className="text-4xl md:text-6xl font-serif mb-2" 
//                 style={{ color: "#C4704B" }} // Terracotta clay color
//               >
//                 {stat.number}
//               </span>
//               <span 
//                 className="text-lg md:text-xl font-bold mb-2" 
//                 style={{ color: "#1F3D2E" }}
//               >
//                 {stat.label}
//               </span>
//               <span 
//                 className="text-sm md:text-base leading-relaxed" 
//                 style={{ color: "rgba(43, 43, 43, 0.7)" }}
//               >
//                 {stat.desc}
//               </span>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";

export default function ImpactStats() {
  const stats = [
    { target: 24, suffix: "/7", label: "Community Support", desc: "Walking beside you every step of the way." },
    { target: 100, suffix: "%", label: "Confidential", desc: "A safe, stigma-free space for your story." },
    { target: 2, suffix: "x", label: "Monthly Meetups", desc: "In-person sponsor & member gatherings." },
    { target: 1, suffix: "", label: "Shared Mission", desc: "To help you rise, be accepted, and thrive." },
  ];

  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // This observer watches if the section is on screen
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          // Animate the numbers counting up
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.target;
            const duration = 2000; // 2 seconds
            const incrementTime = 30; 
            const step = end / (duration / incrementTime);

            const timer = setInterval(() => {
              start += step;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = Math.ceil(start);
                return newCounts;
              });
            }, incrementTime);
          });
        }
      },
      { threshold: 0.3 } // Triggers when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative w-full py-24 z-20 overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      
      {/* Wavy top border to transition from the Founder's Story */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[60px] md:h-[100px]"
          style={{ fill: "#1F3D2E" }}
        >
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center scroll-rotate">
          
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center group cursor-default">
              {/* The Numbers counting up */}
              <span 
                className="text-4xl md:text-6xl font-serif mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2" 
                style={{ color: "#C4704B" }}
              >
                {counts[index]}{stat.suffix}
              </span>
              
              <span 
                className="text-lg md:text-xl font-bold mb-2" 
                style={{ color: "#1F3D2E" }}
              >
                {stat.label}
              </span>
              
              <span 
                className="text-sm md:text-base leading-relaxed" 
                style={{ color: "rgba(43, 43, 43, 0.7)" }}
              >
                {stat.desc}
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}