import React from 'react';

const deals = [
  {
    id: 1,
    name: 'Wireless Headphones',
    image: '/images/headphones.jpg',
    price: 120,
    discount: 50,
  },
  {
    id: 2,
    name: 'Gaming Mouse',
    image: '/images/mouse.jpg',
    price: 60,
    discount: 30,
  },
  {
    id: 3,
    name: 'Smart Watch',
    image: '/images/watch.jpg',
    price: 200,
    discount: 40,
  },
  {
    id: 4,
    name: 'VR Headset',
    image: '/images/vr.jpg',
    price: 300,
    discount: 45,
  },
];

const DealsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600">Hot Deals</h1>
          <p className="text-lg text-gray-700 mt-2">Grab your favorite gadgets at up to 50% off!</p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center hover:shadow-xl transition duration-300"
            >
              <img
                src={deal.image}
                alt={deal.name}
                className="w-40 h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold mb-2">{deal.name}</h2>
              <div className="text-gray-700 text-sm mb-1">
                <span className="line-through text-red-500 mr-2">${deal.price}</span>
                <span className="text-blue-600 font-bold">
                  ${deal.price - (deal.price * deal.discount) / 100}
                </span>
              </div>
              <span className="text-green-600 text-sm mb-4">
                {deal.discount}% OFF
              </span>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsPage;
