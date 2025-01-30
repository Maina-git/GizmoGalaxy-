import React from "react";

const items = [
  {
    id: 1,
    name: "SmartPhones",
    //price: "$699.00",
    description: "Latest 5G smartphones with high-end cameras and processors.",
    image: "/images/home/p7LhdRNAbkd2xoIo7feCuxcYK679lDfqOismJ0X9.webp",
  },
  {
    id: 2,
    name: "Smart TVs",
    //price: "$1,199.00",
    description: "Ultra HD 4K Smart TVs with AI-powered image enhancements.",
    image: "/images/home/9mhdRbZhNL8z9JznNq6EtE.jpg",
  },
  {
    id: 3,
    name: "Accessories",
    //price: "$49.00",
    description: "High-quality accessories including chargers, earphones, and cases.",
    image: "/images/home/4hU7T5fQYWbnU5vxHZnAZE-1200-80.jpg",
  },
  {
    id: 4,
    name: "Gaming Pads",
    //price: "$89.00",
    description: "Ergonomic gaming controllers for console and PC gaming.",
    image: "/images/home/dfdd9b40fc2f9fa4440d16571484516c.3c70.webp",
  },
];

const Items: React.FC = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold text-blue-500 mb-6">GizmoGalaxy For You!</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg p-4 text-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-32 object-cover mb-4"/>
            <h3 className="text-lg font-bold">{item.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{item.description}</p>
            <p className="text-blue-500 font-semibold"></p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">
              To Gallery
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
