import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Search, Calendar, Clock, User, ArrowRight, Tag, TrendingUp } from 'lucide-react';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Building Modern UIs with React and TailwindCSS",
      excerpt: "Learn how to create beautiful, responsive user interfaces using React.js and TailwindCSS. This comprehensive guide covers best practices, component architecture, and design patterns.",
      content: "Full article content would go here...",
      author: "Topher",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Development",
      tags: ["React", "TailwindCSS", "Frontend", "UI/UX"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "The Art of Glassmorphism in Web Design",
      excerpt: "Exploring the trendy glassmorphism design technique and how to implement it effectively in modern web applications using CSS and backdrop filters.",
      content: "Full article content would go here...",
      author: "Topher",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Design",
      tags: ["CSS", "Design", "Glassmorphism", "Modern UI"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 3,
      title: "Optimizing React Performance with Custom Hooks",
      excerpt: "Deep dive into React performance optimization techniques using custom hooks, memoization, and efficient state management patterns.",
      content: "Full article content would go here...",
      author: "Topher",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Development",
      tags: ["React", "Performance", "Hooks", "Optimization"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 4,
      title: "Responsive Design Best Practices for 2024",
      excerpt: "Essential responsive design techniques and mobile-first approaches that ensure your websites look great on all devices and screen sizes.",
      content: "Full article content would go here...",
      author: "Topher",
      date: "2024-01-08",
      readTime: "10 min read",
      category: "Design",
      tags: ["Responsive", "Mobile", "CSS", "Best Practices"],
      image: "https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 5,
      title: "State Management in React: Redux vs Context API",
      excerpt: "Comprehensive comparison of state management solutions in React applications, helping you choose the right tool for your project.",
      content: "Full article content would go here...",
      author: "Topher",
      date: "2024-01-05",
      readTime: "14 min read",
      category: "Development",
      tags: ["React", "Redux", "Context API", "State Management"],
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=800&h=400&fit=crop",
      featured: false
    },
    {
      id: 6,
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "Understanding the differences between CSS Grid and Flexbox, with practical examples and use cases for each layout method.",
      content: "Full article content would go here...",
      author: "Topher",
      date: "2024-01-03",
      readTime: "7 min read",
      category: "CSS",
      tags: ["CSS", "Grid", "Flexbox", "Layout"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
      featured: false
    }
  ];

  const categories = ['All', 'Development', 'Design', 'CSS', 'Performance'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const recentPosts = blogPosts.filter(post => !post.featured).slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-down">
            Development <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-up [animation-delay:200ms]">
            Insights, tutorials, and thoughts on modern web development
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto animate-fade-up [animation-delay:400ms]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-white/80 backdrop-blur-sm border-0 focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Badge className="bg-primary text-white mb-4">Featured Article</Badge>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <Badge variant="secondary" className="mb-3">{featuredPost.category}</Badge>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center text-sm text-gray-500">
                        <User className="w-4 h-4 mr-2" />
                        <span className="mr-4">{featuredPost.author}</span>
                        <Calendar className="w-4 h-4 mr-2" />
                        <span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredPost.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="hover:scale-105 transition-transform"
              >
                <Tag className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up" style={{animationDelay: `${index * 100 + 200}ms`}}>
                <div className="overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center text-xs text-gray-500">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Popular
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">No articles found</h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your search query or browse different categories.
              </p>
              <Button onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get notified when I publish new articles about web development and design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button variant="secondary" className="group">
              Subscribe
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <p className="text-sm opacity-70 mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;