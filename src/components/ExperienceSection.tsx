import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Project Intern",
    company: "Northtron Entitysoft Corps",
    location: "Dharwad",
    period: "03/2025 - 05/2025",
    description: "Built a full-stack e-commerce web app with React, Django, PostgreSQL, and AWS S3. Enabled secure JWT authentication and dual-role (buyer/seller) user access. Collaborated in an agile team with GitHub and Slack for modular development.",
    technologies: ["React", "Django", "PostgreSQL", "AWS S3", "JWT", "GitHub", "Slack"]
  },
  {
    title: "Software Developer Internship",
    company: "Falca E Solutions",
    location: "Bengaluru",
    period: "07/2024 - 08/2024",
    description: "Utilized Python with Pandas, NumPy, and Gspread to automate data processing and business reporting. Assisted in database migration and mapping to MongoDB for seamless integration. Developed a real-time estimation tool for field workers to generate on-the-spot client estimates.",
    technologies: ["Python", "Pandas", "NumPy", "Gspread", "MongoDB"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-gray-800/20 to-gray-700/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-white/5 to-gray-600/10 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8 opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards]">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30"></div>
            <span className="text-white/60 font-light text-sm tracking-[0.3em] mx-6 uppercase">Experience</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-tight opacity-0 animate-[fade-in_1.2s_ease-out_0.5s_forwards]">
            Professional
            <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent font-light mt-2">
              Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]">
            A timeline of my professional growth and contributions in the tech industry
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="group relative opacity-0 animate-[slide-up_0.8s_ease-out_forwards]"
              style={{animationDelay: `${1.2 + index * 0.2}s`}}
            >
              <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent group-last:hidden"></div>
              <div className="absolute left-6 top-8 w-4 h-4 border-2 border-white/30 rounded-full bg-black group-hover:border-white/60 group-hover:scale-125 transition-all duration-500"></div>
              
              <div className="ml-20 p-8 border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-700 hover:bg-white/[0.02] group-hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-light text-white mb-2 group-hover:text-gray-200 transition-colors duration-300">
                      {experience.title}
                    </h3>
                    <div className="flex items-center space-x-6 text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Briefcase size={16} className="opacity-60" />
                        <span className="font-light">{experience.company}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} className="opacity-60" />
                        <span className="font-light">{experience.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-500 mt-4 md:mt-0">
                    <Calendar size={16} className="opacity-60" />
                    <span className="font-light text-sm tracking-wide">{experience.period}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6 font-light">
                  {experience.description}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 text-sm font-light hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
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
