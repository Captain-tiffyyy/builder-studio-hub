import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scrolling to sections when arriving at main page with hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Projects', href: '/projects' },
    { label: 'Newsletter', href: '#newsletter' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);

    if (href.startsWith('#')) {
      // Handle section scrolling
      if (location.pathname !== '/') {
        // If not on homepage, navigate to homepage first then scroll
        navigate('/' + href);
      } else {
        // Already on homepage, just scroll
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePageNavigation = (href: string) => {
    setIsMenuOpen(false);
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleLogoClick = () => {
    // Scroll to top immediately for logo click
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-cream border-b border-brown/10 sticky top-0 z-50 w-full overflow-x-hidden">
      <div className="container-custom max-w-full">
        <div className="flex items-center justify-between h-20 lg:h-24 w-full">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="flex items-center min-w-0 flex-shrink-0">
            <div className="font-luxurious text-3xl sm:text-4xl lg:text-5xl text-brown whitespace-nowrap">
              Studio Cores
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 flex-shrink min-w-0">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-brown text-lg font-medium hover:text-red-brand transition-colors"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={() => handlePageNavigation(item.href)}
                  className="text-brown text-lg font-medium hover:text-red-brand transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a href="https://calendly.com/juliacores/welcome-call-studio-cores" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a call with us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-brown hover:text-red-brand transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-brown/10 bg-cream w-full overflow-x-hidden">
            <div className="py-4 space-y-4 w-full">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-4 py-2 text-brown text-lg font-medium hover:text-red-brand transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => handlePageNavigation(item.href)}
                    className="block px-4 py-2 text-brown text-lg font-medium hover:text-red-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="px-4 pt-4">
                <a href="https://calendly.com/juliacores/welcome-call-studio-cores" target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                  Book a call with us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
