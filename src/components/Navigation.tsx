
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1chVnJ_zDpg5HDVlgDVnzewzouUig-Go1/view?usp=sharing', '_blank');
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      isScrolled 
        ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xl font-light group cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="w-8 h-8 border border-white/20 rounded-2xl flex items-center justify-center group-hover:border-white/40 transition-all duration-300 group-hover:scale-110">
              <div className="w-2 h-2 bg-white rounded-full group-hover:bg-gray-200 transition-colors duration-300"></div>
            </div>
            <span className="text-white tracking-wide group-hover:text-gray-200 transition-colors duration-300">Prajwal G Hoolageri</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-sm tracking-wide relative group py-2"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-500"></span>
            </button>
            <button 
              onClick={() => scrollToSection("education")}
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-sm tracking-wide relative group py-2"
            >
              Education
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-500"></span>
            </button>
            <button 
              onClick={() => scrollToSection("experience")}
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-sm tracking-wide relative group py-2"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-500"></span>
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-sm tracking-wide relative group py-2"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-white to-transparent group-hover:w-full transition-all duration-500"></span>
            </button>
            <button 
              onClick={handleResumeClick}
              className="flex items-center space-x-2 border border-white/20 text-white px-5 py-2.5 rounded-2xl hover:border-white/40 hover:bg-white/5 transition-all duration-500 font-light text-sm tracking-wide hover:scale-105 hover:shadow-lg hover:shadow-white/10"
            >
              <Download size={14} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:bg-white/5 rounded-xl transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <div className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'}`}>
                <Menu size={20} />
              </div>
              <div className={`absolute inset-0 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'}`}>
                <X size={20} />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 mt-6' 
            : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className="py-8 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex flex-col space-y-6">
              {['about', 'education', 'experience', 'projects'].map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-gray-300 hover:text-white transition-all duration-300 px-6 font-light text-sm tracking-wide hover:bg-white/5 py-3 mx-4 rounded-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {section}
                </button>
              ))}
              <button
                onClick={handleResumeClick}
                className="flex items-center justify-center space-x-2 text-gray-300 hover:text-white transition-all duration-300 px-6 font-light text-sm tracking-wide hover:bg-white/5 py-3 mx-4 rounded-xl"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
