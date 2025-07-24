import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Shield, Search, Filter, Calendar, User, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/sections/Footer';

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock news data
  const newsArticles = [
    {
      id: 1,
      title: "Blockchain Technology Revolutionizes Supply Chain Transparency",
      excerpt: "Major corporations are adopting blockchain-based tracking systems to provide unprecedented visibility into their supply chains, improving accountability and consumer trust.",
      author: "Sarah Chen",
      publishedAt: "2024-01-15T10:30:00Z",
      category: "Technology",
      verificationScore: 98,
      sources: 5,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 2,
      title: "Global Climate Summit Reaches Historic Agreement on Carbon Neutrality",
      excerpt: "Representatives from 195 countries unanimously agree on ambitious targets for carbon reduction, marking a turning point in international climate policy.",
      author: "Dr. Michael Rodriguez",
      publishedAt: "2024-01-14T14:15:00Z",
      category: "Environment",
      verificationScore: 96,
      sources: 8,
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Decentralized Internet Infrastructure Shows Promise in Rural Areas",
      excerpt: "Pilot programs using mesh network technology demonstrate how decentralized systems can provide reliable internet access to underserved communities.",
      author: "Alex Thompson",
      publishedAt: "2024-01-13T09:45:00Z",
      category: "Technology",
      verificationScore: 94,
      sources: 4,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 4,
      title: "Cryptocurrency Adoption Surges in Developing Economies",
      excerpt: "Financial inclusion increases as digital currencies provide banking alternatives for unbanked populations across Africa, Asia, and Latin America.",
      author: "Jennifer Park",
      publishedAt: "2024-01-12T16:20:00Z",
      category: "Finance",
      verificationScore: 99,
      sources: 7,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4618c5?w=800&h=400&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 5,
      title: "AI-Powered Fact-Checking Tools Reduce Misinformation Spread",
      excerpt: "New artificial intelligence systems demonstrate remarkable accuracy in identifying false claims and misleading content across social media platforms.",
      author: "David Kumar",
      publishedAt: "2024-01-11T11:30:00Z",
      category: "Technology",
      verificationScore: 97,
      sources: 6,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      readTime: "4 min read"
    }
  ];

  const categories = ['all', 'Technology', 'Environment', 'Finance', 'Politics', 'Health'];

  const filteredArticles = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getVerificationColor = (score: number) => {
    if (score >= 95) return 'text-accent';
    if (score >= 90) return 'text-primary';
    return 'text-muted-foreground';
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6">
              <span className="text-gradient">Verified</span> News Feed
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
              Access blockchain-verified news stories from trusted contributors worldwide. 
              Every article is fact-checked and authenticated before publication.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 rounded-lg">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="Search verified news..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-input border-border text-foreground"
                  />
                </div>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-inter font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article key={article.id} className="glass-card rounded-lg overflow-hidden group hover:scale-105 transition-transform">
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-accent/90 text-accent-foreground">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-secondary/90">
                      {article.category}
                    </Badge>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <h3 className="text-xl font-poppins font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  {/* Article Meta */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {article.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(article.publishedAt)}
                      </div>
                    </div>
                    <div className="text-muted-foreground">
                      {article.readTime}
                    </div>
                  </div>

                  {/* Verification Details */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-xs">
                        <span className="text-muted-foreground">Verification: </span>
                        <span className={`font-semibold ${getVerificationColor(article.verificationScore)}`}>
                          {article.verificationScore}%
                        </span>
                      </div>
                      <div className="text-xs">
                        <span className="text-muted-foreground">Sources: </span>
                        <span className="text-accent font-semibold">{article.sources}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 group">
                    Read Full Article
                    <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-poppins font-semibold">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;