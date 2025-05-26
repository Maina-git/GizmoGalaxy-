import { Link } from 'react-router-dom';

const Overview: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <img
        src="/images/adult-3086302_1280.jpg"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg mb-6">
          Gizmo Galaxy
        </h1>
        <h2 className="text-blue-200 text-2xl md:text-3xl font-semibold mb-4 drop-shadow">
          We value you the most
        </h2>
        <p className="text-white text-md md:text-lg max-w-2xl mb-8 drop-shadow">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          reprehenderit quo sequi quasi maxime. Laudantium esse veritatis enim
          assumenda ad aliquam ab? Cumque odit commodi quasi soluta laudantium
          nemo corrupti.
        </p>

        <Link to="/dashboard/h">
          <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out text-white rounded-full px-8 py-4 text-xl shadow-lg hover:shadow-xl">
            Visit Our Store
          </button>
        </Link>
      </div>

      {/* Optional: Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
    </div>
  );
};

export default Overview;
