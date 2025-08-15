import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';
import ListProperty from './components/ListProperty';
import About from './pages/About';
import Contact from './pages/Contact';
import Properties from './pages/Properties';
import Blog from './pages/Blog';
import './index.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-16">
        <Routes>
          <Route path="/list-property" element={<ListProperty />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={
            <main>
              <Hero />
              <FeaturedListings />
        
        {/* About Section with animations */}
        <section id="about" className="py-16 bg-white relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E')" }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 animate-fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative">
                <span className="inline-block">About Topher</span>
                <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full animate-width-expand"></div>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto animate-fade-up [animation-delay:300ms]">
                This modern real estate platform is a showcase of my full-stack development skills. 
                Built with React.js, I've crafted an immersive user experience featuring glassmorphism design, 
                smooth animations, responsive layouts, and interactive components. The project demonstrates 
                my expertise in modern web technologies, UI/UX design principles, and clean code architecture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-up [animation-delay:500ms] hover:transform hover:scale-105 transition-all duration-300 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
                  <span className="text-white text-xl font-bold">React</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Frontend Framework</h3>
                <p className="text-gray-600">Modern React.js with hooks, routing, and state management</p>
              </div>
              
              <div className="text-center animate-fade-up [animation-delay:700ms] hover:transform hover:scale-105 transition-all duration-300 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle [animation-delay:300ms]">
                  <span className="text-white text-xl font-bold">CSS3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Styling & Design</h3>
                <p className="text-gray-600">TailwindCSS with custom animations and glassmorphism effects</p>
              </div>
              
              <div className="text-center animate-fade-up [animation-delay:900ms] hover:transform hover:scale-105 transition-all duration-300 bg-white p-8 rounded-xl shadow-lg hover:shadow-xl">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle [animation-delay:600ms]">
                  <span className="text-white text-xl font-bold">UX</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">User Experience</h3>
                <p className="text-gray-600">Responsive design with smooth interactions and accessibility</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="agents" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technologies & Features
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                This project showcases modern web development techniques and technologies, 
                demonstrating proficiency in building scalable, interactive applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "React Router",
                  role: "Client-Side Navigation",
                  icon: "🚀",
                  features: ["Single Page Application", "Dynamic Routing", "Seamless Navigation"]
                },
                {
                  name: "Glassmorphism",
                  role: "Modern UI Design",
                  icon: "✨",
                  features: ["Backdrop Blur Effects", "Transparent Overlays", "Premium Aesthetics"]
                },
                {
                  name: "Custom Animations",
                  role: "Interactive Experience",
                  icon: "🎨",
                  features: ["CSS3 Keyframes", "Smooth Transitions", "Floating Particles"]
                },
                {
                  name: "Responsive Design",
                  role: "Cross-Device Compatibility",
                  icon: "📱",
                  features: ["Mobile-First Approach", "TailwindCSS Grid", "Adaptive Layouts"]
                }
              ].map((tech, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="relative w-full h-48 bg-gradient-to-br from-primary/10 to-blue-100 flex items-center justify-center">
                    <div className="text-6xl">{tech.icon}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{tech.name}</h3>
                    <p className="text-gray-600 mb-4">{tech.role}</p>
                    <div className="space-y-1">
                      {tech.features.map((feature, i) => (
                        <div key={i} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to find your dream home? Contact us today and let our expert team 
                guide you through the process.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold">Office Address</p>
                      <p className="text-gray-600">123 Real Estate Blvd, Suite 100<br />Downtown, CA 90210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold">Phone Number</p>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">✉️</span>
                    </div>
                    <div>
                      <p className="font-semibold">Email Address</p>
                      <p className="text-gray-600">info@premiumrealestate.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  ></textarea>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
          } />
        </Routes>
        </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-2">
                  <span className="text-white font-bold">🏠</span>
                </div>
                <span className="text-xl font-bold">Premium Real Estate</span>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect home. We provide exceptional 
                service and access to the most exclusive properties.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#listings" className="hover:text-white transition-colors">Properties</a></li>
                <li><a href="#agents" className="hover:text-white transition-colors">Agents</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Property Types</h4>
              <ul className="space-y-2 text-gray-400">
                <li><button className="hover:text-white transition-colors text-left">Single Family</button></li>
                <li><button className="hover:text-white transition-colors text-left">Condos</button></li>
                <li><button className="hover:text-white transition-colors text-left">Townhouses</button></li>
                <li><button className="hover:text-white transition-colors text-left">Luxury Homes</button></li>
                <li><button className="hover:text-white transition-colors text-left">Investment Properties</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📍 123 Real Estate Blvd</p>
                <p>Downtown, CA 90210</p>
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ info@premiumrealestate.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Premium Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App; 