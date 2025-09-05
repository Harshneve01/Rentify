import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        Rentify
      </h1>
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/houses")}>Houses</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/user-profile")}>Profile</button>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
