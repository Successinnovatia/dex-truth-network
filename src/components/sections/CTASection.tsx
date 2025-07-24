import { Button } from '@/components/ui/button';
import { ArrowRight, Users, FileText, Star } from 'lucide-react';

const CTASection = () => {
  const actionCards = [
    {
      icon: Users,
      title: "Join Beta Access",
      description: "Be among the first to experience the future of journalism",
      buttonText: "Sign Up for Beta",
      buttonVariant: "accent" as const,
      stats: "1000+ Early Adopters"
    },
    {
      icon: FileText,
      title: "Read Verified News",
      description: "Access our growing library of blockchain-verified articles",
      buttonText: "Browse News Feed",
      buttonVariant: "primary" as const,
      stats: "10K+ Verified Articles"
    },
    {
      icon: Star,
      title: "Become a Contributor",
      description: "Help shape the future of decentralized journalism",
      buttonText: "Apply to Contribute",
      buttonVariant: "secondary" as const,
      stats: "500+ Contributors"
    }
  ];

  return (
    <section id="community" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Main CTA */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
            Be Part of the <span className="text-gradient">Truth Revolution</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter mb-8">
            Join thousands of truth-seekers, journalists, and fact-checkers who are building 
            the most transparent news ecosystem in history.
          </p>
          
          {/* Primary CTA */}
          <div className="mb-16">
            <Button 
              size="lg" 
              className="btn-glow bg-accent text-accent-foreground hover:bg-accent/90 font-poppins font-bold text-xl px-12 py-6 group mr-4 mb-4"
            >
              Join DexTruth Today
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <div className="text-sm text-muted-foreground font-inter">
              Free to join • No commitment required • Cancel anytime
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {actionCards.map((card, index) => (
            <div key={index} className="glass-card p-8 rounded-lg text-center group hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 group-hover:bg-primary/30 transition-colors">
                <card.icon className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-poppins font-semibold mb-4 text-foreground">
                {card.title}
              </h3>
              
              <p className="text-muted-foreground font-inter mb-6">
                {card.description}
              </p>
              
              <div className="text-accent font-poppins font-semibold text-sm mb-6">
                {card.stats}
              </div>
              
              <Button 
                className={`w-full font-poppins font-semibold ${
                  card.buttonVariant === 'accent' 
                    ? 'btn-glow bg-accent text-accent-foreground hover:bg-accent/90' 
                    : card.buttonVariant === 'primary'
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                }`}
              >
                {card.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 rounded-lg text-center">
            <h3 className="text-2xl font-poppins font-semibold mb-4 text-foreground">
              Stay Updated
            </h3>
            <p className="text-muted-foreground font-inter mb-6">
              Get the latest updates on DexTruth development, new features, and verified news highlights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground font-inter focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="btn-glow bg-accent text-accent-foreground hover:bg-accent/90 font-poppins font-semibold px-8">
                Subscribe
              </Button>
            </div>
            <div className="text-xs text-muted-foreground mt-3 font-inter">
              We respect your privacy. Unsubscribe at any time.
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground font-inter mb-8">
            Trusted by journalists, fact-checkers, and truth-seekers worldwide
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-poppins font-bold">Reuters</div>
            <div className="text-2xl font-poppins font-bold">AP News</div>
            <div className="text-2xl font-poppins font-bold">BBC</div>
            <div className="text-2xl font-poppins font-bold">Guardian</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;