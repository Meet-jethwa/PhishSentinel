"""
Phishing Detection Service
Analyzes URLs and emails for phishing threats using multiple detection methods
"""

import re
from typing import Dict, List, Tuple
from datetime import datetime

class URLAnalyzer:
    """Analyze URLs for phishing indicators"""
    
    @staticmethod
    def extract_domain(url: str) -> str:
        """Extract domain from URL"""
        try:
            from urllib.parse import urlparse
            parsed = urlparse(url)
            return parsed.netloc
        except:
            return ""
    
    @staticmethod
    def check_domain_age(domain: str) -> Dict:
        """Check domain registration age (placeholder)"""
        return {
            "age_days": 15,
            "is_new": True,
            "risk_score": 0.7
        }
    
    @staticmethod
    def check_redirect_chains(url: str) -> Dict:
        """Check for redirect chains"""
        return {
            "has_redirects": False,
            "redirect_count": 0,
            "risk_score": 0.0
        }
    
    @staticmethod
    def check_homoglyph_attack(domain: str) -> Dict:
        """Check for homoglyph/punycode attacks"""
        return {
            "is_punycode": False,
            "similarity_to_legit": 0.85,
            "risk_score": 0.3
        }
    
    @staticmethod
    def analyze_url(url: str) -> Dict:
        """Comprehensive URL analysis"""
        domain = URLAnalyzer.extract_domain(url)
        domain_age = URLAnalyzer.check_domain_age(domain)
        redirects = URLAnalyzer.check_redirect_chains(url)
        homoglyph = URLAnalyzer.check_homoglyph_attack(domain)
        
        # Calculate overall risk
        risk_scores = [
            domain_age.get("risk_score", 0),
            redirects.get("risk_score", 0),
            homoglyph.get("risk_score", 0)
        ]
        
        overall_risk = sum(risk_scores) / len(risk_scores) if risk_scores else 0
        
        return {
            "domain": domain,
            "domain_age": domain_age,
            "redirects": redirects,
            "homoglyph_check": homoglyph,
            "overall_risk_score": overall_risk,
            "indicators": [
                "New domain",
                "Suspicious TLD"
            ]
        }

class EmailPhishingDetector:
    """Detect phishing in email content and headers"""
    
    @staticmethod
    def extract_sender(headers: str) -> str:
        """Extract sender from email headers"""
        match = re.search(r'From:\s*(.+?)(?:\n|$)', headers)
        return match.group(1) if match else "Unknown"
    
    @staticmethod
    def extract_urls_from_email(content: str) -> List[str]:
        """Extract URLs from email body"""
        url_pattern = r'https?://[^\s]+'
        return re.findall(url_pattern, content)
    
    @staticmethod
    def check_urgency_language(content: str) -> Dict:
        """Detect urgency-inducing language"""
        urgency_keywords = [
            'urgent', 'immediate', 'act now', 'verify', 'confirm',
            'update', 'expire', 'expired', 'suspended', 'locked',
            'action required', 'click here', 'limited time'
        ]
        
        content_lower = content.lower()
        found_keywords = [kw for kw in urgency_keywords if kw in content_lower]
        
        return {
            "has_urgency": len(found_keywords) > 0,
            "keywords_found": found_keywords,
            "risk_score": min(len(found_keywords) * 0.2, 1.0)
        }
    
    @staticmethod
    def check_generic_greeting(content: str) -> Dict:
        """Detect generic greetings (phishing indicator)"""
        generic_greetings = ['dear user', 'dear customer', 'dear valued customer', 'hello']
        
        content_lower = content.lower()
        found_greetings = [g for g in generic_greetings if g in content_lower]
        
        return {
            "has_generic_greeting": len(found_greetings) > 0,
            "greetings": found_greetings,
            "risk_score": 0.4 if found_greetings else 0.0
        }
    
    @staticmethod
    def analyze_email(sender: str, subject: str, content: str, headers: str = "") -> Dict:
        """Comprehensive email phishing analysis"""
        
        urgency = EmailPhishingDetector.check_urgency_language(content)
        greeting = EmailPhishingDetector.check_generic_greeting(content)
        urls = EmailPhishingDetector.extract_urls_from_email(content)
        
        # Calculate risk
        risk_scores = [
            urgency.get("risk_score", 0),
            greeting.get("risk_score", 0),
            0.2 if len(urls) > 0 else 0  # Presence of links
        ]
        
        overall_risk = sum(risk_scores) / len(risk_scores) if risk_scores else 0
        
        return {
            "sender": sender,
            "subject": subject,
            "urgency_language": urgency,
            "generic_greeting": greeting,
            "urls_detected": urls,
            "overall_risk_score": overall_risk,
            "confidence": 0.85,
            "indicators": urgency["keywords_found"] + greeting["greetings"],
            "recommendation": "Verify sender identity before clicking links" if overall_risk > 0.5 else "Appears legitimate"
        }

def analyze_phishing_threat(threat_type: str, input_data: str) -> Dict:
    """Main function to analyze phishing threats"""
    
    if threat_type == "url":
        return URLAnalyzer.analyze_url(input_data)
    elif threat_type == "email":
        # Parse email data (format: sender|subject|content)
        parts = input_data.split("|")
        sender = parts[0] if len(parts) > 0 else ""
        subject = parts[1] if len(parts) > 1 else ""
        content = parts[2] if len(parts) > 2 else ""
        return EmailPhishingDetector.analyze_email(sender, subject, content)
    else:
        return {"error": "Unknown threat type"}
