import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomeDashboard from './pages/HomeDashboard';
import ScanMessages from './pages/ScanMessages';
import ThreatHistory from './pages/ThreatHistory';
import StatsPage from './pages/StatsPage';
import SettingsPage from './pages/SettingsPage';
import ThreatDetail from './pages/ThreatDetail';
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomeDashboard />} />
          <Route path="/scan" element={<ScanMessages />} />
          <Route path="/threat-history" element={<ThreatHistory />} />
          <Route path="/threat/:id" element={<ThreatHistory />} />
          <Route path="/threat-detail/:id" element={<ThreatDetail />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
