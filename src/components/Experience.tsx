
const Experience = () => {
  const education = [
    {
      institution: "Sri Indu College of Engineering and Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "2023 - 2027",
      gpa: "Pursuing"
    },
    {
      institution: "Google",
      degree: "Google Cloud Professional Developer",
      period: "2022",
      gpa: "Certified"
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Education & Certifications</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">My academic journey</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.institution}
                className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-purple-400">{edu.degree}</h4>
                    <p className="text-cyan-400 font-medium">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{edu.gpa}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Resume Download */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 animate-glow">
            Download Resume PDF
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
