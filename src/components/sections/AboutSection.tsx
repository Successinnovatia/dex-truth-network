import { AlertTriangle, Shield, Users, Zap } from 'lucide-react';
import networkIllustration from '@/assets/network-illustration.png';

const AboutSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Media Bias",
      description: "Traditional news sources often present biased narratives"
    },
    {
      icon: AlertTriangle,
      title: "Misinformation",
      description: "False information spreads faster than verified facts"
    },
    {
      icon: AlertTriangle,
      title: "Censorship",
      description: "Important stories get suppressed or buried"
    }
  ];

  const solutions = [
    {
      icon: Shield,
      title: "Blockchain Verification",
      description: "Every article is cryptographically verified and immutable"
    },
    {
      icon: Users,
      title: "Community Fact-Checking",
      description: "Distributed verification by qualified contributors"
    },
    {
      icon: Zap,
      title: "Real-Time Transparency",
      description: "Full audit trail and source verification visible to all"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            The <span className="text-gradient">Truth</span> Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            In an era of information abundance, distinguishing truth from fiction has become 
            increasingly difficult. Traditional media faces unprecedented challenges.
          </p>
        </div>

        {/* Problems Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-poppins font-semibold text-center mb-12 text-foreground">
            Current Challenges
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="glass-card p-8 rounded-lg text-center group hover:scale-105 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/20 rounded-full mb-6 group-hover:bg-destructive/30 transition-colors">
                  <problem.icon className="h-8 w-8 text-destructive" />
                </div>
                <h4 className="text-xl font-poppins font-semibold mb-4 text-foreground">
                  {problem.title}
                </h4>
                <p className="text-muted-foreground font-inter">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How DexTruth Works - Visual */}
        <div className="mb-20">
          <div className="glass-card p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-poppins font-bold mb-6 text-gradient">
                  Our Solution
                </h3>
                <p className="text-lg text-muted-foreground mb-6 font-inter">
                  DexTruth leverages blockchain technology and community verification 
                  to create an immutable, transparent news ecosystem.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-poppins font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground mb-1">Submit & Verify</h4>
                      <p className="text-muted-foreground font-inter text-sm">Contributors submit news with source verification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-poppins font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground mb-1">Community Review</h4>
                      <p className="text-muted-foreground font-inter text-sm">Qualified reviewers fact-check and validate content</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent font-poppins font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-foreground mb-1">Blockchain Lock</h4>
                      <p className="text-muted-foreground font-inter text-sm">Verified content is permanently stored on blockchain</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img 
                  src={networkIllustration} 
                  alt="Decentralized Network" 
                  className="max-w-full h-auto animate-float"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Section */}
        <div>
          <h3 className="text-2xl font-poppins font-semibold text-center mb-12 text-foreground">
            DexTruth Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="glass-card p-8 rounded-lg text-center group hover:scale-105 transition-transform">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6 group-hover:bg-accent/30 transition-colors">
                  <solution.icon className="h-8 w-8 text-accent" />
                </div>
                <h4 className="text-xl font-poppins font-semibold mb-4 text-foreground">
                  {solution.title}
                </h4>
                <p className="text-muted-foreground font-inter">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;