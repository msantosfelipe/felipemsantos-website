
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="gradient-border">
              <div className="gradient-border-inner p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Passionate Backend Developer
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  With over 5 years of experience in backend development, I specialize in building 
                  scalable, high-performance systems that can handle millions of requests. My expertise 
                  spans across multiple programming languages and frameworks.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  I'm passionate about clean code, system architecture, and solving complex problems. 
                  Whether it's designing RESTful APIs, implementing microservices, or optimizing 
                  database performance, I enjoy every aspect of backend development.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you can find me contributing to open source projects, 
                  reading about new technologies, or mentoring junior developers.
                </p>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime Achieved</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Provided</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
