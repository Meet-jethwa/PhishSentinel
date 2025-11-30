from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List

# User Schemas
class UserCreate(BaseModel):
    email: EmailStr
    username: str
    password: str
    full_name: Optional[str] = None

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class UserResponse(BaseModel):
    id: int
    email: str
    username: str
    full_name: Optional[str]
    plan: str
    is_active: bool
    created_at: datetime
    
    class Config:
        from_attributes = True

# Scan Schemas
class ScanRequest(BaseModel):
    scan_type: str
    input_data: str

class ScanResponse(BaseModel):
    id: int
    scan_type: str
    risk_level: str
    risk_score: float
    confidence: float
    created_at: datetime
    
    class Config:
        from_attributes = True

# Report Schemas
class ReportCreate(BaseModel):
    threat_type: str
    threat_data: str
    description: str
    severity: str

class ReportResponse(BaseModel):
    id: int
    threat_type: str
    severity: str
    status: str
    upvotes: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# Vishing Analysis Schemas
class VishingAnalysisRequest(BaseModel):
    audio_filename: str

class VishingAnalysisResponse(BaseModel):
    id: int
    risk_level: str
    confidence: float
    voice_type: str
    keywords_detected: List[str]
    stress_patterns: List[str]
    impersonation_detected: Optional[str]
    recommendation: str
    created_at: datetime
    
    class Config:
        from_attributes = True

# Authentication Schemas
class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    email: Optional[str] = None
