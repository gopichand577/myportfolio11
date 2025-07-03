
const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
    },
    {
      title: "AI Chat Application",
      description: "An intelligent chat application powered by OpenAI API with real-time messaging, file sharing, and smart conversation analysis.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      technologies: ["Next.js", "TypeScript", "OpenAI", "Socket.io"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis with real-time charts, filters, and export capabilities. Built for enterprise-level data processing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["React", "D3.js", "Python", "PostgreSQL"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/example",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-effect rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a
                      href={project.liveLink}
                      className="px-4 py-2 bg-cyan-500 text-white rounded-full text-sm font-medium hover:bg-cyan-600 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-900 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-cyan-400">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
