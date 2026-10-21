
// "use client";

// import { useSearchParams } from "next/navigation";
// import { Suspense } from "react";

// function ContactForm() {
//   const searchParams = useSearchParams();
//   const defaultReason = searchParams.get("reason") || "seeking-help";

//   return (
//     <div className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      
//       {/* Background Blob */}
//       <div 
//         className="absolute top-40 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] -z-10 opacity-20"
//         style={{ backgroundColor: "#C4704B", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", filter: "blur(80px)" }}
//       ></div>

//       <div className="max-w-6xl mx-auto px-6">
        
//         <div className="text-center max-w-3xl mx-auto mb-16 scroll-rotate">
//           <h1 className="text-4xl md:text-6xl font-serif mb-6" style={{ color: "#1F3D2E" }}>
//             Book a Session or Get in Touch
//           </h1>
//           <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(43, 43, 43, 0.85)" }}>
//             Whether you need support, want to become a sponsor, or just want to say hello, we are here for you. Everything you share is completely confidential.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 scroll-rotate">
          
//           {/* Contact Information */}
//           <div>
//             <h2 className="text-3xl font-serif mb-8" style={{ color: "#1F3D2E" }}>Contact Information</h2>
            
//             <div className="space-y-6">
//               <div>
//                 <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Location</p>
//                 <p style={{ color: "rgba(43, 43, 43, 0.8)" }}>Mbarara, Uganda</p>
//               </div>
              
//               <div>
//                 <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Phone (Call or WhatsApp)</p>
//                 <a href="tel:+256780245548" className="hover:text-[#C4704B] transition-colors" style={{ color: "rgba(43, 43, 43, 0.8)", textDecoration: "none" }}>
//                   +256 780 245 548
//                 </a>
//               </div>

//               <div>
//                 <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Email</p>
//                 <a href="mailto:deniseamari77@gmail.com" className="hover:text-[#C4704B] transition-colors" style={{ color: "rgba(43, 43, 43, 0.8)", textDecoration: "none" }}>
//                   deniseamari77@gmail.com
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* The Form */}
//           <div>
//             <h2 className="text-3xl font-serif mb-8" style={{ color: "#1F3D2E" }}>Send a Message</h2>
            
//             <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
              
//               {/* PASTE YOUR ACCESS KEY HERE */}
//               <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
//               <input 
//                 type="text" 
//                 name="name" 
//                 placeholder="Your Name" 
//                 required
//                 className="w-full p-4 rounded-xl outline-none focus:ring-2"
//                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
//               />
              
//               <input 
//                 type="email" 
//                 name="email" 
//                 placeholder="Your Email" 
//                 required
//                 className="w-full p-4 rounded-xl outline-none focus:ring-2"
//                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
//               />

//               {/* This select uses the URL parameter as its default value */}
//               <select 
//                 name="reason" 
//                 defaultValue={defaultReason}
//                 className="w-full p-4 rounded-xl outline-none"
//                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
//               >
//                 <option value="seeking-help">I am seeking help / Book a session</option>
//                 <option value="sponsorship">I want to become a sponsor</option>
//                 <option value="volunteer">I want to volunteer</option>
//                 <option value="other">Other</option>
//               </select>

//               <textarea 
//                 name="message" 
//                 placeholder="How can we help you?" 
//                 rows={4}
//                 required
//                 className="w-full p-4 rounded-xl outline-none focus:ring-2"
//                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
//               ></textarea>

//               <button 
//                 type="submit"
//                 className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1 mt-2"
//                 style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", boxShadow: "0 10px 25px -5px rgba(31, 61, 46, 0.3)", border: "none", cursor: "pointer" }}
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// // We wrap the form in Suspense because useSearchParams needs it in Next.js
// export default function ContactPage() {
//   return (
//     <Suspense fallback={<div className="min-h-screen pt-32 text-center">Loading...</div>}>
//       <ContactForm />
//     </Suspense>
//   );
// }

"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultReason = searchParams.get("reason") || "seeking-help";

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      
      {/* Background Blob */}
      <div 
        className="absolute top-40 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] -z-10 opacity-20"
        style={{ backgroundColor: "#C4704B", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", filter: "blur(80px)" }}
      ></div>

      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-rotate">
          <h1 className="text-4xl md:text-6xl font-serif mb-6" style={{ color: "#1F3D2E" }}>
            Book a Session or Get in Touch
          </h1>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(43, 43, 43, 0.85)" }}>
            Whether you need support, want to become a sponsor, or just want to say hello, we are here for you. Everything you share is completely confidential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 scroll-rotate">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif mb-8" style={{ color: "#1F3D2E" }}>Contact Information</h2>
            
            <div className="space-y-8">
              
              {/* Location */}
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full"
                  style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}
                >
                  <svg width="20" height="20" fill="none" stroke="#C4704B" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Location</p>
                  <p style={{ color: "rgba(43, 43, 43, 0.8)" }}>Mbarara, Uganda</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full"
                  style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}
                >
                  <svg width="20" height="20" fill="none" stroke="#C4704B" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Phone (Call or WhatsApp)</p>
                  <a href="tel:+256780245548" className="hover:text-[#C4704B] transition-colors" style={{ color: "rgba(43, 43, 43, 0.8)", textDecoration: "none" }}>
                    +256 780 245 548
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div 
                  className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full"
                  style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}
                >
                  <svg width="20" height="20" fill="none" stroke="#C4704B" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Email</p>
                  <a href="mailto:deniseamari77@gmail.com" className="hover:text-[#C4704B] transition-colors break-all" style={{ color: "rgba(43, 43, 43, 0.8)", textDecoration: "none" }}>
                    deniseamari77@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* The Form */}
          <div>
            <h2 className="text-3xl font-serif mb-8" style={{ color: "#1F3D2E" }}>Send a Message</h2>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
              
              {/* PASTE YOUR ACCESS KEY HERE */}
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required
                className="w-full p-4 rounded-xl outline-none focus:ring-2"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
              />
              
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required
                className="w-full p-4 rounded-xl outline-none focus:ring-2"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
              />

              {/* This select uses the URL parameter as its default value */}
              <select 
                name="reason" 
                defaultValue={defaultReason}
                className="w-full p-4 rounded-xl outline-none"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
              >
                <option value="seeking-help">I am seeking help / Book a session</option>
                <option value="sponsorship">I want to become a sponsor</option>
                <option value="volunteer">I want to volunteer</option>
                <option value="other">Other</option>
              </select>

              <textarea 
                name="message" 
                placeholder="How can we help you?" 
                rows={4}
                required
                className="w-full p-4 rounded-xl outline-none focus:ring-2"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
              ></textarea>

              <button 
                type="submit"
                className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1 mt-2"
                style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", boxShadow: "0 10px 25px -5px rgba(31, 61, 46, 0.3)", border: "none", cursor: "pointer" }}
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

// We wrap the form in Suspense because useSearchParams needs it in Next.js
export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center" style={{ color: "#1F3D2E" }}>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}