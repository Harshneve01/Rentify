import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("user"); // default user
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    orgName: "",
    adminKey: "",
  });

   const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "admin") {
      navigate("/admin-dashboard");
    }else {
      navigate("/");
    }

    if (isLogin) {
      alert(`✅ ${role} logged in with email: ${formData.email}`);
    } else {
      alert(`✅ ${role} signed up with name: ${formData.name}`);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {/* Role Dropdown */}
        <select
          className="role-dropdown"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <form onSubmit={handleSubmit}>
          {/* Signup extra fields */}
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {role === "admin" && (
                <>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="orgName"
                    placeholder="Organization Name (Optional)"
                    value={formData.orgName}
                    onChange={handleChange}
                  />
                </>
              )}
            </>
          )}

          {/* Common fields */}
          <input
            type="email"
            name="email"
            placeholder={`${role} Email`}
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
