import React from 'react';
import cImage from "../head.jpg";

const Home = () => {
    return (
        <section id="home">
            <div className="about-me">
                <img
                    src={cImage}
                    alt="Your Name"
                    className="profile-image"
                />
                <div className="about-me-contents">
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm Baptiste, a Computer Science student with a
                        passion for development. I have a solid foundation in
                        programming, computer science and mathematics. I am
                        always looking for new opportunities to learn and grow.
                    </p>
                    <div className="personal-details">
                        <p><strong>School:</strong> Mines de Saint-Etienne</p>
                        <p><strong>Master's Program:</strong> MSc in Computer Science</p>
                        <p><strong>Age:</strong> 21</p>
                        <p><strong>GitHub:</strong> <a href="https://github.com/bap-rslt" target="_blank" rel="noopener noreferrer">github.com/bap-rslt</a></p>
                        <p><strong>Interests:</strong> Volleyball, Chess, Running</p>
                    </div>
                </div>
            </div>

            <div className="contact">
                <h2>Contact</h2>
                <p>
                    Feel free to reach out to me. You can contact me via email at{' '}
                    <a href="mailto:baptiste.rosselet@etu.emse.fr">baptiste.rosselet@etu.emse.fr</a>
                    {' '}or connect with me on LinkedIn at{' '}
                    <a
                        href="https://www.linkedin.com/in/baptiste-rosselet-6b4571248"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Baptiste Rosselet
                    </a>
                    .
                </p>
            </div>
        </section>

    );
};

export default Home;