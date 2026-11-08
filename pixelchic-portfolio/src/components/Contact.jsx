const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-dark-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12 text-white">Get In Touch</h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed">
          Available for freelance video projects and full-time opportunities. 
          Let's discuss your next video or motion graphics project.
        </p>

        {/* Contact Email - Simple link */}
        <div className="mb-8">
          <a
            href="mailto:contact@pixelchic.com"
            className="text-lg text-primary hover:text-white transition-colors inline-block"
          >
            contact@pixelchic.com
          </a>
        </div>

        {/* Social Links - Simple list */}
        <div className="flex flex-wrap gap-6 text-gray-400">
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
    </section>
  );
};

export default Contact;
