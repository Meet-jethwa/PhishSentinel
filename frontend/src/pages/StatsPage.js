import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StatsPage.css';

function StatsPage() {
  const navigate = useNavigate();

  const threatBreakdown = [
    { level: 'High Severity', percentage: 35, color: '#dc2626' },
    { level: 'Medium Severity', percentage: 45, color: '#f59e0b' },
    { level: 'Low Severity', percentage: 20, color: '#10b981' }
  ];

  const topTargeted = [
    { app: 'SMS Messages', threats: 34 },
    { app: 'WhatsApp', threats: 28 },
    { app: 'Email', threats: 21 },
    { app: 'Social Media', threats: 15 }
  ];

  const realtimeDetected = [
    { name: 'Fake Bank Login', type: 'Credential Phishing', time: '2 mins ago', severity: 'High' },
    { name: 'Spoof Apple ID', type: 'Account Takeover', time: '8 mins ago', severity: 'High' },
    { name: 'Malicious Link', type: 'Malware Distribution', time: '15 mins ago', severity: 'Medium' },
    { name: 'Fake PayPal Email', type: 'Financial Fraud', time: '22 mins ago', severity: 'High' },
    { name: 'Phishing SMS', type: 'SMS Phishing', time: '31 mins ago', severity: 'Medium' }
  ];

  return (
    <div className="stats-page">
      {/* Header */}
      <header className="stats-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1>Statistics</h1>
        <div style={{ width: '24px' }} />
      </header>

      <div className="stats-content">
        {/* Real-time Phishing */}
        <section className="stat-section real-time-phishing">
          <h2>Real-time Phishing Detection</h2>
          <div className="realtime-card">
            <div className="realtime-status">
              <div className="status-indicator"></div>
              <p className="status-text">Active Protection</p>
            </div>
            <div className="realtime-stats">
              <div className="realtime-stat-item">
                <span className="realtime-label">Threats Detected Today</span>
                <span className="realtime-number">12</span>
              </div>
            </div>
            <div className="detected-threats">
              <h3 className="threats-title">Recently Detected Threats</h3>
              <div className="threats-list">
                {realtimeDetected.map((threat, idx) => (
                  <div key={idx} className={`threat-item threat-${threat.severity.toLowerCase()}`}>
                    <div className="threat-main">
                      <p className="threat-name">{threat.name}</p>
                      <p className="threat-type">{threat.type}</p>
                    </div>
                    <div className="threat-meta">
                      <span className={`severity-badge severity-${threat.severity.toLowerCase()}`}>
                        {threat.severity}
                      </span>
                      <span className="threat-time">{threat.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Overall Threats Detected */}
        <section className="stat-section">
          <h2>Overall Threats Detected</h2>
          <div className="big-stat-card">
            <p className="big-number">342</p>
            <p className="stat-label">Total threats detected this month</p>
          </div>
        </section>

        {/* Confidence Score */}
        <section className="stat-section">
          <h2>Average Confidence Score</h2>
          <div className="confidence-card">
            <div className="confidence-circle">
              <span className="confidence-value">94%</span>
            </div>
            <p className="stat-label">Detection accuracy</p>
          </div>
        </section>

        {/* Threat Types Breakdown */}
        <section className="stat-section">
          <h2>Threat Severity Breakdown</h2>
          <div className="breakdown-cards">
            {threatBreakdown.map((item, idx) => (
              <div key={idx} className="breakdown-card">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${item.percentage}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
                <div className="breakdown-info">
                  <span className="breakdown-label">{item.level}</span>
                  <span className="breakdown-percent">{item.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Protection Uptime */}
        <section className="stat-section">
          <h2>Protection Uptime</h2>
          <div className="uptime-card">
            <p className="uptime-value">99.8%</p>
            <p className="stat-label">Device protection availability</p>
            <p className="uptime-detail">Last 30 days</p>
          </div>
        </section>

        {/* Monthly Insights */}
        <section className="stat-section">
          <h2>Monthly Insights</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <p className="insight-label">Most Active Day</p>
              <p className="insight-value">Tuesday</p>
            </div>
            <div className="insight-card">
              <p className="insight-label">Peak Time</p>
              <p className="insight-value">6 PM - 9 PM</p>
            </div>
            <div className="insight-card">
              <p className="insight-label">Users Protected</p>
              <p className="insight-value">12</p>
            </div>
            <div className="insight-card">
              <p className="insight-label">Data Saved</p>
              <p className="insight-value">$45K</p>
            </div>
          </div>
        </section>

        {/* Top Targeted Apps */}
        <section className="stat-section">
          <h2>Top Targeted Applications</h2>
          <div className="targeted-list">
            {topTargeted.map((item, idx) => (
              <div key={idx} className="targeted-item">
                <span className="app-name">{item.app}</span>
                <span className="threat-count">{item.threats} threats</span>
              </div>
            ))}
          </div>
        </section>

        <div style={{ height: '70px' }} />
      </div>
    </div>
  );
}

export default StatsPage;
