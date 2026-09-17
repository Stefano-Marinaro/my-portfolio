function Projects() {
    const projects = [
        {
            id: 1,
            number: "01",
            title: "GoCare",
            category: "Healthcare Platform",
            description: "Healthcare management platform connecting patients, caregivers and associations for coordinated transport services.",
            tags: ["React Native", "Expo Router", "ASP.NET Core", "Entity Framework"],
            link: "https://github.com/Stefano-Marinaro/project_workSGEF"
        },
        {
            id: 2,
            number: "02",
            title: "TaskMaster",
            category: "Task Management",
            description: "A task management backend with role-based permissions, built with C#, ASP.NET Core, and Entity Framework. Includes authentication, relational data modeling, and a REST API.",
            tags: ["C#", "ASP.NET Core", "Entity Framework"],
            link: "https://github.com/Stefano-Marinaro/TaskMaster"
        },
        {
            id: 3,
            number: "03",
            title: "Portfolio Website",
            category: "Web Development",
            description: "Personal portfolio showcasing projects and skills with modern design principles and responsive layout.",
            tags: ["React", "Vite", "CSS"],
            link: "#"
        },
        {
            id: 4,
            number: "04",
            title: "Code Exploration",
            category: "Learning & Development",
            description: "Continuous learning and exploration of new technologies and development practices.",
            tags: ["Full Stack", "Best Practices"],
            link: "https://github.com/Stefano-Marinaro"
        }
    ];

    return (
        <section className="projects-section">
            <div className="section-header">
                <h2 className="section-title">
                    SELECTED<br />
                    <span className="accent-text">PROJECTS</span>
                </h2>
                
            </div>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <div className="project-number">{project.number}</div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-category">{project.category}</p>
                        <p className="project-description">{project.description}</p>
                        
                        <div className="project-tags">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="tag">{tag}</span>
                            ))}
                        </div>
                        
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                            VIEW PROJECT →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects