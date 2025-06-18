
import { Mail, MapPin, Phone, Github, Linkedin, Heart } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-32 bg-gray-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
            <span className="text-gray-400 font-light text-sm tracking-[0.3em] mx-8 uppercase">Contact</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            I'm always open to discussing new opportunities, creative projects, or just having 
            a friendly chat about <span className="text-white font-normal">technology and innovation</span>.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-20">
          <div className="space-y-8">
            <a 
              href="mailto:prajwalgh13@gmail.com"
              className="flex items-center space-x-6 group p-6 border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 hover:bg-white/5"
            >
              <div className="w-12 h-12 border border-white/20 rounded-2xl flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                <Mail size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="font-light text-white text-lg tracking-wide">Email</p>
                <p className="text-gray-400 font-light">prajwalgh13@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center space-x-6 group p-6 border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 hover:bg-white/5">
              <div className="w-12 h-12 border border-white/20 rounded-2xl flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                <Phone size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="font-light text-white text-lg tracking-wide">Phone</p>
                <p className="text-gray-400 font-light">+91 7022125625</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 group p-6 border border-white/10 rounded-3xl hover:border-white/20 transition-all duration-500 hover:bg-white/5">
              <div className="w-12 h-12 border border-white/20 rounded-2xl flex items-center justify-center group-hover:border-white/30 transition-all duration-300">
                <MapPin size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <div>
                <p className="font-light text-white text-lg tracking-wide">Location</p>
                <p className="text-gray-400 font-light">Hubbali, Karnataka</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center space-x-8 mt-16">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-500 hover:scale-110 hover:bg-white/5 hover:shadow-lg hover:shadow-white/10 group"
            >
              <Github size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-4 border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-500 hover:scale-110 hover:bg-white/5 hover:shadow-lg hover:shadow-white/10 group"
            >
              <Linkedin size={24} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* Footer Section */}
        <div className="border-t border-white/10 pt-20">
          <div className="text-center">
            <div className="mb-12">
              <div className="flex items-center justify-center mb-8">
                <div className="w-10 h-10 border border-white/20 rounded-2xl flex items-center justify-center mr-4">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <h3 className="text-2xl font-light tracking-wide text-white">
                  Prajwal G Hoolageri
                </h3>
              </div>
              <p className="text-gray-400 max-w-md mx-auto text-lg leading-relaxed font-light">
                Full-stack developer passionate about creating 
                <span className="text-gray-300 font-normal"> beautiful </span> and 
                <span className="text-gray-300 font-normal"> functional </span> 
                web experiences.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="text-gray-400 flex items-center justify-center space-x-2 text-sm font-light tracking-wide">
                <span>© 2024 Prajwal G Hoolageri. Made with</span>
                <Heart size={14} className="text-gray-500" />
                <span>and attention to detail</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
