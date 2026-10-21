
// export default function Hero() {
//   return (
//     <section className="relative flex flex-col justify-center min-h-[100dvh] px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
      
//       {/* The background breathing blob */}
//       <div 
//         className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[45vw] md:h-[45vw] max-w-[650px] max-h-[650px] -z-10 animate-levitate"
//         style={{ 
//           backgroundColor: "rgba(217, 199, 167, 0.4)", 
//           borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
//           filter: "blur(50px)",
//           animationDuration: "10s" 
//         }}
//       ></div>

//       <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        
//         {/* LEFT SIDE: Text Column - Now moving ONLY slightly up and down */}
//         <div className="relative z-10 text-center md:text-left order-2 md:order-1 animate-text-breathe">
//           <div className="hover-3d">
//             <span 
//               className="font-bold tracking-[0.2em] uppercase text-xs md:text-sm block mb-6"
//               style={{ color: "#C4704B" }}
//             >
//               Miamara Wellness Centre
//             </span>
            
//             <h1 
//               className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6"
//               style={{ color: "#1F3D2E" }}
//             >
//               You are not alone. <br />
//               <span className="italic" style={{ color: "#C4704B" }}>
//                 Let us walk beside you.
//               </span>
//             </h1>
            
//             <p 
//               className="text-base md:text-lg max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed"
//               style={{ color: "rgba(43, 43, 43, 0.8)" }}
//             >
//               We beat the stigma around mental health in Uganda. 
//               Through professional care and community sponsorship, we help people transform, 
//               find acceptance, and live flourishing lives.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
//               <a 
//                 href="#get-help" 
//                 className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium transition-all hover:-translate-y-1 text-center"
//                 style={{ 
//                   backgroundColor: "#1F3D2E", 
//                   color: "#F5F0E6", 
//                   textDecoration: "none",
//                   boxShadow: "0 10px 25px -5px rgba(31, 61, 46, 0.3)"
//                 }}
//               >
//                 I Need Help
//               </a>
              
//               <a 
//                 href="#sponsor" 
//                 className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium transition-all hover:-translate-y-1 text-center"
//                 style={{ 
//                   backgroundColor: "transparent", 
//                   color: "#1F3D2E", 
//                   border: "2px solid #1F3D2E", 
//                   textDecoration: "none" 
//                 }}
//               >
//                 Become a Sponsor
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE: Image Column - Levitating and Tiltable */}
//         <div className="relative z-10 order-1 md:order-2 flex justify-center w-full animate-levitate">
//           <div className="hover-3d w-full flex justify-center">
//             <div 
//               className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] aspect-[4/5] overflow-hidden shadow-2xl relative mx-auto"
//               style={{ 
//                 borderRadius: "60% 40% 50% 50% / 40% 50% 60% 50%",
//                 border: "8px solid #F5F0E6"
//               }}
//             >
//               <img 
//                 src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
//                 alt="A peaceful, warm space for healing" 
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-[#1F3D2E] mix-blend-multiply opacity-10"></div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex flex-col justify-center min-h-[100dvh] px-6 md:px-12 lg:px-20 pt-32 pb-20 overflow-hidden">
      
      {/* The background breathing blob */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[45vw] md:h-[45vw] max-w-[650px] max-h-[650px] -z-10 animate-levitate"
        style={{ 
          backgroundColor: "rgba(217, 199, 167, 0.4)", 
          borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
          filter: "blur(50px)",
          animationDuration: "10s" 
        }}
      ></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">
        
        {/* LEFT SIDE: Text Column */}
        <div className="relative z-10 text-center md:text-left order-2 md:order-1 animate-text-breathe">
          <div className="hover-3d">
            <span 
              className="font-bold tracking-[0.2em] uppercase text-xs md:text-sm block mb-6"
              style={{ color: "#C4704B" }}
            >
              Miamara Wellness Centre
            </span>
            
            <h1 
              className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6"
              style={{ color: "#1F3D2E" }}
            >
              You are not alone. <br />
              <span className="italic" style={{ color: "#C4704B" }}>
                Let us walk beside you.
              </span>
            </h1>
            
            <p 
              className="text-base md:text-lg max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed"
              style={{ color: "rgba(43, 43, 43, 0.8)" }}
            >
              We beat the stigma around mental health in Uganda. 
              Through professional care and community sponsorship, we help people transform, 
              find acceptance, and live flourishing lives.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
              
              {/* Fixed Link: Routes to Contact Page */}
              <Link 
                href="/contact?reason=seeking-help" 
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium transition-all hover:-translate-y-1 text-center"
                style={{ 
                  backgroundColor: "#1F3D2E", 
                  color: "#F5F0E6", 
                  textDecoration: "none",
                  boxShadow: "0 10px 25px -5px rgba(31, 61, 46, 0.3)"
                }}
              >
                I Need Help
              </Link>
              
              {/* Fixed Link: Routes to Sponsorship Page */}
              <Link 
                href="/sponsorship" 
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium transition-all hover:-translate-y-1 text-center"
                style={{ 
                  backgroundColor: "transparent", 
                  color: "#1F3D2E", 
                  border: "2px solid #1F3D2E", 
                  textDecoration: "none" 
                }}
              >
                Become a Sponsor
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Image Column */}
        <div className="relative z-10 order-1 md:order-2 flex justify-center w-full animate-levitate">
          <div className="hover-3d w-full flex justify-center">
            <div 
              className="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[480px] aspect-[4/5] overflow-hidden shadow-2xl relative mx-auto"
              style={{ 
                borderRadius: "60% 40% 50% 50% / 40% 50% 60% 50%",
                border: "8px solid #F5F0E6"
              }}
            >
              {/* Switched to Next.js Image for instant loading */}
              <Image 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop" 
                alt="A peaceful, warm space for healing" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#1F3D2E] mix-blend-multiply opacity-10"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}