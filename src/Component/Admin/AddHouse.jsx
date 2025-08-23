import React, { useState } from "react";
import "./AddHouse.css";

const AddHouse = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    city: "",
    type: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    status: "available",
    amenities: [],
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (name === "photo") {
      setFormData({ ...formData, photo: files[0] });
    } else if (name === "amenities") {
      // toggle checkbox value
      const updatedAmenities = checked
        ? [...formData.amenities, value]
        : formData.amenities.filter((a) => a !== value);
      setFormData({ ...formData, amenities: updatedAmenities });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      `🏠 House Added Successfully!\n\n` +
        `Name: ${formData.name}\n` +
        `Price: ₹${formData.price}\n` +
        `City: ${formData.city}\n` +
        `Type: ${formData.type}\n` +
        `Bedrooms: ${formData.bedrooms}\n` +
        `Bathrooms: ${formData.bathrooms}\n` +
        `Size: ${formData.size} sqft\n` +
        `Status: ${formData.status}\n` +
        `Amenities: ${formData.amenities.join(", ") || "None"}\n` +
        `Description: ${formData.description}\n` +
        `Photo: ${formData.photo ? formData.photo.name : "No Photo"}`
    );

    // Reset form
    setFormData({
      name: "",
      price: "",
      city: "",
      type: "",
      bedrooms: "",
      bathrooms: "",
      size: "",
      status: "available",
      amenities: [],
      description: "",
      photo: null,
    });
    e.target.reset();
  };

  return (
    <div className="page">
      <div className="form-card">
        <h1>Add House</h1>
        <form onSubmit={handleSubmit}>
          {/* House Name */}
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

          {/* Price */}
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

          {/* City */}
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

          {/* Type */}
          <div className="form-group">
            <label>House Type</label>
            <select name="type" value={formData.type} onChange={handleChange} required>
              <option value="">Select Type</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="flat">Flat</option>
              <option value="pg">PG</option>
            </select>
          </div>

          {/* Bedrooms */}
          <div className="form-group">
            <label>Bedrooms (BHK)</label>
            <input
              type="number"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              placeholder="2"
              required
            />
          </div>

          {/* Bathrooms */}
          <div className="form-group">
            <label>Bathrooms</label>
            <input
              type="number"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              placeholder="2"
              required
            />
          </div>

          {/* Size */}
          <div className="form-group">
            <label>Size (sqft)</label>
            <input
              type="number"
              name="size"
              value={formData.size}
              onChange={handleChange}
              placeholder="1200"
              required
            />
          </div>

          {/* Status */}
          <div className="form-group">
            <label>Status</label>
            <select name="status" value={formData.status} onChange={handleChange}>
              <option value="available">Available</option>
              <option value="booked">Booked</option>
            </select>
          </div>

          {/* Amenities */}
          <div className="form-group">
            <label>Amenities</label>
            <div>
              <label><input type="checkbox" name="amenities" value="Parking" onChange={handleChange}/> Parking</label>
              <label><input type="checkbox" name="amenities" value="Furnished" onChange={handleChange}/> Furnished</label>
              <label><input type="checkbox" name="amenities" value="Balcony" onChange={handleChange}/> Balcony</label>
              <label><input type="checkbox" name="amenities" value="WiFi" onChange={handleChange}/> WiFi</label>
            </div>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter details about the house"
              rows="3"
            ></textarea>
          </div>

          {/* Photo */}
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

          {/* Submit */}
          <button type="submit" className="btn">Add House</button>
        </form>
      </div>
    </div>
  );
};

export default AddHouse;
