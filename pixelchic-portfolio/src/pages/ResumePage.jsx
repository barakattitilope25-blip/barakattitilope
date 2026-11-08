const ResumePage = () => {
  return (
    <div className="min-h-screen bg-dark-900 pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header with Download & Print buttons */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <span className="text-primary text-sm font-mono">FRAME 00 — RESUME</span>
            <span className="text-white/40 text-sm">UPDATED OCT 2026</span>
            <span className="text-white/40 text-sm">A4</span>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => window.print()}
              className="px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all duration-300"
            >
              Print
            </button>
            <a 
              href="/cv/Barakat_Olorunlogbon_Resume.pdf" 
              download
              className="px-6 py-3 bg-primary rounded-xl text-white font-medium hover:bg-primary/90 transition-all duration-300 flex items-center gap-2"
            >
              Download PDF
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <iframe
            src="/cv/Barakat_Olorunlogbon_Resume.pdf"
            className="w-full h-[calc(100vh-200px)] min-h-[800px]"
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
