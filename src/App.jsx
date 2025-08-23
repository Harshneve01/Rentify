import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import AdminDashboard from "./Component/Admin/AdminDashboard";
import AddHouse from "./Component/Admin/AddHouse";
import Home from "./Component/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add-home" element={<AddHouse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
