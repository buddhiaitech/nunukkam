import { TrendingDown, TrendingUp } from "lucide-react";

const TheChallenge = () => {
  return (
    <section id="challenge" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Degrees Are Plenty. Job-Ready Talent Is Rare.
            </h2>
          </div>

          {/* Statistics */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 animate-fade-in">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <TrendingUp className="text-primary w-12 h-12 opacity-20" />
              </div>
              <div className="text-6xl font-bold text-primary mb-4">1B</div>
              <p className="text-xl font-semibold text-foreground">Students Graduate in India</p>
              <p className="text-sm text-muted-foreground mt-2">Every Year</p>
            </div>
            
            <div className="bg-gradient-to-br from-destructive/10 to-secondary/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <TrendingDown className="text-destructive w-12 h-12 opacity-20" />
              </div>
              <div className="text-6xl font-bold text-destructive mb-4">&lt;50%</div>
              <p className="text-xl font-semibold text-foreground">Are Job-Ready</p>
              <p className="text-sm text-muted-foreground mt-2">Can Get Employment</p>
            </div>
          </div>

          {/* Source */}
          <p className="text-xs text-center text-muted-foreground mb-12 animate-fade-in">
            Source: India Skills Report 2025 & Mercer-Mettl's India Graduate Skill Index 2025
          </p>

          {/* Body Content */}
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl animate-fade-in">
            <p className="text-xl text-foreground leading-relaxed mb-6">
              The rest spend months trying to fit in, find clarity, and build confidence. 
              The kind that theory alone can't create.
            </p>
            <p className="text-2xl font-bold text-primary">
              It's time to change that story.
            </p>
          </div>

          {/* Visual Comparison */}
          <div className="mt-16 grid md:grid-cols-2 gap-8 animate-fade-in">
            <div className="text-center p-8 rounded-2xl bg-muted/50 border-2 border-dashed border-muted-foreground/30">
              <div className="text-4xl mb-4">🎓</div>
              <p className="text-lg font-semibold text-muted-foreground">Classroom Graduate</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary">
              <div className="text-4xl mb-4">💼</div>
              <p className="text-lg font-semibold text-foreground">Confident Young Professional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheChallenge;
