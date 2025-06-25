
import { Github, Linkedin, Mail, Rss, Download, Phone } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/msantosfelipe', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/fmaiasantos', label: 'LinkedIn' },
    { icon: Rss, href: 'https://medium.com/@msantosfelipe', label: 'Medium' },
    { icon: Phone, href: 'http://wa.me/5511992522386', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:felipe.maiasantos@yahoo.com.br', label: 'Email' },
  ];

  const handleDownloadResume = () => {
    // Replace with your actual resume file path
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Felipe_Maia_Santos_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, My name is{' '}
              <span className="text-gradient">Felipe Maia Santos</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
              Backend Developer specializing in scalable systems, APIs, and cloud architecture.
              I build robust solutions that power modern applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                View My Work
              </button>
              <button 
                onClick={handleDownloadResume}
                className="px-8 py-3 bg-gray-800 text-gray-300 font-semibold rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center border border-gray-700">
                {/* Replace this div with your actual image */}
                <div className="w-72 h-72 rounded-full bg-gray-800 flex items-center justify-center text-gray-400">
                  <span className="text-lg font-medium">
                    {/* <img src="profile.jpeg"/> */}
                    </span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-600/10 rounded-full animate-float" />
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-600/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-indigo-600/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
