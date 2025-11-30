/**
 * API Service - Handles all HTTP requests to the backend
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';
const API_TIMEOUT = process.env.REACT_APP_API_TIMEOUT || 30000;

class ApiService {
  constructor() {
    this.token = localStorage.getItem('token');
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('token');
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const requestOptions = {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...options.headers,
      },
      timeout: API_TIMEOUT,
    };

    try {
      const response = await fetch(url, requestOptions);
      
      if (!response.ok) {
        if (response.status === 401) {
          this.clearToken();
          window.location.href = '/pricing';
        }
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error(`API request failed: ${error.message}`);
      throw error;
    }
  }

  // Authentication
  register(email, username, password) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
    });
  }

  login(email, password) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  // Phishing Detection
  scanUrl(url) {
    return this.request(`/phishing/scan?url=${encodeURIComponent(url)}`, {
      method: 'POST',
    });
  }

  analyzeEmail(sender, subject, content) {
    return this.request('/phishing/analyze-email', {
      method: 'POST',
      body: JSON.stringify({ sender, subject, content }),
    });
  }

  getScanHistory(limit = 10) {
    return this.request(`/phishing/scan-history?limit=${limit}`, {
      method: 'GET',
    });
  }

  // Smishing Detection
  analyzeSms(content) {
    return this.request('/smishing/analyze-sms', {
      method: 'POST',
      body: JSON.stringify({ sms_content: content }),
    });
  }

  // Vishing Detection
  analyzeAudio(file) {
    const formData = new FormData();
    formData.append('file', file);

    return fetch(`${API_BASE_URL}/vishing/analyze-audio`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${this.token}` },
      body: formData,
    }).then(res => res.json());
  }

  // Reports
  submitReport(threatType, threatData, description, severity) {
    return this.request('/reports/submit', {
      method: 'POST',
      body: JSON.stringify({
        threat_type: threatType,
        threat_data: threatData,
        description,
        severity,
      }),
    });
  }

  getCommunityReports(threatType = null, limit = 10) {
    const params = new URLSearchParams();
    if (threatType) params.append('threat_type', threatType);
    params.append('limit', limit);

    return this.request(`/reports/community-reports?${params.toString()}`, {
      method: 'GET',
    });
  }

  // User Profile
  getProfile() {
    return this.request('/users/profile', { method: 'GET' });
  }

  getSubscription() {
    return this.request('/users/subscription', { method: 'GET' });
  }
}

export default new ApiService();
