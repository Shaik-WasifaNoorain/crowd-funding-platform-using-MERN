import React from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from './assets/bg.jpg';

const CampaignDetailsPage = () => {
  const navigate = useNavigate();

  const campaign = {
    title: 'Solar Energy for Villages',
    description: 'Empowering rural areas with solar power.',
    goal: 50000,
    raised: 35000,
  };

  const progressPercentage = (campaign.raised / campaign.goal) * 100;

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        width: '100vw', // THIS IS THE KEY
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '30px',
          borderRadius: '12px',
          maxWidth: '600px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <h2>{campaign.title}</h2>
        <p>{campaign.description}</p>

        <p>Goal: ₹{campaign.goal.toLocaleString()}</p>
        <p>Raised: ₹{campaign.raised.toLocaleString()}</p>

        {/* Progress Bar */}
        <div
          style={{
            backgroundColor: 'lightgrey',
            borderRadius: '8px',
            overflow: 'hidden',
            height: '20px',
            marginBottom: '15px',
          }}
        >
          <div
            style={{
              width: `${progressPercentage}%`,
              backgroundColor: 'green',
              height: '100%',
            }}
          ></div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button
            style={{
              backgroundColor: 'white',
              color: 'navy',
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Back This Project
          </button>

          <button
            onClick={() => navigate(-1)}
            style={{
              backgroundColor: 'grey',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailsPage;
