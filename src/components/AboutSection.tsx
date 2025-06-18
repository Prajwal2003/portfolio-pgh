import { Code, Palette, Zap, Rocket } from "lucide-react";
export const AboutSection = () => {
  return <section id="about" className="py-32 bg-black relative my-0">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
            <span className="text-gray-400 font-light text-sm tracking-[0.3em] mx-8 uppercase">About</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-tight leading-tight">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            I'm a creative developer with a passion for building exceptional digital experiences. 
            With expertise in modern web technologies, I bridge the gap between 
            <span className="text-white font-normal"> design </span> and 
            <span className="text-white font-normal"> functionality</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[{
          icon: Code,
          title: "Full-Stack Development",
          description: "Proficient in React, Node.js, TypeScript, and modern web frameworks to build scalable applications."
        }, {
          icon: Palette,
          title: "UI/UX Design",
          description: "Creating intuitive and beautiful user interfaces with attention to detail and exceptional user experience."
        }, {
          icon: Zap,
          title: "Performance",
          description: "Optimizing applications for speed, accessibility, and excellent performance across all devices."
        }].map((item, index) => <div key={index} className="group p-8 rounded-3xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/5" style={{
          animationDelay: `${index * 200}ms`
        }}>
              <div className="w-16 h-16 border border-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:border-white/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                <item.icon size={24} className="text-gray-400 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl font-light text-white mb-4 text-center tracking-wide group-hover:text-gray-200 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-center font-light group-hover:text-gray-300 transition-colors duration-300">
                {item.description.split('scalable applications')[0]}
                {item.description.includes('scalable applications') && <span className="text-gray-300 group-hover:text-white transition-colors duration-300"> scalable applications</span>}
                {item.description.split('scalable applications')[1]}
                {item.description.includes('exceptional user experience') && <span className="text-gray-300 group-hover:text-white transition-colors duration-300"> exceptional user experience</span>}
                {item.description.includes('excellent performance') && <span className="text-gray-300 group-hover:text-white transition-colors duration-300"> excellent performance </span>}
              </p>
            </div>)}
        </div>

        <div className="border border-white/10 rounded-3xl p-12 text-white relative overflow-hidden group hover:border-white/20 transition-all duration-700 hover:shadow-2xl hover:shadow-white/5">
          <div className="absolute inset-0 bg-gradient-to-r from-white/3 to-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
          <div className="relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-500">
                <Rocket className="text-gray-400 mr-4 group-hover:text-white transition-colors duration-500" size={32} />
                <h3 className="text-3xl md:text-4xl font-light tracking-tight group-hover:text-gray-200 transition-colors duration-300">
                  Let's Build Something Amazing Together
                </h3>
              </div>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed font-light group-hover:text-gray-200 transition-colors duration-300">
                I'm always excited to work on new projects and collaborate with talented individuals and teams.
              </p>
              <button onClick={() => document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth"
            })} className="border border-white/20 text-white px-8 py-4 rounded-2xl font-light text-sm tracking-[0.2em] uppercase hover:border-white/40 hover:bg-white/5 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-white/10">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};