import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ThreatHistory.css';

function ThreatHistory() {
  const navigate = useNavigate();
  const [threats] = useState([
    {
      id: 1,
      type: 'phishing',
      preview: 'Your Netflix subscription is expiring...',
      sender: 'From: Netflix',
      timestamp: 'Jun 12, 6:30 PM',
      confidence: '95% confidence'
    },
    {
      id: 2,
      type: 'phishing',
      preview: 'Click here to claim your Amazon reward prize',
      sender: 'From: Amazon Support',
      timestamp: 'Jun 12, 5:15 PM',
      confidence: '89% confidence'
    },
    {
      id: 3,
      type: 'legitimate',
      preview: 'Your order #12345 has been shipped',
      sender: 'From: Amazon',
      timestamp: 'Jun 12, 2:45 PM',
      confidence: '98% confidence'
    },
    {
      id: 4,
      type: 'phishing',
      preview: 'Verify your account to prevent suspension',
      sender: 'From: PayPal Security',
      timestamp: 'Jun 11, 9:20 PM',
      confidence: '92% confidence'
    },
    {
      id: 5,
      type: 'legitimate',
      preview: 'Your payment has been processed successfully',
      sender: 'From: Bank of America',
      timestamp: 'Jun 11, 3:10 PM',
      confidence: '99% confidence'
    }
  ]);

  return (
    <div className="threat-history">
      {/* Header */}
      <header className="history-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1>Threat History</h1>
        <div style={{ width: '24px' }} />
      </header>

      <div className="threats-container">
        {threats.map((threat) => (
          <div 
            key={threat.id} 
            className="threat-item"
            onClick={() => navigate(`/threat-detail/${threat.id}`)}
          >
            {/* Type Icon */}
            <div className={`threat-type-icon ${threat.type}`}>
              {threat.type === 'phishing' ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              )}
            </div>

            {/* Content */}
            <div className="threat-info">
              <h3 className="threat-title">{threat.preview}</h3>
              <p className="threat-sender">{threat.sender}</p>
              <p className="threat-time">{threat.timestamp}</p>
            </div>

            {/* Confidence Label */}
            <div className="threat-confidence">
              <span className={`confidence-badge ${threat.type}`}>
                {threat.confidence}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThreatHistory;
