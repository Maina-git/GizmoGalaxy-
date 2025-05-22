import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
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
      const response = await axios.post("http://localhost:5000/api/auth/login", form);
      console.log("Login successful:", response.data);
      // If you get a token or user info, you can save it in localStorage, cookies, or context
      // localStorage.setItem("token", response.data.token);
      navigate('/dashboard'); // or wherever you want to redirect after login
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-blue-500 mb-6">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-10 shadow-lg rounded-lg w-[400px]">
        <label className="font-bold text-black">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="p-2 border border-blue-500 outline-none text-blue-500 rounded-md"
          placeholder="Enter Email"
          required
        />

        <label className="font-bold text-black">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="p-2 border border-blue-500 outline-none text-blue-500 rounded-md"
          placeholder="Enter Password"
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white w-full py-3 cursor-pointer hover:bg-blue-300 rounded-full"
        >
          Login
        </button>

        <a href="/" className="text-blue-500 text-sm text-center mt-2">
          Don't have an account? Sign Up
        </a>
      </form>
    </div>
  );
};

export default Login;
