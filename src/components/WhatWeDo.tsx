import { useState } from "react";
import { MessageSquare, Target, Brain, Heart, Briefcase } from "lucide-react";

interface CourseModule {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const WhatWeDo = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const modules: CourseModule[] = [
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "The Articulation Factor",
      description: "Communication modules to enable students find the right words for their voice.",
      color: "from-primary to-accent"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "The Self Mastery Tool Kit",
      description: "Goal setting, time management & Adaptability modules to help them navigate through inner aspirations and external uncertainties.",
      color: "from-secondary to-primary"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "The Analytical Edge",
      description: "Reasoning and analytical skills modules to equip the students to substantiate their stance through rationales.",
      color: "from-accent to-secondary"
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "The Human Factor",
      description: "Emotional Intelligence, Persuasion and Networking modules to nudge them through the path of empathy and people management.",
      color: "from-primary to-secondary"
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "The Business Lens",
      description: "All the business understanding in a module to bridge the gap between academics and corporates.",
      color: "from-secondary to-accent"
    }
  ];

  return (
    <section id="what-we-do" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              From Campus to Corporate
            </h2>
            <p className="text-xl text-muted-foreground">with nuance & precision</p>
          </div>

          {/* Body */}
          <div className="bg-muted/30 rounded-3xl p-8 md:p-12 mb-16 animate-fade-in">
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Nunukkam blends real-world exposure, corporate mentoring, and personalized coaching to 
              prepare students for the workforce — not just with skill, but with finesse.
            </p>
            
            <h3 className="text-2xl font-bold text-foreground mb-6">We Focus On:</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { title: "Articulation Mastery", desc: "Equipping students with the language and confidence to express ideas with clarity and impact" },
                { title: "Adult Learning Principles", desc: "Experiential, practical training designed for how professionals actually learn" },
                { title: "Training + Mentorship Model", desc: "Combining structured skill-building with personalized guidance and feedback" },
                { title: "Framework-Driven Problem Solving", desc: "Teaching proven methodologies for navigating real-world business challenges" },
                { title: "Tech-Enabled Progress Tracking", desc: "Data-driven assessments and competency reports to validate and measure growth" },
                { title: "Post-Placement Partnership", desc: "Ongoing support to ensure sustained career success beyond job placement" },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-foreground">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg font-semibold text-primary">
                At Nunukkam, the journey doesn't stop at opportunity — it starts with transformation.
              </p>
            </div>
          </div>

          {/* Course Modules */}
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Nunukkam course is built to equip students in 5 key aspects:
            </h3>
            <p className="text-muted-foreground">Click on each card to learn more</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {modules.map((module, index) => (
              <div
                key={index}
                className="relative h-80 cursor-pointer perspective-1000 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setFlippedCard(flippedCard === index ? null : index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                    flippedCard === index ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front */}
                  <div className="absolute w-full h-full backface-hidden">
                    <div className={`h-full bg-gradient-to-br ${module.color} rounded-3xl p-8 flex flex-col items-center justify-center text-center text-white shadow-xl hover:shadow-2xl transition-shadow`}>
                      <div className="mb-4">
                        {module.icon}
                      </div>
                      <h4 className="text-xl font-bold">{module.title}</h4>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <div className="h-full bg-background border-2 border-primary rounded-3xl p-8 flex items-center justify-center text-center shadow-xl">
                      <p className="text-foreground leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Focus */}
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 animate-fade-in">
            <h4 className="text-2xl font-bold text-foreground mb-4">Industry Specific Training</h4>
            <p className="text-lg text-muted-foreground">
              Customized training to fit the needs of specific industries and companies.
            </p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}} />
    </section>
  );
};

export default WhatWeDo;
