
import { Mail, MapPin, Phone, Github, Linkedin, Heart } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Footer Section - Combined with Contact */}
        <div className="text-center">
          <div className="mb-16">
            <div className="flex items-center justify-center mb-8">
              <div className="w-10 h-10 border border-white/20 rounded-2xl flex items-center justify-center mr-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-2xl font-light tracking-wide text-white">
                Prajwal G Hoolageri
              </h3>
            </div>
            <p className="text-gray-400 max-w-md mx-auto text-lg leading-relaxed font-light mb-12">
              Full-stack developer passionate about creating 
              <span className="text-gray-300 font-normal"> beautiful </span> and 
              <span className="text-gray-300 font-normal"> functional </span> 
              web experiences.
            </p>

            {/* Contact Information */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="grid md:grid-cols-3 gap-6">
                <a 
                  href="mailto:prajwalgh13@gmail.com"
                  className="flex flex-col items-center space-y-3 group p-6 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:bg-white/5"
                >
                  <div className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                    <Mail size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-center">
                    <p className="font-light text-white text-sm tracking-wide">Email</p>
                    <p className="text-gray-400 font-light text-xs">prajwalgh13@gmail.com</p>
                  </div>
                </a>

                <div className="flex flex-col items-center space-y-3 group p-6 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:bg-white/5">
                  <div className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                    <Phone size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-center">
                    <p className="font-light text-white text-sm tracking-wide">Phone</p>
                    <p className="text-gray-400 font-light text-xs">+91 7022125625</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3 group p-6 border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:bg-white/5">
                  <div className="w-10 h-10 border border-white/20 rounded-xl flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                    <MapPin size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-center">
                    <p className="font-light text-white text-sm tracking-wide">Location</p>
                    <p className="text-gray-400 font-light text-xs">Hubbali, Karnataka</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-6 mt-12">
                <a 
                  href="https://github.com/prajwalgh13" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 hover:bg-white/5 group"
                >
                  <Github size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
                <a 
                  href="https://linkedin.com/in/prajwalgh13" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 hover:bg-white/5 group"
                >
                  <Linkedin size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8">
            <p className="text-gray-400 flex items-center justify-center space-x-2 text-sm font-light tracking-wide">
              <span>© 2025 Prajwal G Hoolageri. Made with</span>
              <Heart size={14} className="text-gray-500" />
              <span>and attention to detail</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
