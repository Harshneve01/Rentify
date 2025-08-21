import React, { useState } from "react";
import "./AddHouse.css";

const AddHouse = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    city: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ FIX: Add handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `🏠 House Added Successfully!\n\n` +
      `Name: ${formData.name}\n` +
      `Price: ₹${formData.price}\n` +
      `City: ${formData.city}\n` +
      `Photo: ${formData.photo ? formData.photo.name : "No Photo"}`
    );

    // Reset form after submit
    setFormData({
      name: "",
      price: "",
      city: "",
      photo: null,
    });

    // Reset file input manually
    e.target.reset();
  };

  return (
    <div className="page">
      <div className="form-card">
        <h1>Add House</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>House Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Green Villa"
              required
            />
          </div>

          <div className="form-group">
            <label>Price (₹)</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="1500000"
              required
            />
          </div>

          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Pune"
              required
            />
          </div>

          <div className="form-group">
            <label>Add Home Photo</label>
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn">Add House</button>
        </form>
      </div>
    </div>
  );
};

export default AddHouse;
