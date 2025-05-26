import React, { useState, useEffect } from "react";

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Animated background with parallax effect */}
      <div
        className="bg-gradient-to-br from-yellow-100 via-orange-50 to-pink-50 py-12 bg-cover bg-center h-screen relative"
        style={{
          backgroundImage: "url('/images/adult-3086302_1280.jpg')",
          transform: `translate(${mousePosition.x * 0.02}px, ${
            mousePosition.y * 0.02
          }px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Animated overlay with gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-pink-600/20 animate-pulse"
          style={{
            background: `linear-gradient(${mousePosition.x}deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.1), rgba(236, 72, 153, 0.2))`,
          }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>

        {/* Main content container */}
        <div className="container mx-auto text-center relative z-10 flex items-center justify-center h-full">
          <div
            className={`
              bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl 
              max-w-2xl mx-4 border border-white/20
              transform transition-all duration-1000 ease-out
              ${
                isVisible
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-12 opacity-0 scale-95"
              }
            `}
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)",
              boxShadow:
                "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.3)",
            }}
          >
            {/* Animated title */}
            <h1
              className={`
                text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 
                bg-clip-text text-transparent mb-4 leading-tight
                transform transition-all duration-1000 delay-300
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
              style={{
                textShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              Grab Up to{" 30%"}
              <span className="relative inline-block">
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse" />
              </span>{" "}
              Off
            </h1>

            <h2
              className={`
                text-2xl md:text-3xl font-semibold text-gray-700 mb-8
                transform transition-all duration-1000 delay-500
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
              `}
            >
              On Selected Pack Items
            </h2>

            {/* Animated button */}
            <button
              className={`
                group relative px-12 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                text-white font-bold text-xl rounded-full overflow-hidden
                transform transition-all duration-1000 delay-700 hover:scale-110 hover:shadow-2xl
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }
                border-2 border-white/30
              `}
              style={{
                background: "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899)",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.3), 0 0 20px rgba(139, 92, 246, 0.4)",
              }}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Shimmer effect */}
              <div className="absolute inset-0 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              <span className="relative z-10 flex items-center justify-center gap-2">
                Buy Now
                <svg
                  className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
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

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce opacity-70" />
            <div
              className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full animate-bounce opacity-70"
              style={{ animationDelay: "0.5s" }}
            />
            <div className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full animate-pulse" />
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
