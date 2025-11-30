from fastapi import APIRouter

router = APIRouter()

@router.get("/profile")
async def get_profile():
    """Get user profile"""
    return {
        "id": 1,
        "email": "user@example.com",
        "username": "user",
        "full_name": "User Name",
        "plan": "personal",
        "created_at": "2024-01-01T00:00:00"
    }

@router.put("/profile")
async def update_profile(request: dict):
    """Update user profile"""
    return {
        "message": "Profile updated successfully",
        "data": request
    }

@router.get("/subscription")
async def get_subscription():
    """Get user subscription details"""
    return {
        "plan": "personal",
        "status": "active",
        "next_billing_date": "2024-02-01",
        "scan_limit": 5000,
        "scans_used": 2345
    }

@router.post("/upgrade-plan")
async def upgrade_plan(new_plan: str):
    """Upgrade subscription plan"""
    return {
        "message": f"Upgraded to {new_plan} plan",
        "plan": new_plan
    }
