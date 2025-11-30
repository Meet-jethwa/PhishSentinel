import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>PhishSentinel</span>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>

          <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How It Works</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <Link to="/app" className="nav-link nav-cta">Launch App</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Advanced Phishing Detection & Protection</h1>
          <p>Real-time AI-powered threat detection for SMS, Email, and Web</p>
          <div className="hero-buttons">
            <Link to="/app" className="btn btn-primary">Get Started Free</Link>
            <button className="btn btn-secondary">Watch Demo</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <h3>10M+</h3>
            <p>Threats Blocked</p>
          </div>
          <div className="stat">
            <h3>99.9%</h3>
            <p>Accuracy Rate</p>
          </div>
          <div className="stat">
            <h3>50K+</h3>
            <p>Active Users</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to stay safe online</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
            </div>
            <h3>Real-time Protection</h3>
            <p>Continuous background scanning of all incoming messages</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 12l2 2 4-4"></path>
              </svg>
            </div>
            <h3>AI Analysis</h3>
            <p>Advanced machine learning models detect sophisticated threats</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"></path>
              </svg>
            </div>
            <h3>SMS Protection</h3>
            <p>Detect phishing attempts via text messages instantly</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                <path d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z"></path>
              </svg>
            </div>
            <h3>Email Safety</h3>
            <p>Advanced filtering for phishing and malicious emails</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                <path d="M12 2v20m10-10H2"></path>
                <circle cx="12" cy="12" r="10"></circle>
              </svg>
            </div>
            <h3>Threat Analysis</h3>
            <p>Detailed reports on detected threats with actionable insights</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1e40af" strokeWidth="2">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"></path>
              </svg>
            </div>
            <h3>Privacy First</h3>
            <p>Your data is encrypted and never shared with third parties</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple 3-step protection process</p>
        </div>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Download & Install</h3>
            <p>Get PhishSentinel on your device in seconds</p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Enable Protection</h3>
            <p>Activate real-time scanning for all messages</p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Stay Protected</h3>
            <p>Threats are detected and blocked automatically</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <div className="section-header">
          <h2>Pricing Plans</h2>
          <p>Choose the plan that fits your needs</p>
        </div>

        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Personal</h3>
            <div className="price">
              <span className="amount">Free</span>
            </div>
            <ul className="features-list">
              <li>Real-time SMS scanning</li>
              <li>Basic threat detection</li>
              <li>Email filtering</li>
              <li>30-day history</li>
              <li>1 device</li>
            </ul>
            <button className="btn btn-secondary">Get Started</button>
          </div>

          <div className="pricing-card featured">
            <div className="badge">Popular</div>
            <h3>Professional</h3>
            <div className="price">
              <span className="amount">$4.99</span>
              <span className="period">/month</span>
            </div>
            <ul className="features-list">
              <li>Advanced AI analysis</li>
              <li>Unlimited scanning</li>
              <li>6-month history</li>
              <li>3 devices</li>
              <li>Priority support</li>
            </ul>
            <button className="btn btn-primary">Start Free Trial</button>
          </div>

          <div className="pricing-card">
            <h3>Enterprise</h3>
            <div className="price">
              <span className="amount">Custom</span>
            </div>
            <ul className="features-list">
              <li>Team management</li>
              <li>API access</li>
              <li>Unlimited devices</li>
              <li>Custom analytics</li>
              <li>Dedicated support</li>
            </ul>
            <button className="btn btn-secondary">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Stay Safe?</h2>
        <p>Join thousands of users protecting themselves from phishing attacks</p>
        <Link to="/app" className="btn btn-primary">Launch App Now</Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>PhishSentinel</h4>
            <p>Advanced phishing protection for everyone</p>
          </div>

          <div className="footer-section">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 PhishSentinel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
