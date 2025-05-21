import React from "react";
import {
  FaLaptop,
  FaTshirt,
  FaHeadphones,
  FaHome,
  FaSpa,
} from "react-icons/fa";
import { Link } from "react-router-dom";

interface SidebarProps {
  setCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({setCategory}) => {
  const categories = [
    { name: "Electronics", icon: <FaLaptop />, path:"/electronics"},
    { name: "Clothes", icon: <FaTshirt />, path:"/clothes" },
    { name: "Accessories", icon: <FaHeadphones />, path:"/accessories" },
    { name: "Home and Wellness", icon: <FaHome />,path:"/home-and-wellness" },
    { name: "Beauty and Skin Care", icon: <FaSpa />, path:"/beauty-and-skin-car"},
  ];

  return (
    <div className="w-full h-auto md:h-screen md:w-52 bg-blue-500 p-4 shadow-md overflow-y-auto">
      <h2 className="text-lg font-bold mb-4 text-white">Categories</h2>
      <ul className="flex flex-col gap-2">
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              to={category.path}
              className="flex items-center gap-2 text-white p-2 hover:bg-blue-300 rounded">
              {category.icon}
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
