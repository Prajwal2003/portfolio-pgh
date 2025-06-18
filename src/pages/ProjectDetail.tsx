
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, Calendar, Code, CheckCircle } from "lucide-react";

const projectData = {
  "lms-aspiring-gems": {
    title: "LMS for Aspiring Gems",
    description: "Developed a full-stack Learning Management System using Node.js, Express, React, and SQL.",
    longDescription: "LMS Website for Aspiring Gems - Developed a full-stack Learning Management System using Node.js, Express, React, and SQL. Implemented secure authentication, content uploads, quizzes, progress tracking, and admin dashboards. Enabled teachers, students, and admins to manage courses, materials, and analytics efficiently. Designed responsive UI and robust RESTful APIs for seamless digital learning experiences.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "MySQL", "Git", "Software Deployment"],
    features: [
      "Secure user authentication and authorization",
      "Content upload and management system",
      "Interactive quiz creation and management",
      "Real-time progress tracking for students",
      "Comprehensive admin dashboard",
      "Responsive UI design for all devices"
    ],
    githubUrl: "https://github.com",
    duration: "1 month",
    teamSize: "Solo project",
    status: "Completed",
    period: "May 2025"
  },
  "smart-traffic-management": {
    title: "Smart Traffic Management System",
    description: "AI-driven traffic management system leveraging YOLOv11 for real-time vehicle detection.",
    longDescription: "Developed an AI-driven traffic management system leveraging YOLOv11 for real-time vehicle detection and classification from CCTV feeds. Implemented adaptive traffic signal control using dynamic green time algorithms, edge computing, and IRC-compliant formulas. Integrated emergency vehicle prioritization and low-latency decision-making for optimized traffic flow and enhanced road safety. Works with priority lane buses like Chigari as well allowing for better traffic management.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Python", "Streamlit", "Machine Learning", "Model Training", "Label Studio", "Git", "GitHub", "YOLOv11", "Computer Vision", "CenterNet"],
    features: [
      "Real-time vehicle detection and classification",
      "Adaptive traffic signal control algorithms",
      "Emergency vehicle prioritization system",
      "Integration with priority lane buses",
      "Edge computing for low-latency processing",
      "IRC-compliant traffic management formulas"
    ],
    githubUrl: "https://github.com",
    duration: "5 months",
    teamSize: "Team project",
    status: "Completed",
    period: "Oct 2024 - Feb 2025"
  },
  "twitter-web-scraping": {
    title: "Twitter Web Scraping",
    description: "Advanced web scraping system with proxy rotation for trending topics extraction.",
    longDescription: "Uses proxy server, IP rotation and opens up Twitter, opens up the trending page and gets top 5 trending topics. Stores these in the Database for webpage to pick and display. Implemented robust scraping mechanisms to handle rate limiting and anti-bot measures.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Python", "Selenium", "Selenium WebDriver", "Web Development", "Flask", "MongoDB", "Proxy Server"],
    features: [
      "Proxy server implementation with IP rotation",
      "Automated Twitter trending page navigation",
      "Top 5 trending topics extraction",
      "Database storage for retrieved data",
      "Web interface for data display",
      "Anti-detection mechanisms"
    ],
    githubUrl: "https://github.com",
    duration: "1 month",
    teamSize: "Solo project",
    status: "Completed",
    period: "Jan 2025"
  },
  "automated-seating-arrangement": {
    title: "Automated Seating Arrangement System",
    description: "Comprehensive exam seating arrangement system for educational institutions.",
    longDescription: "Designed and implemented an automated exam seating arrangement system for our college, replacing the previously used manual process. Implemented all the requirements presented by the Controller of Examination of our College. This allows users to add students through Excel or CSV format in batches or single entries and allot seats according to branches separately for each subject and allot invigilators for each class. Users gets allotment in PDF and Excel format for further use.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML", "CSS", "jQuery", "JavaScript", "PHP", "PhpMyAdmin", "SQL", "RDBMS", "Git", "GitHub"],
    features: [
      "Bulk student data import via Excel/CSV",
      "Branch-wise seat allocation system",
      "Subject-specific arrangement capabilities",
      "Invigilator assignment functionality",
      "PDF and Excel export features",
      "User-friendly administrative interface"
    ],
    githubUrl: "https://github.com",
    duration: "4 months",
    teamSize: "Team project",
    status: "Completed",
    period: "Feb 2024 - May 2024"
  },
  "resourcechain": {
    title: "ResourceChain",
    description: "Mobile application connecting donors with people in need of essential items.",
    longDescription: "Designed a user-friendly mobile application facilitating donors' clothes, medicine, and edibles. Implemented a system where spotters identify individuals in need or those who require items for personal use and update the app with the details. Created a comprehensive platform for community resource sharing and charitable giving.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Flutter", "Front-End Design", "Application Programming Interfaces (API)"],
    features: [
      "User-friendly mobile interface",
      "Donor and recipient matching system",
      "Spotter network for need identification",
      "Multi-category resource management",
      "Real-time notification system",
      "Secure user authentication"
    ],
    githubUrl: "https://github.com",
    duration: "5 months",
    teamSize: "Team project",
    status: "Completed",
    period: "Aug 2023 - Dec 2023"
  },
  "weather-webpage": {
    title: "Weather Webpage",
    description: "Dynamic weather application with location detection and comprehensive forecasting.",
    longDescription: "Developed a dynamic website that utilizes location detection to provide accurate weather updates for a week ahead. Implemented features to display additional details such as wind speed, humidity, and other essential weather parameters. Created an intuitive interface for easy weather information consumption.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "Application Programming Interfaces (API)", "jQuery", "User Interface Design", "Git", "GitHub"],
    features: [
      "Automatic location detection",
      "7-day weather forecast",
      "Detailed weather parameters display",
      "Wind speed and humidity tracking",
      "Responsive design for all devices",
      "Real-time weather data integration"
    ],
    githubUrl: "https://github.com",
    duration: "2 months",
    teamSize: "Solo project",
    status: "Completed",
    period: "May 2023 - Jun 2023"
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
    return <CheckCircle className="text-green-400" size={20} />;
  };

  const getStatusColor = (status: string) => {
    return "text-green-400 border-green-400/20 bg-green-400/5";
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background elements */}
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
                    <Code className="text-gray-400 group-hover:text-white transition-colors duration-300" size={18} />
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
