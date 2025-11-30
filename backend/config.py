import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    """Base configuration"""
    SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key-change-in-production")
    DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./phishsentinel.db")
    API_TITLE = "PhishSentinel API"
    API_VERSION = "1.0.0"
    ALGORITHM = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES = 30
    
    # CORS
    ALLOWED_ORIGINS = ["http://localhost:3000", "http://localhost:8000"]
    
    # Threat Intelligence
    THREAT_DB_PATH = "./threat_database"
    UPDATE_INTERVAL = 3600  # 1 hour

class DevelopmentConfig(Config):
    """Development configuration"""
    DEBUG = True

class ProductionConfig(Config):
    """Production configuration"""
    DEBUG = False

config = DevelopmentConfig()
