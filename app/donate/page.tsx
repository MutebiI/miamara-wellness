"use client";

import { useState } from "react";

export default function DonatePage() {
  const [givingType, setGivingType] = useState("named");

  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      
      {/* Background Blob */}
      <div 
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] -z-10 opacity-20"
        style={{ backgroundColor: "#D9C7A7", borderRadius: "50% 50% 30% 70% / 40% 60% 40% 60%", filter: "blur(80px)" }}
      ></div>

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Hero */}
        <div className="text-center mb-16 scroll-rotate">
          <span className="font-bold tracking-[0.2em] uppercase text-sm block mb-4" style={{ color: "#C4704B" }}>
            Support Our Mission
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mb-8" style={{ color: "#1F3D2E" }}>
            Your giving changes lives.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(43, 43, 43, 0.85)" }}>
            Every donation helps us provide professional care, sponsor someone in recovery, and extend our reach to the homeless. Thank you for walking beside us.
          </p>
        </div>

        {/* Donation Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 scroll-rotate">
          
          {/* Mobile Money */}
          <div className="p-8 shadow-lg" style={{ backgroundColor: "#FFFFFF", borderRadius: "40px 80px 40px 80px" }}>
            <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: "#1F3D2E" }}>Mobile Money</h3>
            <p className="text-sm mb-6" style={{ color: "rgba(43, 43, 43, 0.6)" }}>Quick and easy from anywhere in Uganda.</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-bold" style={{ color: "#C4704B" }}>MTN / Airtel</p>
                <p className="text-lg font-mono font-bold" style={{ color: "#1F3D2E" }}>+256 780 245 548</p>
                <p className="text-sm" style={{ color: "rgba(43, 43, 43, 0.8)" }}>Name: Ashabahebwa Denise</p>
              </div>
            </div>
          </div>

          {/* Bank Transfer */}
          <div className="p-8 shadow-lg" style={{ backgroundColor: "#FFFFFF", borderRadius: "80px 40px 80px 40px" }}>
            <h3 className="text-2xl font-serif font-bold mb-4" style={{ color: "#1F3D2E" }}>Bank Transfer</h3>
            <p className="text-sm mb-6" style={{ color: "rgba(43, 43, 43, 0.6)" }}>For larger donations or corporate giving.</p>
            
            <div className="space-y-2">
              <p className="text-sm" style={{ color: "rgba(43, 43, 43, 0.8)" }}><strong>Bank:</strong> [Insert Bank Name]</p>
              <p className="text-sm" style={{ color: "rgba(43, 43, 43, 0.8)" }}><strong>Account Name:</strong> Miamara Wellness Centre</p>
              <p className="text-sm" style={{ color: "rgba(43, 43, 43, 0.8)" }}><strong>Account No:</strong> [Insert Account Number]</p>
              <p className="text-sm" style={{ color: "rgba(43, 43, 43, 0.8)" }}><strong>Branch:</strong> Mbarara</p>
            </div>
          </div>

        </div>

        {/* Donation Form / Pledge */}
        <div className="p-8 md:p-12 shadow-2xl scroll-rotate" style={{ backgroundColor: "#1F3D2E", borderRadius: "60px 20px 60px 20px" }}>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif mb-4 text-center" style={{ color: "#F5F0E6" }}>
              Notify Us of Your Gift
            </h2>
            <p className="text-center mb-8" style={{ color: "rgba(245, 240, 230, 0.7)" }}>
              Once you have sent your donation, please fill this out so we can thank you and keep you updated on your impact.
            </p>

            <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">
              <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
              
              {/* Toggle Named vs Anonymous */}
              <div className="flex gap-4 mb-2">
                <button 
                  type="button"
                  onClick={() => setGivingType("named")}
                  className="flex-1 py-3 rounded-full font-medium transition-colors"
                  style={{ 
                    backgroundColor: givingType === "named" ? "#C4704B" : "transparent", 
                    color: givingType === "named" ? "#F5F0E6" : "#F5F0E6",
                    border: "1px solid #C4704B"
                  }}
                >
                  Give as Named
                </button>
                <button 
                  type="button"
                  onClick={() => setGivingType("anonymous")}
                  className="flex-1 py-3 rounded-full font-medium transition-colors"
                  style={{ 
                    backgroundColor: givingType === "anonymous" ? "#C4704B" : "transparent", 
                    color: givingType === "anonymous" ? "#F5F0E6" : "#F5F0E6",
                    border: "1px solid #C4704B"
                  }}
                >
                  Give Anonymously
                </button>
              </div>

              {givingType === "named" && (
                <div className="flex flex-col gap-4 animate-fade-up">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required
                    className="w-full p-4 rounded-xl outline-none"
                    style={{ backgroundColor: "#F5F0E6", color: "#2B2B2B" }}
                  />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email (so we can thank you)" 
                    required
                    className="w-full p-4 rounded-xl outline-none"
                    style={{ backgroundColor: "#F5F0E6", color: "#2B2B2B" }}
                  />
                </div>
              )}

              {givingType === "anonymous" && (
                <div className="flex flex-col gap-4 animate-fade-up">
                  <input 
                    type="hidden" 
                    name="name" 
                    value="Anonymous Donor" 
                  />
                  <input 
                    type="hidden" 
                    name="email" 
                    value="anonymous@miamara.org" 
                  />
                  <p className="text-center italic mb-2" style={{ color: "#D9C7A7" }}>
                    Your gift will be kept completely anonymous.
                  </p>
                </div>
              )}

              <input 
                type="text" 
                name="amount" 
                placeholder="Amount donated (e.g., 50,000 UGX)" 
                required
                className="w-full p-4 rounded-xl outline-none"
                style={{ backgroundColor: "#F5F0E6", color: "#2B2B2B" }}
              />

              <textarea 
                name="message" 
                placeholder="Any message you'd like to share with us (optional)" 
                rows={3}
                className="w-full p-4 rounded-xl outline-none"
                style={{ backgroundColor: "#F5F0E6", color: "#2B2B2B" }}
              ></textarea>

              <button 
                type="submit"
                className="px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1 mt-4"
                style={{ backgroundColor: "#C4704B", color: "#F5F0E6", boxShadow: "0 10px 25px -5px rgba(196, 112, 75, 0.3)", border: "none", cursor: "pointer" }}
              >
                Send Notification
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}