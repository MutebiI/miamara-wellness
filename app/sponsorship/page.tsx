// import Image from "next/image";

// export default function SponsorshipPage() {
//   return (
//     <div className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      
//       {/* Background Blob */}
//       <div 
//         className="absolute top-20 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] -z-10 opacity-20"
//         style={{ backgroundColor: "#C4704B", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", filter: "blur(80px)" }}
//       ></div>

//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* SECTION 1: The Hero */}
//         <div className="text-center max-w-3xl mx-auto mb-24 scroll-rotate">
//           <span className="font-bold tracking-[0.2em] uppercase text-sm block mb-4" style={{ color: "#C4704B" }}>
//             The Mentor Programme
//           </span>
//           <h1 className="text-4xl md:text-6xl font-serif mb-8" style={{ color: "#1F3D2E" }}>
//             Walk beside someone. <br/>
//             <span className="italic" style={{ color: "#C4704B" }}>Watch them rise.</span>
//           </h1>
//           <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: "rgba(43, 43, 43, 0.85)" }}>
//             Recovery is hard to do alone. Our sponsorship programme connects trained professionals with compassionate sponsors, creating a circle of support that helps people in recovery stay on track and flourish.
//           </p>
//           <a href="#signup" className="inline-block px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1" 
//              style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", textDecoration: "none", boxShadow: "0 10px 25px -5px rgba(31, 61, 46, 0.3)" }}>
//             Become a Sponsor
//           </a>
//         </div>

//         {/* SECTION 2: How it Works (2 Columns with Images) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 scroll-rotate">
          
//           {/* Text Side */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-serif mb-8" style={{ color: "#1F3D2E" }}>
//               How the Programme Works
//             </h2>
            
//             <div className="space-y-8">
//               <div className="flex gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-xl" style={{ backgroundColor: "#D9C7A7", color: "#1F3D2E" }}>1</div>
//                 <div>
//                   <h4 className="text-xl font-bold mb-2" style={{ color: "#1F3D2E" }}>Online Sign-Up</h4>
//                   <p style={{ color: "rgba(43, 43, 43, 0.8)" }}>Apply to become a sponsor. We carefully match you with a member in recovery who is ready to receive support.</p>
//                 </div>
//               </div>

//               <div className="flex gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-xl" style={{ backgroundColor: "#C4704B", color: "#F5F0E6" }}>2</div>
//                 <div>
//                   <h4 className="text-xl font-bold mb-2" style={{ color: "#1F3D2E" }}>Meet & Greets</h4>
//                   <p style={{ color: "rgba(43, 43, 43, 0.8)" }}>We host in-person meet-and-greets every 2 months, providing a safe space for sponsors and members to connect.</p>
//                 </div>
//               </div>

//               <div className="flex gap-6">
//                 <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-xl" style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6" }}>3</div>
//                 <div>
//                   <h4 className="text-xl font-bold mb-2" style={{ color: "#1F3D2E" }}>Mutual Growth</h4>
//                   <p style={{ color: "rgba(43, 43, 43, 0.8)" }}>It goes both ways. While you help them keep steady progress, we provide therapy and support for <em>you</em>, the sponsor, too.</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Image Side */}
//           <div className="flex justify-center">
//             <div 
//               className="w-full max-w-[450px] aspect-[4/5] overflow-hidden shadow-2xl relative"
//               style={{ borderRadius: "60% 40% 30% 70% / 40% 50% 60% 50%", border: "8px solid #F5F0E6" }}
//             >
//               {/* Image representing two people connecting/mentorship */}
//               <Image 
//                 src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" 
//                 alt="Sponsors and members connecting" 
//                 fill
//                 className="object-cover"
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//             </div>
//           </div>
//         </div>

//         {/* SECTION 3: Call to Action / Sign Up form placeholder */}
//         <div id="signup" className="relative p-8 md:p-16 text-center scroll-rotate"
//              style={{ backgroundColor: "#1F3D2E", borderRadius: "80px 40px 80px 40px" }}>
//           <h2 className="text-3xl md:text-5xl font-serif mb-6" style={{ color: "#F5F0E6" }}>
//             Ready to walk beside someone?
//           </h2>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
//             Whether you give your time, your resources, or your heart, you are helping to beat the stigma around mental health in Uganda.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <a href="/contact" className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1" 
//                style={{ backgroundColor: "#C4704B", color: "#F5F0E6", textDecoration: "none", boxShadow: "0 10px 25px -5px rgba(196, 112, 75, 0.3)" }}>
//               Apply as a Sponsor
//             </a>
//             <a href="/donate" className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1" 
//                style={{ backgroundColor: "transparent", color: "#F5F0E6", border: "2px solid #F5F0E6", textDecoration: "none" }}>
//               Donate Instead
//             </a>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Image from "next/image";

export default function SponsorshipPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      
      {/* Background Blob */}
      <div 
        className="absolute top-20 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] -z-10 opacity-20"
        style={{ backgroundColor: "#C4704B", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", filter: "blur(80px)" }}
      ></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* SECTION 1: The Hero */}
        <div className="text-center max-w-3xl mx-auto mb-24 scroll-rotate">
          <span className="font-bold tracking-[0.2em] uppercase text-sm block mb-4" style={{ color: "#C4704B" }}>
            The Mentor Programme
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mb-8" style={{ color: "#1F3D2E" }}>
            Walk beside someone. <br/>
            <span className="italic" style={{ color: "#C4704B" }}>Watch them rise.</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: "rgba(43, 43, 43, 0.85)" }}>
            Recovery is hard to do alone. Our sponsorship programme connects trained professionals with compassionate sponsors, creating a circle of support that helps people in recovery stay on track and flourish.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1" 
            style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", border: "none", cursor: "pointer", boxShadow: "0 10px 25px -5px rgba(31, 61, 46, 0.3)" }}
          >
            Become a Sponsor
          </button>
        </div>

        {/* SECTION 2: How it Works */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32 scroll-rotate">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-8" style={{ color: "#1F3D2E" }}>
              How the Programme Works
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-xl" style={{ backgroundColor: "#D9C7A7", color: "#1F3D2E" }}>1</div>
                <div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "#1F3D2E" }}>Online Sign-Up</h4>
                  <p style={{ color: "rgba(43, 43, 43, 0.8)" }}>Apply to become a sponsor. We carefully match you with a member in recovery who is ready to receive support.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-xl" style={{ backgroundColor: "#C4704B", color: "#F5F0E6" }}>2</div>
                <div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "#1F3D2E" }}>Meet & Greets</h4>
                  <p style={{ color: "rgba(43, 43, 43, 0.8)" }}>We host in-person meet-and-greets every 2 months, providing a safe space for sponsors and members to connect.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-xl" style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6" }}>3</div>
                <div>
                  <h4 className="text-xl font-bold mb-2" style={{ color: "#1F3D2E" }}>Mutual Growth</h4>
                  <p style={{ color: "rgba(43, 43, 43, 0.8)" }}>It goes both ways. While you help them keep steady progress, we provide therapy and support for <em>you</em>, the sponsor, too.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div 
              className="w-full max-w-[450px] aspect-[4/5] overflow-hidden shadow-2xl relative"
              style={{ borderRadius: "60% 40% 30% 70% / 40% 50% 60% 50%", border: "8px solid #F5F0E6" }}
            >
              <Image 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" 
                alt="Sponsors and members connecting" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* SECTION 3: Bottom Banner */}
        <div className="relative p-8 md:p-16 text-center scroll-rotate"
             style={{ backgroundColor: "#1F3D2E", borderRadius: "80px 40px 80px 40px" }}>
          <h2 className="text-3xl md:text-5xl font-serif mb-6" style={{ color: "#F5F0E6" }}>
            Ready to walk beside someone?
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10" style={{ color: "rgba(245, 240, 230, 0.8)" }}>
            Whether you give your time, your resources, or your heart, you are helping to beat the stigma.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1" 
            style={{ backgroundColor: "#C4704B", color: "#F5F0E6", border: "none", cursor: "pointer", boxShadow: "0 10px 25px -5px rgba(196, 112, 75, 0.3)" }}
          >
            Apply as a Sponsor
          </button>
        </div>

      </div>

      {/* THE MODAL (Popup Form) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1F3D2E]/60 backdrop-blur-sm">
          <div 
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto p-8 md:p-12 shadow-2xl"
            style={{ backgroundColor: "#F5F0E6", borderRadius: "40px 80px 40px 80px" }}
          >
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#D9C7A7]/50 transition-colors"
              style={{ color: "#1F3D2E", border: "none", background: "transparent", cursor: "pointer" }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-serif mb-2" style={{ color: "#1F3D2E" }}>Become a Sponsor</h3>
              <p className="text-sm" style={{ color: "rgba(43, 43, 43, 0.7)" }}>Fill out the form below and we will be in touch.</p>
            </div>

            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
              
              {/* PASTE YOUR WEB3FORMS ACCESS KEY HERE */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              <input type="hidden" name="subject" value="New Sponsorship Application!" />

              <div className="grid grid-cols-2 gap-4">
                <input type="text" name="first_name" placeholder="First Name" required className="w-full p-3 rounded-xl outline-none" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }} />
                <input type="text" name="last_name" placeholder="Last Name" required className="w-full p-3 rounded-xl outline-none" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }} />
              </div>

              <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 rounded-xl outline-none" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }} />
              <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 rounded-xl outline-none" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }} />

              <select name="sponsorship_type" className="w-full p-3 rounded-xl outline-none" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}>
                <option value="time">I want to give my time (Mentorship)</option>
                <option value="financial">I want to sponsor financially</option>
                <option value="both">Both time and financial support</option>
              </select>

              <textarea name="message" placeholder="Why do you want to become a sponsor? (Optional)" rows={3} className="w-full p-3 rounded-xl outline-none" style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}></textarea>

              <button type="submit" className="w-full px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1 mt-2" style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", border: "none", cursor: "pointer", boxShadow: "0 10px 25px -5px rgba(31, 61, 46, 0.3)" }}>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}