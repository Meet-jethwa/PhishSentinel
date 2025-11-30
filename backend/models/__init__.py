from sqlalchemy import Column, Integer, String, DateTime, Boolean, Float, Text, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base = declarative_base()

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True, nullable=False)
    username = Column(String(100), unique=True, index=True, nullable=False)
    hashed_password = Column(String(255), nullable=False)
    full_name = Column(String(255))
    plan = Column(String(50), default="free")  # free, personal, professional, enterprise
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    scans = relationship("Scan", back_populates="user", cascade="all, delete-orphan")
    reports = relationship("Report", back_populates="user", cascade="all, delete-orphan")

class Scan(Base):
    __tablename__ = "scans"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    scan_type = Column(String(50), nullable=False)  # url, email, sms, vishing
    input_data = Column(Text, nullable=False)
    risk_level = Column(String(50), nullable=False)  # SAFE, SUSPICIOUS, DANGEROUS
    risk_score = Column(Float, default=0.0)
    confidence = Column(Float, default=0.0)
    details = Column(Text)  # JSON serialized details
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
    
    user = relationship("User", back_populates="scans")

class Report(Base):
    __tablename__ = "reports"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    threat_type = Column(String(50), nullable=False)  # phishing, smishing, vishing, etc
    threat_data = Column(Text, nullable=False)  # URL, email, SMS content
    description = Column(Text, nullable=False)
    severity = Column(String(50), nullable=False)  # LOW, MEDIUM, HIGH, CRITICAL
    status = Column(String(50), default="pending")  # pending, verified, blocked
    upvotes = Column(Integer, default=0)
    created_at = Column(DateTime, default=datetime.utcnow, index=True)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    user = relationship("User", back_populates="reports")

class ThreatIntelligence(Base):
    __tablename__ = "threat_intelligence"
    
    id = Column(Integer, primary_key=True, index=True)
    threat_indicator = Column(String(500), unique=True, index=True, nullable=False)  # URL, domain, IP
    threat_type = Column(String(50), nullable=False)
    risk_level = Column(String(50), nullable=False)
    source = Column(String(100), nullable=False)  # MISP, OTX, community, etc
    last_seen = Column(DateTime, default=datetime.utcnow)
    blocked_count = Column(Integer, default=0)
    metadata = Column(Text)  # JSON

class VishingAnalysis(Base):
    __tablename__ = "vishing_analysis"
    
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    audio_filename = Column(String(255))
    duration = Column(Float)  # in seconds
    risk_level = Column(String(50), nullable=False)
    confidence = Column(Float, default=0.0)
    voice_type = Column(String(50))  # human, ai-generated
    keywords_detected = Column(Text)  # JSON list
    stress_patterns = Column(Text)  # JSON
    impersonation_detected = Column(String(255))
    recommendation = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    user = relationship("User")
