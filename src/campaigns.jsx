import React from 'react';
import bgImage from './assets/bg.jpg';

const Campaigns = () => {
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

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        paddingTop: '80px',
        color: 'white',
        overflowX: 'hidden', // Prevent horizontal scrolling
      }}
    >
      <div className="container-fluid px-4">
      <h2 className="text-center mb-4" style={{ color: 'navy' }}>Campaigns</h2>
        <div className="row g-4">
          {campaigns.map((campaign, index) => (
            <div key={index} className="col-md-4 d-flex align-items-stretch">
              <div className="card w-100">
                <div className="card-body">
                  <h5 className="card-title">{campaign.title}</h5>
                  <p className="card-text">{campaign.description}</p>
                  <button className="btn btn-primary">Support</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
