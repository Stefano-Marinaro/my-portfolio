function Skill() {
    const skills = [
        'React',
        'React Native',
        'JavaScript',
        'C#',
        'ASP.NET Core',
        'Entity Framework',
        'REST APIs',
        'Git & GitHub',
        'Database basics',
        'UI development',
        'Learning & iteration'
    ];

    const expertise = [
        {
            icon: "🎯",
            title: "Project-based learning",
            description: "I build applications and APIs from real problems and improve them step by step."
        },
        {
            icon: "💻",
            title: "Frontend basics",
            description: "I create simple, readable, and functional interfaces with React and reusable components."
        },
        {
            icon: "⚡",
            title: "Backend fundamentals",
            description: "I understand server-side logic, authentication, entity mapping, and core data structures."
        },
        {
            icon: "🚀",
            title: "Curiosity & growth",
            description: "I enjoy exploring new technologies, learning from each project, and applying what I study immediately."
        }
    ];

    return (
        <section className="skills-section">
            <div className="skills-container">
                <div className="skills-left">
                    <h2 className="section-title">SKILLS &<br /><span className="accent-text">PROJECTS</span></h2>

                    <div className="skills-list">
                        {skills.map((skill, idx) => (
                            <span key={idx} className="skill-pill">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="skills-right">
                    <div className="expertise-grid">
                        {expertise.map((item, idx) => (
                            <div key={idx} className="expertise-card">
                                <div className="expertise-icon">{item.icon}</div>
                                <h4 className="expertise-title">{item.title}</h4>
                                <p className="expertise-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill