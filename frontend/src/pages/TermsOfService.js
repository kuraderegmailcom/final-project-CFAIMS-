import React from 'react';
import { Link } from 'react-router-dom';
import './LegalPages.css';

const TermsOfService = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <Link to="/" className="back-link">← Back to Home</Link>

                <h1>Terms of Service</h1>
                <p className="last-updated">Last Updated: March 5, 2026</p>

                <section>
                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using Ethio StudentHub, you accept and agree to be bound by these Terms of Service.
                        If you do not agree to these terms, please do not use our platform.
                    </p>
                </section>

                <section>
                    <h2>2. Description of Service</h2>
                    <p>
                        Ethio StudentHub is a platform that connects Ethiopian students with career opportunities.
                        We provide tools for profile creation, job applications, task management, and AI-powered matching services.
                    </p>
                </section>

                <section>
                    <h2>3. User Accounts</h2>
                    <h3>3.1 Registration</h3>
                    <p>
                        You must create an account to use certain features. You agree to provide accurate, current, and complete
                        information during registration and to update it as necessary.
                    </p>

                    <h3>3.2 Account Security</h3>
                    <p>
                        You are responsible for maintaining the confidentiality of your account credentials and for all activities
                        that occur under your account.
                    </p>

                    <h3>3.3 Account Types</h3>
                    <ul>
                        <li>Student accounts: For students seeking opportunities</li>
                        <li>Recruiter accounts: For employers posting opportunities</li>
                        <li>Admin accounts: For platform administration</li>
                    </ul>
                </section>

                <section>
                    <h2>4. User Conduct</h2>
                    <p>You agree not to:</p>
                    <ul>
                        <li>Provide false or misleading information</li>
                        <li>Impersonate any person or entity</li>
                        <li>Post inappropriate, offensive, or illegal content</li>
                        <li>Harass, abuse, or harm other users</li>
                        <li>Attempt to gain unauthorized access to the platform</li>
                        <li>Use automated systems to access the platform without permission</li>
                        <li>Violate any applicable laws or regulations</li>
                    </ul>
                </section>

                <section>
                    <h2>5. Content</h2>
                    <h3>5.1 User Content</h3>
                    <p>
                        You retain ownership of content you submit (resumes, portfolios, messages). By submitting content,
                        you grant us a license to use, display, and distribute it as necessary to provide our services.
                    </p>

                    <h3>5.2 Content Standards</h3>
                    <p>
                        All content must be accurate, lawful, and not infringe on any third-party rights. We reserve the right
                        to remove content that violates these terms.
                    </p>
                </section>

                <section>
                    <h2>6. Opportunities and Applications</h2>
                    <h3>6.1 For Students</h3>
                    <p>
                        Students may apply for opportunities posted on the platform. Applications should be genuine and based
                        on actual interest and qualifications.
                    </p>

                    <h3>6.2 For Recruiters</h3>
                    <p>
                        Recruiters must post legitimate opportunities and treat applicants fairly and professionally.
                        Opportunities must comply with applicable employment laws.
                    </p>
                </section>

                <section>
                    <h2>7. Payments and Fees</h2>
                    <p>
                        Currently, Ethio StudentHub is free to use. We reserve the right to introduce fees for certain features
                        in the future with advance notice.
                    </p>
                </section>

                <section>
                    <h2>8. Intellectual Property</h2>
                    <p>
                        The platform, including its design, features, and content (excluding user content), is owned by
                        Ethio StudentHub and protected by intellectual property laws.
                    </p>
                </section>

                <section>
                    <h2>9. Disclaimers</h2>
                    <p>
                        The platform is provided "as is" without warranties of any kind. We do not guarantee:
                    </p>
                    <ul>
                        <li>Uninterrupted or error-free service</li>
                        <li>The accuracy or reliability of information</li>
                        <li>Specific outcomes from using the platform</li>
                        <li>The quality or legitimacy of opportunities posted</li>
                    </ul>
                </section>

                <section>
                    <h2>10. Limitation of Liability</h2>
                    <p>
                        To the maximum extent permitted by law, Ethio StudentHub shall not be liable for any indirect,
                        incidental, special, or consequential damages arising from your use of the platform.
                    </p>
                </section>

                <section>
                    <h2>11. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your account at any time for violations of these terms
                        or for any other reason. You may also delete your account at any time.
                    </p>
                </section>

                <section>
                    <h2>12. Dispute Resolution</h2>
                    <p>
                        Any disputes arising from these terms shall be resolved through good faith negotiations. If negotiations
                        fail, disputes shall be subject to the jurisdiction of Ethiopian courts.
                    </p>
                </section>

                <section>
                    <h2>13. Changes to Terms</h2>
                    <p>
                        We may modify these terms at any time. Continued use of the platform after changes constitutes
                        acceptance of the new terms.
                    </p>
                </section>

                <section>
                    <h2>14. Contact Information</h2>
                    <p>
                        For questions about these Terms of Service, contact us at:
                    </p>
                    <p>
                        Email: support@ethiostudenhub.com<br />
                        Address: Addis Ababa, Ethiopia
                    </p>
                </section>
            </div>
        </div>
    );
};

export default TermsOfService;
