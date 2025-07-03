
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 px-4">Get to know the person behind the code</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-fade-in-up order-2 lg:order-1">
            <div className="relative flex justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-cyan-400 animate-glow">
                <img
                  src="/lovable-uploads/d9f3de93-053a-4947-bc2c-ff2fb266e405.png"
                  alt="Gopichand Naganaboyina"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="animate-fade-in-up order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-cyan-400">Hello, I'm Gopichand!</h3>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Skilled in building responsive and dynamic websites using HTML, CSS, JavaScript, and Python.
              I focus on clean code, smooth user experiences, and continuous learning to grow as a full stack developer.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="glass-effect p-4 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-2 text-sm sm:text-base">Hobbies</h4>
                <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Photography</li>
                  <li>• Rock Climbing</li>
                  <li>• Chess</li>
                  <li>• Cooking</li>
                </ul>
              </div>
              <div className="glass-effect p-4 rounded-lg">
                <h4 className="font-semibold text-purple-400 mb-2 text-sm sm:text-base">Interests</h4>
                <ul className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• AI & Machine Learning</li>
                  <li>• Learning New Technologies</li>
                  <li>• Problem Solving & Debugging</li>
                  <li>• Reading About Startups & Innovation</li>
                  <li>• Attending Hackathons & Tech Events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
