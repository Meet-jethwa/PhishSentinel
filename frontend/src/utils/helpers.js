/**
 * Helper utilities
 */

export const riskLevelColor = (level) => {
  switch (level?.toUpperCase()) {
    case 'SAFE':
      return '#16a34a';
    case 'SUSPICIOUS':
      return '#ea580c';
    case 'DANGEROUS':
      return '#dc2626';
    default:
      return '#64748b';
  }
};

export const riskLevelBg = (level) => {
  switch (level?.toUpperCase()) {
    case 'SAFE':
      return '#dcfce7';
    case 'SUSPICIOUS':
      return '#fed7aa';
    case 'DANGEROUS':
      return '#fee2e2';
    default:
      return '#f1f5f9';
  }
};

export const formatDate = (date) => {
  if (!date) return '';
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch {
    return url;
  }
};

export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const isValidUrl = (url) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const truncateText = (text, length = 100) => {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
};

export const parseRiskScore = (score) => {
  if (typeof score === 'number') {
    return Math.round(score * 100) / 100;
  }
  return 0;
};
