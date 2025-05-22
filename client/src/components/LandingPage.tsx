import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div
      className="bg-yellow-100 py-12 bg-cover bg-center h-[80vh]"
      style={{
        backgroundImage: "url('/images/headphone.jpg ')",
      }}
    >
      <div className="container mx-auto text-center  p-6 rounded-lg mt-120 w-[10] h-[20]">
        
        <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg cursor-pointer">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
