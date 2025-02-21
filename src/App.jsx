import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import bgImage from './assets/bg.jpg'; // Importing the background image
import Campaigns from './campaigns';
import DiscoverPage from './DiscoverPage';
import CommunityChat from './chat';
import FloatingChatButton from './components/floatChatbtn';
import CampaignDetailsPage from './campaigndetails';
import ForgotPassword from "./frgtpasswrd";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./components/DashboardLayout";
import ProfilePage from "./components/ProfilePage";
import MyCampaigns from "./components/MyCampaigns";
import Contributions from "./components/MyContributions";
import Settings from "./components/ProfileSettings";

const Home = () => {
  const navigate = useNavigate();

  const projects = [
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
    <div style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      color: 'white',
    }}>
      {/* Hero Section */}
      <div id="home" className="d-flex align-items-center justify-content-center text-center"
        style={{
          height: '30vh',
          background: '#002855', // Dark overlay for readability
          padding: '10px',
          marginTop: '80px',
          borderRadius: '8px',
        }}
      >
        <div>
          <h1 className="display-4 fw-bold">Welcome to CrowdFundify</h1>
          <p>Empowering dreams through crowdfunding. Join us to support innovative projects and make a difference.</p>
          <Link to="/signup" className="btn btn-outline-light btn-lg me-3">Sign Up</Link>
          <Link to="/login" className="btn btn-outline-light btn-lg">Login</Link>
          
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container my-5">
        <div className="card shadow-sm p-4" style={{ backgroundColor: '#002855', color: 'white', borderRadius: '12px' }}>
          <h2 className="mb-3">About Us</h2>
          <p>
            CrowdFundify is a leading crowdfunding platform connecting innovators, creators, and communities with passionate backers. CrowdFundify is a platform dedicated to empowering innovators and creators by connecting them with passionate supporters.
            We believe that great ideas deserve to be realized, regardless of financial limitations.
          </p>
        </div>
      </div>

      {/* Projects Section */}
      <div id="Campaigns" className="my-5 px-4">
        <h2 className="text-center mb-4" style={{ color: 'navy' }}>Campaigns</h2>
        <div className="row">

          {projects.map((project, index) => (
            <div key={index} className="col-md-4 mb-4 d-flex align-items-stretch">
              <div className="card w-100 shadow-sm">
                <div className="card-body text-center">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <button className={`btn btn-${project.buttonColor}`}>{project.buttonText}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer id="footer" className="text-white text-center py-3"
        style={{ backgroundColor: '#002855', width: '100vw', position: 'relative', left: '0' }}>
        <div className="container text-center">
          <h2>Contact Us</h2>
          <p>
            Have questions or want to collaborate? Reach out to us via email:
            <a href="mailto:support@crowdfundify.com" className="text-white"> support@crowdfundify.com</a>
          </p>
          <p>
            Follow us on social media for updates and success stories!
          </p>
          <ul className="list-unstyled">
            <li>Facebook: <a href="#" className="text-white">@CrowdFundify</a></li>
            <li>Twitter: <a href="#" className="text-white">@CrowdFundify</a></li>
            <li>Instagram: <a href="#" className="text-white">@CrowdFundify</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'navy', width: '100vw' }}>
          <div className="w-100 d-flex justify-content-between align-items-center px-3">
            <Link className="navbar-brand" to="/">CrowdFundify</Link>
            <div className="d-flex">
            <Link className="nav-link text-white me-3" to="/">Home</Link>
            <Link to="/signup" className="btn-lg nav-link text-white me-3">Sign Up</Link>
            <Link to="/login" className="btn-lg nav-link text-white me-3">Login</Link>
            <Link className="nav-link text-white me-3" to="/campaigns">Campaigns</Link>
            <Link className="nav-link text-white me-3" to="/discover">Discover</Link>

            </div>
          </div>
        </nav>

        <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/login" element={<Login />} />
  <Route path="/campaigns" element={<Campaigns />} />
  <Route path="/discover" element={<DiscoverPage />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />
  <Route path="/dashboard" element={<DashboardLayout />}>
    <Route path="profile" element={<ProfilePage />} />
    <Route path="campaigns" element={<MyCampaigns />} />
    <Route path="contributions" element={<Contributions />} />
    <Route path="settings" element={<Settings />} />

  </Route>
  {/* Protected Routes (Requires Login) */}
  <Route path="/community-chat" element={
    <ProtectedRoute>
      <CommunityChat />
    </ProtectedRoute>
  } />
  <Route path="/campaign-details" element={
    <ProtectedRoute>
      <CampaignDetailsPage />
    </ProtectedRoute>
  } />
</Routes>

        <FloatingChatButton />
      </div>
    </Router>
  );
};

export default App;
