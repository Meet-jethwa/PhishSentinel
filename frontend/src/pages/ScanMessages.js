import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ScanMessages.css';

function ScanMessages() {
  const navigate = useNavigate();

  const handleScan = () => {
    // Simulate scanning and redirect to results
    setTimeout(() => {
      navigate('/threat-history');
    }, 1500);
  };

  return (
    <div className="scan-messages">
      {/* Header */}
      <header className="scan-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1>Scan Messages</h1>
        <div style={{ width: '24px' }} />
      </header>

      <div className="scan-content">
        {/* Main Scan Card */}
        <div className="scan-card">
          <div className="scan-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="1.5">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="star-decoration">⭐</div>
          </div>
          
          <h2>SMS Phishing Detector</h2>
          <p className="scan-description">
            Quorix will analyze your recent SMS messages for phishing attempts and suspicious links.
          </p>

          <button className="scan-button" onClick={handleScan}>
            Scan Now
          </button>
        </div>

        {/* Privacy Note */}
        <div className="privacy-note">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="M2 6l10 7 10-7"></path>
          </svg>
          <div>
            <strong>Your Privacy Matters</strong>
            <p>Quorix only scans message content locally. Your messages are never sent to our servers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScanMessages;
