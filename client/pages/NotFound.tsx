import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />

      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-6">
          <h1 className="font-luxurious text-8xl lg:text-9xl text-gray-blue mb-8">404</h1>
          <h2 className="font-serif text-3xl lg:text-4xl text-brown mb-6">
            Oops! This page seems to have wandered off
          </h2>
          <p className="text-gray-blue text-xl lg:text-2xl mb-12 leading-relaxed">
            The page you're looking for doesn't exist, but don't worry – we have plenty of other amazing content to explore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary">
              Go Back Home
            </Link>
            <Link to="/projects" className="btn-secondary">
              View Our Projects
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
