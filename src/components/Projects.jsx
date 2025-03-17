import React from "react";
import ShakeEffect from "./ShakeEffect"

const projects = [
    {
        name: "ERP",
        description: "The first fullstack app I created. It is an ERP system that allows managers to efficiently manage their employees and hand out tasks. It was built using React.js and flask frameworks. The database uses postgresql.",
        githubLink: "https://github.com/gkiarie1/factory-erp"
    },
    {
        name: "e-market",
        description: "This project is currently under development. ",
        githubLink: "https://github.com/gkiarie1/e-market"
    },
];

const Projects = () => {
    ShakeEffect();
    return (
        <div className="projects-container">
            <h2>My Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <div className="project-buttons">
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn github">
                                GitHub Repo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
