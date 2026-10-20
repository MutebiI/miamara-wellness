export default function FounderStory() {
  return (
    <section 
      className="relative px-6 py-24 md:py-32 rounded-t-[3rem] md:rounded-t-[5rem] z-10" 
      style={{ backgroundColor: "#1F3D2E" }}
    >
      <div className="max-w-3xl mx-auto scroll-rotate">
        
        <h2 
          className="text-4xl md:text-5xl font-serif mb-10 md:mb-12" 
          style={{ color: "#D9C7A7" }}
        >
          Why Miamara exists.
        </h2>
        
        <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed" style={{ color: "#F5F0E6" }}>
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

        <div className="mt-12 md:mt-16 flex items-center gap-4">
          <div className="w-12 h-1 rounded-full" style={{ backgroundColor: "#C4704B" }}></div>
          <span className="text-lg md:text-xl italic font-serif" style={{ color: "#D9C7A7" }}>
            Ashabahebwa Denise, Founder
          </span>
        </div>

      </div>
    </section>
  );
}