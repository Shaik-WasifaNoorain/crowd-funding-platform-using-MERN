import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from './assets/bg.jpg'; // Make sure this path is correct

const DiscoverPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const campaigns = [
    { title: 'Space Exploration', description: 'Help fund space missions to discover new worlds.', buttonText: 'Support this Project', buttonColor: 'primary' },
    { title: 'Eco-Friendly Products', description: 'Support businesses promoting sustainability and eco-conscious products.', buttonText: 'Support this Project', buttonColor: 'success' },
    { title: 'Clean Water Initiative', description: 'Provide clean water to remote areas and save lives.', buttonText: 'Donate Now', buttonColor: 'info' },
    { title: 'Education for All', description: 'Fund educational programs for underprivileged children.', buttonText: 'Contribute', buttonColor: 'warning' },
    { title: 'Healthcare Access', description: 'Help provide medical facilities in rural communities.', buttonText: 'Support Us', buttonColor: 'danger' },
    { title: 'Renewable Energy Solutions', description: 'Accelerate the transition to clean and renewable energy.', buttonText: 'Invest Now', buttonColor: 'dark' },
    { title: 'Animal Welfare', description: 'Support rescue operations and shelters for animals.', buttonText: 'Help Now', buttonColor: 'secondary' },
    { title: 'Food for Everyone', description: 'Contribute to feeding families in need around the world.', buttonText: 'Donate', buttonColor: 'success' },
    { title: 'Technology for Rural Areas', description: 'Help bring modern technology to rural communities.', buttonText: 'Empower', buttonColor: 'info' },
  ];

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        padding: '20px',
        overflowX: 'hidden',
        width: '100vw',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '20px',
          borderRadius: '12px',
          color: 'white',
          maxWidth: '800px',
          margin: '0 auto',
          marginTop: '80px',
        }}
      >
        <h2 className="text-center mb-4">Discover Campaigns</h2>

        {/* Search Bar */}
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Search Campaigns..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Campaigns List */}
        {filteredCampaigns.length > 0 ? (
          filteredCampaigns.map((campaign, index) => (
            <div key={index} className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{campaign.title}</h5>
                <p className="card-text">{campaign.description}</p>
                <button
                  onClick={() => navigate('/campaign-details')}
                  className={`btn btn-${campaign.buttonColor}`}
                >
                  {campaign.buttonText}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No campaigns found.</p>
        )}
      </div>
    </div>
  );
};

export default DiscoverPage;
