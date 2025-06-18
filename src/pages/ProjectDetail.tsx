
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code } from "lucide-react";

const projectData = {
  "ecommerce-platform": {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    longDescription: "This comprehensive e-commerce platform showcases modern web development practices with a focus on user experience and scalability. The application features a clean, responsive design with advanced filtering capabilities, real-time inventory management, and secure payment processing through Stripe integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js", "JWT"],
    features: [
      "User authentication and authorization",
      "Shopping cart and checkout system",
      "Admin dashboard for inventory management",
      "Real-time order tracking",
      "Payment processing with Stripe",
      "Responsive design for all devices"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    duration: "3 months",
    teamSize: "Solo project",
    status: "Completed"
  },
  "task-management-app": {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    longDescription: "A sophisticated task management platform designed for teams to collaborate effectively. Built with React and Firebase, it offers real-time synchronization, intuitive drag-and-drop interfaces, and comprehensive project tracking capabilities.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS", "React DnD", "Zustand"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop task management",
      "Team member assignment",
      "Progress tracking and analytics",
      "File attachments and comments",
      "Mobile-responsive interface"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    duration: "2 months",
    teamSize: "2 developers",
    status: "In Development"
  },
  "analytics-dashboard": {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reporting features.",
    longDescription: "An advanced analytics platform that transforms complex data into actionable insights. Built with Vue.js and D3.js, it provides interactive visualizations, real-time data processing, and customizable reporting capabilities for business intelligence.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL", "FastAPI", "WebSocket"],
    features: [
      "Interactive data visualizations",
      "Real-time data streaming",
      "Customizable dashboard layouts",
      "Export capabilities (PDF, CSV)",
      "User role management",
      "API integration support"
    ],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    duration: "4 months",
    teamSize: "3 developers",
    status: "Completed"
  }
};

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id as keyof typeof projectData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-light text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">
            ← Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-80 object-cover rounded-3xl"
            />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {project.longDescription}
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <Calendar className="text-gray-400" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Duration</p>
                  <p className="text-white">{project.duration}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-gray-400" size={20} />
                <div>
                  <p className="text-gray-400 text-sm">Team Size</p>
                  <p className="text-white">{project.teamSize}</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 border border-white/20 text-white px-6 py-3 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                <Github size={18} />
                <span>View Code</span>
              </a>
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-2xl hover:bg-gray-200 transition-all duration-300"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-light text-white mb-6 flex items-center">
              <Code className="mr-3" size={24} />
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/10 border border-white/20 text-gray-300 rounded-xl text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-white mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
