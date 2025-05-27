
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Loggi',
      position: 'Senior Software Engineer',
      location: 'Remote',
      period: 'sep 2023 - present',
      description: 'Responsible for building and maintaining seamless integrations between Loggi and its clients, ensuring reliable data exchange through EDI systems, APIs, and event-driven webhooks. Focused on creating scalable, reactive solutions using modern backend technologies, with strong emphasis on system observability and infrastructure as code.',
      technologies: ['Kotlin', 'Micronaut', 'Python', 'Apache Camel', 'MongoDB (Atlas)', 'AWS S3', 'AWS Elasticache', 'AWS Lambda', 'AWS EventBridge', 'AWS SQS', 'Terraform', 'OpenSearch', 'Sentry', 'Prometheus', 'Grafana'],
      achievements: [
        'Developed and maintained EDI integrations using formats like PROCEDA, XML, and email-based files',
        'Implemented APIs and event-driven webhooks for dynamic client integrations',
        'Improved observability and infrastructure automation using Prometheus, Grafana, and Terraform'
      ]
    },
    {
      company: 'Coinbase',
      position: 'Software Engineer (temporary)',
      location: 'Remote',
      period: 'sep 2023 - oct 2023',
      description: '',
      technologies: ['GO'],
      achievements: [
      ]
    },
    {
      company: 'e-Core',
      position: 'Software Engineer',
      location: 'Remote',
      period: 'jul de 2022 - mar de 2023',
      description: 'Worked on international projects (US/Canada) for a client in the advertising sector, focusing on the development of serverless REST APIs and WebSocket solutions using Go and AWS. Participated in architectural design of new features and made adjustments to CI/CD pipelines using AWS CodePipeline.',
      technologies: ['Go', 'Java', 'AWS Lambda', 'AWS API Gateway', 'AWS DynamoDB', 'AWS S3', 'AWS RDS (PostgreSQL)', 'AWS CodePipeline'],
      clients: ["Horizon Media", "Tempo.io"],
      achievements: [
        'Developed serverless REST APIs and WebSocket services using Go and AWS',
        'Contributed to architecture decisions for new product features',
        'Improved CI/CD pipeline configurations with AWS CodePipeline'
      ]
    },
    {
      company: 'Serasa',
      position: 'Software Engineer',
      location: 'Blumenau, SC, Brazil / Remote',
      period: 'jun 2021 - jun 2022',
      description: 'Led the technical development of integrations between Serasa’s internal products, providing scalable and reliable microservices primarily in Golang. Contributed to architectural decisions, supported requirement gathering with multiple business areas, and maintained microservices written in Java and Python. Deployed applications on Kubernetes using Rancher and built serverless solutions with AWS Lambda.',
      technologies: ['Golang', 'Java', 'Python', 'Kubernetes', 'Docker', 'Rancher', 'AWS Lambda', 'AWS API Gateway', 'AWS SQS', 'AWS SNS', 'OpenSearch', 'Redis', 'AWS RDS (PostgreSQL)', 'AWS DocumentDB', 'AWS DynamoDB', 'AWS Kinesis', 'Grafana', 'AWS CloudWatch', 'Prometheus', 'Dynatrace', 'Splunk'],
      achievements: [
        'Provided technical leadership for a cross-functional integration team',
        'Designed and maintained microservices in Go, Java, and Python',
        'Delivered serverless and containerized solutions with AWS and Kubernetes'
      ]
    },
    {
      company: 'Qintess',
      position: 'Software Engineer',
      location: 'São Paulo, SP, Brazil',
      period: 'oct 2019 - jun 2021',
      description: 'Contributed to a fraud prevention project for Serasa Experian, Brazil’s leading credit analysis company, implementing knowledge-based authentication (KBA). Worked across backend and frontend, deploying services on Kubernetes and OpenShift. Developed and maintained microservices in Go and Java, integrated various AWS services, and participated in architectural decision-making.',
          technologies: ['Java 11', 'Spring Boot', 'MongoDB', 'Angular', 'Golang', 'Kubernetes', 'OpenShift', 'AWS SQS', 'AWS SNS', 'OpenSearch', 'AWS S3', 'AWS ElasticCache', 'AWS DynamoDB', 'AWS RDS (PostgreSQL)', 'AWS Kinesis', 'Rancher', 'AWS ElasticSearch', 'Kibana', 'Grafana'],
      clients: ["Serasa Experian"],
      achievements: [
        'Built a KBA-based fraud prevention system used by millions of users',
        'Maintained and evolved microservices in Go and Java',
        'Integrated multiple AWS services and improved monitoring with Grafana and Kibana'
      ]
    },
    {
      company: 'K2 Partnering Solutions',
      position: 'Full Stack Engineer',
      location: 'São Paulo, SP, Brazil',
      period: 'aug 2018 - sep 2019',
      description: 'Worked on the development and maintenance of back office and claims systems for Allianz Seguros. Participated in a customer experience improvement project, focusing on insurance claim notifications via email and SMS, and integrating with risk analysis services. Involved in the integration of new microservices with legacy systems, as well as requirements gathering and production monitoring.',
      technologies: ['Java', 'Angular', 'Spring Boot', 'Microservices', 'DB2', 'IBM RTC', 'Git'],
      clients: ["Allianz Seguros"],
      achievements: [
        'Enhanced customer experience in the claims process through automated notifications',
        'Integrated modern microservices with legacy systems',
        'Participated in all stages of software delivery from requirements to production support'
      ]
    },
    {
      company: 'Solutis Tecnologias',
      position: 'Software Developer',
      location: 'Salvador, BA - Brazil',
      period: 'aug 2017 - may 2018',
      description: 'Contributed to full-stack development projects using modern frontend and backend technologies. Built responsive user interfaces, RESTful APIs, and mobile features. Participated in agile ceremonies and integrated solutions with cloud providers.',
      clients: ["Sesi", "Sicoob"],
      technologies: ['Angular 2 / 4 / 5', 'HTML5', 'SASS', 'Bootstrap 4', 'PostgreSQL', 'Java', 'Spring Boot', 'JUnit', 'Mockito', 'Jasmine', 'Karma', 'Kotlin', 'Scrum', 'Git', 'GCP', 'AWS'],
      achievements: [
        'Developed and maintained multiple Angular web applications',
        'Built and tested REST APIs using Spring Boot and Java',
        'Contributed to Android features using Kotlin and integrated with cloud platforms (GCP & AWS)'
      ]
    },
    {
      company: 'Capgemini',
      position: 'Java Developer',
      location: 'Salvador, BA - Brazil',
      period: 'feb 2015 - jul 2017',
      description: 'Worked on several backoffice projects for Banco Bradesco, one of Brazil’s largest banks. Focused on credit analysis systems, Java integration with Mainframe environments, and internal web development. Collaborated with a geographically distributed team and followed industry best practices.',
      clients: ["Bradesco"],
      technologies: ['Java', 'JSF', 'JavaScript', 'Spring', 'AWB', 'Mainframe'],
      achievements: [
        'Delivered multiple internal web applications for credit analysis',
        'Integrated Java services with Mainframe systems',
        'Collaborated in a remote team across Salvador and São Paulo'
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
            A journey through my professional career in software development
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
                    {experience.clients?.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Worked for clients:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                          {experience.clients.map((client, clientIndex) => (
                            <li key={clientIndex} className="text-sm">{client}</li>
                          ))}
                        </ul>
                      </div>
                    )}

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
