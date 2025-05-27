
const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Go (Golang)', 'Kotlin', 'Python', 'NodeJS', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Frameworks',
      skills: ['Spring Boot', 'Micronaut', 'Apache Camel', 'Angular (2, 4, 5)', 'JUnit', 'Mockito', 'Jasmine', 'Karma'],
    },
    {
      title: 'Databases',
      skills: [
        'MySQL',
        'PostgreSQL',
        'MongoDB',
        'DB2',
        'Redis',
      ],
    },
    {
      title: 'Cloud Services',
      skills: [
        'AWS S3', 
        'AWS Lambda', 
        'AWS API Gateway', 
        'AWS SQS', 
        'AWS SNS', 
        'AWS EventBridge', 
        'AWS Kinesis', 
        'AWS CloudWatch',
        'AWS CodePipeline', 
        'AWS RDS', 
        'AWS DocumentDB', 
        'AWS DynamoDB', 
        'AWS ElasticCache',
      ],
    },
    {
      title: 'Observability & Monitoring',
      skills: [
        'Grafana',
        'Prometheus',
        'Dynatrace',
        'Splunk',
        'Datadog',
        'ElasticSearch / OpenSearch / Kibana',
        'Sentry',
        'AWS CloudWatch',
      ],
    },
    {
      title: 'Other Tools',
      skills: [
        'Docker',
        'Kubernetes',
        'Rancher',
        'Openshift',
        'Apache JMeter',
        'Locust',
        'Terraform',
        'Git',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build robust systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="bg-gray-800 p-6 rounded-lg hover:bg-gray-750 transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-gray-300 rounded-full border border-gray-600 hover:border-gray-500 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
