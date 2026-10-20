import Image from "next/image";

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 relative overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      
      {/* Background Blob */}
      <div 
        className="absolute top-40 left-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] -z-10 opacity-20"
        style={{ backgroundColor: "#D9C7A7", borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", filter: "blur(80px)" }}
      ></div>

      <div className="max-w-6xl mx-auto px-6">
        
        {/* SECTION 1: The Hero */}
        <div className="text-center max-w-3xl mx-auto mb-24 scroll-rotate">
          <span className="font-bold tracking-[0.2em] uppercase text-sm block mb-4" style={{ color: "#C4704B" }}>
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-serif mb-8" style={{ color: "#1F3D2E" }}>
            Comprehensive care, <br/>
            <span className="italic" style={{ color: "#C4704B" }}>from the clinic to the community.</span>
          </h1>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "rgba(43, 43, 43, 0.85)" }}>
            At Miamara, we don't just treat symptoms. We walk with you through recovery, community reintegration, and personal growth. Here is how we help you rise.
          </p>
        </div>

        {/* SERVICE 1: Clinic & Therapy */}
        <div id="service-0" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-24 scroll-rotate">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: "#1F3D2E" }}>Clinic & Therapy</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(43, 43, 43, 0.8)" }}>
              Our on-site clinic is a safe, non-judgmental space. We bring together psychologists, psychiatrists, counsellors, and family therapists to provide professional care tailored to your unique journey.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4704B" }}></span> Psychology & Psychiatry</li>
              <li className="flex items-center gap-3"><span className="w-2 h-4 rounded-full" style={{ backgroundColor: "#C4704B" }}></span> Family Therapy</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4704B" }}></span> On-site Pharmacy</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] aspect-[4/3] overflow-hidden shadow-xl relative"
                 style={{ borderRadius: "30% 70% 40% 60% / 50% 40% 60% 50%", border: "6px solid #F5F0E6" }}>
              <Image src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=800&auto=format&fit=crop" alt="Clinic" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* SERVICE 2: Mobile & Home Services */}
        <div id="service-2" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-24 scroll-rotate">
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-[400px] aspect-[4/3] overflow-hidden shadow-xl relative"
                 style={{ borderRadius: "60% 40% 30% 70% / 40% 50% 60% 50%", border: "6px solid #F5F0E6" }}>
              <Image src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop" alt="Mobile Services" fill className="object-cover" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: "#1F3D2E" }}>Mobile & Home Services</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(43, 43, 43, 0.8)" }}>
              For those who cannot easily reach us, we bring the care to you. Our mobile services ensure that distance or circumstance is never a barrier to getting help.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4704B" }}></span> Home Visits</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4704B" }}></span> Mobile Lab for Intoxication Tests</li>
            </ul>
          </div>
        </div>

        {/* SERVICE 3: Community Workshops & Outings */}
        <div id="service-3" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-24 scroll-rotate">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: "#1F3D2E" }}>Community & Outings</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(43, 43, 43, 0.8)" }}>
              Isolation fuels stigma. We create safe spaces for people struggling to find their place in their communities. Through workshops, free seasonal boot camps, and monitored outings, we help members come out of their shells and reintegrate into society.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4704B" }}></span> CBT Workshops</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4704B" }}></span> Seasonal Boot Camps</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4704B" }}></span> Safe, Monitored Outings</li>
            </ul>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-full max-w-[400px] aspect-[4/3] overflow-hidden shadow-xl relative"
                 style={{ borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%", border: "6px solid #F5F0E6" }}>
              <Image src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop" alt="Community" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* SERVICE 1: Homelessness Initiative */}
                {/* SERVICE 4: Homelessness Initiative */}
        <div id="service-4" className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-24 scroll-rotate">
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-[400px] aspect-[4/3] overflow-hidden shadow-xl relative"
                 style={{ borderRadius: "50% 50% 30% 70% / 40% 60% 40% 60%", border: "6px solid #F5F0E6" }}>
              <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" alt="Homelessness Initiative" fill className="object-cover" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: "#1F3D2E" }}>Homelessness Initiative</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "rgba(43, 43, 43, 0.8)" }}>
              We extend our reach to those whose lives we could not otherwise see. By providing meals, public baths to build self-esteem, apprenticeships, and job matching, we help restore dignity and transform lives.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4704B" }}></span> Meals & Public Baths</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4704B" }}></span> Apprenticeships</li>
              <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#C4704B" }}></span> Job Matching</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center scroll-rotate mt-16">
          <a href="/sponsorship" className="inline-block px-8 py-4 rounded-full text-lg font-medium transition-all hover:-translate-y-1" 
             style={{ backgroundColor: "#1F3D2E", color: "#F5F0E6", textDecoration: "none", boxShadow: "0 10px 25px -5px rgba(31, 61, 46, 0.3)" }}>
            Become a Sponsor
          </a>
        </div>

      </div>
    </div>
  );
}