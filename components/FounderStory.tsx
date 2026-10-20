// import Image from "next/image";

// export default function FounderStory() {
//   return (
//     <div className="relative w-full" style={{ backgroundColor: "#F5F0E6" }}>
      
//       {/* The Wavy Shape Transition */}
//       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-0">
//         <svg 
//           viewBox="0 0 1440 120" 
//           preserveAspectRatio="none" 
//           className="relative block w-full h-[60px] md:h-[120px]"
//           style={{ fill: "#1F3D2E" }}
//         >
//           <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
//         </svg>
//       </div>

//       <section 
//         className="relative px-6 pt-32 pb-24 md:pt-48 md:pb-32 z-10" 
//         style={{ backgroundColor: "#1F3D2E" }}
//       >
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
//           {/* LEFT SIDE: The Text */}
//           <div className="scroll-rotate">
//             <h2 
//               className="text-4xl md:text-5xl font-serif mb-8 md:mb-10" 
//               style={{ color: "#D9C7A7" }}
//             >
//               Why Miamara exists.
//             </h2>
            
//             <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: "#F5F0E6" }}>
//               <p>
//                 "I have walked a hard road. There were times when my life came to a pause, again and again, and each time I tried to get back up. I did not have much support, and the help I truly wanted was hard to reach."
//               </p>
//               <p>
//                 "I wished someone had walked beside me, helped me keep steady progress, and made sure I did not slide back. That is why I built Miamara."
//               </p>
//               <p>
//                 "We follow the progress of everyone who chooses to work with us and stay with them on their path, as best we can. This is what I wanted for myself, and I want to share my growth strategy so that others can rise, be accepted, and become all they can be."
//               </p>
//             </div>

//             <div className="mt-10 md:mt-12 flex items-center gap-4">
//               <div className="w-12 h-1 rounded-full" style={{ backgroundColor: "#C4704B" }}></div>
//               <span className="text-lg md:text-xl italic font-serif" style={{ color: "#D9C7A7" }}>
//                 Ashabahebwa Denise, Founder
//               </span>
//             </div>
//           </div>

//           {/* RIGHT SIDE: The Human Photo */}
//           <div className="flex justify-center md:justify-end scroll-rotate">
//             <div 
//               className="w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] overflow-hidden shadow-2xl relative"
//               style={{ 
//                 borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
//                 border: "6px solid rgba(245, 240, 230, 0.1)" 
//               }}
//             >
//               <Image 
//                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop" 
//                 alt="Ashabahebwa Denise, Founder of Miamara" 
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//             </div>
//           </div>

//         </div>
//       </section>
//     </div>
//   );
// }

import Image from "next/image";

export default function FounderStory() {
  return (
    // We change the background of the wrapper to Cream
    <div className="relative w-full py-12 md:py-24" style={{ backgroundColor: "#F5F0E6" }}>
      
      {/* 
        The entire section is now a curved, organic shape.
        We use a warm Kraft/Clay color instead of the harsh green.
      */}
      <section 
        className="relative mx-4 md:mx-12 px-6 py-20 md:py-32 z-10"
        style={{ 
          backgroundColor: "#D9C7A7", // Warm Kraft/Sand color
          // This creates the massive organic curves on all 4 corners
          borderRadius: "20% 80% 30% 70% / 70% 30% 80% 20%",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* LEFT SIDE: The Text */}
          <div className="scroll-rotate">
            <h2 
              className="text-4xl md:text-5xl font-serif mb-8 md:mb-10" 
              style={{ color: "#1F3D2E" }} // Dark green text for contrast against the sand color
            >
              Why Miamara exists.
            </h2>
            
            <div className="space-y-6 text-base md:text-lg leading-relaxed" style={{ color: "#2B2B2B" }}>
              <p>
                "I have walked a hard road. There were times when my life came to a pause, again and again, and each time I tried to get back up. I did not have much support, and the help I truly wanted was hard to reach."
              </p>
              <p>
                "I wished someone had walked beside me, helped me keep steady progress, and made sure I did not slide back. That is why I built Miamara."
              </p>
              <p>
                "We follow the progress of everyone who chooses to work with us and stay with them on their path, as best we can. This is what I wanted for myself, and I want to share my growth strategy so that others can rise, be accepted, and become all they can be."
              </p>
            </div>

            <div className="mt-10 md:mt-12 flex items-center gap-4">
              <div className="w-12 h-1 rounded-full" style={{ backgroundColor: "#C4704B" }}></div>
              <span className="text-lg md:text-xl italic font-serif" style={{ color: "#1F3D2E" }}>
                Ashabahebwa Denise, Founder
              </span>
            </div>
          </div>

          {/* RIGHT SIDE: The Human Photo */}
          <div className="flex justify-center md:justify-end scroll-rotate">
            <div 
              className="w-full max-w-[320px] md:max-w-[400px] aspect-[4/5] overflow-hidden shadow-2xl relative"
              style={{ 
                borderRadius: "50% 50% 30% 70% / 40% 60% 40% 60%",
                border: "8px solid #F5F0E6" // Cream border to make it pop
              }}
            >
                            <Image 
                src="/images/denise.jpg" 
                alt="Ashabahebwa Denise, Founder of Miamara" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}