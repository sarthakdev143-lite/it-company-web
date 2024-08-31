import React from 'react';
import './Career.css'

const Career = () => {
    return (
        <section className='career'>
            <div>
                <h2>Join Our Team</h2>
                <p>
                    At Skyra Tech Solutions Pvt Ltd, we believe in fostering a culture of innovation, collaboration, and continuous learning. We are always looking for talented individuals who are passionate about technology and eager to make an impact in the IT industry. Please submit the form with all the mentioned details, and our HR will contact you shortly.
                </p>
            </div>
            <form action="/submit-application" method="POST" encType="multipart/form-data">
                <div>
                    <h3>Personal Information:</h3>
                    <input type="text" placeholder="Full Name..." required />
                    <input type="email" placeholder="Email Address..." required />
                    <input type="tel" placeholder="Phone Number..." required />
                    <input type="text" placeholder="Address..." />
                    <input type="text" placeholder="City..." />
                    <input type="text" placeholder="State/Province..." />
                    <input type="text" placeholder="Postal Code..." />
                    <input type="text" placeholder="Country..." />
                </div>
                <div>
                    <h3>Professional Information:</h3>
                    <input type="text" placeholder="Position Applied For..." required />
                    <input type="number" placeholder="Years of Experience..." required />
                    <input type="url" placeholder="LinkedIn Profile..." />
                    <input type="url" placeholder="Portfolio (if applicable)..." />
                    <input type="date" placeholder="Availability to Start..." required />
                </div>
                <div>
                    <h3>Education:</h3>
                    <input type="text" placeholder="Highest Education Level..." required />
                    <input type="text" placeholder="Institution..." required />
                    <input type="text" placeholder="Field of Study..." required />
                    <input type="number" placeholder="Graduation Year..." required />
                </div>
                <div>
                    <h3>Work Experience:</h3>
                    <div>
                        <h4>Current/Most Recent Job:</h4>
                        <input type="text" placeholder="Company Name..." required />
                        <input type="text" placeholder="Job Title..." required />
                        <input type="date" placeholder="Start Date..." required />
                        <input type="date" placeholder="End Date (if applicable)..." />
                        <textarea placeholder="Responsibilities..." rows="4" required></textarea>
                    </div>
                    <div>
                        <h4>Previous Job (if applicable):</h4>
                        <input type="text" placeholder="Company Name..." />
                        <input type="text" placeholder="Job Title..." />
                        <input type="date" placeholder="Start Date..." />
                        <input type="date" placeholder="End Date..." />
                        <textarea placeholder="Responsibilities..." rows="4"></textarea>
                    </div>
                </div>
                <div>
                    <h3>Cover Letter:</h3>
                    <textarea placeholder="Enter your cover letter here..." rows="6"></textarea>
                </div>
                <div>
                    <h3>Resume/CV:</h3>
                    <input type="file" accept=".pdf,.doc,.docx" required />
                </div>
                <div>
                    <h3>Additional Information</h3>
                    <textarea placeholder="If you have any additional information you'd like to share, please feel free to include it here..." rows="6"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Career;
