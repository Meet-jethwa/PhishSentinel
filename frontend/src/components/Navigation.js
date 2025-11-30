import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="header-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <span>PhishSentinel</span>
        </div>

        <div className="nav-links">
          <Link 
            to="/" 
            className={`nav-item ${isActive('/') ? 'active' : ''}`}
          >
            <span>Home</span>
          </Link>

          <Link 
            to="/scan" 
            className={`nav-item ${isActive('/scan') ? 'active' : ''}`}
          >
            <span>Scan</span>
          </Link>

          <Link 
            to="/stats" 
            className={`nav-item ${isActive('/stats') ? 'active' : ''}`}
          >
            <span>Statistics</span>
          </Link>

          <Link 
            to="/threat-history" 
            className={`nav-item ${isActive('/threat-history') ? 'active' : ''}`}
          >
            <span>Threats</span>
          </Link>

          <Link 
            to="/settings" 
            className={`nav-item ${isActive('/settings') ? 'active' : ''}`}
          >
            <span>Settings</span>
          </Link>
        </div>

        <div className="nav-user">
          <div className="user-avatar">J</div>
          <div className="user-info">
            <p className="user-name">John Doe</p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
