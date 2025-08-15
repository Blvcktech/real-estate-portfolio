import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import PropertyCard from './PropertyCard';
import PropertyDetailModal from './PropertyDetailModal';
import { Search, Filter, Grid3X3, List } from 'lucide-react';
import { listings, propertyTypes, locations, priceRanges } from '../data/listings';

const FeaturedListings = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Any Price');
  const [viewMode, setViewMode] = useState('grid');

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  // Filter listings based on search criteria
  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === 'All Types' || listing.type === selectedType;
    const matchesLocation = selectedLocation === 'All Locations' || listing.location === selectedLocation;
    
    // Price range filtering
    let matchesPrice = true;
    if (selectedPriceRange !== 'Any Price') {
      const [min, max] = selectedPriceRange.replace(/[$,]/g, '').split(' - ');
      const price = listing.price;
      
      if (max === '1M') {
        matchesPrice = price >= parseInt(min) && price <= 1000000;
      } else if (max === '1M+') {
        matchesPrice = price >= 1000000;
      } else {
        matchesPrice = price >= parseInt(min) && price <= parseInt(max);
      }
    }

    return matchesSearch && matchesType && matchesLocation && matchesPrice;
  });

  return (
    <section id="listings" className="py-16 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with animations */}
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 relative">
            <span className="inline-block animate-slide-up">Featured Properties</span>
            <div className="h-1 w-24 bg-primary mx-auto mt-4 rounded-full animate-width-expand"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-up [animation-delay:200ms]">
            Discover our handpicked selection of premium properties in the most desirable locations
          </p>
        </div>

        {/* Search and Filter Bar with animation */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fade-up [animation-delay:400ms] hover:shadow-xl transition-shadow duration-300">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 hover:shadow-md transition-shadow"
              />
            </div>

            {/* Property Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="hover:shadow-md transition-shadow">
                <SelectValue placeholder="Property Type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Location Filter */}
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="hover:shadow-md transition-shadow">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Range Filter */}
            <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
              <SelectTrigger className="hover:shadow-md transition-shadow">
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                {priceRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                className="hover:scale-110 transition-transform"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                className="hover:scale-110 transition-transform"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count with animation */}
        <div className="flex justify-between items-center mb-6 animate-fade-up [animation-delay:600ms]">
          <p className="text-gray-600">
            Showing {filteredListings.length} of {listings.length} properties
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Filter className="w-4 h-4" />
            <span>Filtered results</span>
          </div>
        </div>

        {/* Properties Grid with staggered card animations */}
        {filteredListings.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {filteredListings.map((property, index) => (
              <div key={property.id} className={`animate-fade-up [animation-delay:${(index % 3) * 200 + 800}ms]`}>
                <PropertyCard
                  property={property}
                  onViewDetails={handleViewDetails}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 animate-fade-up [animation-delay:600ms]">
            <div className="text-gray-400 mb-4 animate-pulse">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No properties found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters
            </p>
          </div>
        )}

        {/* Load More Button with animation */}
        {filteredListings.length > 0 && (
          <div className="text-center mt-12 animate-fade-up [animation-delay:1200ms]">
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">
              Load More Properties
            </Button>
          </div>
        )}
      </div>

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default FeaturedListings; 