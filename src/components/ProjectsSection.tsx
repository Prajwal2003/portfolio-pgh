
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "LMS for Aspiring Gems",
    description: "Developed a full-stack Learning Management System using Node.js, Express, React, and SQL. Implemented secure authentication, content uploads, quizzes, progress tracking, and admin dashboards. Enabled teachers, students, and admins to manage courses, materials, and analytics efficiently.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    technologies: ["React.js", "Node.js", "Express.js", "REST APIs", "MySQL", "Git", "Software Deployment"],
    githubUrl: "https://github.com",
    period: "May 2025"
  },
  {
    title: "Smart Traffic Management System",
    description: "Developed an AI-driven traffic management system leveraging YOLOv11 for real-time vehicle detection and classification from CCTV feeds. Implemented adaptive traffic signal control using dynamic green time algorithms, edge computing, and IRC-compliant formulas.",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Streamlit", "Machine Learning", "Model Training", "YOLOv11", "Computer Vision", "CenterNet"],
    githubUrl: "https://github.com",
    period: "Oct 2024 - Feb 2025"
  },
  {
    title: "Twitter Web Scraping",
    description: "Uses proxy server, IP rotation and opens up Twitter, opens up the trending page and gets top 5 trending topics. Stores these in the Database for webpage to pick and display.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    technologies: ["Python", "Selenium", "Selenium WebDriver", "Web Development", "Flask", "MongoDB", "Proxy Server"],
    githubUrl: "https://github.com",
    period: "Jan 2025"
  },
  {
    title: "Automated Seating Arrangement System",
    description: "Designed and implemented an automated exam seating arrangement system for our college, replacing the previously used manual process. Allows users to add students through Excel or CSV format in batches or single entries and allot seats according to branches separately for each subject.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML", "CSS", "jQuery", "JavaScript", "PHP", "PhpMyAdmin", "SQL", "RDBMS", "Git", "GitHub"],
    githubUrl: "https://github.com",
    period: "Feb 2024 - May 2024"
  },
  {
    title: "ResourceChain",
    description: "Designed a user-friendly mobile application facilitating donors' clothes, medicine, and edibles. Implemented a system where spotters identify individuals in need or those who require items for personal use and update the app with the details.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
    technologies: ["Flutter", "Front-End Design", "Application Programming Interfaces (API)"],
    githubUrl: "https://github.com",
    period: "Aug 2023 - Dec 2023"
  },
  {
    title: "Weather Webpage",
    description: "Developed a dynamic website that utilizes location detection to provide accurate weather updates for a week ahead. Implemented features to display additional details such as wind speed, humidity, and other essential weather parameters.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
    technologies: ["HTML", "CSS", "JavaScript", "Application Programming Interfaces (API)", "jQuery", "User Interface Design", "Git", "GitHub"],
    githubUrl: "https://github.com",
    period: "May 2023 - Jun 2023"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 bg-black relative">
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
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-xl px-3 py-1 group-hover:border-white/30 transition-all duration-300">
                    <span className="text-gray-400 group-hover:text-white transition-colors duration-300 text-xs font-light">{project.period}</span>
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
                
                <div className="flex items-center justify-center">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 border border-white/20 text-white px-6 py-3 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-500 group/link hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                  >
                    <Github size={16} className="group-hover/link:rotate-12 transition-transform duration-300" />
                    <span className="font-light text-sm tracking-wide">View Code</span>
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
