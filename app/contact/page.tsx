
// // "use client";

// // import { useSearchParams } from "next/navigation";
// // import { Suspense } from "react";

// // function ContactForm() {
// //   const searchParams = useSearchParams();
// //   const defaultReason = searchParams.get("reason") || "seeking-help";

// //   return (
// //     <div className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      
// //       {/* Background Blob */}
// //       <div 
// //         className="absolute top-40 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] -z-10 opacity-20"
// //         style={{ backgroundColor: "#C4704B", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", filter: "blur(80px)" }}
// //       ></div>

// //       <div className="max-w-6xl mx-auto px-6">
        
// //         <div className="text-center max-w-3xl mx-auto mb-16 scroll-rotate">
// //           <h1 className="text-4xl md:text-6xl font-serif mb-6" style={{ color: "#1F3D2E" }}>
// //             Book a Session or Get in Touch
// //           </h1>
// //           <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(43, 43, 43, 0.85)" }}>
// //             Whether you need support, want to become a sponsor, or just want to say hello, we are here for you. Everything you share is completely confidential.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 scroll-rotate">
          
// //           {/* Contact Information */}
// //           <div>
// //             <h2 className="text-3xl font-serif mb-8" style={{ color: "#1F3D2E" }}>Contact Information</h2>
            
// //             <div className="space-y-8">
              
// //               {/* Location */}
// //               <div className="flex items-start gap-4">
// //                 <div 
// //                   className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full"
// //                   style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}
// //                 >
// //                   <svg width="20" height="20" fill="none" stroke="#C4704B" strokeWidth="2" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
// //                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
// //                   </svg>
// //                 </div>
// //                 <div>
// //                   <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Location</p>
// //                   <p style={{ color: "rgba(43, 43, 43, 0.8)" }}>Mbarara, Uganda</p>
// //                 </div>
// //               </div>
              
// //               {/* Phone */}
// //               <div className="flex items-start gap-4">
// //                 <div 
// //                   className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full"
// //                   style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}
// //                 >
// //                   <svg width="20" height="20" fill="none" stroke="#C4704B" strokeWidth="2" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
// //                   </svg>
// //                 </div>
// //                 <div>
// //                   <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Phone (Call or WhatsApp)</p>
// //                   <a href="tel:+256780245548" className="hover:text-[#C4704B] transition-colors" style={{ color: "rgba(43, 43, 43, 0.8)", textDecoration: "none" }}>
// //                     +256 780 245 548
// //                   </a>
// //                 </div>
// //               </div>

// //               {/* Email */}
// //               <div className="flex items-start gap-4">
// //                 <div 
// //                   className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full"
// //                   style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}
// //                 >
// //                   <svg width="20" height="20" fill="none" stroke="#C4704B" strokeWidth="2" viewBox="0 0 24 24">
// //                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
// //                   </svg>
// //                 </div>
// //                 <div>
// //                   <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Email</p>
// //                   <a href="mailto:deniseamari77@gmail.com" className="hover:text-[#C4704B] transition-colors break-all" style={{ color: "rgba(43, 43, 43, 0.8)", textDecoration: "none" }}>
// //                     deniseamari77@gmail.com
// //                   </a>
// //                 </div>
// //               </div>

// //             </div>
// //           </div>

// //           {/* The Form */}
// //           <div>
// //             <h2 className="text-3xl font-serif mb-8" style={{ color: "#1F3D2E" }}>Send a Message</h2>
            
// //             <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
              
// //               {/* PASTE YOUR ACCESS KEY HERE */}
// //               <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
// //               <input 
// //                 type="text" 
// //                 name="name" 
// //                 placeholder="Your Name" 
// //                 required
// //                 className="w-full p-4 rounded-xl outline-none focus:ring-2"
// //                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
// //               />
              
// //               <input 
// //                 type="email" 
// //                 name="email" 
// //                 placeholder="Your Email" 
// //                 required
// //                 className="w-full p-4 rounded-xl outline-none focus:ring-2"
// //                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
// //               />

// //               {/* This select uses the URL parameter as its default value */}
// //               <select 
// //                 name="reason" 
// //                 defaultValue={defaultReason}
// //                 className="w-full p-4 rounded-xl outline-none"
// //                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
// //               >
// //                 <option value="seeking-help">I am seeking help / Book a session</option>
// //                 <option value="sponsorship">I want to become a sponsor</option>
// //                 <option value="volunteer">I want to volunteer</option>
// //                 <option value="other">Other</option>
// //               </select>

// //               <textarea 
// //                 name="message" 
// //                 placeholder="How can we help you?" 
// //                 rows={4}
// //                 required
// //                 className="w-full p-4 rounded-xl outline-none focus:ring-2"
// //                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
// //               ></textarea>

// //               <button 
// //                 type="submit"
// //                 className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1 mt-2"
// //                 style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", boxShadow: "0 10px 25px -5px rgba(31, 61, 46, 0.3)", border: "none", cursor: "pointer" }}
// //               >
// //                 Send Message
// //               </button>
// //             </form>
// //           </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // We wrap the form in Suspense because useSearchParams needs it in Next.js
// // export default function ContactPage() {
// //   return (
// //     <Suspense fallback={<div className="min-h-screen pt-32 text-center" style={{ color: "#1F3D2E" }}>Loading...</div>}>
// //       <ContactForm />
// //     </Suspense>
// //   );
// // }


// "use client";

// import { useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";

// function ContactForm() {
//   const searchParams = useSearchParams();
//   const defaultReason = searchParams.get("reason") || "seeking-help";

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     reason: defaultReason,
//     message: "",
//   });
//   const [status, setStatus] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus("sending");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify({
//           access_key: "95f36af0-e96a-45a7-bd50-40bf41cab7c2", // Denise's Access Key
//           subject: "New Message from Miamara Website",
//           from_name: "Miamara Website",
//           name: formData.name,
//           email: formData.email,
//           reason: formData.reason,
//           message: formData.message,
//         }),
//       });

//       const result = await response.json();

//       if (result.success) {
//         setStatus("success");
//         setFormData({ name: "", email: "", reason: "seeking-help", message: "" });
//         setShowModal(true);
//       } else {
//         setStatus("error");
//       }
//     } catch (error) {
//       setStatus("error");
//     }
//   };

//   return (
//     <div className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      
//       {/* ===== SUCCESS MODAL (POPUP) ===== */}
//       {showModal && (
//         <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//           <div 
//             className="relative max-w-md w-full p-8 md:p-12 text-center shadow-2xl animate-fade-up"
//             style={{ backgroundColor: "#F5F0E6", borderRadius: "40px 80px 40px 80px" }}
//           >
//             {/* Close X Button */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#D9C7A7]/50 transition-colors"
//               style={{ color: "#1F3D2E", border: "none", background: "transparent", cursor: "pointer" }}
//             >
//               <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                 <path d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>

//             {/* Green Checkmark Icon */}
//             <div className="flex justify-center mb-6">
//               <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(31, 61, 46, 0.1)" }}>
//                 <svg className="w-10 h-10" fill="none" stroke="#1F3D2E" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
//                 </svg>
//               </div>
//             </div>

//             {/* Exact Text You Requested */}
//             <h3 className="text-3xl font-serif font-bold mb-4" style={{ color: "#1F3D2E" }}>Message Sent!</h3>
//             <p className="text-lg mb-8" style={{ color: "rgba(43, 43, 43, 0.8)" }}>
//               Thanks, your request has been received. We will get back to you as soon as possible.
//             </p>

//             {/* Close Button */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="w-full rounded-full px-6 py-4 font-medium text-white transition-all hover:-translate-y-1"
//               style={{ backgroundColor: "#C4704B", boxShadow: "0 10px 25px -5px rgba(196, 112, 75, 0.3)", border: "none", cursor: "pointer" }}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

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
            
//             <div className="space-y-8">
              
//               {/* Location */}
//               <div className="flex items-start gap-4">
//                 <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}>
//                   <svg width="20" height="20" fill="none" stroke="#C4704B" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Location</p>
//                   <p style={{ color: "rgba(43, 43, 43, 0.8)" }}>Mbarara, Uganda</p>
//                 </div>
//               </div>
              
//               {/* Phone */}
//               <div className="flex items-start gap-4">
//                 <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}>
//                   <svg width="20" height="20" fill="none" stroke="#C4704B" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Phone (Call or WhatsApp)</p>
//                   <a href="tel:+256780245548" className="hover:text-[#C4704B] transition-colors" style={{ color: "rgba(43, 43, 43, 0.8)", textDecoration: "none" }}>
//                     +256 780 245 548
//                   </a>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-4">
//                 <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}>
//                   <svg width="20" height="20" fill="none" stroke="#C4704B" strokeWidth="2" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Email</p>
//                   <a href="mailto:dashabahebwa55@gmail.com" className="hover:text-[#C4704B] transition-colors break-all" style={{ color: "rgba(43, 43, 43, 0.8)", textDecoration: "none" }}>
//                     dashabahebwa55@gmail.com
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* The Form */}
//           <div>
//             <h2 className="text-3xl font-serif mb-8" style={{ color: "#1F3D2E" }}>Send a Message</h2>
            
//             {status === "error" && (
//               <div className="mb-6 p-4 rounded-xl text-sm" style={{ backgroundColor: "#FFE4E4", color: "#B91C1C", border: "1px solid #F87171" }}>
//                 Something went wrong. Please try again or email us directly.
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
//               <input 
//                 type="text" 
//                 placeholder="Your Name" 
//                 required
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//                 className="w-full p-4 rounded-xl outline-none focus:ring-2"
//                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
//               />
              
//               <input 
//                 type="email" 
//                 placeholder="Your Email" 
//                 required
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 className="w-full p-4 rounded-xl outline-none focus:ring-2"
//                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
//               />

//               <select 
//                 value={formData.reason}
//                 onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
//                 className="w-full p-4 rounded-xl outline-none"
//                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
//               >
//                 <option value="seeking-help">I am seeking help / Book a session</option>
//                 <option value="sponsorship">I want to become a sponsor</option>
//                 <option value="volunteer">I want to volunteer</option>
//                 <option value="other">Other</option>
//               </select>

//               <textarea 
//                 placeholder="How can we help you?" 
//                 rows={4}
//                 required
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 className="w-full p-4 rounded-xl outline-none focus:ring-2"
//                 style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
//               ></textarea>

//               <button 
//                 type="submit"
//                 disabled={status === "sending"}
//                 className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1 mt-2"
//                 style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", boxShadow: "0 10px 25px -5px rgba(31, 61, 46, 0.3)", border: "none", cursor: status === "sending" ? "not-allowed" : "pointer", opacity: status === "sending" ? 0.7 : 1 }}
//               >
//                 {status === "sending" ? "Sending..." : "Send Message"}
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default function ContactPage() {
//   return (
//     <Suspense fallback={<div className="min-h-screen pt-32 text-center" style={{ color: "#1F3D2E" }}>Loading...</div>}>
//       <ContactForm />
//     </Suspense>
//   );
// }

"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
  const searchParams = useSearchParams();
  const defaultReason = searchParams.get("reason") || "seeking-help";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: defaultReason,
    message: "",
  });
  const [status, setStatus] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Formatting the email with a clean, organized structure
    const formattedEmailBody = `
      <div style="font-family: Arial, sans-serif; color: #2B2B2B; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #D9C7A7; border-radius: 10px; background-color: #F5F0E6;">
        <h2 style="color: #1F3D2E; margin-bottom: 20px; font-size: 20px;">NEW MESSAGE FROM MIAMARA WEBSITE</h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #C4704B; font-size: 14px; text-transform: uppercase;">Received From:</strong>
          <p style="margin: 5px 0 0 0; font-size: 16px; font-weight: bold; color: #1F3D2E;">${formData.name}</p>
        </div>

        <div style="margin-bottom: 15px;">
          <strong style="color: #C4704B; font-size: 14px; text-transform: uppercase;">Email Address:</strong>
          <p style="margin: 5px 0 0 0;"><a href="mailto:${formData.email}" style="color: #1F3D2E; text-decoration: underline;">${formData.email}</a></p>
        </div>

        <div style="margin-bottom: 15px;">
          <strong style="color: #C4704B; font-size: 14px; text-transform: uppercase;">Reason for Reaching Out:</strong>
          <p style="margin: 5px 0 0 0; text-transform: capitalize;">${formData.reason.replace("-", " ")}</p>
        </div>

        <hr style="border: none; border-top: 1px solid rgba(217, 199, 167, 0.5); margin: 20px 0;" />

        <div style="margin-bottom: 15px;">
          <strong style="color: #C4704B; font-size: 14px; text-transform: uppercase;">Message:</strong>
          <div style="margin: 5px 0 0 0; line-height: 1.6; background-color: #FFFFFF; padding: 15px; border-radius: 8px; border: 1px solid #D9C7A7;">
            ${formData.message}
          </div>
        </div>
      </div>
    `;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "95f36af0-e96a-45a7-bd50-40bf41cab7c2",
          html: true, // THIS TELLS WEB3FORMS TO RENDER THE HTML
          subject: `New Message: ${formData.name} - Miamara Website`,
          from_name: "Miamara Website",
          name: formData.name,
          email: formData.email,
          reason: formData.reason,
          message: formattedEmailBody,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", reason: "seeking-help", message: "" });
        setShowModal(true);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      
      {/* ===== SUCCESS MODAL ===== */}
      {showModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-md p-4">
          <div 
            className="relative w-full max-w-md p-8 md:p-12 text-center shadow-2xl animate-fade-up"
            style={{ backgroundColor: "#F5F0E6", borderRadius: "40px 80px 40px 80px" }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#D9C7A7]/50 transition-colors"
              style={{ color: "#1F3D2E", border: "none", background: "transparent", cursor: "pointer" }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(31, 61, 46, 0.1)" }}>
                <svg className="w-10 h-10" fill="none" stroke="#1F3D2E" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h3 className="text-3xl font-serif font-bold mb-4" style={{ color: "#1F3D2E" }}>Message Sent!</h3>
            <p className="text-lg mb-8" style={{ color: "rgba(43, 43, 43, 0.8)" }}>
              Thanks, your request has been received. We will get back to you as soon as possible.
            </p>

            <button
              onClick={() => setShowModal(false)}
              className="w-full rounded-full px-6 py-4 font-medium text-white transition-all hover:-translate-y-1"
              style={{ backgroundColor: "#C4704B", boxShadow: "0 10px 25px -5px rgba(196, 112, 75, 0.3)", border: "none", cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        </div>
      )}

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
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}>
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
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}>
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
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full" style={{ backgroundColor: "rgba(31, 61, 46, 0.05)", border: "1px solid rgba(31, 61, 46, 0.1)" }}>
                  <svg width="20" height="20" fill="none" stroke="#C4704B" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-lg mb-1" style={{ color: "#1F3D2E" }}>Email</p>
                  <a href="mailto:dashabahebwa55@gmail.com" className="hover:text-[#C4704B] transition-colors break-all" style={{ color: "rgba(43, 43, 43, 0.8)", textDecoration: "none" }}>
                    dashabahebwa55@gmail.com
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* The Form */}
          <div>
            <h2 className="text-3xl font-serif mb-8" style={{ color: "#1F3D2E" }}>Send a Message</h2>
            
            {status === "error" && (
              <div className="mb-6 p-4 rounded-xl text-sm" style={{ backgroundColor: "#FFE4E4", color: "#B91C1C", border: "1px solid #F87171" }}>
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              <input type="hidden" name="from_name" value="Miamara Website" />
              <input type="hidden" name="botcheck" className="hidden" />

              <input 
                type="text" 
                placeholder="Your Name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-4 rounded-xl outline-none focus:ring-2"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
              />
              
              <input 
                type="email" 
                placeholder="Your Email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-4 rounded-xl outline-none focus:ring-2"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
              />

              <select 
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="w-full p-4 rounded-xl outline-none"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
              >
                <option value="seeking-help">I am seeking help / Book a session</option>
                <option value="sponsorship">I want to become a sponsor</option>
                <option value="volunteer">I want to volunteer</option>
                <option value="other">Other</option>
              </select>

              <textarea 
                placeholder="How can we help you?" 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 rounded-xl outline-none focus:ring-2"
                style={{ backgroundColor: "#FFFFFF", border: "1px solid rgba(31, 61, 46, 0.2)", color: "#2B2B2B" }}
              ></textarea>

              <button 
                type="submit"
                disabled={status === "sending"}
                className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1 mt-2"
                style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", boxShadow: "0 10px 25px -5px rgba(31, 61, 46, 0.3)", border: "none", cursor: status === "sending" ? "not-allowed" : "pointer", opacity: status === "sending" ? 0.7 : 1 }}
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-32 text-center" style={{ color: "#1F3D2E" }}>Loading...</div>}>
      <ContactForm />
    </Suspense>
  );
}