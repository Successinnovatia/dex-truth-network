import { Shield, Twitter, MessageCircle, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    Platform: [
      { label: 'About', href: '#about' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Features', href: '#features' },
      { label: 'News Feed', href: '/news' }
    ],
    Community: [
      { label: 'Join Beta', href: '#community' },
      { label: 'Contributors', href: '#contributors' },
      { label: 'Fact-Checkers', href: '#fact-checkers' },
      { label: 'Blog', href: '/blog' }
    ],
    Support: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact Us', href: '/contact' },
      { label: 'API Docs', href: '/api' },
      { label: 'Status', href: '/status' }
    ],
    Legal: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Guidelines', href: '/guidelines' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/dextruth', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://t.me/dextruth', label: 'Telegram' },
    { icon: Users, href: 'https://discord.gg/dextruth', label: 'Discord' }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="py-20 border-t border-border/30">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Shield className="h-8 w-8 text-accent" />
              <span className="text-2xl font-poppins font-bold text-gradient">
                DexTruth
              </span>
            </Link>
            <p className="text-muted-foreground font-inter mb-6 max-w-sm">
              Truth on the Blockchain. Building the future of journalism through 
              decentralized verification and community-driven fact-checking.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/20 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-poppins font-semibold text-foreground mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-muted-foreground hover:text-accent transition-colors font-inter text-sm"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-accent transition-colors font-inter text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground font-inter text-sm mb-4 md:mb-0">
              © 2024 DexTruth. All rights reserved. • Truth on the Blockchain.
            </div>
            
            {/* Network Status */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="text-muted-foreground font-inter">Network Online</span>
              </div>
              <div className="text-muted-foreground font-inter">
                Block Height: 2,847,291
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <div className="glass-card p-6 rounded-lg">
            <p className="text-muted-foreground font-inter text-sm text-center">
              <strong className="text-foreground">Disclaimer:</strong> DexTruth is an experimental platform 
              leveraging blockchain technology for news verification. While we strive for accuracy, 
              users should always cross-reference information and exercise critical thinking. 
              The platform is currently in beta and features may change.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;