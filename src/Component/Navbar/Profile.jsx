import React from "react";
import "./Profile.css";

const Profile = () => {
  // Example dummy user data (later fetch from backend / context)
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
  };

  // Example booked houses (later fetch from MongoDB)
  const bookings = [
    {
      id: 1,
      house: "Luxury Beach Villa",
      location: "Goa, India",
      startDate: "2025-09-15",
      endDate: "2025-09-20",
    },
    {
      id: 2,
      house: "Cozy Mountain Cabin",
      location: "Manali, India",
      startDate: "2025-10-05",
      endDate: "2025-10-10",
    },
  ];

  return (
    <div className="profile-container">
      {/* User Info */}
      <div className="profile-header">
        <h1>My Profile</h1>
        <div className="user-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
        </div>
      </div>

      {/* Bookings */}
      <div className="bookings-section">
        <h2>My Bookings</h2>
        {bookings.length > 0 ? (
          <ul className="booking-list">
            {bookings.map((b) => (
              <li key={b.id} className="booking-card">
                <h3>{b.house}</h3>
                <p>{b.location}</p>
                <p>
                  <strong>From:</strong> {b.startDate} <br />
                  <strong>To:</strong> {b.endDate}
                </p>
                <button className="cancel-btn">Cancel Booking</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
