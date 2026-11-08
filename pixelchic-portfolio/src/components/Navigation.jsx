import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Explorations', href: '/explorations' },
    { name: 'Resume', href: '/resume' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* Glassmorphism Container - Centered rounded pill */}
        <div 
          className={`mx-auto transition-all duration-500 ease-out ${
            isScrolled 
              ? 'max-w-3xl' 
              : 'max-w-full'
          }`}
        >
          <div 
            className={`flex items-center justify-between px-6 rounded-full transition-all duration-500 ${
              isScrolled
                ? 'py-2.5 bg-dark-900/60 backdrop-blur-2xl border border-white/10 shadow-lg'
                : 'py-3 bg-transparent'
            }`}
            style={{
              backdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
              WebkitBackdropFilter: isScrolled ? 'blur(24px) saturate(180%)' : 'none',
            }}
          >
            {/* Logo - Cyan circle */}
            <Link 
              to="/" 
              className={`rounded-full bg-cyan-400 flex items-center justify-center text-dark-900 font-bold hover:bg-cyan-300 transition-all duration-300 ${
                isScrolled ? 'w-9 h-9 text-sm' : 'w-11 h-11 text-base'
              }`}
            >
              <span className="font-bold">BT</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-gray-300 hover:text-white transition-all duration-300 ${
                    isScrolled ? 'text-sm' : 'text-[15px]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Hidden on scroll */}
            <div className={`hidden md:block transition-opacity duration-300 ${
              isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>
              <a
                href="https://wa.me/2349032284400"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors inline-flex items-center gap-2"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 mx-6">
          <div className="bg-dark-900/90 backdrop-blur-2xl rounded-3xl border border-white/10 p-6">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white transition-colors text-[15px]"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/2349032284400"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2 mt-2"
              >
                <span>Get In Touch</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
