
import { Code, Palette, Zap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm a creative developer with a passion for building exceptional digital experiences. 
            With expertise in modern web technologies, I bridge the gap between design and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Code size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Full-Stack Development</h3>
            <p className="text-slate-600">
              Proficient in React, Node.js, TypeScript, and modern web frameworks to build scalable applications.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Palette size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">UI/UX Design</h3>
            <p className="text-slate-600">
              Creating intuitive and beautiful user interfaces with attention to detail and user experience.
            </p>
          </div>

          <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap size={32} className="text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Performance</h3>
            <p className="text-slate-600">
              Optimizing applications for speed, accessibility, and excellent user experience across all devices.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-lg text-slate-300 mb-8">
              I'm always excited to work on new projects and collaborate with talented individuals and teams.
            </p>
            <button 
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold hover:bg-slate-100 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
