import React from 'react';
import './Home.css';
import sampleImage from '../Image/Rentify.png';

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
  },
  {
    id: 4,
    title: "Modern Apartment, New York",
    image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80",
    location: "New York, USA",
    price: "$210/night"
  },
  {
    id: 5,
    title: "Luxury Villa, Santorini",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80",
    location: "Santorini, Greece",
    price: "$400/night"
  },
  {
    id: 6,
    title: "Cabin in the Woods",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=400&q=80",
    location: "Oregon, USA",
    price: "$80/night"
  },
  {
    id: 7,
    title: "Scandinavian Loft",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    location: "Stockholm, Sweden",
    price: "$170/night"
  },
  {
    id: 8,
    title: "City Loft, London",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80",
    location: "London, UK",
    price: "$195/night"
  },
  {
    id: 9,
    title: "Coastal Retreat, California",
    image: "https://images.unsplash.com/photo-1472224371017-08207f84aaae?auto=format&fit=crop&w=400&q=80",
    location: "California, USA",
    price: "$230/night"
  },
  {
    id: 10,
    title: "Mountain Chalet, Switzerland",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=400&q=80",
    location: "Zermatt, Switzerland",
    price: "$320/night"
  }
];

function Home() {
  return (
    <div className="home-bg">
      <header className="home-header">
        <div className="logo">
        
          <span>Rentify</span>
        </div>
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
          {listings.map((listing) => (
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
        <span>&copy; 2025 Rentify. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default Home;
