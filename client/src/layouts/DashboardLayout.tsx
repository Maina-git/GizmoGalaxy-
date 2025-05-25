// src/layouts/DashboardLayout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex flex-col  h-auto">
      {/* Sidebar */}
      <Navbar/>
      {/* Main Content */}
      <main className="flex-1  overflow-y-auto">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default DashboardLayout;
