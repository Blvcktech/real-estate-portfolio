import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      technologies: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "TailwindCSS", "Responsive Design"]
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      technologies: ["Glassmorphism", "Custom Animations", "User Experience", "Design Systems", "Figma", "Adobe Creative Suite"]
    },
    {
      category: "Mobile & Performance",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: ["Mobile-First Design", "Performance Optimization", "Accessibility (a11y)", "Cross-Browser Compatibility", "PWA", "SEO"]
    },
    {
      category: "Tools & Workflow",
      icon: <Zap className="w-6 h-6" />,
      technologies: ["Git & GitHub", "npm/yarn", "Webpack", "VS Code", "Chrome DevTools", "Agile Development"]
    }
  ];

  const projects = [
    {
      title: "Real Estate Platform",
      description: "Modern real estate website with glassmorphism design, custom animations, and responsive layouts.",
      technologies: ["React", "TailwindCSS", "React Router", "Lucide Icons"],
      features: ["Multi-step forms", "Interactive property cards", "Smooth animations", "Mobile-responsive"],
      github: "#",
      live: "#"
    },
    {
      title: "Portfolio Showcase",
      description: "Personal portfolio demonstrating frontend development skills and modern web technologies.",
      technologies: ["React", "CSS3", "JavaScript", "Git"],
      features: ["Custom animations", "Responsive design", "Performance optimized", "Clean code"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 animate-fade-up">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              T
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Topher</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Frontend Developer & UI/UX Enthusiast passionate about creating beautiful, 
              functional web experiences with modern technologies
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary hover:bg-primary/90 group">
                <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                View GitHub
              </Button>
              <Button variant="outline" className="group">
                <Linkedin className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Connect on LinkedIn
              </Button>
              <Button variant="outline" className="group">
                <Mail className="w-4 h-4 mr-2 group-hover:bounce transition-transform" />
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mr-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of recent projects demonstrating modern web development skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 group">
                      <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 group">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Development Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <Code className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
              <p className="text-gray-600">Writing maintainable, readable code that scales with your business needs.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <Palette className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User-Centered Design</h3>
              <p className="text-gray-600">Designing with the user in mind, ensuring intuitive and accessible experiences.</p>
            </div>
            <div className="group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                <Zap className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance First</h3>
              <p className="text-gray-600">Optimizing for speed and efficiency to deliver the best user experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to bring your ideas to life? I'd love to hear about your project.
          </p>
          <Button size="lg" variant="secondary" className="group">
            <Mail className="w-5 h-5 mr-2 group-hover:bounce transition-transform" />
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;