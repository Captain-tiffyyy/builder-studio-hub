import { Link } from 'react-router-dom';
import { Mail, Instagram, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Resources', href: '#resources' },
    { label: 'Inquire', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-cream-dark">
      <div className="container-custom flex flex-col">
        {/* Footer Navigation Bar */}
        <div className="border-t border-brown/10 py-6 mx-auto">
          <div className="flex items-center justify-between gap-28">
            {/* Left side - Navigation Links */}
            <div className="flex items-center gap-28">
              {footerLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-blue font-sans text-base font-light tracking-wide uppercase hover:text-brown transition-colors"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-gray-blue font-sans text-base font-light tracking-wide uppercase hover:text-brown transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </div>

            {/* Right side - Subscribe Button (Horizontal Pill) */}
            <button className="inline-flex items-center gap-2 px-6 py-2 border border-brown rounded-full text-brown font-sans text-xs uppercase tracking-wide hover:text-red-brand transition-colors">
              <span>subscribe</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Main Footer Content - 2 Columns */}
        <div className="py-16 grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column - Newsletter Section */}
          <div className="flex flex-col ml-12 -mr-1">
            <h3 className="text-2xl lg:text-3xl font-sans font-light text-gray-blue tracking-wide uppercase mb-6">
              Stay in the Loop
            </h3>
            <p className="text-brown text-lg lg:text-xl mb-8 leading-relaxed text-left">
              The newsletter is a place where we share valuable case studies, news, tools and resources that we've learned about to you.
            </p>
            <div className="self-start">
              <button className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-gray-blue bg-gray-blue text-cream font-sans text-sm font-bold tracking-wide uppercase transition-colors hover:bg-gray-medium">
                <Mail size={18} />
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Column - Studio Cores Branding */}
          <div className="flex flex-col items-center justify-center text-center mr-12">
            {/* Studio Cores Branding */}
            <div className="mb-6">
              <div className="font-luxurious text-xs lg:text-7xl text-gray-blue mb-2">
                Studio
              </div>
              <div className="font-serif text-6xl lg:text-7xl text-gray-blue tracking-tight uppercase">
                Cores
              </div>
            </div>

            {/* Follow Us and Social Links - Vertical Stack */}
            <div className="flex flex-row gap-4">
              <span className="font-luxurious text-3xl text-gray-blue">follow us</span>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-brown hover:text-red-brand transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-brown hover:text-red-brand transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="#"
                  className="text-brown hover:text-red-brand transition-colors"
                  aria-label="TikTok"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
