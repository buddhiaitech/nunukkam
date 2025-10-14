import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import TheChallenge from "@/components/TheChallenge";
import WhatWeDo from "@/components/WhatWeDo";
import WhyNunukkam from "@/components/WhyNunukkam";
import Team from "@/components/Team";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <OurStory />
        <TheChallenge />
        <WhatWeDo />
        <WhyNunukkam />
        <Team />
      </main>
      <footer className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg font-semibold mb-2">Nunukkam (நுணுக்கம்)</p>
          <p className="text-sm opacity-90">Turning Potential into Finesse</p>
          <p className="text-xs mt-4 opacity-75">© 2025 Nunukkam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
