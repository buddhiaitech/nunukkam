import { Award, Briefcase, GraduationCap, Lightbulb, Quote } from "lucide-react";

const Team = () => {
  return (
    <section id="team" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              The Minds Driving Change
            </h2>
          </div>

          {/* Team Members Grid */}
          <div className="space-y-12">
            {/* Kishore Kumar PGR */}
            <div className="bg-background rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
              <div className="p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-foreground mb-2">Kishore Kumar PGR</h3>
                    <p className="text-xl text-primary font-semibold">Co-founder, Nunukkam</p>
                  </div>

                  <p className="text-lg text-foreground leading-relaxed mb-8">
                    Kishore brings over 30 years of expertise in business development, client relationship management, 
                    and multi-channel insurance operations. A strategic planner and turnaround specialist, he has 
                    successfully driven growth, market penetration, and performance across multiple industries.
                  </p>

                  {/* Expertise Section */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-6 h-6 text-primary" />
                      <h4 className="text-xl font-bold text-foreground">Expertise & Skills</h4>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Multi-industry experience: FMCG (Hindustan Lever Ltd), Banking (ICICI, HDFC), Life & Health Insurance",
                        "Multi-channel insurance: Agency, Variable, Direct Marketing, Corporate Broking, Bancassurance",
                        "Sales strategy, operations management, and market expansion",
                        "Leadership, team development, and performance turnaround",
                        "Cross-region experience: South India, North India, West India"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-6 h-6 text-secondary" />
                      <h4 className="text-xl font-bold text-foreground">Achievements</h4>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Revitalized branch and regional performance multiple times",
                        "Successfully set up new channels in the insurance industry",
                        "Trained and developed leaders to build high-performing teams"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="w-6 h-6 text-accent" />
                      <h4 className="text-xl font-bold text-foreground">Certifications</h4>
                    </div>
                    <div className="space-y-2">
                      {[
                        "Effective Agency Builder – Kinder Brothers, USA",
                        "Sales Expert – National Institute of Sales, New Delhi",
                        "Effective Leadership (Ad Astra) – McKinsey",
                        "Orbit Shift Intervention – EREHWON, Singapore"
                      ].map((cert, index) => (
                        <p key={index} className="text-foreground font-medium">{cert}</p>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-6 italic">
                    Multilingual and highly skilled in communication and organizational management, Kishore combines 
                    strategic vision with hands-on leadership to deliver sustainable growth and development.
                  </p>
                </div>
            </div>

            {/* Rajagopal */}
            <div className="bg-background rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
              <div className="p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-foreground mb-2">Rajagopal</h3>
                    <p className="text-xl text-secondary font-semibold">Co-founder, Nunukkam</p>
                  </div>

                  <p className="text-lg text-foreground leading-relaxed mb-8">
                    Rajagopal is a seasoned business leader with over two decades of experience in sales, distribution, 
                    and people leadership within India's financial services sector. Over the course of his career with 
                    ICICI Prudential Life Insurance and Bajaj Allianz Life Insurance, he has led large teams, driven 
                    business transformation across diverse markets, and built a strong track record in strategic growth, 
                    talent development, and organisational excellence.
                  </p>

                  {/* Vision & Mission */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-6 h-6 text-secondary" />
                      <h4 className="text-xl font-bold text-foreground">Vision & Mission</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Guided by a passion for nurturing people and building capability, Rajagopal and his co-founders 
                      established this venture with a shared vision to bridge the gap between education and employability. 
                      Their mission is to empower fresh graduates with the soft skills, professional readiness, and 
                      workplace confidence needed to thrive in today's dynamic job market.
                    </p>
                  </div>

                  {/* Key Focus Areas */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Award className="w-6 h-6 text-primary" />
                      <h4 className="text-xl font-bold text-foreground">Leadership Focus</h4>
                    </div>
                    <div className="space-y-3">
                      {[
                        "AI-integrated, state-of-the-art training modules for communication and professionalism",
                        "Post-placement support with continuous mentoring for up to six months",
                        "Helping corporates reduce early attrition through better employee adaptation",
                        "Creating holistic ecosystem connecting education, industry, and technology",
                        "Producing job-ready professionals and future leaders"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience Highlights */}
                  <div className="bg-gradient-to-br from-secondary/10 to-primary/10 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="w-6 h-6 text-accent" />
                      <h4 className="text-xl font-bold text-foreground">Experience Highlights</h4>
                    </div>
                    <div className="space-y-2">
                      {[
                        "ICICI Prudential Life Insurance",
                        "Bajaj Allianz Life Insurance",
                        "Led large teams across diverse markets",
                        "Expertise in strategic growth and talent development"
                      ].map((exp, index) => (
                        <p key={index} className="text-foreground font-medium">{exp}</p>
                      ))}
                    </div>
                  </div>

                  <p className="text-muted-foreground mt-6 italic">
                    By partnering with colleges and corporates, Rajagopal aims to create a holistic ecosystem where 
                    education, industry, and technology come together to produce job-ready professionals and future leaders.
                  </p>
                </div>
            </div>

            {/* Harisree Gudimella */}
            <div className="bg-background rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
              <div className="p-8 md:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-bold text-foreground mb-2">Harisree Gudimella</h3>
                    <p className="text-xl text-primary font-semibold">Chief of Product</p>
                    <p className="text-lg text-muted-foreground mt-2 italic">Building thinkers, not just learners.</p>
                  </div>

                  <p className="text-lg text-foreground leading-relaxed mb-8">
                    Harisree once asked a top-performing sales manager to explain why his pitch worked so well. He couldn't. 
                    He'd replicated it, scaled it, even trained others—but didn't understand why it worked. That moment 
                    changed everything: we're producing professionals who perform without principles.
                  </p>

                  {/* Experience */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-6 h-6 text-primary" />
                      <h4 className="text-xl font-bold text-foreground">Experience & Impact</h4>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Over 8 years of experience in professional training and development",
                        "Trained 20,000+ students and 10,000+ professionals",
                        "Expert insight: Most professional development solves the wrong problem",
                        "Focus on first principles thinking over frameworks and buzzwords"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Approach at Nunukkam */}
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Lightbulb className="w-6 h-6 text-secondary" />
                      <h4 className="text-xl font-bold text-foreground">Approach at Nunukkam</h4>
                    </div>
                    <div className="space-y-3">
                      {[
                        "Designs learning experiences rooted in metacognition and structured thinking",
                        "Teaches graduates to articulate clearly and solve problems methodically",
                        "Focuses on understanding the 'why' behind the work",
                        "Transforms graduates into professionals who deliver value from day one"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 rounded-full bg-secondary mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-muted-foreground">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Philosophy */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Quote className="w-6 h-6 text-accent" />
                      <h4 className="text-xl font-bold text-foreground">Philosophy</h4>
                    </div>
                    <p className="text-foreground font-medium mb-4">
                      Strong foundations don't need ornamentation.
                    </p>
                    <p className="text-primary italic text-lg">
                      "Seek your truth. Strengthen your tools. Think from the roots."
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
