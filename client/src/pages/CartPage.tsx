import React, { useState } from "react";

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Floral Print Wrap Dress", price: 32.5, quantity: 1, img: "/images/dress1.jpg" },
    { id: 2, name: "Floral Print Wrap Dress", price: 30.5, quantity: 1, img: "/images/dress2.jpg" },
  ]);

  const [zipCode, setZipCode] = useState("");
  const [coupon, setCoupon] = useState("");

  const updateQuantity = (id: number, change: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item
      )
    );
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = coupon === "DISCOUNT10" ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col p-6">
      <div className="max-w-5xl mx-auto bg-white p-6 shadow-md rounded-lg flex flex-col lg:flex-row gap-6">
        {/* Left Section - Shopping Bag */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Shopping Bag</h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1 px-4">
                  <p className="text-gray-700 font-semibold">{item.name}</p>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-3 py-1 bg-gray-200 rounded-l"
                  >-</button>
                  <span className="px-4 py-1 bg-white border">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 bg-gray-200 rounded-r"
                  >+</button>
                </div>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Checkout Summary */}
        <div className="w-full lg:w-64 bg-gray-50 p-4 rounded-lg shadow-md">
          {/* Shipping Calculator */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Calculated Shipping</h3>
            <input
              type="text"
              placeholder="Enter ZIP code"
              className="w-full border p-2 rounded"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <button className="w-full mt-2 bg-gray-800 text-white p-2 rounded">Update</button>
          </div>

          {/* Coupon Code */}
          <div className="mb-4">
            <h3 className="font-semibold text-lg mb-2">Coupon Code</h3>
            <input
              type="text"
              placeholder="Enter code"
              className="w-full border p-2 rounded"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            />
            <button className="w-full mt-2 bg-gray-800 text-white p-2 rounded">Apply</button>
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-2">Cart Total</h3>
            <div className="flex justify-between text-gray-600">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount:</span>
              <span>${discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg mt-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-yellow-500 text-white p-2 rounded text-lg">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;