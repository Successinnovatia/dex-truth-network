import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="text-center">
        <div className="glass-card p-12 rounded-lg max-w-md mx-auto">
          <AlertTriangle className="h-20 w-20 text-accent mx-auto mb-6" />
          <h1 className="text-6xl font-poppins font-bold mb-4 text-gradient">404</h1>
          <p className="text-xl text-muted-foreground mb-6 font-inter">Oops! This page doesn't exist in our decentralized network.</p>
          <Link to="/">
            <Button className="btn-glow bg-accent text-accent-foreground hover:bg-accent/90 font-poppins font-semibold">
              <Home className="h-4 w-4 mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
