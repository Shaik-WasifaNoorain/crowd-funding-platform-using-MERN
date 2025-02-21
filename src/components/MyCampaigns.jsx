import React, { useState } from "react";
import "./MyCampaigns.css";

const MyCampaigns = () => {
  // Sample user campaigns data (this will later be fetched from an API)
  const [campaigns, setCampaigns] = useState([
    { id: 1, title: "Eco-Friendly Products", description: "Promoting sustainability.", status: "Active" },
    { id: 2, title: "Clean Water Initiative", description: "Providing clean water to rural areas.", status: "Completed" },
    { id: 3, title: "Education for All", description: "Funding education programs.", status: "Active" },
  ]);

  // Handle campaign deletion
  const handleDelete = (id) => {
    const updatedCampaigns = campaigns.filter((campaign) => campaign.id !== id);
    setCampaigns(updatedCampaigns);
  };

  return (
    <div className="campaigns-container">
      <h2>My Campaigns</h2>
      <table className="campaigns-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>{campaign.title}</td>
              <td>{campaign.description}</td>
              <td>{campaign.status}</td>
              <td>
                <button className="btn-edit">Edit</button>
                <button className="btn-delete" onClick={() => handleDelete(campaign.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaigns;
