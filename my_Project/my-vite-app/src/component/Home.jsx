import React from 'react';
import './Home.css';

const listings = [
  {
    id: 1,
    title: "Cozy Apartment in Paris",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    location: "Paris, France",
    price: "$120/night"
  },
  {
    id: 2,
    title: "Modern Flat in Tokyo",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    location: "Tokyo, Japan",
    price: "$150/night"
  },
  {
    id: 3,
    title: "Beach House in Bali",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80",
    location: "Bali, Indonesia",
    price: "$200/night"
  }
];

function Home() {
  return (
    <div className="home-bg">
      <header className="home-header">
        <div className="logo">StayBnB</div>
        <nav>
          <a href="/">Home</a>
          <a href="/listings">Listings</a>
          <a href="/contact">Contact</a>
          <a href="/login" className="login-btn">Login</a>
        </nav>
      </header>

      <section className="hero-section">
        <h1>Find your next stay</h1>
        <p>Unique homes and experiences around the world.</p>
        <button>Explore Now</button>
      </section>

      <section className="featured-listings">
        <h2>Featured Listings</h2>
        <div className="listing-cards">
          {listings.map(listing => (
            <div key={listing.id} className="listing-card">
              <img src={listing.image} alt={listing.title} />
              <div className="listing-info">
                <h3>{listing.title}</h3>
                <p>{listing.location}</p>
                <span className="price">{listing.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="home-footer">
        <span>&copy; 2025 StayBnB. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default Home;
