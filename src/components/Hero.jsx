import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Search, MapPin, Home, DollarSign, Filter } from 'lucide-react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('All Types');
  const [priceRange, setPriceRange] = useState('Any Price');
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsFormVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with enhanced parallax effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat animate-ken-burns"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content with enhanced animations */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-8">
        {/* Animated title with typewriter effect */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-down [animation-delay:300ms] bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent">
            Find Your Dream Home
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-primary to-blue-300 mx-auto rounded-full animate-width-expand [animation-delay:800ms]"></div>
        </div>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-12 text-gray-200 animate-fade-up [animation-delay:500ms] font-light leading-relaxed">
          Discover exclusive properties in the most desirable locations
        </p>

        {/* Enhanced Search Form with glassmorphism */}
        <div className={`relative transition-all duration-1000 transform ${
          isFormVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 max-w-5xl mx-auto hover:bg-white/15 transition-all duration-500 group">
            {/* Form header */}
            <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
              <p className="text-white/90 text-sm font-medium tracking-wide">Start your property search</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Location Search with enhanced styling */}
              <div className="relative group/input">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-300/20 rounded-xl opacity-0 group-hover/input:opacity-100 transition-opacity blur-xl"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-hover/input:text-primary" />
                  <Input
                    placeholder="Enter location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 border-0 bg-transparent focus:ring-0 text-gray-800 placeholder:text-gray-500 font-medium"
                  />
                </div>
                <div className="absolute -top-2 left-3 bg-white px-2 py-1 rounded text-xs text-gray-600 opacity-0 group-hover/input:opacity-100 transition-all transform -translate-y-2 group-hover/input:translate-y-0">
                  Location
                </div>
              </div>

              {/* Property Type with enhanced styling */}
              <div className="relative group/select">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-300/20 rounded-xl opacity-0 group-hover/select:opacity-100 transition-opacity blur-xl"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  <Home className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-hover/select:text-primary z-10" />
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="h-14 border-0 bg-transparent pl-12 focus:ring-0 text-gray-800 font-medium">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-lg border-white/20">
                      <SelectItem value="All Types">All Types</SelectItem>
                      <SelectItem value="Single Family">Single Family</SelectItem>
                      <SelectItem value="Condo">Condo</SelectItem>
                      <SelectItem value="Townhouse">Townhouse</SelectItem>
                      <SelectItem value="Studio">Studio</SelectItem>
                      <SelectItem value="Loft">Loft</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="absolute -top-2 left-3 bg-white px-2 py-1 rounded text-xs text-gray-600 opacity-0 group-hover/select:opacity-100 transition-all transform -translate-y-2 group-hover/select:translate-y-0">
                  Property Type
                </div>
              </div>

              {/* Price Range with enhanced styling */}
              <div className="relative group/price">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-300/20 rounded-xl opacity-0 group-hover/price:opacity-100 transition-opacity blur-xl"></div>
                <div className="relative bg-white/95 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-white transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                  <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 transition-colors group-hover/price:text-primary z-10" />
                  <Select value={priceRange} onValueChange={setPriceRange}>
                    <SelectTrigger className="h-14 border-0 bg-transparent pl-12 focus:ring-0 text-gray-800 font-medium">
                      <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-lg border-white/20">
                      <SelectItem value="Any Price">Any Price</SelectItem>
                      <SelectItem value="$200k - $400k">$200k - $400k</SelectItem>
                      <SelectItem value="$400k - $600k">$400k - $600k</SelectItem>
                      <SelectItem value="$600k - $800k">$600k - $800k</SelectItem>
                      <SelectItem value="$800k - $1M">$800k - $1M</SelectItem>
                      <SelectItem value="$1M+">$1M+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="absolute -top-2 left-3 bg-white px-2 py-1 rounded text-xs text-gray-600 opacity-0 group-hover/price:opacity-100 transition-all transform -translate-y-2 group-hover/price:translate-y-0">
                  Budget
                </div>
              </div>

              {/* Enhanced Search Button */}
              <div className="relative group/button">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-75 group-hover/button:opacity-100 transition-opacity blur-lg"></div>
                <Button className="relative h-14 bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white font-semibold rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl group-hover/button:shadow-2xl w-full">
                  <Search className="w-5 h-5 mr-2 group-hover/button:animate-pulse" />
                  Search Properties
                </Button>
              </div>
            </div>
            
            {/* Advanced search toggle */}
            <div className="mt-6 text-center">
              <button className="text-white/80 hover:text-white text-sm font-medium flex items-center mx-auto gap-2 hover:gap-3 transition-all duration-300 group/advanced">
                <Filter className="w-4 h-4 group-hover/advanced:rotate-12 transition-transform" />
                Advanced Search Options
                <span className="text-xs opacity-60 group-hover/advanced:opacity-100 transition-opacity">(Coming Soon)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats with staggered animations */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center animate-fade-up [animation-delay:900ms] hover:scale-110 transition-transform duration-300 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <div className="text-3xl font-bold mb-2">500+</div>
            <div className="text-gray-300">Properties Available</div>
          </div>
          <div className="text-center animate-fade-up [animation-delay:1100ms] hover:scale-110 transition-transform duration-300 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-gray-300">Expert Agents</div>
          </div>
          <div className="text-center animate-fade-up [animation-delay:1300ms] hover:scale-110 transition-transform duration-300 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
            <div className="text-3xl font-bold mb-2">1000+</div>
            <div className="text-gray-300">Happy Clients</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 