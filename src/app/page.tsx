import About from "@/components/cards/page";
import Header from "../components/header";
import { HeroParallax } from "../components/ui/hero-parallax";

export default function Home() {
  return (
    <div className="min-h-screen p-10 bg-[#101010]">
      <Header />
      <HeroParallax />
      <About />
    </div>
  );
}
