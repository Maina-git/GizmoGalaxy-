import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registartion Successfull")
      navigate("/lg");
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-blue-500 mb-6">Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 p-10 shadow-lg rounded-lg w-[400px] bg-white">
        <label className="text-black font-bold">Username</label>
        <input
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          className="p-2 border border-blue-500 outline-none text-blue-500 rounded-md"
          placeholder="Enter Username"
          required/>

        <label className="font-bold text-black">Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="p-2 border border-blue-500 outline-none text-blue-500 rounded-md"
          placeholder="Enter Email"
          required/>

        <label className="font-bold text-black">Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="p-2 border border-blue-500 outline-none text-blue-500 rounded-md"
          placeholder="Enter Password"
          required/>

        {/* Optional: Confirm Password (no logic yet) */}
        <label className="font-bold text-black">Confirm Password</label>
        <input
          type="password"
          className="p-2 border border-blue-500 outline-none text-blue-500 rounded-md"
          placeholder="Confirm Passwor"/>

        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-3 cursor-pointer hover:bg-blue-300 rounded-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
