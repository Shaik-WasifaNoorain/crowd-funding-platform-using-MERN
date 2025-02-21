import React, { useState } from "react";
import "./MyContributions.css";

const MyContributions = () => {
  // Sample contributions data (this will later be fetched from an API)
  const [contributions, setContributions] = useState([
    { id: 1, campaign: "Eco-Friendly Products", amount: "$50", date: "2024-02-01", status: "Successful" },
    { id: 2, campaign: "Clean Water Initiative", amount: "$100", date: "2024-01-20", status: "Pending" },
    { id: 3, campaign: "Education for All", amount: "$75", date: "2024-01-10", status: "Successful" },
  ]);

  return (
    <div className="contributions-container">
      <h2>My Contributions</h2>
      <table className="contributions-table">
        <thead>
          <tr>
            <th>Campaign</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {contributions.map((contribution) => (
            <tr key={contribution.id}>
              <td>{contribution.campaign}</td>
              <td>{contribution.amount}</td>
              <td>{contribution.date}</td>
              <td className={contribution.status === "Successful" ? "status-success" : "status-pending"}>
                {contribution.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyContributions;
