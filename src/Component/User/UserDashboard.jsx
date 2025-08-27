import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserDashboard.css";

const UserHome = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // Sample house data (dynamic)
  const houses = [
    {
      id: 1,
      title: "Beachside Cottage",
      location: "Goa, India",
      price: "₹2500/night",
      image: "/images/beach-house.jpg",
    },
    {
      id: 2,
      title: "Mountain Retreat",
      location: "Manali, India",
      price: "₹3200/night",
      image: "/images/mountain-retreat.jpg",
    },
    {
      id: 3,
      title: "City Apartment",
      location: "Mumbai, India",
      price: "₹4500/night",
      image: "/images/city-apartment.jpg",
    },
  ];

  // Filter based on search
  const filteredHouses = houses.filter(
    (house) =>
      house.title.toLowerCase().includes(search.toLowerCase()) ||
      house.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav>
        <h1>Rentify</h1>
        <div>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/bookings")}>My Bookings</button>
          <button onClick={() => navigate("/profile")}>Profile</button>
          <button onClick={() => navigate("/login")}>Logout</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
        }}
      >
        <div className="hero-overlay">
          <h2>Find Your Perfect Stay</h2>
          <input
            type="text"
            placeholder="Search by city or house name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* Featured Houses */}
      <section className="featured">
        <h3>Featured Stays</h3>
        <div className="card-grid">
          {filteredHouses.length > 0 ? (
            filteredHouses.map((house) => (
              <div key={house.id} className="card">
                <img src={house.image} alt={house.title} />
                <div className="card-content">
                  <h4>{house.title}</h4>
                  <p>{house.location}</p>
                  <p className="price">{house.price}</p>
                  <button
                    onClick={() => navigate(`/house/${house.id}`)}
                    className="book-btn"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No stays found.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 Rentify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default UserHome;
