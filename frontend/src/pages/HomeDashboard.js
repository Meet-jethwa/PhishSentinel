import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeDashboard.css';

function HomeDashboard() {
  const [protectionActive, setProtectionActive] = useState(true);
  const [notifications] = useState([
    { id: 1, message: 'High-risk threat detected', time: '2 min ago', severity: 'high' },
    { id: 2, message: 'Protection updated successfully', time: '1 hour ago', severity: 'info' }
  ]);

  const recentThreats = [
    {
      id: 1,
      title: 'URGENT: Your bank account will be suspended...',
      time: '10 min ago',
      severity: 'HIGH',
      color: 'red'
    },
    {
      id: 2,
      title: 'Claim your Amazon reward prize now',
      time: '25 min ago',
      severity: 'HIGH',
      color: 'red'
    },
    {
      id: 3,
      title: 'Update your payment method',
      time: '1 hour ago',
      severity: 'MEDIUM',
      color: 'yellow'
    }
  ];

  return (
    <div className="home-dashboard">
      {/* Protection Status Card */}
      <section className="protection-status">
        <div className="status-card">
          <div className="status-icon" style={{ backgroundColor: protectionActive ? '#10b981' : '#dc2626' }}>
            {protectionActive ? 'ON' : 'OFF'}
          </div>
          <div className="status-info">
            <h2>{protectionActive ? 'Protection Active' : 'Protection Paused'}</h2>
            <p>{protectionActive ? 'Real-time protection is enabled' : 'Security protection is currently disabled'}</p>
          </div>
          <label className="toggle-switch">
            <input 
              type="checkbox" 
              checked={protectionActive} 
              onChange={(e) => setProtectionActive(e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <Link to="/scan" className="action-card">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            <circle cx="11" cy="10" r="2"></circle>
            <path d="M16 10h.01"></path>
          </svg>
          <span>Scan Messages</span>
        </Link>
        <Link to="/settings" className="action-card">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M4.22 19.78l4.24-4.24m4.24-4.24l4.24-4.24"></path>
          </svg>
          <span>Settings</span>
        </Link>
      </section>

      {/* Threats Blocked Stats */}
      <section className="threats-blocked">
        <div className="stat-item">
          <div className="stat-number">42</div>
          <div className="stat-label">Threats Blocked</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">128</div>
          <div className="stat-label">Scans Performed</div>
        </div>
      </section>

      {/* Recent Threats */}
      <section className="recent-threats">
        <h2 className="threats-title">Recent Threats</h2>
        <div className="threats-list">
          {recentThreats.map((threat) => (
            <div key={threat.id} className="threat-item">
              <div>
                <div className="threat-title">{threat.title}</div>
                <div className="threat-meta">
                  <span>{threat.time}</span>
                  <span className={`threat-severity ${threat.color}`}>{threat.severity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link to="/threat-history" className="view-all">View All Threats →</Link>
      </section>

      {/* Bottom Navigation - for reference, will be in separate Navigation component */}
      <div style={{ height: '70px' }} />
    </div>
  );
}

export default HomeDashboard;
