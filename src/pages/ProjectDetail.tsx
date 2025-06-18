
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code, CheckCircle, Clock, Play } from "lucide-react";

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
        <div className="text-center opacity-0 animate-[fade-in_1s_ease-out_0.3s_forwards]">
          <h1 className="text-4xl font-light text-white mb-4">Project Not Found</h1>
          <Link to="/" className="text-gray-400 hover:text-white transition-colors">
            ← Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="text-green-400" size={20} />;
      case "In Development":
        return <Clock className="text-yellow-400" size={20} />;
      default:
        return <Play className="text-blue-400" size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "text-green-400 border-green-400/20 bg-green-400/5";
      case "In Development":
        return "text-yellow-400 border-yellow-400/20 bg-yellow-400/5";
      default:
        return "text-blue-400 border-blue-400/20 bg-blue-400/5";
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-white/5 to-gray-600/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 relative z-10">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-500 mb-16 group opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards] hover:scale-105"
        >
          <div className="p-2 border border-white/10 rounded-xl group-hover:border-white/30 transition-all duration-300 group-hover:bg-white/5">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
          </div>
          <span className="font-light tracking-wide">Back to Portfolio</span>
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div className="opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl z-10"></div>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-96 object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
              />
              <div className={`absolute top-6 right-6 z-20 flex items-center space-x-2 px-4 py-2 rounded-2xl border ${getStatusColor(project.status)} backdrop-blur-sm transition-all duration-300 group-hover:scale-105`}>
                {getStatusIcon(project.status)}
                <span className="text-sm font-light tracking-wide">{project.status}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-8">
            <div className="opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
              <h1 className="text-5xl md:text-6xl font-extralight text-white mb-6 tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
                {project.longDescription}
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]">
              <div className="group">
                <div className="flex items-center space-x-3 p-4 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:bg-white/5">
                  <div className="p-2 border border-white/10 rounded-xl group-hover:border-white/30 transition-all duration-300">
                    <Calendar className="text-gray-400 group-hover:text-white transition-colors duration-300" size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-light tracking-wide uppercase">Duration</p>
                    <p className="text-white font-light">{project.duration}</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-center space-x-3 p-4 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:bg-white/5">
                  <div className="p-2 border border-white/10 rounded-xl group-hover:border-white/30 transition-all duration-300">
                    <Users className="text-gray-400 group-hover:text-white transition-colors duration-300" size={18} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm font-light tracking-wide uppercase">Team Size</p>
                    <p className="text-white font-light">{project.teamSize}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 border border-white/20 text-white px-8 py-4 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-500 hover:scale-105 group hover:shadow-lg hover:shadow-white/10"
              >
                <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-light tracking-wide">View Code</span>
              </a>
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-2xl hover:bg-gray-200 transition-all duration-500 hover:scale-105 group hover:shadow-lg hover:shadow-white/20"
              >
                <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                <span className="font-light tracking-wide">Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="opacity-0 animate-[fade-in_1s_ease-out_1.2s_forwards]">
            <div className="border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-700 hover:bg-white/[0.02] hover:shadow-2xl hover:shadow-white/5">
              <h2 className="text-3xl font-light text-white mb-8 flex items-center">
                <div className="p-3 border border-white/20 rounded-2xl mr-4 hover:border-white/40 transition-all duration-300">
                  <Code size={24} className="text-gray-400" />
                </div>
                Technologies Used
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 group"
                    style={{animationDelay: `${1.4 + index * 0.1}s`}}
                  >
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light tracking-wide">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="opacity-0 animate-[fade-in_1s_ease-out_1.4s_forwards]">
            <div className="border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-700 hover:bg-white/[0.02] hover:shadow-2xl hover:shadow-white/5">
              <h2 className="text-3xl font-light text-white mb-8">Key Features</h2>
              <div className="space-y-4">
                {project.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                    style={{animationDelay: `${1.6 + index * 0.1}s`}}
                  >
                    <div className="flex-shrink-0 w-6 h-6 border border-white/20 rounded-full flex items-center justify-center mt-1 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
                      <div className="w-2 h-2 bg-white rounded-full group-hover:bg-gray-200 transition-colors duration-300"></div>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-light leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
