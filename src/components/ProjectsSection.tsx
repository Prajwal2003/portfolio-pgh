
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
            <span className="text-gray-400 font-light text-sm tracking-widest mx-8 uppercase">Portfolio</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Here are some of my recent projects that showcase my skills and passion for creating 
            <span className="text-white font-normal"> exceptional digital experiences</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-full p-2">
                    <Star className="text-gray-400" size={16} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-light text-white mb-3 group-hover:text-gray-200 transition-colors tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed font-light text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-full font-light tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center space-x-4">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group/link"
                  >
                    <Github size={16} className="group-hover/link:scale-110 transition-transform" />
                    <span className="font-light text-sm tracking-wide">Code</span>
                  </a>
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-white/20 text-white px-4 py-2 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 group/link"
                  >
                    <ExternalLink size={14} className="group-hover/link:scale-110 transition-transform" />
                    <span className="font-light text-xs tracking-wide uppercase">View</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
