
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-800/30 to-gray-700/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-gradient-to-r from-white/5 to-gray-600/20 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{
          animationDelay: '2s'
        }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-gradient-to-r from-gray-700/20 to-gray-800/30 rounded-full mix-blend-overlay filter blur-3xl animate-pulse" style={{
          animationDelay: '4s'
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <div className="flex flex-col items-center justify-center my-[120px]">
          <div className="flex items-center justify-center mb-8 opacity-0 animate-[fade-in_1s_ease-out_0.5s_forwards]">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-white/30"></div>
            <span className="text-white/60 font-light text-sm tracking-[0.3em] mx-6 uppercase">Welcome</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white mb-6 tracking-tight opacity-0 animate-[fade-in_1.2s_ease-out_1s_forwards] leading-none">
            <span className="block font-thin text-3xl md:text-4xl lg:text-5xl mb-2">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent font-light">
              Prajwal G H
            </span>
          </h1>
          
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mb-8 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed font-light opacity-0 animate-[fade-in_1s_ease-out_1.8s_forwards]">
            Full-Stack Developer & AI/ML Enthusiast
          </p>
          
          <p className="text-base text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-light opacity-0 animate-[fade-in_1s_ease-out_2.2s_forwards]">
            Skilled in Python, React.js, Node.js, and ML technologies. Proven leadership and tech innovation.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12 opacity-0 animate-[fade-in_1s_ease-out_2.4s_forwards]">
            <div className="flex items-center space-x-2 text-gray-400">
              <Phone size={16} />
              <span className="font-light">+91 7022125625</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin size={16} />
              <span className="font-light">Hubbali</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-8 mb-20 opacity-0 animate-[fade-in_1s_ease-out_2.6s_forwards]">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-500 hover:scale-110 hover:bg-white/5 hover:shadow-lg hover:shadow-white/10 group">
              <Github size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-500 hover:scale-110 hover:bg-white/5 hover:shadow-lg hover:shadow-white/10 group">
              <Linkedin size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="mailto:prajwalgh13@gmail.com" className="p-4 border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-500 hover:scale-110 hover:bg-white/5 hover:shadow-lg hover:shadow-white/10 group">
              <Mail size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>

          <button onClick={scrollToAbout} className="animate-bounce hover:animate-none transition-all duration-500 hover:scale-110 opacity-0 animate-[fade-in_1s_ease-out_3s_forwards] group">
            <div className="p-4 border border-white/20 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-300 hover:shadow-lg hover:shadow-white/10">
              <ArrowDown size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
