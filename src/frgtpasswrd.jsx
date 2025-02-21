import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgImage from './assets/bg.jpg'; // Import the background image

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email.match(/^\S+@\S+\.\S+$/)) {
      setError("Invalid email format");
      return;
    }

    setMessage("A password reset link has been sent to your email.");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          maxWidth: "400px",
          width: "90%",
          backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
          borderRadius: "10px",
        }}
      >
        <h2 className="text-center mb-3">Forgot Password</h2>
        <p className="text-center">Enter your email to receive a password reset link.</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && <small className="text-danger">{error}</small>}
          </div>

          {message && <p className="text-success">{message}</p>}

          <button
            type="submit"
            className="btn w-100"
            style={{ backgroundColor: "navy", color: "white" }}
          >
            Send Reset Link
          </button>
        </form>

        <button
          className="btn btn-link mt-2"
          onClick={() => navigate("/login")}
          style={{ textDecoration: "none", color: "navy" }}
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
