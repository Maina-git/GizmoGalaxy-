import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div
      className="bg-yellow-100 py-12 bg-cover bg-center h-[80vh]"
      style={{
        backgroundImage: "url('/images/adult-3086302_1280.jpg')",
      }}>
      <div className="container mx-auto text-center bg-white bg-opacity-70 p-6 rounded-lg">
        <h1 className="text-4xl font-bold text-blue-500">
          Grab Up to 50% Off On Selected PackItem
        </h1>
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
