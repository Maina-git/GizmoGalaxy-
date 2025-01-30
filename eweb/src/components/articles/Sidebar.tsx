import React from "react";
import { FaLaptop, FaMobileAlt, FaHeadphones, FaTv, FaGamepad } from "react-icons/fa";

interface SidebarProps {
  setCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setCategory }) => {
  const categories = [
    { name: "Laptops", icon: <FaLaptop /> },
    { name: "Smartphones", icon: <FaMobileAlt /> },
    { name: "Accessories", icon: <FaHeadphones /> },
    { name: "Televisions", icon: <FaTv /> },
    { name: "Gaming", icon: <FaGamepad /> },
  ];

  return (
    <div className="h-screen w-48 bg-blue-500 p-4 shadow-md">
      <h2 className="text-lg font-bold mb-4 text-white">Categories</h2>
      <ul className="space-y-3"> 
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-white p-2 hover:bg-gray-500 rounded cursor-pointer"
            onClick={() => setCategory(category.name)}>
            {category.icon}
            <span className="text-sm font-medium">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
