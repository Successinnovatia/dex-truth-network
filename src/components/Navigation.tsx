import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#features', label: 'Features' },
    { href: '/news', label: 'News' },
    { href: '#community', label: 'Community' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'glass-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-accent" />
            <span className="text-xl font-poppins font-bold text-gradient">
              DexTruth
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href}>
                {link.href.startsWith('#') ? (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors font-inter font-medium"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-muted-foreground hover:text-accent transition-colors font-inter font-medium ${
                      location.pathname === link.href ? 'text-accent' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="btn-glow bg-accent text-accent-foreground hover:bg-accent/90 font-poppins font-semibold">
              Join Beta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 glass-card mt-2 rounded-lg">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.href.startsWith('#') ? (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-muted-foreground hover:text-accent transition-colors font-inter font-medium text-left px-4"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-muted-foreground hover:text-accent transition-colors font-inter font-medium px-4 block ${
                        location.pathname === link.href ? 'text-accent' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="px-4 pt-2">
                <Button className="btn-glow bg-accent text-accent-foreground hover:bg-accent/90 font-poppins font-semibold w-full">
                  Join Beta
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;