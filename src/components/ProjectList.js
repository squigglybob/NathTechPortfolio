import React from 'react'

function ProjectList({ projects }) {


    return (
        <div>
            {projects.map((project) =>
                <div>
                    <strong>{project.name}</strong>
                    {project.technologyStack.map((tech) =>
                        <img src={tech.icon} alt={tech.name} title={tech.name} />
                    )}
                </div>
            )}
        </div>
    )
}

export default ProjectList