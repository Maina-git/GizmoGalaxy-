

import React from "react";
import { useParams } from "react-router-dom";

const items = [
  {
    id: 1,
    name: "Smartphones",
    description: "Latest 5G smartphones with high-end cameras and processors.",
    image: "/images/home/p7LhdRNAbkd2xoIo7feCuxcYK679lDfqOismJ0X9.webp",
    price: "$699.00",
  },
  {
    id: 2,
    name: "Smart TVs",
    description: "Ultra HD 4K Smart TVs with AI-powered image enhancements.",
    image: "/images/home/9mhdRbZhNL8z9JznNq6EtE.jpg",
    price: "$1,199.00",
  },
  {
    id: 3,
    name: "Accessories",
    price: "$49.00",
    description:
      "High-quality accessories including chargers, earphones, and cases.",
    image: "/images/home/4hU7T5fQYWbnU5vxHZnAZE-1200-80.jpg",
  },
  {
    id: 4,
    name: "Gaming Pads",
    price: "$89.00",
    description: "Ergonomic gaming controllers for console and PC gaming.",
    image: "/images/home/dfdd9b40fc2f9fa4440d16571484516c.3c70.webp",
  },
];
const ItemDetail: React.FC = () => {
    const {id}=useParams();
    const item=items.find((item)=>item.id===Number(id));
    if (!item) return <div className="p-6 text-red-600">Item not found</div>
  return (
    <>
      <div className="container mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">{item.name}</h1>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-64 object-cover mb-6 rounded"
        />
        <p className="text-lg text-gray-700">{item.description}</p>
        <p className="text-lg text-gray-700">{item.price}</p>
      </div>
    </>
  );
};

export default ItemDetail;


