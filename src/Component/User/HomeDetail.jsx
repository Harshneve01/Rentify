import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./HomeDetail.css";

const HomeDetail = () => {
  const { id } = useParams(); // Get home id from URL
  const navigate = useNavigate();

  // Sample house data (same as in Home.jsx, ideally fetch from API)
  const houses = [
    { id: 1, title: "Luxury Villa", city: "Mumbai", price: "₹4000 / night", description: "Luxury villa with pool, garden, and 3 bedrooms.", images: ["/Dawning_OptionalPool-Dusk.webp", "https://source.unsplash.com/800x500/?luxury,villa"] },
    { id: 2, title: "Modern Apartment", city: "Delhi", price: "₹2500 / night", description: "Modern apartment with city view, fully furnished.", images: ["/image.jpeg", "https://source.unsplash.com/800x500/?modern,apartment"] },
    { id: 3, title: "Beach Resort", city: "Goa", price: "₹6000 / night", description: "Beach resort with private beach access and 2 pools.", images: ["https://source.unsplash.com/800x500/?resort", "https://source.unsplash.com/800x500/?beach,resort"] },
    { id: 4, title: "Hilltop Cottage", city: "Manali", price: "₹3500 / night", description: "Cottage on hilltop with mountain view, 2 bedrooms.", images: ["https://source.unsplash.com/800x500/?cottage", "https://source.unsplash.com/800x500/?mountain,cottage"] },
  ];

  const house = houses.find((h) => h.id === parseInt(id));

  if (!house) return <p>Home not found!</p>;

  return (
    <div className="home-detail-container">
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

      <div className="home-detail-main">
        {/* Images */}
        <div className="images-section">
          {house.images.map((img, index) => (
            <img key={index} src={img} alt={house.title} />
          ))}
        </div>

        {/* Details */}
        <div className="details-section">
          <h2>{house.title}</h2>
          <p className="city">{house.city}</p>
          <p className="price">{house.price}</p>
          <p className="description">{house.description}</p>

          <button className="rent-btn" onClick={() => alert("Home booked successfully!")}>
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeDetail;
