export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 relative overflow-hidden" style={{ backgroundColor: "#F5F0E6" }}>
      <div className="max-w-3xl mx-auto scroll-rotate">
        
        <h1 className="text-4xl md:text-5xl font-serif mb-8" style={{ color: "#1F3D2E" }}>
          Privacy Policy
        </h1>
        
        <p className="text-sm mb-12" style={{ color: "rgba(43, 43, 43, 0.6)" }}>
          Last updated: October 2026
        </p>

        <div className="space-y-8 text-lg leading-relaxed" style={{ color: "rgba(43, 43, 43, 0.85)" }}>
          <section>
            <h2 className="text-2xl font-serif font-bold mb-4" style={{ color: "#1F3D2E" }}>Our Commitment to Privacy</h2>
            <p>
              At Miamara Wellness Centre, discretion and trust are the foundations of our care. We understand that seeking mental health support or making a donation requires a high level of privacy. We are committed to handling all personal information with the utmost respect and confidentiality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4" style={{ color: "#1F3D2E" }}>Information We Collect</h2>
            <p className="mb-4">
              We only collect information that you voluntarily provide to us. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact information (name, email, phone number) submitted through our contact or sponsorship forms.</li>
              <li>Donation information (amount, named or anonymous status).</li>
              <li>Any personal details you choose to share in a message to our team.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4" style={{ color: "#1F3D2E" }}>How We Protect Your Data</h2>
            <p>
              Your information is never sold, traded, or shared with third parties. All communications and submissions are handled securely. If you choose to donate anonymously, your identity will never be disclosed to the public or published in our reports.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4" style={{ color: "#1F3D2E" }}>Medical Confidentiality</h2>
            <p>
              Any medical or therapeutic information shared during the process of seeking help is strictly confidential. It is protected by doctor-patient privilege and is only accessible to the assigned care team, as required to provide you with the best support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif font-bold mb-4" style={{ color: "#1F3D2E" }}>Contact Us</h2>
            <p>
              If you have any questions about how your data is handled, or if you wish to have your information removed from our records, please contact us at <a href="mailto:deniseamari77@gmail.com" className="underline hover:text-[#C4704B]" style={{ color: "#1F3D2E" }}>deniseamari77@gmail.com</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}