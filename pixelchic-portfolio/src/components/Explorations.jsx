const Explorations = () => {
  // Placeholder explorations - you'll add your own images
  const explorations = [
    { id: 1, image: '/explorations/exploration-1.jpg', title: 'Exploration 1' },
    { id: 2, image: '/explorations/exploration-2.jpg', title: 'Exploration 2' },
    { id: 3, image: '/explorations/exploration-3.jpg', title: 'Exploration 3' },
  ];

  return (
    <section id="explorations" className="py-20 px-6 bg-dark-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">EXPLORATIONS</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Made for fun.
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            3D renders, illustration and material studies from the evenings between client work.
          </p>
        </div>

        {/* Exploration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {explorations.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[3/4] bg-dark-800 rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="600"%3E%3Crect fill="%2318181b" width="400" height="600"/%3E%3Ctext fill="%23666" font-family="Arial" font-size="16" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EExploration%3C/text%3E%3C/svg%3E';
                }}
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-medium">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explorations;
