import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', href: '#hero' },
        { title: 'About', href: '#about' },
        { title: 'Skills', href: '#skills' },
        { title: 'Projects', href: '#projects' },
        { title: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: <FaGithub />, href: 'https://github.com/Sanzeebeyy', label: 'GitHub' },
        { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/sanjeeb-poudel-337869338/', label: 'LinkedIn' },
        { icon: <FaEnvelope />, href: 'sanjibpoudel49@gmail.com', label: 'Email' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    // Smooth scroll handler
    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offsetTop = element.offsetTop;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#hero" className="logo" onClick={(e) => handleNavClick(e, '#hero')}>
                    SP<span className="dot">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="desktop-menu">
                    <ul className="nav-links">
                        {navLinks.map((link) => (
                            <li key={link.title}>
                                <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="social-icons">
                        {socialLinks.map((social) => (
                            <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="mobile-menu"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ul className="mobile-nav-links">
                                {navLinks.map((link) => (
                                    <li key={link.title}>
                                        <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <div className="mobile-socials">
                                {socialLinks.map((social) => (
                                    <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer">
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
