import React from "react";
import {
  FaLaptop,
  FaTshirt,
  FaHeadphones,
  FaHome,
  FaSpa,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";


const Sidebar: React.FC = () => {
  const categories = [
    { name: "Electronics", icon: <FaLaptop />, path:"electronics"},
    { name: "Clothes", icon: <FaTshirt />, path:"clothes" },
    { name: "Accessories", icon: <FaHeadphones />, path:"accessories" },
    { name: "Home and Wellness", icon: <FaHome />,path:"home-and-wellness" },
    { name: "Beauty and Skin Care", icon: <FaSpa />, path:"beauty-and-skin-car"},
  ];

  return (
    <div className="hidden  md:flex w-full justify-between  items-center h-auto bg-black p-4 shadow-md overflow-y-auto">
      <ul className="flex gap-2">
        {categories.map((category, index) => (
          <li key={index}>
            <Link
              to={category.path}
              className="flex items-center gap-2 text-white p-2 hover:text-yellow-500">
              {category.icon}
              <span className="text-sm font-medium">{category.name}</span>
            </Link>
          </li>
        ))}
      </ul>

<div>
      <button className="px-5 py-1 flex items-center gap-2 bg-white text-black rounded-lg justify-center"> <TbTruckDelivery/> Delivery</button>
</div>
    </div>
  );
};

export default Sidebar;
