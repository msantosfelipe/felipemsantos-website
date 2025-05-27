
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'TechCorp Solutions',
      position: 'Senior Backend Developer',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led the development of microservices architecture serving 10M+ users. Designed and implemented scalable APIs using Node.js, Python, and Go. Reduced system latency by 40% through database optimization and caching strategies.',
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
      achievements: [
        'Architected microservices handling 1M+ daily requests',
        'Improved system performance by 40%',
        'Led a team of 5 backend developers'
      ]
    },
    {
      company: 'StartupInc',
      position: 'Backend Developer',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed RESTful APIs and database schemas for a fast-growing fintech startup. Implemented secure payment processing systems and real-time data pipelines. Collaborated with frontend teams to deliver seamless user experiences.',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'AWS', 'RabbitMQ'],
      achievements: [
        'Built secure payment processing system',
        'Reduced API response time by 60%',
        'Implemented real-time data synchronization'
      ]
    },
    {
      company: 'Capgemini',
      position: 'Java Developer',
      location: 'Salvador, BA - Brazil',
      period: 'feb 2015 - jul 2017',
      description: 'Started my career building web applications and learning industry best practices. Worked on database design, API development, and system integration projects. Gained expertise in cloud technologies and DevOps practices.',
      technologies: ['Java', 'JSF'],
      achievements: [
        'Delivered 15+ web applications',
        'Learned cloud deployment best practices',
        'Contributed to open source projects'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A journey through my professional career in backend development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index} 
                className={`relative lg:grid lg:grid-cols-2 lg:gap-8 items-center animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 lg:translate-y-0 hidden lg:block">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:col-start-2 lg:pl-8'}`}>
                  <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center gap-2 mb-4 text-sm text-gray-500">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-2">
                      <Building className="text-blue-600" size={20} />
                      <h3 className="text-xl font-bold text-gray-900">{experience.company}</h3>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="text-gray-400" size={16} />
                      <span className="text-gray-600">{experience.location}</span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-blue-600 mb-3">{experience.position}</h4>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{experience.description}</p>
                    
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm">{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 rounded-full text-sm border border-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
