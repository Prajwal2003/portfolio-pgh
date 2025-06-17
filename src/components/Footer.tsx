
import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <Code2 className="text-cyan-400 mr-3" size={36} />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Loren Lin
              </h3>
            </div>
            <p className="text-purple-200 max-w-md mx-auto text-lg leading-relaxed">
              Full-stack developer passionate about creating 
              <span className="text-cyan-400 font-semibold"> beautiful </span> and 
              <span className="text-pink-400 font-semibold"> functional </span> 
              web experiences.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30 group"
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 group"
            >
              <Linkedin size={24} className="group-hover:rotate-12 transition-transform" />
            </a>
            <a 
              href="mailto:hello@lorenclin.co"
              className="p-4 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/30 group"
            >
              <Mail size={24} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>

          <div className="border-t border-slate-700 pt-8">
            <p className="text-purple-300 flex items-center justify-center space-x-2 text-lg">
              <span>© 2024 Loren Lin. Made with</span>
              <Heart size={18} className="text-red-500 animate-pulse" fill="currentColor" />
              <span>and lots of</span>
              <span className="text-yellow-400 font-semibold">creative energy</span>
              <span>☕</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
