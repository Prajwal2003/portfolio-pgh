
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-10 h-10 border border-white/20 rounded-2xl flex items-center justify-center mr-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light tracking-wide text-white">
                Loren Lin
              </h3>
            </div>
            <p className="text-gray-400 max-w-md mx-auto text-lg leading-relaxed font-light">
              Full-stack developer passionate about creating 
              <span className="text-gray-300 font-normal"> beautiful </span> and 
              <span className="text-gray-300 font-normal"> functional </span> 
              web experiences.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-8 mb-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-white/10 rounded-full hover:border-white/30 transition-all duration-300 hover:scale-110 hover:bg-white/5 group"
            >
              <Github size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 border border-white/10 rounded-full hover:border-white/30 transition-all duration-300 hover:scale-110 hover:bg-white/5 group"
            >
              <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a 
              href="mailto:hello@lorenclin.co"
              className="p-4 border border-white/10 rounded-full hover:border-white/30 transition-all duration-300 hover:scale-110 hover:bg-white/5 group"
            >
              <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>

          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 flex items-center justify-center space-x-2 text-sm font-light tracking-wide">
              <span>© 2024 Loren Lin. Made with</span>
              <Heart size={14} className="text-gray-500" />
              <span>and attention to detail</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
