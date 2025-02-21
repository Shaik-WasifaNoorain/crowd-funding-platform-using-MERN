import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/bg.jpg"; // Importing the background image

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      newErrors.email = "Invalid email format";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login Successful!");
      navigate("/dashboard");
    }
  };

  return (
    <div
      style={{
        position: "fixed", // Ensures full coverage
        top: 0,
        left: 0,
        width: "100vw", // Full width
        height: "100vh", // Full height
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // Prevents scrolling
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          maxWidth: "400px",
          width: "90%",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Slight transparency for visibility
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-3">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && <small className="text-danger">{errors.email}</small>}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            {errors.password && <small className="text-danger">{errors.password}</small>}
          </div>

          <div className="d-flex justify-content-between">
            <button type="submit" className="btn" style={{ backgroundColor: "navy", color: "white", width: "48%" }}>
              Login
            </button>
            <button type="button" className="btn btn-link" style={{ textDecoration: "none", color: "navy" }} onClick={() => navigate('/forgot-password')}>
              Forgot Password?
            </button>
          </div>
        </form>

        <p className="text-center mt-2">
          Don't have an account?{" "}
          <span className="text-primary" style={{ cursor: "pointer" }} onClick={() => navigate('/signup')}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
