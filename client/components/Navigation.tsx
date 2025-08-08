import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Projects', href: '/projects' },
    { label: 'Resources', href: '#resources' },
    { label: 'Newsletter', href: '#newsletter' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      // Handle section scrolling
      if (location.pathname !== '/') {
        // If not on homepage, navigate to homepage first then scroll
        window.location.href = '/' + href;
      } else {
        // Already on homepage, just scroll
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="bg-cream border-b border-brown/10 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="font-luxurious text-4xl lg:text-5xl text-brown">
              Studio Cores
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
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
                  className="text-brown text-lg font-medium hover:text-red-brand transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <button className="btn-primary">
              Book a call with us
            </button>
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
          <div className="lg:hidden border-t border-brown/10 bg-cream">
            <div className="py-4 space-y-4">
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
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-2 text-brown text-lg font-medium hover:text-red-brand transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <div className="px-4 pt-4">
                <button className="btn-primary w-full">
                  Book a call with us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
