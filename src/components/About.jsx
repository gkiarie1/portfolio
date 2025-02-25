import React from "react";
import { FaPython, FaNodeJs, FaReact, FaHtml5 } from 'react-icons/fa';
import { SiFlask, SiMysql, SiPostgresql } from 'react-icons/si';

const About = () => {
    const technologies = [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'Flask', icon: <SiFlask /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'Postgres', icon: <SiPostgresql /> }
    ];

    return (
        <div className="about-container">
            <h2>Let Me Introduce Myself</h2>
            <p>
                I am a passionate full-stack developer with an interest in creating stunning 
                and efficient web applications. My journey into development started during 
                my bachelor's degree in Business and IT, but I truly found my passion for 
                web development during my internship at Safaricom PLC, which led me to pursue a 
                certification at Moringa School in Software Development.
            </p>
            <p>
                Currently, I am working on several projects that will be featured here. 
                Besides development, I enjoy playing football, hiking, and reading novels.
            </p>

            <h2>Technologies I Work With</h2>
            <div className="tech-icons">
                {technologies.map((tech, index) => (
                    <div key={index} className="tech-item">
                        {tech.icon}
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;
