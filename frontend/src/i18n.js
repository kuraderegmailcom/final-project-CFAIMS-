import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            "hero.title": "Empowering Students Through Freelance & Internship Opportunities",
            "hero.login": "Login",
            "hero.register": "Register",
            "hero.about": "About",
            "hero.faq": "FAQ",
            "hero.contact": "Contact",
            "features.title": "Our Features",
            "features.ai": "AI Resume Matching",
            "features.ai.desc": "Smart matching between student skills and opportunities",
            "features.task": "Task Management",
            "features.task.desc": "Track and manage your internship tasks efficiently",
            "features.multilingual": "Multilingual Support",
            "features.multilingual.desc": "Available in English, Amharic, and Afan Oromo",
            "features.performance": "Performance Tracking",
            "features.performance.desc": "Monitor your skill progress and achievements",
            "features.secure": "Secure Access",
            "features.secure.desc": "Role-based authentication and data protection",
            "features.apply": "Apply for Jobs",
            "features.apply.desc": "Browse and apply for internships and freelance opportunities with ease",
            "how.title": "How It Works",
            "how.step1": "Create Profile",
            "how.step1.desc": "Sign up and build your professional profile",
            "how.step2": "Apply or Post",
            "how.step2.desc": "Students apply, recruiters post opportunities",
            "how.step3": "AI Matching",
            "how.step3.desc": "Get matched with the best opportunities",
            "how.step4": "Complete & Grow",
            "how.step4.desc": "Complete tasks and develop your skills",
            "about.title": "About Us",
            "about.mission": "Our Mission",
            "about.mission.text": "To empower Ethiopian students by connecting them with meaningful freelance and internship opportunities that enhance their skills and career prospects.",
            "about.vision": "Our Vision",
            "about.vision.text": "To become the leading platform for student professional development in Ethiopia, bridging the gap between education and industry.",
            "about.impact": "Our Impact",
            "about.impact.text": "Helping thousands of students gain real-world experience while supporting companies in finding talented young professionals.",
            "contact.title": "Contact Us",
            "contact.email": "Email",
            "contact.phone": "Phone",
            "contact.form": "Send us a message",
            "contact.name": "Your Name",
            "contact.message": "Your Message",
            "contact.send": "Send Message",
            "footer.about": "About",
            "footer.privacy": "Privacy Policy",
            "footer.terms": "Terms of Service"
        }
    },
    am: {
        translation: {
            "hero.title": "ተማሪዎችን በነፃ ስራ እና በተግባር ስልጠና እድሎች ማብቃት",
            "hero.login": "ግባ",
            "hero.register": "ተመዝገብ",
            "hero.about": "ስለ እኛ",
            "hero.faq": "ጥያቄዎች",
            "hero.contact": "አግኙን",
            "features.title": "ባህሪያቶቻችን",
            "features.ai": "AI ሪዙሜ ማዛመድ",
            "features.task": "ስራ አስተዳደር",
            "features.multilingual": "ባለብዙ ቋንቋ ድጋፍ",
            "features.performance": "አፈጻጸም ክትትል",
            "features.secure": "ደህንነቱ የተጠበቀ መዳረሻ"
        }
    },
    om: {
        translation: {
            "hero.title": "Barattootaa Karaa Hojii Bilisaa fi Leenjii Hojiitin Humneessuu",
            "hero.login": "Seeni",
            "hero.register": "Galmaa'i",
            "hero.about": "Waa'ee Keenya",
            "hero.faq": "Gaaffilee",
            "hero.contact": "Nu Quunnamaa"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
