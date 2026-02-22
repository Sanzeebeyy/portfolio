import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In <span className="highlight">Touch</span>
                </motion.h2>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3>Let's specificify your next project together</h3>
                        <p>I'm always open to discussing development work or partnership opportunities.</p>

                        <div className="info-item">
                            <div className="icon-box"><FaEnvelope /></div>
                            <span>sanjibpoudel49@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <div className="icon-box"><FaPhone /></div>
                            <span>+977 9744257730</span>
                        </div>
                        <div className="info-item">
                            <div className="icon-box"><FaMapMarkerAlt /></div>
                            <span>Lalitpur, Nepal</span>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <input type="text" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
