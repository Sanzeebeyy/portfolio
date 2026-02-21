import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About <span className="highlight">Me</span>
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-text"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="about-description">
                            {/* I am a passionate <span className="text-highlight">Full Stack Developer</span> with a knack for creating intuitive and visually stunning digital experiences.
                            My journey involves turning complex ideas into robust, scalable, and user-friendly applications. */}
                            I'm a <span className="text-highlight">Full Stack Developer</span> who builds things people actually enjoy using. I take messy, complicated problems and turn them into clean, fast, and thoughtful applications - from the database to the interface.
                        </p>
                        <p className="about-description">
                            I've always believed that great software should feel effortless to use, even when it's anything but effortless to build. As a Full Stack Developer, I work across the entire stack — architecting reliable backends and crafting interfaces that just make sense.
                        </p>

                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">2+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Commitment</span>
                            </div>
                        </div>

                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </motion.div>

                    <motion.div
                        className="about-visual"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="visual-card">
                            <div className="visual-content">
                                <h3>Developer</h3>
                                <h3>Designer</h3>
                                <h3>Problem Solver</h3>
                            </div>
                            <div className="visual-blob"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
