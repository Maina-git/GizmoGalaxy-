import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "SmartPhones",
    description: "Latest 5G smartphones with high-end cameras and processors.",
    image: "/images/home/p7LhdRNAbkd2xoIo7feCuxcYK679lDfqOismJ0X9.webp",
    color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: 2,
    name: "Smart TVs",
    description: "Ultra HD 4K Smart TVs with AI-powered image enhancements.",
    image: "/images/home/9mhdRbZhNL8z9JznNq6EtE.jpg",
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    id: 3,
    name: "Accessories",
    description: "High-quality accessories including chargers, earphones, and cases.",
    image: "/images/home/4hU7T5fQYWbnU5vxHZnAZE-1200-80.jpg",
    color: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    id: 4,
    name: "Gaming Pads",
    description: "Ergonomic gaming controllers for console and PC gaming.",
    image: "/images/home/dfdd9b40fc2f9fa4440d16571484516c.3c70.webp",
    color: "from-red-500 to-orange-500",
    bgGradient: "from-red-50 to-orange-50",
  },
];

const Items: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container mx-auto py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              background: `linear-gradient(45deg, 
                ${
                  i % 4 === 0
                    ? "#3B82F6"
                    : i % 4 === 1
                    ? "#8B5CF6"
                    : i % 4 === 2
                    ? "#10B981"
                    : "#EF4444"
                }, 
                ${
                  i % 4 === 0
                    ? "#06B6D4"
                    : i % 4 === 1
                    ? "#EC4899"
                    : i % 4 === 2
                    ? "#059669"
                    : "#F97316"
                })`,
              left: `${10 + i * 12}%`,
              top: `${5 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${8 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Dynamic cursor follower */}
      <div
        className="fixed pointer-events-none z-30 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm border border-white/50 transition-all duration-300"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: hoveredCard !== null ? "scale(2)" : "scale(1)",
        }}
      />

      {/* Header with staggered animation */}
      <div className="text-center mb-16 relative z-10">
        <h2
          className={`
            text-6xl font-extrabold mb-4 transform transition-all duration-1000 delay-300
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }
          `}
        >
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            GizmoGalaxy
          </span>
          <span className="text-gray-800"> For You!</span>
        </h2>

        <div
          className={`
            w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full
            transform transition-all duration-1000 delay-500
            ${isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}
          `}
        />

        <p
          className={`
            text-gray-600 text-xl mt-6 max-w-2xl mx-auto leading-relaxed
            transform transition-all duration-1000 delay-700
            ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          Discover cutting-edge technology and premium accessories crafted for
          the modern lifestyle
        </p>
      </div>

      {/* Items grid with sophisticated animations */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`
              group relative overflow-hidden rounded-2xl shadow-2xl cursor-pointer
              transform transition-all duration-700 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-16 opacity-0 scale-95"
              }
            `}
            style={{
              transitionDelay: `${800 + index * 150}ms`,
            }}
            onMouseEnter={() => setHoveredCard(item.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Dynamic background gradient */}
            <div
              className={`
                absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-0 
                group-hover:opacity-100 transition-opacity duration-500
              `}
            />

            {/* Card content */}
            <div className="relative bg-white group-hover:bg-white/90 backdrop-blur-sm transition-all duration-500 h-full">
              {/* Image container with overlay effects */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                  style={{
                    filter:
                      hoveredCard === item.id
                        ? "brightness(1.1) saturate(1.2)"
                        : "brightness(1)",
                  }}
                />

                {/* Gradient overlay */}
                <div
                  className={`
                    absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 
                    group-hover:opacity-20 transition-opacity duration-500
                  `}
                />

                {/* Shimmer effect */}
                <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

                {/* Floating badge */}
                <div
                  className={`
                    absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-white
                    bg-gradient-to-r ${item.color} opacity-0 scale-0
                    group-hover:opacity-100 group-hover:scale-100
                    transition-all duration-300 delay-200
                  `}
                >
                  NEW
                </div>
              </div>

              {/* Content section */}
              <div className="p-6 text-center relative">
                {/* Animated title */}
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                  <span
                    className={`
                      bg-gradient-to-r ${item.color} bg-clip-text 
                      group-hover:text-transparent transition-all duration-300
                    `}
                  >
                    {item.name}
                  </span>
                </h3>

                {/* Description with slide effect */}
                <p className="text-gray-600 text-sm mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {item.description}
                </p>

                {/* Enhanced button */}
                <Link to={`/item/${item.id}`}>
                  <button
                    className={`
                    relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-white
                    bg-gradient-to-r ${item.color} 
                    transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl
                    before:absolute before:inset-0 before:bg-white/20 before:translate-x-full 
                    before:skew-x-12 group-hover:before:translate-x-0 before:transition-transform before:duration-500
                  `}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      To Gallery
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>

                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10" />
              </div>
            </div>

            {/* Hover glow effect */}
            <div
              className={`
                absolute -inset-1 bg-gradient-to-r ${item.color} rounded-2xl opacity-0 
                group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl
              `}
            />
          </div>
        ))}
      </div>

      {/* Bottom decorative wave */}
      <div className="mt-20 relative">
        <svg
          className="w-full h-16 text-blue-50"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V60c0,0,200,40,400,40s400-40,400-40s200,40,400,40v20H0V0z"
            fill="currentColor"
            className="animate-pulse"
          />
        </svg>
      </div>

      
    </div>
  );
};

export default Items;