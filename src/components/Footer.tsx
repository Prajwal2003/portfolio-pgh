
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Loren Lin</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Full-stack developer passionate about creating beautiful and functional web experiences.
            </p>
          </div>

          <div className="flex items-center justify-center space-x-6 mb-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:hello@lorenclin.co"
              className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400 flex items-center justify-center space-x-1">
              <span>© 2024 Loren Lin. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and lots of coffee.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
