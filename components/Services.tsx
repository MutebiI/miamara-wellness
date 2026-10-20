export default function Services() {
  const services = [
    {
      title: "Clinic & Therapy",
      desc: "Psychologists, psychiatrists, counsellors, family therapy, and a pharmacy—all in one safe space.",
      color: "#D9C7A7", // Kraft
      icon: "🫂"
    },
    {
      title: "Sponsorship Programme",
      desc: "Walk alongside someone in recovery. Online sign-up, meet-and-greets every 2 months, and therapy for sponsors too.",
      color: "#C4704B", // Clay
      icon: "🤝"
    },
    {
      title: "Mobile & Home Services",
      desc: "Home visits and a mobile lab for intoxication tests, bringing care to those who cannot reach us.",
      color: "#1F3D2E", // Forest (will use white text)
      icon: "🚐"
    },
    {
      title: "Community & Outings",
      desc: "Workshops, free seasonal boot camps with CBT, and safe monitored outings to break isolation.",
      color: "#F5F0E6", // Cream
      icon: "🌿"
    }
  ];

  return (
    <section className="py-24 px-6 relative z-10" style={{ backgroundColor: "#F5F0E6" }}>
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif mb-4" style={{ color: "#1F3D2E" }}>
            How We Help You Rise
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(43, 43, 43, 0.7)" }}>
            We don't just treat symptoms. We walk with you through recovery, community reintegration, and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 md:p-12 scroll-rotate flex flex-col justify-between"
              style={{ 
                backgroundColor: service.color,
                // Beautiful, organic curvy shapes (not perfect rectangles)
                borderRadius: index % 2 === 0 ? "40px 80px 40px 80px" : "80px 40px 80px 40px",
                boxShadow: "0 20px 40px -15px rgba(31, 61, 46, 0.1)",
                border: service.color === "#F5F0E6" ? "1px solid rgba(31, 61, 46, 0.1)" : "none"
              }}
            >
              <div>
                <span className="text-4xl mb-6 block">{service.icon}</span>
                <h3 
                  className="text-2xl md:text-3xl font-serif font-bold mb-4"
                  style={{ color: service.color === "#1F3D2E" ? "#F5F0E6" : "#1F3D2E" }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-base md:text-lg leading-relaxed"
                  style={{ color: service.color === "#1F3D2E" ? "rgba(245, 240, 230, 0.9)" : "rgba(43, 43, 43, 0.8)" }}
                >
                  {service.desc}
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#learn-more" 
                  className="inline-block font-medium border-b-2 pb-1 transition-colors hover:opacity-70"
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