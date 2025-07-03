
const Experience = () => {
  const education = [
    {
      institution: "Sri Indu College of Engineering and Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "2023 - 2027",
      gpa: "Pursuing"
    }
  ];

  const certifications = [
    {
      institution: "HackerRank",
      degree: "Python Basics",
      period: "2024",
      gpa: "Certified"
    },
    {
      institution: "Coursera",
      degree: "Google AI Essentials",
      period: "2024", 
      gpa: "Certified"
    },
    {
      institution: "CodeChef",
      degree: "Advanced Python",
      period: "2024",
      gpa: "Certified"
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">Education & Certifications</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">My academic journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-cyan-400">Education</h3>
            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.institution}
                  className="glass-effect p-4 sm:p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-purple-400 mb-1">{edu.degree}</h4>
                      <p className="text-cyan-400 font-medium text-sm sm:text-base">{edu.institution}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full self-start">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{edu.gpa}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-purple-400">Certifications</h3>
            <div className="space-y-6 sm:space-y-8">
              {certifications.map((cert, index) => (
                <div
                  key={cert.institution + cert.degree}
                  className="glass-effect p-4 sm:p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${(index + education.length) * 0.1}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-bold text-purple-400 mb-1">{cert.degree}</h4>
                      <p className="text-cyan-400 font-medium text-sm sm:text-base">{cert.institution}</p>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full self-start">
                      {cert.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">{cert.gpa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center mt-12 sm:mt-16">
          <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 animate-glow">
            Download Resume PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
