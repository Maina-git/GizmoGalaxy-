import React from "react";

interface Props {
  redirect: () => void;
}

const DealsLanding: React.FC<Props> = ({ redirect }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen overflow-hidden">
      {/* Left Section */}
      <div className="md:w-1/2 w-full bg-blue-600 p-10 flex flex-col justify-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Get Our Favourite Deals
        </h1>
        <p className="text-white text-lg md:text-2xl mb-8">
          Gizmo offers you the best <strong>Deals</strong> with a{" "}
          <span className="font-bold">50% off guarantee</span>.
        </p>

        <div className="bg-white text-blue-600 text-3xl md:text-5xl font-bold py-6 px-10 rounded-full shadow-md w-fit hover:scale-105 transition duration-300">
          Explore Deals
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full bg-white flex items-center justify-center relative p-6">
        <img
          src="/images/gamepad-6392045_1280.jpg"
          alt="Deals"
          className="rounded-full object-cover w-72 h-72 md:w-96 md:h-96 shadow-xl transition-transform duration-300 hover:scale-105"
        />
        <button
          onClick={redirect}
          className="absolute bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition duration-300"
        >
          Get a Deal
        </button>
      </div>
    </div>
  );
};

export default DealsLanding;
