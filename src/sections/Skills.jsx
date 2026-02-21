import React from 'react';
import { color, motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaGitAlt, FaPython} from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiTailwindcss, SiFigma, SiFastapi, SiDjango , SiNextdotjs} from 'react-icons/si';
import './Skills.css';

const skillsData = [
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name:'Next', icon:<SiNextdotjs/>, color: '#FFFFFF'},
    { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
    { name: 'FastAPI', icon: <SiFastapi />, color: '#009688' },
    { name: 'Django', icon: <SiDjango />, color: '#092E20' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'Python', icon: <FaPython />, color: '#3776AB' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
    // { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    // { name: 'CSS3', icon: <FaCss3 />, color: '#1572B6' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    // { name: 'Figma', icon: <SiFigma />, color: '#F24E1E' },
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My <span className="highlight">Skills</span>
                </motion.h2>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, translateY: -5 }}
                            style={{ '--skill-color': skill.color }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <span className="skill-name">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
