import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

const PrivacyPolicy = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <Link to="/" className="back-link">← Back to Home</Link>

                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: March 5, 2026</p>

                <section>
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to Ethio StudentHub. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy explains how we collect, use, and safeguard your information when you use our platform.
                    </p>
                </section>

                <section>
                    <h2>2. Information We Collect</h2>
                    <h3>2.1 Personal Information</h3>
                    <p>We collect information that you provide directly to us, including:</p>
                    <ul>
                        <li>Name, email address, and contact information</li>
                        <li>Educational background and qualifications</li>
                        <li>Resume/CV and portfolio materials</li>
                        <li>Profile information and preferences</li>
                    </ul>

                    <h3>2.2 Usage Information</h3>
                    <p>We automatically collect certain information about your device and how you interact with our platform:</p>
                    <ul>
                        <li>Log data (IP address, browser type, pages visited)</li>
                        <li>Device information</li>
                        <li>Cookies and similar tracking technologies</li>
                    </ul>
                </section>

                <section>
                    <h2>3. How We Use Your Information</h2>
                    <p>We use the collected information for:</p>
                    <ul>
                        <li>Providing and improving our services</li>
                        <li>Matching students with relevant opportunities</li>
                        <li>Communicating with you about your account and opportunities</li>
                        <li>Analyzing platform usage and performance</li>
                        <li>Ensuring platform security and preventing fraud</li>
                    </ul>
                </section>

                <section>
                    <h2>4. Information Sharing</h2>
                    <p>We may share your information with:</p>
                    <ul>
                        <li>Recruiters and employers (only with your consent)</li>
                        <li>Service providers who assist in platform operations</li>
                        <li>Legal authorities when required by law</li>
                    </ul>
                    <p>We do not sell your personal information to third parties.</p>
                </section>

                <section>
                    <h2>5. Data Security</h2>
                    <p>
                        We implement appropriate technical and organizational measures to protect your personal data against
                        unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
                        the internet is 100% secure.
                    </p>
                </section>

                <section>
                    <h2>6. Your Rights</h2>
                    <p>You have the right to:</p>
                    <ul>
                        <li>Access your personal data</li>
                        <li>Correct inaccurate data</li>
                        <li>Request deletion of your data</li>
                        <li>Object to data processing</li>
                        <li>Export your data</li>
                    </ul>
                </section>

                <section>
                    <h2>7. Cookies</h2>
                    <p>
                        We use cookies and similar technologies to enhance your experience, analyze usage, and personalize content.
                        You can control cookie preferences through your browser settings.
                    </p>
                </section>

                <section>
                    <h2>8. Children's Privacy</h2>
                    <p>
                        Our platform is intended for users aged 16 and above. We do not knowingly collect information from
                        children under 16.
                    </p>
                </section>

                <section>
                    <h2>9. Changes to This Policy</h2>
                    <p>
                        We may update this privacy policy from time to time. We will notify you of any changes by posting
                        the new policy on this page and updating the "Last Updated" date.
                    </p>
                </section>

                <section>
                    <h2>10. Contact Us</h2>
                    <p>
                        If you have questions about this privacy policy or our data practices, please contact us at:
                    </p>
                    <p>
                        Email: privacy@ethiostudenhub.com<br />
                        Address: Addis Ababa, Ethiopia
                    </p>
                </section>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
