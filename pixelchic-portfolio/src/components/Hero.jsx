const Hero = () => {
  return (
    <section className="relative bg-dark-900 px-6 pt-40 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Introduction - Like Xabed reference */}
        <div className="mb-8">
          <p className="text-xl sm:text-2xl text-gray-400 mb-2">HI, I AM BARAKAT.</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6">
            A Motion Graphics<br />Designer
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
            Good stories, becoming great through editing.
          </p>
        </div>
        
        {/* Download CV Button */}
        <div className="mt-12">
          <a 
            href="/cv/Barakat_Olorunlogbon_Resume.pdf" 
            download
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 animate-pulse-slow"
          >
            {/* Animated background gradient */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_100%] animate-gradient"></span>
            
            {/* Content */}
            <span className="relative flex items-center gap-2">
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
