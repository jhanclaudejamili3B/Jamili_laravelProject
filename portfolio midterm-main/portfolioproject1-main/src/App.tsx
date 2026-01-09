import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code2, Palette, Smartphone, Database, Award, Briefcase } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    { name: 'Frontend Development', icon: Code2, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI/UX Design', icon: Palette, color: 'from-purple-500 to-pink-500' },
    { name: 'Responsive Design', icon: Smartphone, color: 'from-green-500 to-emerald-500' },
    { name: 'Database Management', icon: Database, color: 'from-orange-500 to-red-500' },
    { name: 'Web Development', icon: Award, color: 'from-indigo-500 to-blue-500' },
    { name: 'Full Stack', icon: Briefcase, color: 'from-pink-500 to-rose-500' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with payment integration',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['TypeScript', 'Firebase', 'Tailwind'],
    },
    {
      title: 'Portfolio Dashboard',
      description: 'Analytics dashboard for tracking portfolio performance',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Chart.js', 'API'],
    },
    {
      title: 'Social Media App',
      description: 'Modern social networking platform with messaging',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'GraphQL', 'AWS'],
    },
    {
      title: 'Weather Forecast',
      description: 'Real-time weather application with beautiful UI',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Vue.js', 'Weather API', 'CSS3'],
    },
    {
      title: 'Fitness Tracker',
      description: 'Health and fitness tracking mobile application',
      image: 'https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Redux', 'SQLite'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:bg-slate-700 rounded-md">Home</a>
              <a href="#about" className="block px-3 py-2 hover:bg-slate-700 rounded-md">About</a>
              <a href="#skills" className="block px-3 py-2 hover:bg-slate-700 rounded-md">Skills</a>
              <a href="#projects" className="block px-3 py-2 hover:bg-slate-700 rounded-md">Projects</a>
              <a href="#contact" className="block px-3 py-2 hover:bg-slate-700 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Flexbox */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm">
                Welcome to my portfolio
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Hi, I'm
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Jhan Claude Jamili
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl">
                Passionate about creating beautiful, functional, and user-friendly digital experiences.
                Specializing in modern web technologies and innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
                >
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative">
                  <img
                    src="/screenshot_2026-01-04_160909.png"
                    alt="Profile"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-800"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Flexbox */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4 text-cyan-400">My Journey</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  I'm a dedicated developer with a passion for crafting exceptional digital experiences.
                  With years of experience in web development, I specialize in creating responsive,
                  user-friendly applications that solve real-world problems.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  My expertise spans across frontend and backend technologies, with a keen eye for
                  design and a commitment to writing clean, maintainable code. I'm always eager to
                  learn new technologies and take on challenging projects.
                </p>
              </div>
            </div>

            <div className="flex-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-6 rounded-xl border border-cyan-500/30">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-slate-300">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/30">
                  <div className="text-4xl font-bold text-purple-400 mb-2">5+</div>
                  <div className="text-slate-300">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/30">
                  <div className="text-4xl font-bold text-green-400 mb-2">30+</div>
                  <div className="text-slate-300">Happy Clients</div>
                </div>
                <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 p-6 rounded-xl border border-orange-500/30">
                  <div className="text-4xl font-bold text-orange-400 mb-2">15+</div>
                  <div className="text-slate-300">Awards Won</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Grid */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Expertise in modern technologies and frameworks to build amazing digital products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className={`w-16 h-16 mb-4 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <div className="w-full bg-slate-700 rounded-full h-2 mb-2">
                      <div className={`bg-gradient-to-r ${skill.color} h-2 rounded-full transition-all duration-1000 group-hover:w-full`} style={{ width: '70%' }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section - Grid */}
      <section id="projects" className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              A showcase of my recent work and creative projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-3 bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors">
                      <ExternalLink size={24} />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Flexbox */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Let's work together on your next project. Feel free to reach out!
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            <div className="flex-1">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-2xl border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <div className="space-y-6">
                <a href="mailto:claude9jamili@gmail.com" className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">Email</div>
                    <div className="font-semibold">claude9jamili@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                    <Github size={24} />
                  </div>
                  <a href="https://github.com/jhanclaudejamili3B/Jamili_laravelProject" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <div className="text-sm text-slate-400">GitHub</div>
                    <div className="font-semibold">jhanclaudejamili3B</div>
                  </a>
                </div>

                <div className="flex items-center gap-4 p-6 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-slate-400">LinkedIn</div>
                    <div className="font-semibold">linkedin.com/in/username</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400">
              © 2024 Portfolio. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
