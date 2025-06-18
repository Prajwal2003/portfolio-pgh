
export const EducationSection = () => {
  const education = [
    {
      institution: "Shri Dharmastala Manjunatherwara College of Engineering and Technology",
      degree: "Bachelor of Engineering - Computer Science Engineering",
      period: "Expected 2025",
      grade: "CGPA: 8.59"
    },
    {
      institution: "Vikaas PU College",
      degree: "Pre-University Course",
      period: "2019 - 2021",
      grade: "Result: 96.66%"
    },
    {
      institution: "Shri Manjunatheswara English Medium School",
      degree: "Secondary Education",
      period: "2009 - 2019",
      grade: "Result: 93.44%"
    }
  ];

  return (
    <section id="education" className="py-32 bg-gray-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30"></div>
            <span className="text-gray-400 font-light text-sm tracking-[0.3em] mx-8 uppercase">Education</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-extralight text-white mb-8 tracking-tight">
            Academic Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Building a strong foundation in <span className="text-white font-normal">computer science and engineering</span>.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/10 group"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-light text-white mb-2 md:mb-0 group-hover:text-gray-100 transition-colors duration-300">
                  {edu.institution}
                </h3>
                <span className="text-gray-400 font-light text-sm tracking-wide uppercase">
                  {edu.period}
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <p className="text-gray-300 font-light text-lg mb-2 md:mb-0">
                  {edu.degree}
                </p>
                <span className="text-white font-normal">
                  {edu.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
