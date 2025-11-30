"""
Vishing (Voice Phishing) Detection Service
Analyzes voice call recordings for phishing patterns
"""

from typing import Dict, List

class VishingAnalyzer:
    """Analyze voice calls for vishing threats"""
    
    @staticmethod
    def detect_scam_keywords(transcription: str) -> Dict:
        """Detect common scam keywords in call transcription"""
        scam_keywords = [
            'verify', 'confirm', 'urgent', 'account', 'block',
            'suspend', 'expire', 'update', 'kyc', 'aadhar',
            'pan', 'password', 'otp', 'pin', 'cvv',
            'bank', 'security', 'fraud', 'immediately',
            'action required', 'click', 'link', 'payment'
        ]
        
        transcription_lower = transcription.lower()
        found = [kw for kw in scam_keywords if kw in transcription_lower]
        
        return {
            "keywords": found,
            "count": len(found),
            "risk_score": min(len(found) * 0.15, 0.9)
        }
    
    @staticmethod
    def detect_stress_patterns(audio_data: Dict) -> Dict:
        """Detect voice stress and artificial patterns"""
        
        # Placeholder for actual audio analysis
        # In production, would use librosa and acoustic feature extraction
        
        patterns = {
            "high_frequency_variance": audio_data.get("has_unusual_frequency", False),
            "rapid_speech_rate": audio_data.get("speech_rate", 150) > 180,
            "artificial_noise": audio_data.get("has_background_noise", False),
            "voice_deepfake_probability": audio_data.get("deepfake_score", 0.0)
        }
        
        detected = [k for k, v in patterns.items() if v]
        
        return {
            "patterns": detected,
            "count": len(detected),
            "risk_score": min(len(detected) * 0.25, 0.95)
        }
    
    @staticmethod
    def detect_impersonation(transcription: str) -> Dict:
        """Detect impersonation attempts"""
        
        impersonation_phrases = [
            'sbi', 'icici', 'hdfc', 'axis', 'bank',
            'government', 'police', 'tax', 'authority',
            'paypal', 'amazon', 'google', 'apple',
            'executive', 'manager', 'officer', 'agent',
            'compliance', 'verification', 'security team'
        ]
        
        transcription_lower = transcription.lower()
        found = [phrase for phrase in impersonation_phrases if phrase in transcription_lower]
        
        return {
            "entities_impersonated": found,
            "is_impersonating": len(found) > 0,
            "risk_score": 0.7 if found else 0.0
        }
    
    @staticmethod
    def detect_social_engineering_tactics(transcription: str) -> Dict:
        """Identify social engineering tactics"""
        
        tactics = {
            "urgency_creation": any(word in transcription.lower() for word in ['urgent', 'immediate', 'now', 'quickly']),
            "authority_exploitation": any(word in transcription.lower() for word in ['bank', 'government', 'authority', 'officer']),
            "fear_induction": any(word in transcription.lower() for word in ['block', 'suspend', 'close', 'freeze', 'fraud']),
            "reciprocity": any(word in transcription.lower() for word in ['help', 'assist', 'protect', 'save']),
            "secrecy_request": any(word in transcription.lower() for word in ['secret', 'confidential', "don't tell", 'between us'])
        }
        
        detected = [tactic for tactic, present in tactics.items() if present]
        
        return {
            "tactics": detected,
            "count": len(detected),
            "risk_score": min(len(detected) * 0.2, 0.85)
        }
    
    @staticmethod
    def analyze_audio(
        duration: float,
        transcription: str,
        audio_features: Dict,
        voice_analysis: Dict
    ) -> Dict:
        """Comprehensive vishing analysis"""
        
        keywords = VishingAnalyzer.detect_scam_keywords(transcription)
        stress = VishingAnalyzer.detect_stress_patterns(audio_features)
        impersonation = VishingAnalyzer.detect_impersonation(transcription)
        tactics = VishingAnalyzer.detect_social_engineering_tactics(transcription)
        
        # Calculate overall risk
        risk_scores = [
            keywords.get("risk_score", 0),
            stress.get("risk_score", 0),
            impersonation.get("risk_score", 0),
            tactics.get("risk_score", 0)
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
            "duration_seconds": duration,
            "risk_level": risk_level,
            "risk_score": overall_risk * 100,
            "confidence": min(0.95, 0.7 + (len(keywords["keywords"]) + len(impersonation["entities_impersonated"])) * 0.05),
            "voice_type": voice_analysis.get("voice_type", "unknown"),
            "keywords_detected": keywords["keywords"],
            "stress_patterns": stress["patterns"],
            "impersonation_detected": impersonation["entities_impersonated"][0] if impersonation["entities_impersonated"] else None,
            "social_engineering_tactics": tactics["tactics"],
            "recommendation": _get_vishing_recommendation(risk_level),
            "indicators": [
                *keywords["keywords"],
                *stress["patterns"],
                *impersonation["entities_impersonated"],
                *tactics["tactics"]
            ]
        }

def _get_vishing_recommendation(risk_level: str) -> str:
    """Get safety recommendation based on risk level"""
    recommendations = {
        "DANGEROUS": "This is a vishing scam. Do not share OTP, bank details, or personal information. Hang up immediately and call your bank using the official number from their website.",
        "SUSPICIOUS": "This call has suspicious indicators. Verify caller identity independently before sharing any sensitive information.",
        "SAFE": "This call appears to be legitimate, but always verify unexpected requests independently."
    }
    return recommendations.get(risk_level, "")

def analyze_vishing_threat(
    duration: float,
    transcription: str,
    audio_features: Dict = None,
    voice_analysis: Dict = None
) -> Dict:
    """Main function to analyze vishing threats"""
    
    if audio_features is None:
        audio_features = {}
    if voice_analysis is None:
        voice_analysis = {}
    
    return VishingAnalyzer.analyze_audio(
        duration, transcription, audio_features, voice_analysis
    )
