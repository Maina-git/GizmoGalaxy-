import React from "react";

interface GadgetsProps {
  category: string;
}


const gadgetsData: { 
  [key: string]: { name: string; img: string }[] 
} = {
  Laptops: [
    { name: "MacBook Pro", img: "/images/macbook.jpg" },
    { name: "Dell XPS 15", img: "/images/dell-xps.jpg" },
    { name: "HP Spectre x360", img: "/images/hp-spectre.jpg" }
  ],
  Smartphones: [
    { name: "iPhone 14", img: "/images/iphone14.jpg" },
    { name: "Samsung Galaxy S23", img: "/images/samsung-s23.jpg" },
    { name: "Google Pixel 7", img: "/images/pixel7.jpg" }
  ],
  Accessories: [
    { name: "Wireless Earbuds", img: "/images/earbuds.jpg" },
    { name: "Smartwatch", img: "/images/smartwatch.jpg" },
    { name: "Bluetooth Speaker", img: "/images/speaker.jpg" }
  ],
  Televisions: [
    { name: "Samsung 4K OLED", img: "/images/samsung-tv.jpg" },
    { name: "LG Smart TV", img: "/images/lg-tv.jpg" },
    { name: "Sony Bravia", img: "/images/sony-bravia.jpg" }
  ],
  Gaming: [
    { name: "PlayStation 5", img: "/images/ps5.jpg" },
    { name: "Xbox Series X", img: "/images/xbox.jpg" },
    { name: "Nintendo Switch", img: "/images/switch.jpg" }
  ]
};


const categoryBanners: { [key: string]: string } = {
  Laptops: "/images/laptop-6856557_1280.jpg ",
  Smartphones: "/images/smartphone-5714763_1280.jpg",
  Accessories: "/images/music-2694489_1280.jpg",
  Televisions: "/images/tv-627876_1280.jpg",
  Gaming: "/images/gamepad-6392045_1280.jpg"
};

const Gadgets: React.FC<GadgetsProps> = ({ category }) => {
  return (
    <div className="p-6 flex-1 overflow-y-auto">
      <div className="w-full h-80 mb-6 overflow-hidden">
        <img
          className="w-full h-full object-cover rounded"
          src={categoryBanners[category] || "/images/default-banner.jpg"}
          alt={`${category} Banner`}/>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{category} Gadgets</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gadgetsData[category]?.map((gadget, index) => (
          <div key={index} className="bg-white p-4 shadow rounded">
            <img className="w-full h-40 object-cover rounded mb-2" src={gadget.img} alt={gadget.name} />
            <h3 className="text-lg font-semibold">{gadget.name}</h3>
            <p className="text-gray-500">High-quality {category} gadget.</p>
          </div>
        )) || <p>No products found.</p>}
      </div>
    </div>
  );
};

export default Gadgets;
