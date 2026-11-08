const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-dark-900 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12 text-white">Resume</h2>

        {/* Download Button */}
        <div className="mb-16">
          <a
            href="/cv/Barakat_Olorunlogbon_Resume.pdf"
            download
            className="inline-flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Download Resume (PDF)</span>
          </a>
          <p className="text-gray-500 text-sm mt-3">Last updated: 2024</p>
        </div>

        {/* Summary */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white mb-6">Summary</h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            Highly motivated and detail-oriented Mass Communication graduate with expertise in creative design, 
            video editing, and motion graphics. Proven success in leading research teams and driving creative projects. 
            Passionate about innovation and excellence, thriving in dynamic environments that value creativity, teamwork, and strategic thinking.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white mb-8">Work Experience</h3>
          
          <div className="space-y-10">
            {/* Job 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-gray-400 text-sm">
                <p>2024 – Present</p>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-white font-medium text-lg mb-1">Creative Designer (NYSC)</h4>
                <p className="text-gray-500 mb-3">Xtreme Cre8tivity, Mowe, Ogun State</p>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Versatile creative professional with expertise in design, tele sales, pitch presentation, 
                  video editing, and operations coordination.
                </p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Spearheaded efficiency initiatives and drove innovation, productivity, and growth</li>
                  <li>• Delivered exceptional results for clients through effective content creation</li>
                  <li>• Grew customer base through strategic design and video content</li>
                </ul>
              </div>
            </div>

            {/* Job 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-gray-400 text-sm">
                <p>2019 – 2024</p>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-white font-medium text-lg mb-1">Lead Researcher</h4>
                <p className="text-gray-500 mb-3">Shekinah Travel Agency, Ibadan, Oyo State</p>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Guided students through admissions, career planning, and study-abroad opportunities.
                </p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Enhanced academic performance and language skills for students</li>
                  <li>• Established partnerships and promoted Shekinah's services</li>
                  <li>• Led research teams and drove business insights</li>
                </ul>
              </div>
            </div>

            {/* Job 3 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-gray-400 text-sm">
                <p>2018 – 2019</p>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-white font-medium text-lg mb-1">Intern</h4>
                <p className="text-gray-500 mb-3">Federal Radio Corporation of Nigeria, Ibadan, Oyo State</p>
                <p className="text-gray-400 leading-relaxed mb-3">
                  Assisted in news research, writing, editing, and broadcasting.
                </p>
                <ul className="text-gray-400 space-y-2 text-sm">
                  <li>• Contributed to planning, researching, and producing radio programs</li>
                  <li>• Coordinated content scheduling and assisted in program production and editing</li>
                  <li>• Edited and proofread articles and scripts, conducted research for editorial content</li>
                  <li>• Gained hands-on experience in broadcasting, content creation, and team collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-white mb-8">Technical Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-medium mb-4">Creative & Design</h4>
              <div className="space-y-2 text-gray-400">
                <p>Graphics Design (Illustrator, CorelDRAW)</p>
                <p>3D Motion Graphics (Cinema 4D)</p>
                <p>Video Editing (Adobe After Effects)</p>
                <p>Content Creation</p>
                <p>Pitch Presentation</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Professional Skills</h4>
              <div className="space-y-2 text-gray-400">
                <p>Project Management</p>
                <p>Strong Verbal & Written Communication</p>
                <p>Tele Sales</p>
                <p>Microsoft Word & PowerPoint</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-8">Education</h3>
          
          <div className="space-y-8">
            {/* Degree 1 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-gray-400 text-sm">
                <p>2023</p>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-white font-medium text-lg mb-1">B.Sc. in Mass Communication</h4>
                <p className="text-gray-400">Oduduwa University</p>
                <p className="text-gray-500 text-sm mt-1">2nd Class Upper</p>
              </div>
            </div>

            {/* Degree 2 */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-gray-400 text-sm">
                <p>2018</p>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-white font-medium text-lg mb-1">National Diploma in Mass Communication</h4>
                <p className="text-gray-400">Ibadan Polytechnic, Ibadan, Oyo State</p>
                <p className="text-gray-500 text-sm mt-1">Upper Division</p>
              </div>
            </div>

            {/* Certification */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-gray-400 text-sm">
                <p>Certification</p>
              </div>
              <div className="md:col-span-3">
                <h4 className="text-white font-medium text-lg">Virtual Assistant</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
