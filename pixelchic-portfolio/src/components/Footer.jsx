import { useEffect, useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const nameRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!nameRef.current) return;
      
      const footer = nameRef.current.closest('footer');
      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate visibility percentage (0 to 1)
      const visibility = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight));
      
      // Update CSS variable for animation
      nameRef.current.style.setProperty('--scroll-progress', visibility);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="relative bg-dark-900 py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Large Dotted Name - Inline with Particle Effect */}
        <div className="mb-16">
          <h2 
            ref={nameRef}
            className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[12rem] font-bold leading-none tracking-tighter"
            style={{
              background: `
                radial-gradient(circle, currentColor 1.5px, transparent 1.5px),
                radial-gradient(circle, currentColor 1.5px, transparent 1.5px)
              `,
              backgroundSize: '6px 6px, 6px 6px',
              backgroundPosition: '0 0, 3px 3px',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: '#3b82f6',
              opacity: 'calc(0.2 + var(--scroll-progress, 0) * 0.8)',
              transform: 'translateY(calc((1 - var(--scroll-progress, 0)) * 80px)) scale(calc(0.9 + var(--scroll-progress, 0) * 0.1))',
              transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              filter: 'blur(calc((1 - var(--scroll-progress, 0)) * 3px))',
            }}
          >
            Barakat Titilope
          </h2>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pt-8 border-t border-white/5">
          <div className="text-sm text-gray-500">
            <p>© {currentYear} Barakat Titilope. Motion Graphics Designer.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-sm text-gray-400">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://behance.net/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Behance
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
