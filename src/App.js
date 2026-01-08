import { useState, useEffect } from 'react';
import '@/App.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaDownload, FaCode, FaDatabase, FaServer, FaMobile, FaUsers, FaChartLine, FaRocket, FaLightbulb, FaGraduationCap } from 'react-icons/fa';
import { SiReact, SiPython, SiFastapi, SiRedis, SiSqlite, SiHtml5, SiCss3, SiJavascript, SiVercel, SiTailwindcss } from 'react-icons/si';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'team', 'projects', 'tech', 'impact', 'future'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleDownloadDocumentation = () => {
  const link = document.createElement('a');
  link.href = "/assets/BTech_Resources_Project_Documentation.pdf";
  link.download = "Project_Documentation.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
};

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'team', label: 'Team' },
    { id: 'projects', label: 'Projects' },
    { id: 'tech', label: 'Technology' },
    { id: 'impact', label: 'Impact' },
    { id: 'future', label: 'Future' }
  ];

  const teamMembers = [
    {
      name: 'Narendra Yenagandula',
      role: 'Lead Developer & Backend Architect',
      email: 'yenagandula.narendra@gmail.com',
      expertise: 'FastAPI, System Design, Cloud Deployment'
    },
    {
      name: 'Madhan Mayana',
      role: 'Frontend Developer',
      email: 'madhanmayana99@gmail.com',
      expertise: 'React, UI/UX Design, Responsive Design'
    },
    {
      name: 'Rohith Govindu',
      role: 'Full Stack Developer',
      email: 'rohithgovindu09@gmail.com',
      expertise: 'Web Development, Database Design'
    },
    {
      name: 'Pranay Kumar Sriram',
      role: 'Developer & Tester',
      email: 'pranaykumarsriram@gmail.com',
      expertise: 'Testing, Quality Assurance, Documentation'
    }
  ];

  const technologies = [
    { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
    { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend' },
    { name: 'FastAPI', icon: SiFastapi, color: '#009688', category: 'Backend' },
    { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Database' },
    { name: 'SQLite', icon: SiSqlite, color: '#003B57', category: 'Database' },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Frontend' },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
    { name: 'Vercel', icon: SiVercel, color: '#000000', category: 'Deployment' }
  ];

  const projects = [
    {
      title: 'B.Tech Notes Platform',
      description: 'A centralized repository of academic resources with semester-wise organization, previous year papers, and quick-access navigation.',
      features: [
        'Organized by semester and subject',
        'Previous year question papers',
        'Mobile-responsive design',
        'PWA support for offline access',
        'Quick search functionality'
      ],
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PWA'],
      liveUrl: 'https://btech-notes.vercel.app',
      githubUrl: 'https://github.com/Narendra2904/Btech-notes',
      icon: FaGraduationCap,
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'JNTUH Results Portal',
      description: 'An intelligent, high-performance results checking system with advanced caching, analytics, and student tools.',
      features: [
        'Instant result checking with smart caching',
        'Backlog tracker and credit calculator',
        'Result comparison across semesters',
        'Three-tier caching (Redis → SQLite → Scraper)',
        'Mobile-first responsive design',
        'Print-friendly result display'
      ],
      tech: ['FastAPI', 'Redis', 'SQLite', 'Python', 'BeautifulSoup'],
      liveUrl: 'https://btech-jntuh-results.vercel.app',
      githubUrl: 'https://github.com/Narendra2904/btech-frontend',
      backendGithub: 'https://github.com/Narendra2904/jntuh-backend',
      icon: FaChartLine,
      color: 'from-purple-500 to-purple-700'
    }
  ];

  const impactStats = [
    { label: 'Target Users', value: '200K+', icon: FaUsers, description: 'JNTUH Students' },
    { label: 'Response Time', value: '<200ms', icon: FaRocket, description: 'Cached Results' },
    { label: 'Cache Hit Rate', value: '92%', icon: FaDatabase, description: 'Efficiency' },
    { label: 'Mobile Users', value: '80%', icon: FaMobile, description: 'Platform Access' }
  ];

  const futureEnhancements = [
    {
      title: 'AI-Powered Recommendations',
      description: 'Personalized study plans and performance predictions using machine learning',
      icon: FaLightbulb,
      timeline: '3-6 months'
    },
    {
      title: 'Mobile Applications',
      description: 'Native Android and iOS apps with offline-first architecture',
      icon: FaMobile,
      timeline: '6-12 months'
    },
    {
      title: 'Multi-University Support',
      description: 'Expand platform to other universities across the region',
      icon: FaGraduationCap,
      timeline: '1-2 years'
    },
    {
      title: 'Community Features',
      description: 'Discussion forums, peer learning, and study group management',
      icon: FaUsers,
      timeline: '6-12 months'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <FaGraduationCap className="text-3xl text-blue-400" />
              <span className="text-xl font-bold text-white">B.Tech Resources</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-300 hover:bg-blue-500/10 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
             <a
  href="/public/assets/BTech_Resources_Project_Documentation.pdf"
  download="BTech_Resources_Project_Documentation.pdf"
  rel="noopener noreferrer"
>
  <button className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all flex items-center space-x-2">
    <FaDownload />
    <span>Documentation</span>
  </button>
</a>

            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-slate-800 border-t border-blue-500/20"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg ${
                    activeSection === item.id
                      ? 'bg-blue-500 text-white'
                      : 'text-gray-300 hover:bg-blue-500/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a 
  href="/assets/BTech_Resources_Project_Documentation.pdf" 
  download="Project_Documentation.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20 flex items-center space-x-2"
  >
    <FaDownload />
    <span>Download Documentation</span>
  </motion.button>
</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <FaGraduationCap className="text-8xl text-blue-400 mx-auto mb-6" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              B.Tech Resources Platform
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 mb-8 max-w-3xl mx-auto">
              Empowering engineering students with centralized academic resources and intelligent result tracking
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => scrollToSection('projects')}
    className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg"
  >
    Explore Projects
  </motion.button>

  {/* LINK ADDED HERE */}
  <a 
    href="/assets/BTech_Resources_Project_Documentation.pdf" 
    download="Project_Documentation.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      // Removed onClick={handleDownloadDocumentation} since the <a> tag handles it
      className="px-8 py-4 bg-white/10 backdrop-blur-md text-white text-lg font-semibold rounded-full hover:bg-white/20 transition-all border border-white/20 flex items-center space-x-2"
    >
      <FaDownload />
      <span>Download Documentation</span>
    </motion.button>
  </a>
</div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <FaUsers className="text-blue-400" />
                <span>200K+ Target Users</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaRocket className="text-purple-400" />
                <span>Ultra-Fast Performance</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMobile className="text-green-400" />
                <span>Mobile-First Design</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              About the Project
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-red-500/20 rounded-lg">
                    <FaLightbulb className="text-3xl text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Problem Statement</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">Academic Resource Fragmentation:</strong> Students waste valuable time searching for quality study materials scattered across multiple platforms and WhatsApp groups.
                  </p>
                  <p>
                    <strong className="text-white">Results Portal Inefficiency:</strong> The official JNTUH portal suffers from slow response times, server crashes during peak hours, and lacks essential features like backlog tracking and analytics.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <FaRocket className="text-3xl text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Our Solution</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong className="text-white">Centralized Notes Platform:</strong> Organized repository with semester-wise materials, previous papers, and PWA support for offline access.
                  </p>
                  <p>
                    <strong className="text-white">Intelligent Results Portal:</strong> High-performance system with three-tier caching (Redis → SQLite → Scraper), backlog tracker, credit calculator, and result analytics.
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Innovation & Uniqueness</h3>
              <div className="grid md:grid-cols-3 gap-6 text-gray-300">
                <div>
                  <strong className="text-blue-400">Smart Caching:</strong> 95% reduction in server load with intelligent three-tier cache hierarchy.
                </div>
                <div>
                  <strong className="text-purple-400">Lightning Fast:</strong> Average response time under 200ms for cached results.
                </div>
                <div>
                  <strong className="text-green-400">Zero Cost:</strong> Completely free for all students using cloud free tiers.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="min-h-screen flex items-center py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Meet the Team
            </h2>
            <p className="text-xl text-blue-200 mb-12 text-center">SUM80 TECHIEs</p>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              CMR Technical Campus & Vageshwari College of Engineering
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-3xl font-bold text-white mb-4 mx-auto">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-bold text-white text-center mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 text-center text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs text-center mb-3">
                    {member.expertise}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-xs text-gray-300 hover:text-blue-400 transition-colors block text-center truncate"
                  >
                    {member.email}
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Our Projects
            </h2>

            <div className="space-y-12">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all"
                  >
                    <div className="grid md:grid-cols-2 gap-8 p-8">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`p-4 bg-gradient-to-br ${project.color} rounded-xl`}>
                            <Icon className="text-4xl text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {project.tech.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-6">{project.description}</p>
                        <div className="flex flex-wrap gap-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all flex items-center space-x-2"
                          >
                            <FaExternalLinkAlt />
                            <span>Live Demo</span>
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all flex items-center space-x-2 border border-white/20"
                          >
                            <FaGithub />
                            <span>GitHub</span>
                          </a>
                          {project.backendGithub && (
                            <a
                              href={project.backendGithub}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all flex items-center space-x-2 border border-white/20"
                            >
                              <FaServer />
                              <span>Backend</span>
                            </a>
                          )}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, i) => (
                            <li key={i} className="flex items-start space-x-3 text-gray-300">
                              <span className="text-blue-400 mt-1">✓</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section id="tech" className="min-h-screen flex items-center py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Technology Stack
            </h2>
            <p className="text-gray-300 text-center mb-12">Modern, scalable, and production-ready technologies</p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {technologies.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all text-center"
                  >
                    <Icon className="text-5xl mx-auto mb-3" style={{ color: tech.color }} />
                    <h3 className="text-white font-semibold mb-1">{tech.name}</h3>
                    <p className="text-xs text-gray-400">{tech.category}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-3 gap-8"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20">
                <FaCode className="text-4xl text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Frontend</h3>
                <p className="text-gray-300 text-sm">
                  Modern, responsive interfaces built with React, HTML5, CSS3, and Tailwind CSS for optimal user experience.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 backdrop-blur-md rounded-2xl p-8 border border-purple-500/20">
                <FaServer className="text-4xl text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Backend</h3>
                <p className="text-gray-300 text-sm">
                  High-performance FastAPI backend with intelligent caching using Redis and SQLite for data persistence.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-md rounded-2xl p-8 border border-green-500/20">
                <FaDatabase className="text-4xl text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Deployment</h3>
                <p className="text-gray-300 text-sm">
                  Cloud-native deployment on Vercel and Render with global CDN, auto-scaling, and CI/CD pipelines.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="min-h-screen flex items-center py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
              Impact & Statistics
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {impactStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 text-center"
                  >
                    <Icon className="text-5xl text-blue-400 mx-auto mb-4" />
                    <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-lg text-blue-300 mb-1">{stat.label}</div>
                    <div className="text-sm text-gray-400">{stat.description}</div>
                  </motion.div>
                );
              })}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Educational Impact</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong className="text-white">Democratized Access:</strong> Equal access to quality resources for all students regardless of economic background</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong className="text-white">Time Efficiency:</strong> Students save 2-3 hours per week in resource searching</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong className="text-white">Reduced Anxiety:</strong> Instant result access reduces academic stress and uncertainty</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold text-white mb-6">Social Impact</h3>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong className="text-white">Rural Accessibility:</strong> Mobile-optimized design works efficiently in low-bandwidth areas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong className="text-white">Community Building:</strong> Fosters collaboration and knowledge sharing among students</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span><strong className="text-white">Sustainability:</strong> Free and ad-free model prioritizing student welfare</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Enhancements Section */}
      <section id="future" className="min-h-screen flex items-center py-20 px-4 bg-slate-900/50">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
              Future Roadmap
            </h2>
            <p className="text-gray-300 text-center mb-12">Continuous innovation and expansion</p>

            <div className="grid md:grid-cols-2 gap-8">
              {futureEnhancements.map((enhancement, index) => {
                const Icon = enhancement.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                        <Icon className="text-3xl text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{enhancement.title}</h3>
                          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                            {enhancement.timeline}
                          </span>
                        </div>
                        <p className="text-gray-300">{enhancement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-8 border border-blue-500/20 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Long-term Vision</h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transform into a comprehensive educational platform serving multiple universities across the region, 
                with AI-powered personalized learning, institutional dashboards, and placement preparation resources. 
                Building a sustainable, student-first ecosystem that revolutionizes how students access and interact with academic resources.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-blue-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <FaGraduationCap className="text-blue-400" />
                <span>B.Tech Resources</span>
              </h3>
              <p className="text-gray-400">
                Built by students, for students — fast, reliable, and always free.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://btech-notes.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Notes Platform
                  </a>
                </li>
                <li>
                  <a href="https://btech-jntuh-results.vercel.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Results Portal
                  </a>
                </li>
                <li>
                  <button onClick={handleDownloadDocumentation} className="text-gray-400 hover:text-blue-400 transition-colors">
                    Documentation
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Narendra2904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                >
                  <FaGithub className="text-2xl text-gray-400 hover:text-white" />
                </a>
              </div>
              <p className="text-gray-400 mt-4 text-sm">
                Contact: yenagandula.narendra@gmail.com
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 SUM80 TECHIEs. All rights reserved.</p>
            <p className="text-sm mt-2">CMR Technical Campus & Vageshwari College of Engineering</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
