import React, { useState } from "react";
import "./ProfileSettings.css";

const ProfileSettings = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "",
    confirmPassword: "",
    notifications: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUserData({
      ...userData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password && userData.password !== userData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-settings-container">
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <label>
          Name:
          <input type="text" name="name" value={userData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={userData.email} onChange={handleChange} />
        </label>
        <label>
          New Password:
          <input type="password" name="password" value={userData.password} onChange={handleChange} />
        </label>
        <label>
          Confirm Password:
          <input type="password" name="confirmPassword" value={userData.confirmPassword} onChange={handleChange} />
        </label>
        <label className="checkbox-label">
          <input type="checkbox" name="notifications" checked={userData.notifications} onChange={handleChange} />
          Enable Email Notifications
        </label>
        <button type="submit" className="save-button">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileSettings;
