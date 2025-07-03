
const Experience = () => {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving architectural decisions.",
      achievements: [
        "Increased application performance by 40%",
        "Led a team of 5 developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      company: "Digital Innovations Inc.",
      position: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create user-friendly interfaces.",
      achievements: [
        "Delivered 15+ successful projects",
        "Reduced bug reports by 35%",
        "Improved code review process"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Frontend Developer",
      period: "2019 - 2020",
      description: "Built responsive web applications and mobile-first designs. Worked closely with UX/UI designers to implement pixel-perfect designs.",
      achievements: [
        "Launched 3 major product features",
        "Improved mobile performance by 50%",
        "Established component library"
      ]
    }
  ];

  const education = [
    {
      institution: "State University",
      degree: "Bachelor of Science in Computer Science",
      period: "2015 - 2019",
      gpa: "3.8/4.0"
    },
    {
      institution: "AWS",
      degree: "AWS Solutions Architect Associate",
      period: "2023",
      gpa: "Certified"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Experience & Education</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">My professional journey</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">Work Experience</h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-cyan-400">{exp.position}</h4>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-purple-400">Education & Certifications</h3>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.institution}
                  className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
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
