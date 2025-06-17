
import { Code, Palette, Zap, Rocket } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            I'm a creative developer with a passion for building exceptional digital experiences. 
            With expertise in modern web technologies, I bridge the gap between 
            <span className="text-cyan-400 font-semibold"> design </span> and 
            <span className="text-pink-400 font-semibold"> functionality</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Code size={36} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Full-Stack Development</h3>
            <p className="text-purple-200 leading-relaxed">
              Proficient in React, Node.js, TypeScript, and modern web frameworks to build 
              <span className="text-cyan-400"> scalable applications</span>.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Palette size={36} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">UI/UX Design</h3>
            <p className="text-purple-200 leading-relaxed">
              Creating intuitive and beautiful user interfaces with attention to detail and 
              <span className="text-pink-400"> exceptional user experience</span>.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-600/20 to-cyan-600/20 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Zap size={36} className="text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Performance</h3>
            <p className="text-purple-200 leading-relaxed">
              Optimizing applications for speed, accessibility, and 
              <span className="text-green-400"> excellent performance </span> 
              across all devices.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6">
                <Rocket className="text-yellow-400 mr-3" size={40} />
                <h3 className="text-3xl md:text-4xl font-bold">
                  Let's Build Something Amazing Together
                </h3>
              </div>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed">
                I'm always excited to work on new projects and collaborate with talented individuals and teams.
                <span className="text-yellow-300"> Ready to create magic?</span>
              </p>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-105 transform"
              >
                Get In Touch ✨
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
