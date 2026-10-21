import Hero from "../components/Hero";
import FounderStory from "../components/FounderStory";
import Services from "../components/Services";
import ImpactStats from "../components/ImpactStats"; 

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <FounderStory />
      <ImpactStats />
      <Services />
      
    </main>
  );
}