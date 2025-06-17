
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-black/80 backdrop-blur-xl border-b border-white/10" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 text-xl font-light">
            <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-white tracking-wide">Loren Lin</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-sm tracking-wide uppercase relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-sm tracking-wide uppercase relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-gray-300 hover:text-white transition-all duration-300 font-light text-sm tracking-wide uppercase relative group"
            >
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="border border-white/20 text-white px-6 py-2 rounded-full hover:border-white/40 hover:bg-white/5 transition-all duration-300 font-light text-sm tracking-wide uppercase"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 py-8 bg-black/90 backdrop-blur-xl rounded-2xl border border-white/10">
            <div className="flex flex-col space-y-8">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-gray-300 hover:text-white transition-colors px-6 font-light text-sm tracking-wide uppercase"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-gray-300 hover:text-white transition-colors px-6 font-light text-sm tracking-wide uppercase"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-gray-300 hover:text-white transition-colors px-6 font-light text-sm tracking-wide uppercase"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-gray-300 hover:text-white transition-colors px-6 font-light text-sm tracking-wide uppercase"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
