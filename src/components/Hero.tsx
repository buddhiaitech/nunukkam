import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Main Quote */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
              <span className="text-7xl md:text-9xl text-primary">"</span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Turning Potential
              </span>
              <br />
              <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
                into Finesse.
              </span>
              <span className="text-7xl md:text-9xl text-primary">"</span>
            </h1>
          </div>

          {/* Video Section */}
          <div className="max-w-5xl mx-auto mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src={heroImage} 
                alt="Nunukkam students collaborating" 
                className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                  <Play className="text-primary-foreground ml-1" size={32} fill="currentColor" />
                </div>
              </div>
            </div>
          </div>

          {/* Collaborators */}
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-xl text-muted-foreground mb-8 font-medium">
              Empowered by trusted collaborators
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {["IIT Madras", "Anna University", "VIT", "SRM", "Infosys", "TCS"].map((company) => (
                <div key={company} className="text-foreground font-semibold text-lg hover:opacity-100 transition-opacity">
                  {company}
                </div>
              ))}
            </div>
          </div>

          {/* Story Intro */}
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl font-bold mb-6 text-foreground">The story we're building</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every student has potential. But potential needs precision: the right guidance, the right skills, 
              and the right push to shine. At Nunukkam, we help young minds evolve from learners to leaders - 
              confident, skilled, and ready for the real world.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl"
            >
              Start the Journey
              <span className="ml-2">→</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full"
            >
              Partner with Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
