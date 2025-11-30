"""
Smishing (SMS Phishing) Detection Service
Analyzes SMS and messaging content for phishing patterns
"""

import re
from typing import Dict, List

class SmishingDetector:
    """Detect phishing in SMS and messaging content"""
    
    @staticmethod
    def extract_urls_from_sms(content: str) -> List[str]:
        """Extract shortened and regular URLs from SMS"""
        url_patterns = [
            r'https?://[^\s]+',
            r'bit\.ly/\S+',
            r'tinyurl\.com/\S+',
            r'goo\.gl/\S+'
        ]
        
        urls = []
        for pattern in url_patterns:
            urls.extend(re.findall(pattern, content))
        return urls
    
    @staticmethod
    def check_urgency_patterns(content: str) -> Dict:
        """Detect urgency in SMS content"""
        urgency_keywords = [
            'urgent', 'verify', 'confirm', 'update', 'act now',
            'limited time', 'expires', 'immediate', 'click here',
            'secure', 'access', 'blocked', 'suspend'
        ]
        
        content_lower = content.lower()
        found = [kw for kw in urgency_keywords if kw in content_lower]
        
        return {
            "keywords": found,
            "count": len(found),
            "risk_score": min(len(found) * 0.25, 1.0)
        }
    
    @staticmethod
    def check_impersonation(content: str) -> Dict:
        """Detect brand/service impersonation"""
        brands = [
            'bank', 'paypal', 'amazon', 'apple', 'google',
            'microsoft', 'instagram', 'whatsapp', 'sbi', 'icici',
            'hdfc', 'axis', 'paytm', 'google pay', 'upi'
        ]
        
        content_lower = content.lower()
        found = [brand for brand in brands if brand in content_lower]
        
        return {
            "brands_mentioned": found,
            "is_impersonation": len(found) > 0,
            "risk_score": 0.6 if found else 0.0
        }
    
    @staticmethod
    def check_request_patterns(content: str) -> Dict:
        """Detect requests for sensitive information"""
        request_keywords = [
            'password', 'otp', 'pin', 'cvv', 'account', 'login',
            'verify', 'confirm', 'update details', 'kyc',
            'aadhar', 'pan', 'bank account', 'card number'
        ]
        
        content_lower = content.lower()
        found = [kw for kw in request_keywords if kw in content_lower]
        
        return {
            "requests": found,
            "has_sensitive_request": len(found) > 0,
            "risk_score": 0.8 if found else 0.0
        }
    
    @staticmethod
    def analyze_sms(content: str, sender: str = "") -> Dict:
        """Comprehensive SMS phishing analysis"""
        
        urls = SmishingDetector.extract_urls_from_sms(content)
        urgency = SmishingDetector.check_urgency_patterns(content)
        impersonation = SmishingDetector.check_impersonation(content)
        requests = SmishingDetector.check_request_patterns(content)
        
        # Calculate overall risk
        risk_scores = [
            urgency.get("risk_score", 0),
            impersonation.get("risk_score", 0),
            requests.get("risk_score", 0),
            0.3 if len(urls) > 0 else 0
        ]
        
        overall_risk = sum(risk_scores) / len(risk_scores) if risk_scores else 0
        
        # Determine risk level
        if overall_risk >= 0.7:
            risk_level = "DANGEROUS"
        elif overall_risk >= 0.4:
            risk_level = "SUSPICIOUS"
        else:
            risk_level = "SAFE"
        
        return {
            "content_preview": content[:100] + "..." if len(content) > 100 else content,
            "sender": sender,
            "urls_detected": urls,
            "urgency": urgency,
            "impersonation": impersonation,
            "sensitive_requests": requests,
            "risk_score": overall_risk * 100,
            "risk_level": risk_level,
            "confidence": 0.88,
            "indicators": [
                *urgency["keywords"],
                *impersonation["brands_mentioned"],
                *requests["requests"]
            ],
            "recommendation": "Do not click links or provide information" if risk_level != "SAFE" else "Appears legitimate"
        }

def analyze_smishing_threat(input_data: str, sender: str = "") -> Dict:
    """Main function to analyze smishing threats"""
    return SmishingDetector.analyze_sms(input_data, sender)
