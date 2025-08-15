import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import PropertyCard from '../components/PropertyCard';
import PropertyDetailModal from '../components/PropertyDetailModal';
import { Search, Filter, Grid3X3, List, SlidersHorizontal, MapPin } from 'lucide-react';
import { listings, propertyTypes, locations, priceRanges } from '../data/listings';

const Properties = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedPriceRange, setSelectedPriceRange] = useState('Any Price');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);

  const handleViewDetails = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  // Filter and sort listings
  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === 'All Types' || listing.type === selectedType;
    const matchesLocation = selectedLocation === 'All Locations' || listing.location === selectedLocation;
    
    let matchesPrice = true;
    if (selectedPriceRange !== 'Any Price') {
      const [min, max] = selectedPriceRange.replace(/[\$k\+,]/g, '').split(' - ').map(Number);
      const price = listing.price / 1000;
      if (max) {
        matchesPrice = price >= min && price <= max;
      } else {
        matchesPrice = price >= min;
      }
    }
    
    return matchesSearch && matchesType && matchesLocation && matchesPrice;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'size':
        return b.sqft - a.sqft;
      case 'newest':
      default:
        return new Date(b.createdAt || '2024-01-01') - new Date(a.createdAt || '2024-01-01');
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary/10 via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-down">
              Find Your Perfect <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">Property</span>
            </h1>
            <p className="text-xl text-gray-600 animate-fade-up [animation-delay:200ms]">
              Explore our curated collection of premium properties
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl max-w-5xl mx-auto animate-fade-up [animation-delay:400ms]">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="relative md:col-span-2">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search by location, title, or keyword..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 border-0 focus:ring-2 focus:ring-primary"
                />
              </div>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="h-12 border-0 focus:ring-2 focus:ring-primary">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Types">All Types</SelectItem>
                  {propertyTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedPriceRange} onValueChange={setSelectedPriceRange}>
                <SelectTrigger className="h-12 border-0 focus:ring-2 focus:ring-primary">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Any Price">Any Price</SelectItem>
                  {priceRanges.map((range) => (
                    <SelectItem key={range} value={range}>{range}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button className="h-12 bg-primary hover:bg-primary/90">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Sort Controls */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {(selectedLocation !== 'All Locations' || selectedType !== 'All Types' || selectedPriceRange !== 'Any Price') && (
                  <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">Active</span>
                )}
              </Button>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="size">Size: Largest First</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-600">
                {filteredListings.length} properties found
              </span>
              <div className="flex border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 p-6 bg-gray-50 rounded-lg animate-fade-up">
              <h3 className="text-lg font-semibold mb-4">Advanced Filters</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All Locations">All Locations</SelectItem>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>{location}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Bathrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="any">Any</SelectItem>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>

                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSelectedType('All Types');
                    setSelectedLocation('All Locations');
                    setSelectedPriceRange('Any Price');
                    setSearchQuery('');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Properties Grid/List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredListings.length > 0 ? (
            <div className={`grid gap-8 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1 max-w-4xl mx-auto'
            }`}>
              {filteredListings.map((property, index) => (
                <div 
                  key={property.id} 
                  className={`animate-fade-up [animation-delay:${(index % 6) * 100 + 200}ms] ${
                    viewMode === 'list' ? 'transform scale-95' : ''
                  }`}
                >
                  <PropertyCard
                    property={property}
                    onViewDetails={handleViewDetails}
                    className={viewMode === 'list' ? 'md:flex md:max-w-none' : ''}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 animate-fade-up">
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto opacity-50" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                No properties found
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Try adjusting your search criteria or filters to find more properties that match your preferences.
              </p>
              <Button 
                onClick={() => {
                  setSelectedType('All Types');
                  setSelectedLocation('All Locations');
                  setSelectedPriceRange('Any Price');
                  setSearchQuery('');
                }}
                className="bg-primary hover:bg-primary/90"
              >
                Reset Filters
              </Button>
            </div>
          )}

          {/* Load More Button */}
          {filteredListings.length > 0 && filteredListings.length >= 9 && (
            <div className="text-center mt-12 animate-fade-up [animation-delay:800ms]">
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:scale-105 transition-transform"
              >
                Load More Properties
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Properties;