import { Eye, Target, Sparkles } from "lucide-react";

const WhyNunukkam = () => {
  const values = [
    {
      letter: "E",
      title: "Excellence in Delivery",
      description: "We go beyond good to deliver impact with precision and purpose."
    },
    {
      letter: "P",
      title: "Purpose & Integrity",
      description: "We lead with honesty, transparency, and accountability."
    },
    {
      letter: "I",
      title: "Innovation & Agility",
      description: "We adapt, evolve, and create new pathways to success in a fast-changing world."
    },
    {
      letter: "C",
      title: "Collaboration & Community",
      description: "We grow together — learners, mentors, and partners in one shared journey."
    }
  ];

  return (
    <section id="why" className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Because Finesse Is the Future.
            </h2>
          </div>

          {/* Body */}
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl mb-16 animate-fade-in">
            <p className="text-xl text-foreground leading-relaxed mb-6">
              In a world led by automation and AI, what stands out is <span className="font-bold text-primary">human finesse</span>.
            </p>
            <p className="text-xl text-foreground leading-relaxed mb-6">
              Nunukkam helps every learner master the ability to think clearly, act confidently, and grow consistently.
            </p>
            <p className="text-2xl font-bold text-primary">
              We're not a training company. We're a career catalyst — connecting potential to purpose.
            </p>
          </div>

          {/* Quick Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in">
            {[
              { icon: <Sparkles className="w-8 h-8" />, text: "Tailor-made programs for colleges across every tier" },
              { icon: <Target className="w-8 h-8" />, text: "Mentorship by seasoned corporate leaders" },
              { icon: <Eye className="w-8 h-8" />, text: "Tech-driven assessments & learning" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center">
                <div className="flex justify-center mb-4 text-primary">
                  {item.icon}
                </div>
                <p className="font-semibold text-foreground">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 md:p-10 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="w-10 h-10 text-primary" />
                <h3 className="text-3xl font-bold text-foreground">Vision</h3>
              </div>
              <p className="text-lg text-foreground leading-relaxed">
                To build a community of exceptional individuals, transforming academic brilliance into purposeful thought leadership.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl p-8 md:p-10 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-10 h-10 text-secondary" />
                <h3 className="text-3xl font-bold text-foreground">Mission</h3>
              </div>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Equip students with practical skills that prepare them for the real world</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Nurture confidence, skills, and clarity that empower individuals to thrive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Provide mentoring and guidance to transform potential into achievement</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Core Values */}
          <div className="bg-background rounded-3xl p-8 md:p-12 shadow-xl animate-fade-in">
            <h3 className="text-3xl font-bold text-center text-foreground mb-4">Core Values</h3>
            <p className="text-center text-muted-foreground mb-12">
              These values aren't just words — they're how we shape every learner's tomorrow.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-2xl font-bold">
                      {value.letter}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground mb-2">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNunukkam;
