# Premium Real Estate Website

A modern, responsive real estate website built with React, Tailwind CSS, and shadcn/ui components. This project showcases a premium real estate platform with advanced filtering, property listings, and interactive features.

## 🏠 Features

### Core Features
- **Modern Hero Section** - Stunning full-screen hero with search functionality
- **Advanced Property Search** - Filter by location, property type, and price range
- **Interactive Property Cards** - Image galleries, favorites, and detailed information
- **Property Detail Modals** - Comprehensive property information with contact forms
- **Responsive Design** - Fully mobile-friendly with adaptive layouts
- **Agent Profiles** - Showcase real estate professionals with contact information
- **Contact Forms** - Integrated contact forms for property inquiries

### Technical Features
- **React 18** - Latest React features and hooks
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **shadcn/ui Components** - High-quality, accessible UI components
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React Icons** - Beautiful, customizable icons
- **Responsive Grid Layouts** - Adaptive property grids and layouts
- **Image Galleries** - Interactive property image navigation
- **Form Handling** - Complete form validation and submission

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd real-estate-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

## 📁 Project Structure

```
real-estate-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── dialog.jsx
│   │   │   ├── input.jsx
│   │   │   ├── select.jsx
│   │   │   └── badge.jsx
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Hero.jsx            # Hero section with search
│   │   ├── PropertyCard.jsx    # Individual property cards
│   │   ├── PropertyDetailModal.jsx # Property detail modal
│   │   └── FeaturedListings.jsx # Main listings section
│   ├── data/
│   │   └── listings.js         # Property data and filters
│   ├── lib/
│   │   └── utils.js            # Utility functions
│   ├── App.jsx                 # Main application component
│   ├── index.js                # Application entry point
│   └── index.css               # Global styles and Tailwind
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#3B82F6) - Trust and professionalism
- **Secondary**: Gray tones - Clean and modern
- **Accent**: White and light grays - Premium feel

### Typography
- **Headings**: Bold, modern sans-serif fonts
- **Body**: Clean, readable typography
- **Responsive**: Scalable text sizes across devices

### Layout
- **Grid System**: Responsive CSS Grid for property layouts
- **Flexbox**: Flexible navigation and component layouts
- **Spacing**: Consistent spacing using Tailwind's spacing scale

## 🔧 Customization

### Adding New Properties
Edit `src/data/listings.js` to add new properties:

```javascript
{
  id: 7,
  title: "New Property",
  price: 500000,
  location: "New Location",
  // ... other properties
}
```

### Modifying Styles
- **Colors**: Update CSS variables in `src/index.css`
- **Components**: Modify individual component files
- **Layout**: Adjust Tailwind classes in component JSX

### Adding New Features
1. Create new components in `src/components/`
2. Import and use in `App.jsx`
3. Add any required data to `src/data/`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Components

### Navbar
- Responsive navigation with mobile menu
- Logo and branding
- Call-to-action button

### Hero Section
- Full-screen background image
- Advanced search functionality
- Statistics display

### Property Cards
- Image galleries with navigation
- Favorite functionality
- Property details and features
- Agent information

### Property Detail Modal
- Comprehensive property information
- Image gallery with thumbnails
- Contact agent form
- Property features and description

### Featured Listings
- Advanced filtering system
- Grid and list view modes
- Search functionality
- Results counter

## 🛠️ Built With

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Radix UI** - Accessible UI primitives
- **Lucide React** - Icon library
- **Create React App** - Development environment

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- Email: support@premiumrealestate.com
- Phone: +1 (555) 123-4567

---

**Premium Real Estate** - Your trusted partner in finding the perfect home. 