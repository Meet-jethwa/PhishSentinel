import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SettingsPage.css';

function SettingsPage() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    realtimeProtection: true,
    autoMessageScan: true,
    safeBrowsing: true,
    darkMode: false,
    highRiskAlerts: true,
    dailySummary: false,
    weeklyReport: true,
    biometricLock: false
  });

  const [currentPlan] = useState({
    name: 'Personal Plan',
    price: '199',
    duration: '/month',
    features: [
      'Real-time background scanning',
      'Advanced AI text analysis',
      'Real-time website block pages',
      'AI voice-vishing detection',
      'Link redirection analysis',
      'Threat report history (30 days)',
      'Email support'
    ],
    nextRenewal: '2025-12-30'
  });

  const upgradePlans = [
    {
      name: 'Professional Plan',
      price: '499',
      duration: '/month',
      description: 'For advanced users',
      features: [
        'Everything in Personal, plus:',
        'Enterprise-level detection',
        'GNN domain clustering',
        'Screenshot-based detection',
        'DNS history tracking',
        'API access (1000 req/month)',
        'Threat retention (1 year)',
        'Priority support'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      duration: 'Contact Sales',
      description: 'For organizations',
      features: [
        'Everything in Professional, plus:',
        'Full threat intelligence feed',
        'Email client integration',
        'Bulk employee monitoring',
        'Slack & Teams integration',
        'Incident response dashboard',
        'SOC console',
        'Unlimited API access',
        'Dedicated account manager'
      ]
    }
  ];

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="settings-page">
      {/* Header */}
      <header className="settings-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
        </button>
        <h1>Settings</h1>
        <div style={{ width: '24px' }} />
      </header>

      <div className="settings-content">
        {/* Subscription Section */}
        <section className="settings-section subscription-section">
          <h2 className="section-title">Subscription Plan</h2>
          
          {/* Current Plan Card */}
          <div className="current-plan-card">
            <div className="plan-header">
              <h3>{currentPlan.name}</h3>
              <span className="plan-badge">Active</span>
            </div>
            
            <div className="plan-pricing">
              <span className="price">${currentPlan.price}</span>
              <span className="duration">{currentPlan.duration}</span>
            </div>

            <p className="renewal-date">Next renewal: {currentPlan.nextRenewal}</p>

            <div className="plan-features-list">
              {currentPlan.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="plan-actions">
              <button className="btn-manage">Manage Subscription</button>
              <button className="btn-cancel">Cancel Plan</button>
            </div>
          </div>

          {/* Upgrade Options */}
          <div className="upgrade-section">
            <h3 className="upgrade-title">Upgrade Your Plan</h3>
            
            <div className="upgrade-cards">
              {upgradePlans.map((plan, idx) => (
                <div key={idx} className="upgrade-card">
                  <h4>{plan.name}</h4>
                  <p className="upgrade-desc">{plan.description}</p>
                  
                  <div className="upgrade-price">
                    <span className="price">${plan.price}</span>
                    <span className="duration">{plan.duration}</span>
                  </div>

                  <ul className="upgrade-features">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx}>{feature}</li>
                    ))}
                  </ul>

                  <button className="btn-upgrade">Upgrade Now</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General Settings */}
        <section className="settings-section">
          <h2 className="section-title">General Settings</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <p className="setting-name">Real-time Protection</p>
              <p className="setting-desc">Enable continuous threat monitoring</p>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={settings.realtimeProtection}
                onChange={() => handleToggle('realtimeProtection')}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <p className="setting-name">Auto Message Scan</p>
              <p className="setting-desc">Automatically scan incoming messages</p>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={settings.autoMessageScan}
                onChange={() => handleToggle('autoMessageScan')}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <p className="setting-name">Safe-browsing Protection</p>
              <p className="setting-desc">Block suspicious websites</p>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={settings.safeBrowsing}
                onChange={() => handleToggle('safeBrowsing')}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <p className="setting-name">Dark Mode</p>
              <p className="setting-desc">Use dark theme</p>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={settings.darkMode}
                onChange={() => handleToggle('darkMode')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </section>

        {/* Security Settings */}
        <section className="settings-section">
          <h2 className="section-title">Security Settings</h2>
          
          <div className="settings-menu">
            <div className="menu-item">
              <span>Change Password</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <p className="setting-name">Biometric Lock</p>
                <p className="setting-desc">Enable fingerprint or face lock</p>
              </div>
              <label className="toggle-switch">
                <input 
                  type="checkbox" 
                  checked={settings.biometricLock}
                  onChange={() => handleToggle('biometricLock')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="menu-item">
              <span>Device Permissions</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>

            <div className="menu-item">
              <span>Safe Site Whitelist</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="settings-section">
          <h2 className="section-title">Notifications</h2>
          
          <div className="setting-item">
            <div className="setting-info">
              <p className="setting-name">High-risk Alerts</p>
              <p className="setting-desc">Get notified of critical threats</p>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={settings.highRiskAlerts}
                onChange={() => handleToggle('highRiskAlerts')}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <p className="setting-name">Daily Summary</p>
              <p className="setting-desc">Receive daily threat summary</p>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={settings.dailySummary}
                onChange={() => handleToggle('dailySummary')}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-item">
            <div className="setting-info">
              <p className="setting-name">Weekly Report</p>
              <p className="setting-desc">Get weekly security insights</p>
            </div>
            <label className="toggle-switch">
              <input 
                type="checkbox" 
                checked={settings.weeklyReport}
                onChange={() => handleToggle('weeklyReport')}
              />
              <span className="slider"></span>
            </label>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="settings-section">
          <h2 className="section-title">Advanced Features</h2>
          
          <div className="settings-menu">
            <div className="menu-item">
              <span>AI Model Details</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>

            <div className="menu-item">
              <span>Domain Monitoring</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>

            <div className="menu-item">
              <span>Cloud Sync</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="settings-section">
          <h2 className="section-title">About</h2>
          
          <div className="about-items">
            <div className="about-item">
              <span>App Version</span>
              <span className="version">1.0.0</span>
            </div>

            <div className="settings-menu">
              <div className="menu-item">
                <span>Privacy Policy</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>

              <div className="menu-item">
                <span>Terms & Conditions</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>

              <div className="menu-item">
                <span>Contact Support</span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </div>
            </div>
          </div>
        </section>

        <div style={{ height: '70px' }} />
      </div>
    </div>
  );
}

export default SettingsPage;
