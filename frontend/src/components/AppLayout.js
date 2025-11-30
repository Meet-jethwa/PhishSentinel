import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import './AppLayout.css';

function AppLayout({ children, title }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="app-layout">
      <Navigation />
      {children}
      <div className="logout-btn-container">
        <button onClick={handleLogout} className="logout-btn">
          Exit App
        </button>
      </div>
    </div>
  );
}

export default AppLayout;
