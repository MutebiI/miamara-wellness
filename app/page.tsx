import Hero from "../components/Hero";
import FounderStory from "../components/FounderStory.tsx";
import Services from "../components/Services";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <FounderStory />
      <Services />
    </main>
  );
}