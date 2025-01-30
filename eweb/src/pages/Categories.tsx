import React, { useState } from "react";
import Sidebar from "../components/articles/Sidebar";
import Gadgets from "../components/Gadgets";

const CategoriesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("Laptops");

  return (
    <div className="flex">
      <Sidebar setCategory={setSelectedCategory} />
      <Gadgets category={selectedCategory} />
    </div>
  );
};

export default CategoriesPage;
