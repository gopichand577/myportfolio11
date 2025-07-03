
import { useState, useEffect } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  const technicalSkills = [
    { name: 'Python', level: 80 },
    { name: 'C', level: 75 },
    { name: 'Java', level: 70 },
    { name: 'SQL', level: 75 },
  ];

  const softSkills = [
    { name: 'Problem Solving', level: 95 },
    { name: 'Team Leadership', level: 88 },
    { name: 'Communication', level: 92 },
    { name: 'Project Management', level: 85 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => (
    <div className="mb-4 sm:mb-6" style={{ animationDelay: `${index * 0.1}s` }}>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-cyan-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%'
          }}
        />
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills & Expertise</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">Technologies and tools I work with</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="glass-effect p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-cyan-400 flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-cyan-400 rounded-full mr-3"></div>
              Technical Skills
            </h3>
            {technicalSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <div className="glass-effect p-6 sm:p-8 rounded-2xl">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-purple-400 flex items-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-400 rounded-full mr-3"></div>
              Soft Skills
            </h3>
            {softSkills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {['Python', 'C', 'Java', 'SQL'].map((tech, index) => (
            <div
              key={tech}
              className="glass-effect p-4 sm:p-6 rounded-xl text-center hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">{tech[0]}</span>
              </div>
              <h4 className="font-semibold text-sm sm:text-base">{tech}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
