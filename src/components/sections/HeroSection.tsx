import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroBackground from '@/assets/hero-blockchain-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Animated Particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 leading-tight">
            <span className="text-gradient">Decentralized News</span>
            <br />
            <span className="text-foreground">for Truth</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-inter">
            Reclaim trust in journalism through blockchain-powered transparency 
            and user verification.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="btn-glow bg-accent text-accent-foreground hover:bg-accent/90 font-poppins font-semibold text-lg px-8 py-4 group"
            >
              Join the Movement
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card border-2 border-primary/30 text-foreground hover:bg-primary/10 font-poppins font-semibold text-lg px-8 py-4 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Explore Verified News
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-lg">
              <div className="text-3xl font-poppins font-bold text-accent mb-2">10K+</div>
              <div className="text-muted-foreground font-inter">Verified Articles</div>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="text-3xl font-poppins font-bold text-accent mb-2">5K+</div>
              <div className="text-muted-foreground font-inter">Contributors</div>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <div className="text-3xl font-poppins font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground font-inter">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;