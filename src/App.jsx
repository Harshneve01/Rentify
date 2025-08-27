import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import AdminDashboard from "./Component/Admin/AdminDashboard";
import AddHouse from "./Component/Admin/AddHouse";
import Home from "./Component/Home";
import UserDashboard from "./Component/User/UserDashboard";   // 👈 new import
// import Bookings from "./Component/User/Bookings";   // 👈 optional
// import Profile from "./Component/User/Profile";     // 👈 optional

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-home" element={<AddHouse />} />

        {/* User */}
        <Route path="/user-dashboard" element={< UserDashboard/>} />
        {/* <Route path="/bookings" element={<Bookings />} />
        <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
