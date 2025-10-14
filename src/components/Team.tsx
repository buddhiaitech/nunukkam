import { Award, Briefcase, GraduationCap, Users } from "lucide-react";

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

          {/* Team Member */}
          <div className="bg-background rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="grid md:grid-cols-5 gap-8">
              {/* Profile Image */}
              <div className="md:col-span-2 bg-gradient-to-br from-primary to-secondary p-1">
                <div className="bg-background h-full flex items-center justify-center p-12">
                  <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Users className="w-24 h-24 text-primary" />
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="md:col-span-3 p-8 md:p-12">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
