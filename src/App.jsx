import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import AdminDashboard from "./Component/Admin/AdminDashboard";
import AddHouse from "./Component/Admin/AddHouse";
import Home from "./Component/Home";
import HomeDetail from "./Component/User/HomeDetail";
import UserDashboard from "./Component/User/UserDashboard";   // 👈 new import
import UserLayout from "./Component/Navbar/UserLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        {/*<Route path="/" element={<Home />} />*/}
        <Route path="/login" element={<Login />} />

        {/* Admin */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-home" element={<AddHouse />} />

        {/* User */}
        <Route element={<UserLayout/>}>
          { /*<Route path="/user-dashboard" element={< UserDashboard/>} />*/}
          <Route path="/" element={<Home />} />
          <Route path="/house/:id" element={<HomeDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
