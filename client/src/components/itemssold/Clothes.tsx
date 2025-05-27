import React from "react";
import {
  Shirt,
  Crown,
  Footprints,
  ShoppingBag,
  Users,
  Heart,
  Star,
  Zap,
} from "lucide-react";

const Clothes: React.FC = () => {
  const categories = [
    {
      id: 1,
      name: "Men's Fashion",
      icon: Shirt,
      image: "/api/placeholder/300/200",
      description: "Stylish clothing for the modern man",
      price: "From $29",
    },
    {
      id: 2,
      name: "Women's Fashion",
      icon: Crown,
      image: "/api/placeholder/300/200",
      description: "Elegant and trendy outfits for women",
      price: "From $35",
    },
    {
      id: 3,
      name: "Footwear",
      icon: Footprints,
      image: "/api/placeholder/300/200",
      description: "Comfortable and stylish shoes for every occasion",
      price: "From $49",
    },
    {
      id: 4,
      name: "Accessories",
      icon: ShoppingBag,
      image: "/api/placeholder/300/200",
      description: "Complete your look with premium accessories",
      price: "From $15",
    },
    {
      id: 5,
      name: "Kids Fashion",
      icon: Users,
      image: "/api/placeholder/300/200",
      description: "Cute and comfortable clothing for children",
      price: "From $19",
    },
    {
      id: 6,
      name: "Sportswear",
      icon: Zap,
      image: "/api/placeholder/300/200",
      description: "Active wear for fitness and outdoor activities",
      price: "From $25",
    },
    {
      id: 7,
      name: "Formal Wear",
      icon: Star,
      image: "/api/placeholder/300/200",
      description: "Professional attire for business and events",
      price: "From $79",
    },
    {
      id: 8,
      name: "Vintage Collection",
      icon: Heart,
      image: "/api/placeholder/300/200",
      description: "Timeless pieces with classic appeal",
      price: "From $45",
    },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      image: "/images/home/cottonT-shirt.jpg",
      price: "$24",
      originalPrice: "$39",
      discount: "38% OFF",
    },
    {
      id: 2,
      name: "Designer Jeans",
      image: "/images/home/jeans.webp",
      price: "$69",
      originalPrice: "$99",
      discount: "30% OFF",
    },
    {
      id: 3,
      name: "Summer Dress",
      image: "/images/home/summerdress.avif",
      price: "$49",
      originalPrice: "$79",
      discount: "38% OFF",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Fashion & Clothes
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Express your style with our trendy collection
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products Banner */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Trending Now
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"/>
                  <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-md text-sm font-semibold">
                    {product.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-2xl font-bold text-pink-600">
                      {product.price}
                    </span>
                    <span className="text-gray-500 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <button className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors duration-200">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Grid */}
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
                      <span className="text-pink-600 font-semibold">
                        {category.price}
                      </span>
                      <button className="bg-pink-600 text-white px-3 py-1 rounded-md text-sm hover:bg-pink-700 transition-colors duration-200">
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

export default Clothes;
