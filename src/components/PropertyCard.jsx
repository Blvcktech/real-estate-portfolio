import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Heart, MapPin, Bed, Bath, Square, Star, Phone, Mail } from 'lucide-react';

const PropertyCard = ({ property, onViewDetails }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images[currentImageIndex]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Image Navigation with hover animations */}
        {property.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors hover:scale-110"
            >
              ←
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors hover:scale-110"
            >
              →
            </button>
            
            {/* Image Indicator Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {property.images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Favorite Button with pulse animation on click */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-all ${
            isFavorite ? 'animate-heartbeat' : ''
          }`}
        >
          <Heart 
            className={`w-5 h-5 transition-colors duration-300 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} 
          />
        </button>

        {/* Featured Badge with animation */}
        {property.featured && (
          <div className="absolute top-4 left-4 animate-bounce-gentle">
            <Badge className="bg-primary text-white shadow-lg">
              Featured
            </Badge>
          </div>
        )}

        {/* Price Badge with shine effect */}
        <div className="absolute bottom-4 left-4 overflow-hidden">
          <Badge className="bg-white/90 text-gray-900 font-semibold text-lg px-3 py-1 relative after:absolute after:content-[''] after:top-0 after:left-[-100%] after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/40 after:to-transparent group-hover:after:animate-shine">
            {formatPrice(property.price)}
          </Badge>
        </div>
      </div>

      {/* Content with reveal animations */}
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center text-yellow-500 group-hover:scale-110 transition-transform">
            <Star className="w-4 h-4 fill-current group-hover:animate-spin-slow" />
            <span className="ml-1 text-sm text-gray-600">4.8</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-4 group-hover:translate-x-1 transition-transform">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{property.address}</span>
        </div>

        {/* Property Details with hover effects */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center text-gray-600 hover:text-primary hover:scale-105 transition-all">
            <Bed className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center text-gray-600 hover:text-primary hover:scale-105 transition-all">
            <Bath className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center text-gray-600 hover:text-primary hover:scale-105 transition-all">
            <Square className="w-4 h-4 mr-2" />
            <span className="text-sm">{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>

        {/* Features with hover animations */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.features.slice(0, 3).map((feature, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs hover:bg-primary hover:text-white transition-colors"
            >
              {feature}
            </Badge>
          ))}
          {property.features.length > 3 && (
            <Badge 
              variant="secondary" 
              className="text-xs hover:bg-primary hover:text-white transition-colors"
            >
              +{property.features.length - 3} more
            </Badge>
          )}
        </div>

        {/* Agent Info with hover effect */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center group/agent">
            <img
              src={property.agent.avatar}
              alt={property.agent.name}
              className="w-8 h-8 rounded-full mr-3 group-hover/agent:scale-110 transition-transform"
            />
            <div>
              <p className="text-sm font-medium text-gray-900 group-hover/agent:text-primary transition-colors">{property.agent.name}</p>
              <p className="text-xs text-gray-600">Premium Real Estate</p>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Footer with button animations */}
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2 w-full">
          <Button 
            onClick={() => onViewDetails(property)}
            className="flex-1 bg-primary hover:bg-primary/90 hover:scale-105 transition-transform relative overflow-hidden after:absolute after:content-[''] after:top-0 after:left-[-100%] after:w-full after:h-full after:bg-gradient-to-r after:from-transparent after:via-white/20 after:to-transparent hover:after:animate-shine"
          >
            View Details
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="hover:scale-110 transition-transform hover:bg-primary hover:text-white"
          >
            <Phone className="w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="hover:scale-110 transition-transform hover:bg-primary hover:text-white"
          >
            <Mail className="w-4 h-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard; 