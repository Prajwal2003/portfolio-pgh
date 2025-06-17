
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/90 backdrop-blur-sm shadow-sm" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">
            Loren Lin
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("projects")}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-slate-700 hover:text-slate-900 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("home")}
                className="text-slate-700 hover:text-slate-900 transition-colors px-4"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-slate-700 hover:text-slate-900 transition-colors px-4"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("projects")}
                className="text-slate-700 hover:text-slate-900 transition-colors px-4"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className="text-slate-700 hover:text-slate-900 transition-colors px-4"
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
