import React from "react";
import { Outlet } from "react-router-dom"; // 👈 import Outlet
import Navbar from "./Navbar";
import Footer from "./Footer";

const UserLayout = () => {
  return (
    <div className="user-layout">
      <Navbar />
      <main>
        <Outlet />  {/* 👈 renders Home, HomeDetail, UserDashboard etc. */}
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
