import { useState } from 'react';
import { projects } from '../data/projects';

const WorkGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <section id="work" className="py-20 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Exactly like Sam's Work page */}
        <div className="mb-16">
          <h2 className="text-[6rem] sm:text-[8rem] md:text-[12rem] font-bold leading-[0.85] tracking-tight text-white mb-12">
            Work
          </h2>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
            <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
              With a passion for visual storytelling that communicate clearly and capture attention. I have experience in motion graphics and I enjoy turning ideas into visually appealing content that connects with audiences. I'm always eager to learn, improve my skills, and bring fresh ideas to every project.
            </p>
            
            <a
              href="mailto:contact@pixelchic.com"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <span>Email me</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Project Categories with Collage Layout */}
        <div className="space-y-16">
          {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
            <div key={category} className="space-y-6">
              {/* Category Title */}
              <div className="flex items-center gap-4">
                <h3 className="text-3xl font-bold text-white">{category}</h3>
                <span className="text-gray-500 text-sm">({categoryProjects.length})</span>
              </div>

              {/* Collage Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {categoryProjects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group relative aspect-video bg-dark-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-primary transition-all duration-300"
                  >
                    {/* Video Thumbnail Preview */}
                    {project.videoType === 'local' ? (
                      <video
                        src={project.videoUrl}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        muted
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-dark-800 flex items-center justify-center">
                        <svg className="w-12 h-12 text-white/50" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <p className="text-white text-xs font-medium line-clamp-2">{project.title}</p>
                      </div>
                    </div>

                    {/* Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary rounded-full p-3">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* Project Number Badge */}
                    <div className="absolute top-2 left-2 bg-dark-900/90 backdrop-blur-sm text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-dark-800 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-start p-6 md:p-8 border-b border-dark-700">
              <div className="flex-1 pr-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-gray-400">{selectedProject.category}</span>
                  <span className="text-gray-600">·</span>
                  <span className="text-gray-400">{selectedProject.year}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Video */}
            <div className="aspect-video bg-black">
              {selectedProject.videoType === 'local' ? (
                <video 
                  controls 
                  autoPlay
                  className="w-full h-full"
                  src={selectedProject.videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <iframe
                  src={selectedProject.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>

            {/* Details */}
            <div className="p-6 md:p-8">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {selectedProject.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-dark-700 text-gray-300 text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default WorkGallery;
