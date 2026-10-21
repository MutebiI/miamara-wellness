// export default function ContactPage() {
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
//             Get in Touch
//           </h1>
//           <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(43, 43, 43, 0.85)" }}>
//             Whether you need support, want to become a sponsor, or just want to say hello, we are here for you.
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
//                 <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Phone</p>
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
//             <h2 className="text-3xl font-serif mb-8" style={{ color: "#1F3D2E" }}>Write a Message</h2>
            
//             <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
              
//               {/* PASTE YOUR ACCESS KEY HERE */}
//               <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
//               {/* This tells Web3Forms where to redirect after sending */}
//               <input type="hidden" name="redirect" value="https://miamara-wellness.vercel.app/contact?success=true" />

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

//               <select 
//                 name="reason" 
//                 className="w-full p-4 rounded-xl outline-none"
//                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
//               >
//                 <option value="seeking-help">I am seeking help</option>
//                 <option value="sponsorship">I want to become a sponsor</option>
//                 <option value="volunteer">I want to volunteer</option>
//                 <option value="other">Other</option>
//               </select>

//               <textarea 
//                 name="message" 
//                 placeholder="Your Message" 
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
            
            <div className="space-y-6">
              <div>
                <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Location</p>
                <p style={{ color: "rgba(43, 43, 43, 0.8)" }}>Mbarara, Uganda</p>
              </div>
              
              <div>
                <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Phone (Call or WhatsApp)</p>
                <a href="tel:+256780245548" className="hover:text-[#C4704B] transition-colors" style={{ color: "rgba(43, 43, 43, 0.8)", textDecoration: "none" }}>
                  +256 780 245 548
                </a>
              </div>

              <div>
                <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Email</p>
                <a href="mailto:deniseamari77@gmail.com" className="hover:text-[#C4704B] transition-colors" style={{ color: "rgba(43, 43, 43, 0.8)", textDecoration: "none" }}>
                  deniseamari77@gmail.com
                </a>
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
    <Suspense fallback={<div className="min-h-screen pt-32 text-center">Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}