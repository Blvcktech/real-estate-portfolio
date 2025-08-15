import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Phone, Mail, Clock, Send, Github, Linkedin, Twitter, CheckCircle, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "topher.dev@example.com",
      description: "Send me an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Available during business hours"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "San Francisco, CA",
      description: "Open to remote opportunities"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      details: "24-48 hours",
      description: "I'll get back to you quickly"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "#",
      color: "hover:text-gray-900"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "#",
      color: "hover:text-blue-400"
    }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <Card className="max-w-md w-full animate-fade-up">
          <CardContent className="pt-10 pb-10 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Message Sent!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out. I'll get back to you within 24-48 hours.
            </p>
            <div className="animate-pulse text-sm text-gray-500">
              Redirecting back to form...
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary/15 via-blue-50 to-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block p-3 bg-primary/10 rounded-full mb-6 animate-fade-down">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-down [animation-delay:200ms]">
            Get In <span className="bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-up [animation-delay:400ms]">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life. 
            I'm always excited to collaborate on innovative projects.
          </p>
          
          {/* Quick contact buttons */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-up [animation-delay:600ms]">
            <Button className="bg-primary hover:bg-primary/90 group">
              <Mail className="w-4 h-4 mr-2 group-hover:bounce transition-transform" />
              Email Me
            </Button>
            <Button variant="outline" className="group border-primary text-primary hover:bg-primary hover:text-white">
              <Phone className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
              Schedule Call
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="animate-fade-up [animation-delay:300ms]">
              <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden group">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative bg-white m-[1px] rounded-lg">
                  <CardHeader className="relative">
                    {/* Background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-blue-100 rounded-full -translate-y-16 translate-x-16"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary to-blue-500 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <Send className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Send me a message
                          </CardTitle>
                          <div className="h-1 w-16 bg-gradient-to-r from-primary to-blue-500 rounded-full mt-2"></div>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        Fill out the form below and I'll get back to you as soon as possible. 
                        I'm always excited to hear about new opportunities and collaborations.
                      </p>
                    </div>
                  </CardHeader>
                <CardContent className="relative">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                          Name *
                        </label>
                        <div className="relative">
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-2 border-gray-200 hover:border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white"
                          />
                          <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                        </div>
                      </div>
                      
                      <div className="group">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                          Email *
                        </label>
                        <div className="relative">
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="h-12 border-2 border-gray-200 hover:border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white"
                          />
                          <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                        Subject *
                      </label>
                      <div className="relative">
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="What's this about?"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="h-12 border-2 border-gray-200 hover:border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white"
                        />
                        <Send className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" />
                      </div>
                    </div>
                    
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-primary transition-colors">
                        Message *
                      </label>
                      <div className="relative">
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          placeholder="Tell me about your project or how I can help..."
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-200 hover:border-gray-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300 bg-gray-50/50 hover:bg-white focus:bg-white rounded-lg resize-none focus:outline-none"
                        />
                        <div className="absolute bottom-3 right-3 text-xs text-gray-400 group-focus-within:text-primary transition-colors">
                          {formData.message.length}/500
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button 
                        type="submit" 
                        className="w-full h-14 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-semibold rounded-xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-500">
                        I typically respond within <span className="font-semibold text-primary">24 hours</span>
                      </p>
                    </div>
                  </form>
                </CardContent>
                </div>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-up [animation-delay:500ms]">
              
              {/* Contact Details */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">Contact Information</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-primary to-blue-500 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/60 backdrop-blur-sm hover:bg-white overflow-hidden">
                      <CardContent className="p-6 relative">
                        {/* Background gradient on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        
                        <div className="flex items-start relative z-10">
                          <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-primary/10 to-blue-100 rounded-xl flex items-center justify-center text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                            {info.icon}
                          </div>
                          <div className="ml-5 flex-1">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{info.title}</h3>
                            <p className="text-primary font-semibold text-lg group-hover:text-blue-600 transition-colors">{info.details}</p>
                            <p className="text-gray-600 text-sm leading-relaxed mt-1">{info.description}</p>
                          </div>
                          
                          {/* Hover arrow */}
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <Card className="hover:shadow-xl transition-all duration-500 border-0 bg-gradient-to-br from-white to-gray-50/50 backdrop-blur-sm overflow-hidden group">
                <CardContent className="p-8 relative">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-blue-100 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Connect with me</h3>
                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-blue-500 rounded-full mb-6"></div>
                    
                    <div className="flex space-x-4 mb-6">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className={`group/social flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl text-gray-600 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg ${social.color} border border-gray-200 hover:border-transparent`}
                          aria-label={social.name}
                        >
                          <div className="group-hover/social:scale-125 transition-transform duration-300">
                            {social.icon}
                          </div>
                        </a>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      Follow me on social media for updates on my latest projects, development insights, 
                      and behind-the-scenes content from my coding journey.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="bg-gradient-to-br from-primary/5 to-blue-50 border-primary/20 hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Response</h3>
                  <p className="text-gray-600 mb-4">
                    I typically respond to all inquiries within 24-48 hours. For urgent matters, 
                    feel free to reach out via phone or LinkedIn.
                  </p>
                  <div className="flex items-center text-sm text-primary font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    Available Monday - Friday, 9 AM - 6 PM PST
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What's your typical project timeline?</h3>
                <p className="text-gray-600 text-sm">
                  Project timelines vary based on complexity, but most websites take 2-6 weeks from concept to launch.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you work with teams or just individuals?</h3>
                <p className="text-gray-600 text-sm">
                  I work with both! Whether you're a startup, small business, or part of a larger team, I'm flexible.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">What technologies do you specialize in?</h3>
                <p className="text-gray-600 text-sm">
                  I specialize in React.js, modern CSS, and creating responsive, accessible web applications.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! I offer ongoing maintenance and support packages to keep your website updated and secure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;