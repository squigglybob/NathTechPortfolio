import React from 'react'

function ProjectList({ projects }) {


    return (
        <div>
            {projects.map((project) =>
                <div>
                    <a href={`#${project.id}`}>
                        <strong>{project.name}</strong>
                        {project.technologyStack.map((tech) =>
                            <img src={tech.icon} alt={tech.name} title={tech.name} />
                        )}
                    </a>
                </div>
            )}
        </div>
    )
}

export default ProjectList