import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
    {
        title: 'Dating App - DateMe',
        description: 'A full-featured dating app with like/reject functionality, user authentication, and in-app chat system.',
        tags: ['React', 'FastAPI', 'SQLite', 'WebSockets'],
        github: 'https://github.com/Sanzeebeyy/DateMe-Project',
        // demo: 'https://example.com',
        image: 'linear-gradient(135deg, #6d28d9 0%, #ec4899 100%)'
    },
    {
        title: 'Spotify Lite',
        description: 'A music player app using Deezer API built with React',
        tags: ['React', 'Deezer API', 'JavaScript'],
        github: 'https://github.com/Sanzeebeyy/project-reactSongsPlayer',
        // demo: 'https://example.com',
        image: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)'
    },
    {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website featuring smooth animations and glassmorphism design.',
        tags: ['React', 'Framer Motion', 'Vanilla CSS'],
        github: 'https://github.com/Sanzeebeyy/portfolio',
        // demo: 'https://example.com',
        image: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured <span className="highlight">Projects</span>
                </motion.h2>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                        >
                            <div
                                className="project-image"
                                style={{ background: project.image }}
                            >
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                                            <FaGithub />
                                        </a>
                                        <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                            <FaExternalLinkAlt />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
