import { Shield, Users, Lock, Eye, Zap, Globe } from 'lucide-react';
import verificationBadge from '@/assets/verification-badge.png';

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified News Stories",
      description: "Every article goes through rigorous blockchain-based verification before publication.",
      benefits: ["Multi-source validation", "Expert fact-checking", "Authenticity guarantees"],
      highlight: "99.9% Accuracy Rate"
    },
    {
      icon: Users,
      title: "Community-Driven Fact-Checking",
      description: "Global network of qualified reviewers ensures comprehensive content validation.",
      benefits: ["Peer review system", "Reputation scoring", "Bias elimination"],
      highlight: "5000+ Expert Reviewers"
    },
    {
      icon: Lock,
      title: "Blockchain-Backed Authenticity",
      description: "Immutable record-keeping ensures content integrity and prevents tampering.",
      benefits: ["Cryptographic proof", "Permanent storage", "Version control"],
      highlight: "100% Immutable"
    },
    {
      icon: Eye,
      title: "Privacy-First Approach",
      description: "Read and contribute while maintaining your privacy and data sovereignty.",
      benefits: ["Anonymous reading", "Encrypted submissions", "Data ownership"],
      highlight: "Zero Data Collection"
    },
    {
      icon: Zap,
      title: "Real-Time Updates",
      description: "Get instant notifications for breaking news and fact-check updates.",
      benefits: ["Push notifications", "Live verification", "Breaking news alerts"],
      highlight: "Sub-second Delivery"
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Access verified news from anywhere in the world without restrictions.",
      benefits: ["Censorship resistance", "Multi-language support", "Global network"],
      highlight: "Available Worldwide"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
            Built with cutting-edge blockchain technology and community-driven governance 
            to deliver the most reliable news platform ever created.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-card p-8 rounded-lg group">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:bg-primary/30 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground font-inter mb-6">
                {feature.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2 mb-6">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                    <span className="text-muted-foreground font-inter">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Highlight */}
              <div className="text-accent font-poppins font-semibold text-sm bg-accent/10 px-3 py-2 rounded-full inline-block">
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Verification Badge Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 rounded-lg text-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-poppins font-bold mb-6 text-foreground">
                  The <span className="text-gradient">DexTruth</span> Verification Badge
                </h3>
                <p className="text-lg text-muted-foreground mb-6 font-inter">
                  Our unique verification badge appears on every authenticated article, 
                  providing readers with instant confidence in the content's accuracy and authenticity.
                </p>
                <div className="space-y-4 text-left">
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-accent mr-3" />
                    <span className="text-muted-foreground font-inter">Blockchain-verified authenticity</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-accent mr-3" />
                    <span className="text-muted-foreground font-inter">Community-approved content</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-5 w-5 text-accent mr-3" />
                    <span className="text-muted-foreground font-inter">Full transparency trail</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src={verificationBadge} 
                    alt="DexTruth Verification Badge" 
                    className="w-48 h-48 animate-glow"
                  />
                  <div className="absolute inset-0 bg-accent/20 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;