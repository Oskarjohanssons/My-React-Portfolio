import React, { useState, useEffect } from 'react';


function Portfolio() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchProjects();
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    async function fetchProjects() {
        try {
            const response = await fetch('https://api.github.com/users/Oskarjohanssons/repos');
            const data = await response.json();
            setProjects(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    }

    return (
        <div>
            {loading ? (
                <p>Loading projects...</p>
            ) : (
                <div>
                    {projects.map(project => (
                        <div key={project.id}>
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                            <button className="github-button">View project on GitHub</button>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Portfolio;