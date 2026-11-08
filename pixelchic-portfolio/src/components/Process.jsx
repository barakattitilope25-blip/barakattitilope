const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Brief & Discovery",
      description: "Understanding your vision, target audience, and project goals. We discuss style references, deliverables, and timelines.",
    },
    {
      number: "02",
      title: "Concept Development",
      description: "Creating storyboards, styleframes, and mood boards. Establishing the visual direction and narrative approach.",
    },
    {
      number: "03",
      title: "Production",
      description: "Editing, animating, and refining. This is where the magic happens—bringing concepts to life with precision and creativity.",
    },
    {
      number: "04",
      title: "Delivery & Revision",
      description: "Final export in your required formats. Incorporating feedback and ensuring the result exceeds expectations.",
    },
  ];

  return (
    <section id="process" className="py-20 px-6 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Creative Process</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          A transparent, collaborative workflow from concept to final delivery
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
            >
              {/* Connection Line (hidden on mobile, shown on larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent -z-10"></div>
              )}

              {/* Step Card */}
              <div className="bg-dark-800 p-6 rounded-sm border border-dark-700 hover:border-primary/50 transition-colors duration-300">
                <div className="text-5xl font-bold text-primary/30 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-dark-800 p-8 rounded-sm border border-dark-700">
          <h3 className="text-2xl font-semibold mb-4">Timeline & Pricing</h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Project timelines typically range from 1-4 weeks depending on complexity. 
            Rates vary based on project scope, deliverables, and turnaround time. 
            Contact me for a detailed quote tailored to your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
