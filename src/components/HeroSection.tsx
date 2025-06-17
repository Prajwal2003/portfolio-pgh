
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2s"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4s"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-yellow-400 mr-2" size={32} />
            <span className="text-cyan-400 font-medium text-lg">Welcome to my digital space</span>
            <Sparkles className="text-yellow-400 ml-2" size={32} />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Loren Lin
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-cyan-100 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
            A passionate full-stack developer crafting 
            <span className="text-yellow-400 font-semibold"> extraordinary </span>
            web experiences
          </p>
          
          <p className="text-lg text-purple-200 mb-12 max-w-2xl mx-auto leading-relaxed">
            I specialize in modern web technologies and love bringing ideas to life through clean, 
            efficient code and <span className="text-pink-300 font-medium">thoughtful design</span>.
          </p>
          
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            >
              <Github size={28} className="text-white group-hover:rotate-12 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={28} className="text-white group-hover:rotate-12 transition-transform" />
            </a>
            <a 
              href="mailto:hello@lorenclin.co"
              className="p-4 bg-gradient-to-r from-orange-600 to-red-600 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={28} className="text-white group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:animate-none transition-all duration-300 hover:scale-110"
          >
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
              <ArrowDown size={32} className="text-white" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
