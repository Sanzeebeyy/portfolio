import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">SP.</div>
                <p className="footer-text">
                    Designed and Developed with <FaHeart className="heart-icon" /> by Sanjib Poudel
                </p>
                <div className="footer-socials">
                    <a href="#"><FaGithub /></a>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><FaTwitter /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
