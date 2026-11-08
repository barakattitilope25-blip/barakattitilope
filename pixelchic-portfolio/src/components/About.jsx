import { useEffect, useRef, useState } from 'react';

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much the section is in view (0 to 1)
      // Starts at 0 (card hidden below), increases to 1 (card slides up)
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight * 1.5));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-32 px-6 bg-dark-900 min-h-screen">
      {/* Much narrower container - more minimal */}
      <div className="max-w-3xl mx-auto">
        {/* Photo with Blue Background */}
        <div className="relative" style={{ marginBottom: '600px' }}>
          {/* Blue Box with Photo - FULLY VISIBLE AT FIRST */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-blue-600 aspect-[3/4]">
            {/* IMPORTANT: Replace passport.jpeg with a version that has background removed! */}
            {/* Use remove.bg or similar tool to remove the background first */}
            <img 
              src="/passport.jpeg" 
              alt="Barakat Titilope" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>

          {/* Dark Card - STARTS BELOW (hidden), SLIDES UP on scroll to overlap image */}
          <div 
            className="absolute left-0 right-0 bg-[#0f0f10] rounded-[2rem] p-10 md:p-14 shadow-2xl border border-white/5"
            style={{
              // Starts way below (out of view), slides up as you scroll
              top: `calc(100% + ${100 - (scrollProgress * 150)}px)`,
              opacity: Math.max(0, scrollProgress),
              transition: 'opacity 0.3s ease-out'
            }}
          >
            {/* About Label and Heading */}
            <p className="text-xs uppercase tracking-widest text-primary mb-6">ABOUT</p>
            
            <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-white leading-[1.15] mb-8">
              Five years of creating visual stories through motion graphics.
            </h2>

            {/* About Paragraphs */}
            <div className="space-y-5 text-base md:text-lg text-gray-400 leading-relaxed mb-16">
              <p>
                Since 2019 I've worked on video projects for brands, startups, and creators across multiple industries. 
                Most projects start with raw footage and a vision that needs to come to life through editing and motion design.
              </p>

              <p>
                I handle the complete workflow: editing timelines, creating motion graphics, color grading, 
                and delivering the final product. Because one person does it all, the creative vision stays 
                consistent from rough cut to final export.
              </p>
            </div>

            {/* Where I've worked */}
            <div className="space-y-12 mb-16">
              <h3 className="text-sm font-normal text-white">Where I've worked</h3>
              
              {/* Job 1 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-gray-500 text-sm">
                  2024 – now
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-white font-medium mb-1 text-sm">Creative Designer</h4>
                  <p className="text-gray-500 mb-3 text-xs">Xtreme Cre8tivity</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Motion graphics and video editing for brands and creative campaigns.
                  </p>
                </div>
              </div>

              {/* Job 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-gray-500 text-sm">
                  2019 – 2024
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-white font-medium mb-1 text-sm">Lead Researcher</h4>
                  <p className="text-gray-500 mb-3 text-xs">Shekinah Travel Agency</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Led research and content creation for travel marketing materials.
                  </p>
                </div>
              </div>

              {/* Job 3 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-gray-500 text-sm">
                  2018 – 2019
                </div>
                <div className="md:col-span-2">
                  <h4 className="text-white font-medium mb-1 text-sm">Intern</h4>
                  <p className="text-gray-500 mb-3 text-xs">Federal Radio Corporation of Nigeria</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    First role in media production. Assisted with content creation and broadcast operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-gray-400 text-sm">
              <div>Cinema 4D</div>
              <div>After Effects</div>
              <div>Illustrator</div>
              <div>CorelDRAW</div>
              <div>Premiere Pro</div>
              <div>Photoshop</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
