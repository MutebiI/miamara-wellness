// // // // export default function Services() {
// // // //   const services = [
// // // //     {
// // // //       title: "Clinic & Therapy",
// // // //       desc: "Psychologists, psychiatrists, counsellors, family therapy, and a pharmacy—all in one safe space.",
// // // //       color: "#D9C7A7", // Kraft
// // // //       icon: "🫂"
// // // //     },
// // // //     {
// // // //       title: "Sponsorship Programme",
// // // //       desc: "Walk alongside someone in recovery. Online sign-up, meet-and-greets every 2 months, and therapy for sponsors too.",
// // // //       color: "#C4704B", // Clay
// // // //       icon: "🤝"
// // // //     },
// // // //     {
// // // //       title: "Mobile & Home Services",
// // // //       desc: "Home visits and a mobile lab for intoxication tests, bringing care to those who cannot reach us.",
// // // //       color: "#1F3D2E", // Forest (will use white text)
// // // //       icon: "🚐"
// // // //     },
// // // //     {
// // // //       title: "Community & Outings",
// // // //       desc: "Workshops, free seasonal boot camps with CBT, and safe monitored outings to break isolation.",
// // // //       color: "#F5F0E6", // Cream
// // // //       icon: "🌿"
// // // //     }
// // // //   ];

// // // //   return (
// // // //     <section className="py-24 px-6 relative z-10" style={{ backgroundColor: "#F5F0E6" }}>
// // // //       <div className="max-w-6xl mx-auto">
        
// // // //         <div className="text-center mb-16">
// // // //           <h2 className="text-3xl md:text-5xl font-serif mb-4" style={{ color: "#1F3D2E" }}>
// // // //             How We Help You Rise
// // // //           </h2>
// // // //           <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(43, 43, 43, 0.7)" }}>
// // // //             We don't just treat symptoms. We walk with you through recovery, community reintegration, and personal growth.
// // // //           </p>
// // // //         </div>

// // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// // // //           {services.map((service, index) => (
// // // //             <div 
// // // //               key={index}
// // // //               className="p-8 md:p-12 scroll-rotate flex flex-col justify-between"
// // // //               style={{ 
// // // //                 backgroundColor: service.color,
// // // //                 // Beautiful, organic curvy shapes (not perfect rectangles)
// // // //                 borderRadius: index % 2 === 0 ? "40px 80px 40px 80px" : "80px 40px 80px 40px",
// // // //                 boxShadow: "0 20px 40px -15px rgba(31, 61, 46, 0.1)",
// // // //                 border: service.color === "#F5F0E6" ? "1px solid rgba(31, 61, 46, 0.1)" : "none"
// // // //               }}
// // // //             >
// // // //               <div>
// // // //                 <span className="text-4xl mb-6 block">{service.icon}</span>
// // // //                 <h3 
// // // //                   className="text-2xl md:text-3xl font-serif font-bold mb-4"
// // // //                   style={{ color: service.color === "#1F3D2E" ? "#F5F0E6" : "#1F3D2E" }}
// // // //                 >
// // // //                   {service.title}
// // // //                 </h3>
// // // //                 <p 
// // // //                   className="text-base md:text-lg leading-relaxed"
// // // //                   style={{ color: service.color === "#1F3D2E" ? "rgba(245, 240, 230, 0.9)" : "rgba(43, 43, 43, 0.8)" }}
// // // //                 >
// // // //                   {service.desc}
// // // //                 </p>
// // // //               </div>
              
// // // //               <div className="mt-8">
// // // //                 <a 
// // // //                   href="#learn-more" 
// // // //                   className="inline-block font-medium border-b-2 pb-1 transition-colors hover:opacity-70"
// // // //                   style={{ 
// // // //                     color: service.color === "#1F3D2E" ? "#D9C7A7" : "#1F3D2E",
// // // //                     borderColor: service.color === "#1F3D2E" ? "#D9C7A7" : "#1F3D2E",
// // // //                     textDecoration: "none"
// // // //                   }}
// // // //                 >
// // // //                   Learn more &rarr;
// // // //                 </a>
// // // //               </div>
// // // //             </div>
// // // //           ))}
// // // //         </div>

// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // import Image from "next/image";

// // // export default function Services() {
// // //   const services = [
// // //     {
// // //       title: "Clinic & Therapy",
// // //       desc: "Psychologists, psychiatrists, counsellors, family therapy, and a pharmacy—all in one safe space.",
// // //       color: "#D9C7A7", // Kraft
// // //       icon: "🫂",
// // //       image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=400&auto=format&fit=crop" // Placeholder for a safe therapy space
// // //     },
// // //     {
// // //       title: "Sponsorship Programme",
// // //       desc: "Walk alongside someone in recovery. Online sign-up, meet-and-greets every 2 months, and therapy for sponsors too.",
// // //       color: "#C4704B", // Clay
// // //       icon: "🤝",
// // //       image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop" // Placeholder for two people connecting
// // //     },
// // //     {
// // //       title: "Mobile & Home Services",
// // //       desc: "Home visits and a mobile lab for intoxication tests, bringing care to those who cannot reach us.",
// // //       color: "#1F3D2E", // Forest
// // //       icon: "🚐",
// // //       image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=400&auto=format&fit=crop" // Placeholder for a safe journey/home
// // //     },
// // //     {
// // //       title: "Community & Outings",
// // //       desc: "Workshops, free seasonal boot camps with CBT, and safe monitored outings to break isolation.",
// // //       color: "#F5F0E6", // Cream
// // //       icon: "🌿",
// // //       image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&auto=format&fit=crop" // Placeholder for community/growth
// // //     }
// // //   ];

// // //   return (
// // //     <section className="py-24 px-6 relative z-10" style={{ backgroundColor: "#F5F0E6" }}>
// // //       <div className="max-w-6xl mx-auto">
        
// // //         <div className="text-center mb-16">
// // //           <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: "#1F3D2E" }}>
// // //             How We Help You Rise
// // //           </h2>
// // //           <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "rgba(43, 43, 43, 0.7)" }}>
// // //             We don't just treat symptoms. We walk with you through recovery, community reintegration, and personal growth.
// // //           </p>
// // //         </div>

// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
// // //           {services.map((service, index) => (
// // //             <div 
// // //               key={index}
// // //               className="relative p-8 md:p-12 scroll-rotate flex flex-col justify-between overflow-hidden group"
// // //               style={{ 
// // //                 backgroundColor: service.color,
// // //                 // Beautiful, organic curvy shapes
// // //                 borderRadius: index % 2 === 0 ? "40px 80px 40px 80px" : "80px 40px 80px 40px",
// // //                 boxShadow: "0 20px 40px -15px rgba(31, 61, 46, 0.1)",
// // //                 border: service.color === "#F5F0E6" ? "1px solid rgba(31, 61, 46, 0.1)" : "none"
// // //               }}
// // //             >
// // //               {/* 
// // //                 THE SMALL HUMAN IMAGE 
// // //                 It sits in the top right corner, inside an organic blob. 
// // //                 On hover, it scales up slightly to feel alive.
// // //               */}
// // //               <div 
// // //                 className="absolute -top-6 -right-6 w-32 h-32 md:w-40 md:h-40 overflow-hidden shadow-lg transition-transform duration-700 group-hover:scale-110"
// // //                 style={{
// // //                   borderRadius: "50% 50% 30% 70% / 40% 60% 40% 60%",
// // //                   border: "4px solid rgba(245, 240, 230, 0.4)",
// // //                   zIndex: 0
// // //                 }}
// // //               >
// // //                 <Image 
// // //                   src={service.image} 
// // //                   alt={service.title} 
// // //                   fill
// // //                   className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
// // //                   sizes="(max-width: 768px) 150px, 200px"
// // //                 />
// // //               </div>

// // //               {/* Text Content (z-10 to stay above the image) */}
// // //               <div className="relative z-10 pt-10 md:pt-0">
// // //                 <span className="text-4xl mb-6 block drop-shadow-sm">{service.icon}</span>
// // //                 <h3 
// // //                   className="text-2xl md:text-3xl font-serif font-bold mb-4 max-w-[80%]"
// // //                   style={{ color: service.color === "#1F3D2E" ? "#F5F0E6" : "#1F3D2E" }}
// // //                 >
// // //                   {service.title}
// // //                 </h3>
// // //                 <p 
// // //                   className="text-base md:text-lg leading-relaxed max-w-[90%]"
// // //                   style={{ color: service.color === "#1F3D2E" ? "rgba(245, 240, 230, 0.9)" : "rgba(43, 43, 43, 0.8)" }}
// // //                 >
// // //                   {service.desc}
// // //                 </p>
// // //               </div>
              
// // //               <div className="relative z-10 mt-8">
// // //                 <a 
// // //                   href="#learn-more" 
// // //                   className="inline-block font-medium border-b-2 pb-1 transition-all hover:pr-2"
// // //                   style={{ 
// // //                     color: service.color === "#1F3D2E" ? "#D9C7A7" : "#1F3D2E",
// // //                     borderColor: service.color === "#1F3D2E" ? "#D9C7A7" : "#1F3D2E",
// // //                     textDecoration: "none"
// // //                   }}
// // //                 >
// // //                   Learn more &rarr;
// // //                 </a>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>

// // //       </div>
// // //     </section>
// // //   );
// // // }

// // import Image from "next/image";

// // export default function Services() {
// //   const services = [
// //     {
// //       title: "Clinic & Therapy",
// //       desc: "Psychologists, psychiatrists, counsellors, family therapy, and a pharmacy—all in one safe space.",
// //       color: "#D9C7A7", // Kraft
// //       image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=400&auto=format&fit=crop" 
// //     },
// //     {
// //       title: "Sponsorship Programme",
// //       desc: "Walk alongside someone in recovery. Online sign-up, meet-and-greets every 2 months, and therapy for sponsors too.",
// //       color: "#C4704B", // Clay
// //       image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop" 
// //     },
// //     {
// //       title: "Mobile & Home Services",
// //       desc: "Home visits and a mobile lab for intoxication tests, bringing care to those who cannot reach us.",
// //       color: "#1F3D2E", // Forest
// //       // Replaced the dog with a warm, human hands image representing care/home visits
// //       image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop" 
// //     },
// //     {
// //       title: "Community & Outings",
// //       desc: "Workshops, free seasonal boot camps with CBT, and safe monitored outings to break isolation.",
// //       color: "#F5F0E6", // Cream
// //       image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&auto=format&fit=crop" 
// //     }
// //   ];

// //   return (
// //     <section className="py-24 px-6 relative z-10" style={{ backgroundColor: "#F5F0E6" }}>
// //       <div className="max-w-6xl mx-auto">
        
// //         <div className="text-center mb-16">
// //           <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: "#1F3D2E" }}>
// //             How We Help You Rise
// //           </h2>
// //           <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "rgba(43, 43, 43, 0.7)" }}>
// //             We don't just treat symptoms. We walk with you through recovery, community reintegration, and personal growth.
// //           </p>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
// //           {services.map((service, index) => (
// //             <div 
// //               key={index}
// //               className="relative p-8 md:p-12 scroll-rotate flex flex-col justify-between overflow-hidden group"
// //               style={{ 
// //                 backgroundColor: service.color,
// //                 // Beautiful, organic curvy shapes
// //                 borderRadius: index % 2 === 0 ? "40px 80px 40px 80px" : "80px 40px 80px 40px",
// //                 boxShadow: "0 20px 40px -15px rgba(31, 61, 46, 0.1)",
// //                 border: service.color === "#F5F0E6" ? "1px solid rgba(31, 61, 46, 0.1)" : "none"
// //               }}
// //             >
// //               {/* The small human image peeking from the corner */}
// //               <div 
// //                 className="absolute -top-6 -right-6 w-32 h-32 md:w-40 md:h-40 overflow-hidden shadow-lg transition-transform duration-700 group-hover:scale-110"
// //                 style={{
// //                   borderRadius: "50% 50% 30% 70% / 40% 60% 40% 60%",
// //                   border: "4px solid rgba(245, 240, 230, 0.4)",
// //                   zIndex: 0
// //                 }}
// //               >
// //                 <Image 
// //                   src={service.image} 
// //                   alt={service.title} 
// //                   fill
// //                   className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
// //                   sizes="(max-width: 768px) 150px, 200px"
// //                 />
// //               </div>

// //               {/* Text Content */}
// //               <div className="relative z-10 pt-10 md:pt-0">
// //                 <h3 
// //                   className="text-2xl md:text-3xl font-serif font-bold mb-4 max-w-[80%]"
// //                   style={{ color: service.color === "#1F3D2E" ? "#F5F0E6" : "#1F3D2E" }}
// //                 >
// //                   {service.title}
// //                 </h3>
// //                 <p 
// //                   className="text-base md:text-lg leading-relaxed max-w-[90%]"
// //                   style={{ color: service.color === "#1F3D2E" ? "rgba(245, 240, 230, 0.9)" : "rgba(43, 43, 43, 0.8)" }}
// //                 >
// //                   {service.desc}
// //                 </p>
// //               </div>
              
// //               <div className="relative z-10 mt-8">
// //                 <a 
// //                   href="#learn-more" 
// //                   className="inline-block font-medium border-b-2 pb-1 transition-all hover:pr-2"
// //                   style={{ 
// //                     color: service.color === "#1F3D2E" ? "#D9C7A7" : "#1F3D2E",
// //                     borderColor: service.color === "#1F3D2E" ? "#D9C7A7" : "#1F3D2E",
// //                     textDecoration: "none"
// //                   }}
// //                 >
// //                   Learn more &rarr;
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }
// import Image from "next/image";

// export default function Services() {
//   const services = [
//     {
//       title: "Clinic & Therapy",
//       desc: "Psychologists, psychiatrists, counsellors, family therapy, and a pharmacy—all in one safe space.",
//       color: "#D9C7A7", // Kraft
//       image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=400&auto=format&fit=crop" 
//     },
//     {
//       title: "Sponsorship Programme",
//       desc: "Walk alongside someone in recovery. Online sign-up, meet-and-greets every 2 months, and therapy for sponsors too.",
//       color: "#C4704B", // Clay
//       image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop" 
//     },
//     {
//       title: "Mobile & Home Services",
//       desc: "Home visits and a mobile lab for intoxication tests, bringing care to those who cannot reach us.",
//       color: "#1F3D2E", // Forest
//       image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop" 
//     },
//     {
//       title: "Community & Outings",
//       desc: "Workshops, free seasonal boot camps with CBT, and safe monitored outings to break isolation.",
//       color: "#F5F0E6", // Cream
//       image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&auto=format&fit=crop" 
//     }
//   ];

//   return (
//     <section className="py-24 px-6 relative z-10 overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
//       <div className="max-w-6xl mx-auto relative">
        
//         <div className="text-center mb-16 relative z-20">
//           <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: "#1F3D2E" }}>
//             How We Help You Rise
//           </h2>
//           <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "rgba(43, 43, 43, 0.7)" }}>
//             We don't just treat symptoms. We walk with you through recovery, community reintegration, and personal growth.
//           </p>
//         </div>

//         {/* THE CONNECTING LINES (Only visible on desktop) */}
//         <div className="hidden md:flex absolute inset-0 z-0 items-center justify-center pointer-events-none">
//           <svg className="w-full h-full" style={{ opacity: 0.15 }}>
//             {/* Lines radiating from center */}
//             <line x1="50%" y1="50%" x2="25%" y2="30%" stroke="#1F3D2E" strokeWidth="2" strokeDasharray="5,5" />
//             <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="#1F3D2E" strokeWidth="2" strokeDasharray="5,5" />
//             <line x1="50%" y1="50%" x2="25%" y2="70%" stroke="#1F3D2E" strokeWidth="2" strokeDasharray="5,5" />
//             <line x1="50%" y1="50%" x2="75%" y2="70%" stroke="#1F3D2E" strokeWidth="2" strokeDasharray="5,5" />
//           </svg>
//         </div>

//         {/* THE CENTRAL HUB (Only visible on desktop) */}
//         <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
//           <div 
//             className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl animate-text-breathe"
//             style={{ 
//               backgroundColor: "#F5F0E6", 
//               border: "4px solid #1F3D2E",
//               boxShadow: "0 0 40px rgba(31, 61, 46, 0.2)"
//             }}
//           >
//             <span className="font-serif font-bold text-lg text-center leading-tight" style={{ color: "#1F3D2E" }}>
//               Miamara<br/>Care
//             </span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 relative z-10">
//           {services.map((service, index) => (
//             <div 
//               key={index}
//               className={`relative p-8 md:p-12 scroll-rotate flex flex-col justify-between overflow-hidden group
//                 ${index === 0 ? "md:mr-12" : ""} 
//                 ${index === 1 ? "md:ml-12" : ""} 
//                 ${index === 2 ? "md:mr-12" : ""} 
//                 ${index === 3 ? "md:ml-12" : ""}
//               `}
//               style={{ 
//                 backgroundColor: service.color,
//                 // Beautiful, organic curvy shapes
//                 borderRadius: index % 2 === 0 ? "40px 80px 40px 80px" : "80px 40px 80px 40px",
//                 boxShadow: "0 20px 40px -15px rgba(31, 61, 46, 0.1)",
//                 border: service.color === "#F5F0E6" ? "1px solid rgba(31, 61, 46, 0.1)" : "none"
//               }}
//             >
//               {/* The small human image peeking from the corner */}
//               <div 
//                 className="absolute -top-6 -right-6 w-32 h-32 md:w-40 md:h-40 overflow-hidden shadow-lg transition-transform duration-700 group-hover:scale-110"
//                 style={{
//                   borderRadius: "50% 50% 30% 70% / 40% 60% 40% 60%",
//                   border: "4px solid rgba(245, 240, 230, 0.4)",
//                   zIndex: 0
//                 }}
//               >
//                 <Image 
//                   src={service.image} 
//                   alt={service.title} 
//                   fill
//                   className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
//                   sizes="(max-width: 768px) 150px, 200px"
//                 />
//               </div>

//               {/* Text Content */}
//               <div className="relative z-10 pt-10 md:pt-0">
//                 <h3 
//                   className="text-2xl md:text-3xl font-serif font-bold mb-4 max-w-[80%]"
//                   style={{ color: service.color === "#1F3D2E" ? "#F5F0E6" : "#1F3D2E" }}
//                 >
//                   {service.title}
//                 </h3>
//                 <p 
//                   className="text-base md:text-lg leading-relaxed max-w-[90%]"
//                   style={{ color: service.color === "#1F3D2E" ? "rgba(245, 240, 230, 0.9)" : "rgba(43, 43, 43, 0.8)" }}
//                 >
//                   {service.desc}
//                 </p>
//               </div>
              
//               <div className="relative z-10 mt-8">
//                 <a 
//                   href="#learn-more" 
//                   className="inline-block font-medium border-b-2 pb-1 transition-all hover:pr-2"
//                   style={{ 
//                     color: service.color === "#1F3D2E" ? "#D9C7A7" : "#1F3D2E",
//                     borderColor: service.color === "#1F3D2E" ? "#D9C7A7" : "#1F3D2E",
//                     textDecoration: "none"
//                   }}
//                 >
//                   Learn more &rarr;
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
import Image from "next/image";

export default function Services() {
  const services = [
    {
      title: "Clinic & Therapy",
      desc: "Psychologists, psychiatrists, counsellors, family therapy, and a pharmacy—all in one safe space.",
      color: "#D9C7A7", // Kraft
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=400&auto=format&fit=crop" 
    },
    {
      title: "Sponsorship Programme",
      desc: "Walk alongside someone in recovery. Online sign-up, meet-and-greets every 2 months, and therapy for sponsors too.",
      color: "#C4704B", // Clay
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=400&auto=format&fit=crop" 
    },
    {
      title: "Mobile & Home Services",
      desc: "Home visits and a mobile lab for intoxication tests, bringing care to those who cannot reach us.",
      color: "#1F3D2E", // Forest
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=400&auto=format&fit=crop" 
    },
    {
      title: "Community & Outings",
      desc: "Workshops, free seasonal boot camps with CBT, and safe monitored outings to break isolation.",
      color: "#F5F0E6", // Cream
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=400&auto=format&fit=crop" 
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10 overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      <div className="max-w-6xl mx-auto relative">
        
        <div className="text-center mb-16 relative z-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-6" style={{ color: "#1F3D2E" }}>
            How We Help You Rise
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: "rgba(43, 43, 43, 0.7)" }}>
            We don't just treat symptoms. We walk with you through recovery, community reintegration, and personal growth.
          </p>
        </div>

        {/* MOBILE VERTICAL SPINE (Only visible on mobile) */}
        <div className="absolute left-6 top-48 bottom-12 w-1 bg-[#1F3D2E]/20 md:hidden z-0 rounded-full"></div>

        {/* DESKTOP CONNECTING LINES */}
        <div className="hidden md:flex absolute inset-0 z-0 items-center justify-center pointer-events-none">
          <svg className="w-full h-full" style={{ opacity: 0.15 }}>
            <line x1="50%" y1="50%" x2="25%" y2="30%" stroke="#1F3D2E" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="50%" y1="50%" x2="75%" y2="30%" stroke="#1F3D2E" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="50%" y1="50%" x2="25%" y2="70%" stroke="#1F3D2E" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="50%" y1="50%" x2="75%" y2="70%" stroke="#1F3D2E" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>

        {/* DESKTOP CENTRAL HUB */}
        <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
          <div 
            className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl animate-text-breathe"
            style={{ backgroundColor: "#F5F0E6", border: "4px solid #1F3D2E", boxShadow: "0 0 40px rgba(31, 61, 46, 0.2)" }}
          >
            <span className="font-serif font-bold text-lg text-center leading-tight" style={{ color: "#1F3D2E" }}>
              Miamara<br/>Care
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 relative z-10">
          {services.map((service, index) => (
            <div 
              key={index}
              // On mobile: push cards to the right to make room for the spine. On desktop: use the alternating margins.
              className={`relative p-8 md:p-12 scroll-rotate flex flex-col justify-between overflow-hidden group ml-10 md:ml-0
                ${index === 0 ? "md:mr-12" : ""} 
                ${index === 1 ? "md:ml-12" : ""} 
                ${index === 2 ? "md:mr-12" : ""} 
                ${index === 3 ? "md:ml-12" : ""}
              `}
              style={{ 
                backgroundColor: service.color,
                borderRadius: index % 2 === 0 ? "40px 80px 40px 80px" : "80px 40px 80px 40px",
                boxShadow: "0 20px 40px -15px rgba(31, 61, 46, 0.1)",
                border: service.color === "#F5F0E6" ? "1px solid rgba(31, 61, 46, 0.1)" : "none"
              }}
            >
              {/* MOBILE CONNECTION NODE (The dot on the vertical line) */}
              <div 
                className="absolute top-12 -left-12 w-6 h-6 rounded-full md:hidden z-20 flex items-center justify-center"
                style={{ backgroundColor: "#1F3D2E", border: "4px solid #F5F0E6" }}
              ></div>

              {/* SMALL HUMAN IMAGE */}
              <div 
                className="absolute -top-6 -right-6 w-32 h-32 md:w-40 md:h-40 overflow-hidden shadow-lg transition-transform duration-700 group-hover:scale-110"
                style={{ borderRadius: "50% 50% 30% 70% / 40% 60% 40% 60%", border: "4px solid rgba(245, 240, 230, 0.4)", zIndex: 0 }}
              >
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  sizes="(max-width: 768px) 150px, 200px"
                />
              </div>

              {/* TEXT CONTENT */}
              <div className="relative z-10 pt-10 md:pt-0">
                <h3 
                  className="text-2xl md:text-3xl font-serif font-bold mb-4 max-w-[80%]"
                  style={{ color: service.color === "#1F3D2E" ? "#F5F0E6" : "#1F3D2E" }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-base md:text-lg leading-relaxed max-w-[90%]"
                  style={{ color: service.color === "#1F3D2E" ? "rgba(245, 240, 230, 0.9)" : "rgba(43, 43, 43, 0.8)" }}
                >
                  {service.desc}
                </p>
              </div>
              
              <div className="relative z-10 mt-8">
                <a 
                  href="#learn-more" 
                  className="inline-block font-medium border-b-2 pb-1 transition-all hover:pr-2"
                  style={{ 
                    color: service.color === "#1F3D2E" ? "#D9C7A7" : "#1F3D2E",
                    borderColor: service.color === "#1F3D2E" ? "#D9C7A7" : "#1F3D2E",
                    textDecoration: "none"
                  }}
                >
                  Learn more &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}