import { Link } from 'react-router-dom';
import { Mail, Instagram, Youtube, ArrowRight } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '#services' },
    { label: 'Team', href: '#team' },
    { label: 'Inquire', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-cream-dark w-full overflow-x-hidden">
      <div className="w-full max-w-full overflow-x-hidden footer-container" style={{ paddingBlock: 'clamp(32px, 8vw, 72px)' }}>
        {/* Footer Navigation Bar - Full Width Evenly Spaced */}
        <div className="border-t border-brown/10 py-6 w-full overflow-x-hidden">
          <div
            className="flex items-center justify-between w-full max-w-full overflow-x-hidden px-4 sm:px-8"
            style={{
              flexWrap: 'nowrap',
              whiteSpace: 'nowrap',
              fontSize: 'clamp(12px, 1.8vw, 16px)'
            }}
          >
            {/* Navigation Links */}
            {footerLinks.map((link) => (
              link.href.startsWith('#') ? (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-gray-blue font-sans font-light uppercase hover:text-brown transition-colors whitespace-nowrap flex-1 text-center"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-gray-blue font-sans font-light uppercase hover:text-brown transition-colors whitespace-nowrap flex-1 text-center"
                  style={{ letterSpacing: '0.05em' }}
                >
                  {link.label}
                </Link>
              )
            ))}

            {/* Subscribe Button (Horizontal Pill) */}
            <button
              className="inline-flex items-center gap-2 border border-brown rounded-full text-brown font-sans text-xs uppercase hover:text-red-brand transition-colors whitespace-nowrap ml-4"
              style={{
                paddingLeft: 'clamp(16px, 4vw, 28px)',
                paddingRight: 'clamp(16px, 4vw, 28px)',
                paddingTop: '8px',
                paddingBottom: '8px',
                height: 'auto',
                flexShrink: 0
              }}
            >
              <span>subscribe</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Main Footer Content - Centered Two Columns */}
        <div className="w-full overflow-x-hidden flex justify-center">
          <div
            className="max-w-4xl w-full overflow-x-hidden"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px, 6vw, 64px)',
              alignItems: 'start',
              paddingTop: '2rem'
            }}
          >
            {/* Left Column - Newsletter Section */}
            <div className="flex flex-col text-left justify-start items-start footer-newsletter">
              <h3
                className="font-sans font-light text-gray-blue tracking-wide uppercase mb-4 text-center footer-heading"
                style={{ fontSize: 'clamp(18px, 2.6vw, 28px)' }}
              >
                Stay in the Loop
              </h3>
              <p
                className="text-brown mb-6 leading-relaxed"
                style={{
                  fontSize: 'clamp(14px, 2.2vw, 18px)',
                  maxWidth: '36ch'
                }}
              >
                The newsletter is a place where we share valuable case studies, news, tools and resources that we've learned about to you.
              </p>
              <button
                className="inline-flex items-center gap-2 rounded-full border-2 border-gray-blue bg-gray-blue text-cream font-sans text-sm font-bold tracking-wide uppercase transition-colors hover:bg-gray-medium self-start footer-subscribe-btn"
                style={{
                  paddingLeft: 'clamp(16px, 4vw, 28px)',
                  paddingRight: 'clamp(16px, 4vw, 28px)',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  height: 'auto'
                }}
              >
                <Mail size={16} className="footer-subscribe-icon" />
                <span className="footer-subscribe-text">Subscribe</span>
              </button>
            </div>

            {/* Right Column - Studio Cores Branding */}
            <div className="flex flex-col items-center text-center ml-8 footer-branding">
              {/* Studio Cores Branding */}
              <div className="mb-3">
                <div
                  className="font-luxurious text-gray-blue mb-1 footer-studio"
                  style={{ fontSize: 'clamp(28px, 6vw, 64px)' }}
                >
                  Studio
                </div>
                <div
                  className="font-serif text-gray-blue tracking-tight uppercase footer-cores"
                  style={{ fontSize: 'clamp(28px, 6vw, 64px)' }}
                >
                  Cores
                </div>
              </div>

              {/* Follow Us and Social Links */}
              <div className="flex flex-row" style={{ marginTop: '12px' }}>
                <span
                  className="font-luxurious text-gray-blue footer-follow-text"
                  style={{ fontSize: 'clamp(16px, 3vw, 24px)', margin: '0 15px 8px 0' }}
                >
                  <span>
                    <b>follow us</b>
                  </span>
                </span>
                <div className="flex items-center" style={{ gap: '12px' }}>
                  <a
                    href="#"
                    className="text-brown hover:text-red-brand transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-brown hover:text-red-brand transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-brown hover:text-red-brand transition-colors"
                    aria-label="TikTok"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
