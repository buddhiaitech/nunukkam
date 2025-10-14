import { Video } from "lucide-react";
import storyBg from "@/assets/story-bg.jpg";

const OurStory = () => {
  return (
    <section id="story" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src={storyBg} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Born from the Belief that Finesse Builds Futures.
            </h2>
          </div>

          {/* Body Content */}
          <div className="space-y-8 mb-16 animate-fade-in">
            <p className="text-2xl text-center text-foreground leading-relaxed font-medium">
              Nunukkam began with a simple question:
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center text-xl text-muted-foreground">
              <span className="italic">"If everyone's qualified, why aren't all employable?"</span>
              <span className="hidden md:inline">|</span>
              <span className="italic">"Skilled in theory, lost in reality?"</span>
              <span className="hidden md:inline">|</span>
              <span className="italic">"If talent is everywhere, why isn't success?"</span>
            </div>
            
            <div className="bg-muted/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                We realized the problem wasn't talent. It was the gap between knowing and doing, 
                between degrees and deliverables.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                So, we set out to bridge it with training that builds not just skills, but confidence, 
                clarity, and character & capability.
              </p>
              <p className="text-lg text-primary font-semibold leading-relaxed">
                Today, Nunukkam stands as a movement — shaping youth into future professionals & 
                entrepreneurs who are polished, purposeful, and poised to perform.
              </p>
            </div>
          </div>

          {/* The Meaning Behind Nunukkam */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 animate-fade-in">
            <div className="flex items-center gap-4 mb-8">
              <Video className="text-primary" size={32} />
              <h3 className="text-3xl font-bold text-foreground">The Meaning Behind "Nunukkam"</h3>
            </div>
            
            <div className="space-y-6">
              <div className="bg-background/80 rounded-2xl p-6">
                <p className="text-xl font-bold text-primary mb-2">Nunukkam (நுணுக்கம்)</p>
                <p className="text-sm text-muted-foreground italic mb-4">noun, Tamil origin</p>
                <p className="text-lg font-semibold text-foreground">
                  Meaning: Finesse. Precision. Refinement.
                </p>
              </div>
              
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  In Tamil, "Nunukkam" reflects the art of doing anything with finesse, where every 
                  action carries thought, precision, and purpose.
                </p>
                <p>
                  It's not just about finishing a task, but crafting it with care, clarity, and excellence.
                </p>
                <p className="text-lg font-semibold text-primary">
                  That's what we stand for.
                </p>
                <p>
                  At Nunukkam, we believe true success lies in <span className="font-semibold">how</span> something is done, 
                  not just <span className="font-semibold">that</span> it's done.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
