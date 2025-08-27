import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import bgImage from "./Image/Background.jpg"; 

const Home = () => {
  const navigate = useNavigate();

  
  const houses = [
    {
      id: 1,
      title: "Luxury Villa",
      city: "Mumbai",
      price: "₹4000 / night",
      image: "/public/Dawning_OptionalPool-Dusk.webp",
    },
    {
      id: 2,
      title: "Modern Apartment",
      city: "Delhi",
      price: "₹2500 / night",
      image: "/public/images.jpeg",
    },
    {
      id: 3,
      title: "Beach Resort",
      city: "Goa",
      price: "₹6000 / night",
      image: "https://source.unsplash.com/400x300/?resort",
    },
    {
      id: 4,
      title: "Hilltop Cottage",
      city: "Manali",
      price: "₹3500 / night",
      image: "https://source.unsplash.com/400x300/?cottage",
    },

        {
      id: 5,
      title: "Hilltop Cottage",
      city: "Manali",
      price: "₹3500 / night",
      image: "https://source.unsplash.com/400x300/?cottage",
    },

        {
      id: 6,
      title: "Hilltop Cottage",
      city: "Manali",
      price: "₹3500 / night",
      image: "https://source.unsplash.com/400x300/?cottage",
    },


        {
      id: 7,
      title: "Hilltop Cottage",
      city: "Manali",
      price: "₹3500 / night",
      image: "https://source.unsplash.com/400x300/?cottage",
    },

        {
      id: 8,
      title: "Hilltop Cottage",
      city: "Manali",
      price: "₹3500 / night",
      image: "https://source.unsplash.com/400x300/?cottage",
    },
  ];

  const [search, setSearch] = useState("");

  const filteredHouses = houses.filter((house) =>
    house.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">
     
      <nav>
        <h1 onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          Rentify
        </h1>
        <div>
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/houses")}>Houses</button>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      </nav>

      <section
        className="hero"
        style={{ backgroundImage: `url(${bgImage})` }} 
      >
        <div className="hero-overlay">
          <h2>Find your perfect stay</h2>
          <input
            type="text"
            placeholder="Search by city..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      <section className="featured">
        <h3>Featured Houses</h3>

        {filteredHouses.length === 0 ? (
          <p className="no-results">No houses found in "{search}"</p>
        ) : (
          <div className="card-grid">
            {filteredHouses.map((house) => (
              <div
                key={house.id}
                className="card"
                onClick={() => navigate(`/house/${house.id}`)}
              >
                <img src={house.image} alt={house.title} />
                <div className="card-content">
                  <h4>{house.title}</h4>
                  <p>{house.city}</p>
                  <p className="price">{house.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <footer>
        <p>© 2025 Rentify. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
