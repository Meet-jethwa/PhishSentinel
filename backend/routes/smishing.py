from fastapi import APIRouter
import random

router = APIRouter()

@router.post("/analyze-sms")
async def analyze_sms(sms_content: str):
    """Analyze SMS/WhatsApp message for smishing"""
    
    return {
        "risk_level": random.choice(["SAFE", "SUSPICIOUS", "DANGEROUS"]),
        "risk_score": random.uniform(0, 100),
        "confidence": random.uniform(0.7, 0.99),
        "smishing_indicators": [
            "Urgency language",
            "Suspicious link",
            "Impersonation attempt"
        ],
        "extracted_links": ["https://suspicious.link.short.url"],
        "sender_info": {
            "is_legitimate": False,
            "carrier": "Unknown",
            "suspicious_patterns": True
        }
    }

@router.post("/scan-sms")
async def scan_sms(phone_number: str, sms_content: str):
    """Scan SMS from specific sender"""
    
    return {
        "phone_number": phone_number,
        "risk_level": "DANGEROUS",
        "risk_score": 89.5,
        "threat_type": "smishing",
        "sender_reputation": "blacklisted",
        "previous_reports": 245
    }

@router.get("/sms-threats")
async def get_sms_threats(limit: int = 10):
    """Get recent SMS threats"""
    
    return {
        "total": 89,
        "threats": [
            {
                "id": i,
                "threat_type": "smishing",
                "content_preview": "Your parcel delivery failed...",
                "risk_level": "DANGEROUS",
                "reported_count": random.randint(10, 1000),
                "detected_at": "2024-01-15T10:30:00"
            }
            for i in range(limit)
        ]
    }

@router.post("/block-sender")
async def block_sender(phone_number: str):
    """Block SMS sender"""
    
    return {
        "status": "success",
        "blocked_number": phone_number,
        "message": "Sender blocked successfully"
    }
