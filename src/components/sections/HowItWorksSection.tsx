import { FileText, Users, Shield, CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      title: "Content Submission",
      description: "Journalists and contributors submit news articles with comprehensive source documentation and metadata.",
      details: [
        "Multi-source verification required",
        "Digital signatures for authenticity",
        "Automated plagiarism detection"
      ]
    },
    {
      icon: Users,
      title: "Community Verification",
      description: "A network of qualified fact-checkers reviews and validates the submitted content using our reputation system.",
      details: [
        "Peer review by verified experts",
        "Cross-reference fact checking",
        "Bias detection algorithms"
      ]
    },
    {
      icon: Shield,
      title: "Blockchain Recording",
      description: "Verified articles are permanently recorded on the blockchain with cryptographic proof of authenticity.",
      details: [
        "Immutable timestamp proof",
        "Hash-based content integrity",
        "Distributed storage network"
      ]
    },
    {
      icon: CheckCircle,
      title: "Publication & Access",
      description: "Verified content becomes publicly accessible with full transparency about sources and verification process.",
      details: [
        "Real-time transparency dashboard",
        "Source traceability",
        "Community feedback system"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            How <span className="text-gradient">DexTruth</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Our four-step process ensures that only verified, accurate news reaches our community 
            while maintaining complete transparency and accountability.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-accent font-poppins font-bold text-lg">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-poppins font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 font-inter">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground font-inter">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`flex justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="glass-card p-12 rounded-lg group hover:scale-105 transition-transform">
                    <step.icon className="h-24 w-24 text-accent mx-auto animate-glow" />
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-12">
                  <div className="w-px h-16 bg-gradient-to-b from-accent/50 to-primary/50"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-20">
          <div className="glass-card p-8 rounded-lg">
            <h3 className="text-2xl font-poppins font-semibold text-center mb-8 text-foreground">
              Why This Process Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-accent mb-2">100%</div>
                <div className="text-muted-foreground font-inter text-sm">Transparency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-accent mb-2">Zero</div>
                <div className="text-muted-foreground font-inter text-sm">Censorship</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-accent mb-2">24/7</div>
                <div className="text-muted-foreground font-inter text-sm">Verification</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-accent mb-2">Global</div>
                <div className="text-muted-foreground font-inter text-sm">Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;