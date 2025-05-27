import React from "react";
import {
  Smartphone,
  Laptop,
  Headphones,
  Camera,
  Watch,
  Gamepad2,
  Tablet,
  Speaker,
} from "lucide-react";

const Electronics: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: "Smartphones",
      icon: Smartphone,
      image:"/images/smartphone-5714763_1280.jpg",
      description: "Latest smartphones with cutting-edge technology",
      price: "From $299",
    },
    {
      id: 2,
      name: "Laptops",
      icon: Laptop,
      image: "/api/placeholder/300/200",
      description: "High-performance laptops for work and gaming",
      price: "From $599",
    },
    {
      id: 3,
      name: "Headphones",
      icon: Headphones,
      image: "/api/placeholder/300/200",
      description: "Premium audio experience with noise cancellation",
      price: "From $99",
    },
    {
      id: 4,
      name: "Cameras",
      icon: Camera,
      image: "/api/placeholder/300/200",
      description: "Professional cameras for photography enthusiasts",
      price: "From $399",
    },
    {
      id: 5,
      name: "Smart Watches",
      icon: Watch,
      image: "/api/placeholder/300/200",
      description: "Track your fitness and stay connected",
      price: "From $199",
    },
    {
      id: 6,
      name: "Gaming",
      icon: Gamepad2,
      image: "/api/placeholder/300/200",
      description: "Gaming consoles, accessories, and peripherals",
      price: "From $59",
    },
    {
      id: 7,
      name: "Tablets",
      icon: Tablet,
      image: "/api/placeholder/300/200",
      description: "Portable tablets for work and entertainment",
      price: "From $249",
    },
    {
      id: 8,
      name: "Speakers",
      icon: Speaker,
      image: "/api/placeholder/300/200",
      description: "Wireless speakers with premium sound quality",
      price: "From $79",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      image: "/images/home/iphonePro.jpg",
      price: "$999",
      originalPrice: "$1,199",
      discount: "17% OFF",
    },
    {
      id: 2,
      name: "MacBook Air M2",
      image: "/images/home/macbookairm2starlight0001.jpg",
      price: "$1,099",
      originalPrice: "$1,299",
      discount: "15% OFF",
    },
    {
      id: 3,
      name: "AirPods Pro",
      image: "/images/home/960x0.jpg",
      price: "$199",
      originalPrice: "$249",
      discount: "20% OFF",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Electronics</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Discover the latest in technology and innovation
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Featured Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                    {product.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      {product.price}
                    </span>
                    <span className="text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Shop by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <div className="relative">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <IconComponent className="text-white" size={48} />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-blue-600 font-semibold">
                        {category.price}
                      </span>
                      <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors duration-200">
                        Browse
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronics;
