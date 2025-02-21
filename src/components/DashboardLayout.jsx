import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./DashboardLayout.css"; // Add styles for layout

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <nav className="dashboard-sidebar">
        <h2 className="dashboard-title">Dashboard</h2>
        <ul>
          <li><Link to="/dashboard/ProfilePage">Profile</Link></li>
          <li><Link to="/dashboard/MyCampaigns">My Campaigns</Link></li>
          <li><Link to="/dashboard/MyContributions">Contributions</Link></li>
          <li><Link to="/dashboard/ProfileSettings">Settings</Link></li>
        </ul>
      </nav>

      {/* Content Area */}
      <div className="dashboard-content">
        <Outlet /> {/* This will load the selected section */}
      </div>
    </div>
  );
};

export default DashboardLayout;
