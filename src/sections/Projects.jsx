import React from "react";
import "../styles/sections.css";

const Projects = () => {
    const projectList = [
        {
            id: 1,
            title: "🚲 Cyclistic Bike-Share Analysis (R)",
            description:
                "Analyzed 1 year of ride data to uncover trends between casual and member users. Includes visualizations and full R code.",
            link: "https://github.com/Raqiiiba/Raqiiba-project/tree/main", 
        },
        {
            id: 2,
            title: "📁 Ask A Manager Salary Survey (Excel)",
            description:
                "Explored salary trends across roles and industries using Excel pivot tables and charts.",
            link: "https://github.com/Raqiiiba/Raqiiba-project/tree/main", 
        },
        {
            id: 3,
            title: "🎭 Actors Case Study (Excel)",
            description:
                "Analyzed actor-related data for performance and trend insights using Excel tools.",
            link: "https://github.com/Raqiiiba/Raqiiba-project/tree/main", 
        },
    ];

    return (
        <section id="projects" className="projects">
            <h2 className="projects-title">My Projects</h2>
            <div className="projects-container">
                {projectList.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                            View
                        </a>
                    </div>    
                ))}
            </div>
        
            <p className="projects-note">Photos and other projects will be uploaded soon!</p>
        </section>
    );
};

export default Projects;
