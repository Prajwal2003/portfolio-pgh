
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Loren Lin
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer crafting beautiful and functional web experiences
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            I specialize in modern web technologies and love bringing ideas to life through clean, 
            efficient code and thoughtful design.
          </p>
          
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Github size={24} className="text-slate-700" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={24} className="text-slate-700" />
            </a>
            <a 
              href="mailto:hello@lorenclin.co"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Mail size={24} className="text-slate-700" />
            </a>
          </div>

          <button 
            onClick={scrollToAbout}
            className="animate-bounce"
          >
            <ArrowDown size={32} className="text-slate-400 hover:text-slate-600 transition-colors" />
          </button>
        </div>
      </div>
    </section>
  );
};
