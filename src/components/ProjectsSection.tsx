import { ExternalLink, Github, Star } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com",
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    githubUrl: "https://github.com",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    githubUrl: "https://github.com",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 bg-gray-950 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
            <span className="text-gray-400 font-light text-sm tracking-[0.3em] mx-8 uppercase">Portfolio</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-tight leading-tight">
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
              className="bg-gray-900 rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-white/10 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 z-20 group-hover:scale-110 transition-transform duration-300">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-2 group-hover:border-white/30 transition-all duration-300">
                    <Star className="text-gray-400 group-hover:text-white transition-colors duration-300" size={16} />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-light text-white mb-3 group-hover:text-gray-200 transition-colors duration-300 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed font-light text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-xl font-light tracking-wide hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-all duration-300 group/link hover:scale-105"
                  >
                    <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                    <span className="font-light text-sm tracking-wide">Code</span>
                  </a>
                  <Link 
                    to={`/project/${project.id}`}
                    className="flex items-center space-x-2 border border-white/20 text-white px-4 py-2.5 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-500 group/link hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                  >
                    <ExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300" />
                    <span className="font-light text-xs tracking-[0.1em] uppercase">View</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
