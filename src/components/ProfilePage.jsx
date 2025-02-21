import React from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      {/* Back Button */}
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h2>Profile Page</h2>
      <p>Manage your profile details and settings here.</p>

      {/* Profile Content */}
      <div className="card p-3 shadow-sm">
        <h4>User Details</h4>
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Joined:</strong> January 1, 2024</p>
      </div>
    </div>
  );
};

export default ProfilePage;
