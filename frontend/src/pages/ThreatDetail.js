import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ThreatDetail.css';

function ThreatDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const threatDetails = {
    1: {
      fullMessage: 'URGENT: Your bank account will be suspended within 24 hours. Click here to verify your identity and update your security information immediately. Click: https://bank-verify-secure.net/verify',
      sender: 'Bank of America Security',
      senderEmail: 'security@bankofamerica-verify.com',
      timestamp: 'Jun 12, 6:30 PM',
      confidence: '95% confidence',
      severity: 'CRITICAL',
      type: 'phishing',
      reasons: [
        'Detected suspicious link: bank-verify-secure.net (not official bank domain)',
        'Urgency manipulation: "within 24 hours"',
        'Requests personal verification information',
        'Spoofed sender address'
      ]
    }
  };

  const threat = threatDetails[id] || threatDetails[1];

  return (
    <div className="threat-detail">
      {/* Header */}
      <header className="detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1>Threat Details</h1>
        <div style={{ width: '24px' }} />
      </header>

      <div className="detail-content">
        {/* Severity Badge */}
        <div className={`severity-badge ${threat.severity.toLowerCase()}`}>
          {threat.severity}
        </div>

        {/* Full Message */}
        <section className="detail-section">
          <h2>Full Message</h2>
          <div className="message-box">
            <p>{threat.fullMessage}</p>
          </div>
        </section>

        {/* Sender Details */}
        <section className="detail-section">
          <h2>Sender Details</h2>
          <div className="sender-box">
            <div className="sender-item">
              <span className="label">Display Name:</span>
              <span className="value">{threat.sender}</span>
            </div>
            <div className="sender-item">
              <span className="label">Email Address:</span>
              <span className="value">{threat.senderEmail}</span>
            </div>
            <div className="sender-item">
              <span className="label">Received:</span>
              <span className="value">{threat.timestamp}</span>
            </div>
          </div>
        </section>

        {/* ML Confidence */}
        <section className="detail-section">
          <h2>Detection Confidence</h2>
          <div className="confidence-display">
            <div className="confidence-circle">
              <span className="confidence-text">95%</span>
            </div>
            <p className="confidence-label">High confidence phishing detection</p>
          </div>
        </section>

        {/* Why It's Marked as Phishing */}
        <section className="detail-section">
          <h2>Why It's Marked as Phishing</h2>
          <div className="reasons-list">
            {threat.reasons.map((reason, idx) => (
              <div key={idx} className="reason-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Actions */}
        <section className="detail-section actions">
          <button className="action-btn report">
            Report False Positive
          </button>
          <button className="action-btn delete">
            Delete Message
          </button>
        </section>

        <div style={{ height: '70px' }} />
      </div>
    </div>
  );
}

export default ThreatDetail;
