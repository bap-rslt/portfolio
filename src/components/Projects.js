import React from 'react';
import robotImage from "../robot.png";
import statsImage from "../stats.png";
import keyboardImage from "../clavier.png";
import aiImage from "../ai.png";
import driveImage from "../drive.png";


const Projects = () => {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div className="projects-grid">

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <text className='flip-card-title'>Autonomous robot project</text>
                            <img src={robotImage} alt="Avatar" className='flip-card-image' />
                        </div>
                        <div className="flip-card-back">
                            <text className='flip-card-title'>Language : Embedded C</text>
                            <p>Autonomous object-finder robot, powered by a PIC18 microcontroller. Equipped with a sonar sensor to detect its surroundings, and two tracks to move.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <text className='flip-card-title'>Data Analysis</text>
                            <img src={statsImage} alt="Avatar" className='flip-card-image' />
                        </div>
                        <div className="flip-card-back">
                            <text className='flip-card-title'>Language : C</text>
                            <p>Usefull functions for data analysis and statistics purposes : mean, minimum, maximum, standard deviation, median, quartiles, removing extreme values.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <text className='flip-card-title'>Predictive text recognition</text>
                            <img src={keyboardImage} alt="Avatar" className='flip-card-image' />
                        </div>
                        <div className="flip-card-back">
                            <text className='flip-card-title'>Language : C (GTK), css</text>
                            <p>Human-machine interface that provides suggestions based on incomplete user input. Frequency-based predictions, option to manually add new words.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <text className='flip-card-title'>Iris Petal Color Classifier</text>
                            <img src={aiImage} alt="Avatar" className='flip-card-image' />
                        </div>
                        <div className="flip-card-back">
                            <text className='flip-card-title'>Language : Python</text>
                            <p>Simple machine learning project using the Iris flower dataset. Predicts flower color from petal dimensions, using the fundamentals of neural networks.</p>
                        </div>
                    </div>
                </div>

                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <text className='flip-card-title'>Multithreaded hosting server</text>
                            <img src={driveImage} alt="Avatar" className='flip-card-image' />
                        </div>
                        <div className="flip-card-back">
                            <text className='flip-card-title'>Language : C</text>
                            <p>Server hosted remotely & client able to list, download, upload and delete files. Can handle multiple clients at the same time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;