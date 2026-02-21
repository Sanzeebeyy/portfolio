import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import { image } from 'framer-motion/client';

const projectsData = [
    {
        title: 'DateMe - A Dating App',
        description: 'A full-featured dating app with like/reject functionality, user authentication, and in-app chat system.',
        tags: ['React', 'FastAPI', 'SQLite', 'WebSockets'],
        github: 'https://github.com/Sanzeebeyy/DateMe',
        demo: 'https://date-me-frontend.onrender.com',
        image: '#dc3c3f'
    },
    {
        title: 'Dwellix - A Room Rental',
        description: 'A full stack rental platform for landlords and tenants for seamless interaction',
        tags: ['React', 'Deezer API', 'JavaScript'],
        github: 'https://github.com/Sanzeebeyy/Dwellix',
        // demo: 'https://example.com',
        image: '#87CEEB'
    },
    {
        title: 'Portfolio Website',
        description: 'A modern, responsive portfolio website featuring smooth animations and glassmorphism design.',
        tags: ['React', 'Framer Motion', 'Vanilla CSS'],
        github: 'https://github.com/Sanzeebeyy/portfolio',
        // demo: 'https://example.com',
        image: '#f59e0b'
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
                                // style={{ backgroundImage: `url(${project.image})` }}
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
