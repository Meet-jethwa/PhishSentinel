from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.trustedhost import TrustedHostMiddleware
from config import config

from routes import phishing, smishing, vishing, users, reports, auth

def create_app() -> FastAPI:
    """Create and configure FastAPI application"""
    
    app = FastAPI(
        title=config.API_TITLE,
        version=config.API_VERSION,
        description="Real-time Phishing Detection Platform API"
    )
    
    # Add middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=config.ALLOWED_ORIGINS,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    
    app.add_middleware(
        TrustedHostMiddleware,
        allowed_hosts=["localhost", "127.0.0.1"]
    )
    
    # Register routes
    app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
    app.include_router(users.router, prefix="/api/users", tags=["users"])
    app.include_router(phishing.router, prefix="/api/phishing", tags=["phishing"])
    app.include_router(smishing.router, prefix="/api/smishing", tags=["smishing"])
    app.include_router(vishing.router, prefix="/api/vishing", tags=["vishing"])
    app.include_router(reports.router, prefix="/api/reports", tags=["reports"])
    
    @app.get("/health")
    def health_check():
        """Health check endpoint"""
        return {"status": "healthy", "version": config.API_VERSION}
    
    return app

app = create_app()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
