from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import re

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class CVAnalysisRequest(BaseModel):
    text: str

class SkillMatchRequest(BaseModel):
    student_skills: list
    required_skills: list

@app.get("/")
def read_root():
    return {"message": "AI Service is running"}

@app.post("/analyze-cv")
def analyze_cv(request: CVAnalysisRequest):
    """Extract skills from CV text using pattern matching"""
    try:
        text = request.text.lower()
        
        # Common technical skills keywords
        skill_patterns = [
            r'\b(python|java|javascript|typescript|c\+\+|c#|ruby|php|swift|kotlin|go|rust)\b',
            r'\b(react|angular|vue|node\.?js|express|django|flask|spring|laravel)\b',
            r'\b(html|css|sass|scss|tailwind|bootstrap|material-ui)\b',
            r'\b(mongodb|mysql|postgresql|redis|elasticsearch|firebase)\b',
            r'\b(docker|kubernetes|aws|azure|gcp|jenkins|git|github|gitlab)\b',
            r'\b(machine learning|deep learning|ai|nlp|computer vision|data science)\b',
            r'\b(tensorflow|pytorch|scikit-learn|pandas|numpy)\b',
            r'\b(rest api|graphql|microservices|agile|scrum|devops)\b',
            r'\b(ui/ux|figma|adobe xd|photoshop|illustrator)\b',
            r'\b(sql|nosql|api|testing|debugging|problem solving)\b'
        ]
        
        extracted_skills = set()
        
        for pattern in skill_patterns:
            matches = re.findall(pattern, text, re.IGNORECASE)
            extracted_skills.update([match.title() for match in matches])
        
        return {
            "success": True,
            "skills": list(extracted_skills)
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/match-skills")
def match_skills(request: SkillMatchRequest):
    """Calculate skill match score between student and job requirements"""
    try:
        student_skills_lower = [s.lower() for s in request.student_skills]
        required_skills_lower = [s.lower() for s in request.required_skills]
        
        matching_skills = [s for s in required_skills_lower if s in student_skills_lower]
        missing_skills = [s for s in required_skills_lower if s not in student_skills_lower]
        
        match_score = (len(matching_skills) / len(required_skills_lower) * 100) if required_skills_lower else 0
        
        return {
            "success": True,
            "match_score": round(match_score, 2),
            "matching_skills": matching_skills,
            "missing_skills": missing_skills
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
