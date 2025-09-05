import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RentNow.css";

const RentNow = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form submitted successfully!");
        navigate("/");
    };

    return (
        <div className="rent-now-container">
            {/* Header */}
            <div className="rent-now-header">
                <h1>Rent Now</h1>
                <p>Please fill in your details to confirm the booking</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="rent-form">
                <div>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your Name" required />
                </div>

                <div>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="Enter your Email" required />
                </div>

                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" placeholder="Enter your Phone Number" required />
                </div>

                <div>
                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" name="startDate" required />
                </div>

                <div>
                    <label htmlFor="endDate">End Date</label>
                    <input type="date" id="endDate" name="endDate" required />
                </div>

                <button type="submit" className="submit-btn">
                    Confirm Booking
                </button>
            </form>
        </div>
    );
};

export default RentNow;
