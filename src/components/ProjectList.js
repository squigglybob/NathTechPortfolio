import React from 'react'

function ProjectList({ projects }) {


    return (
        <div>
            {projects.map((project) =>
                <div key={project.id}>
                    <a href={`#${project.id}`}>
                        <strong>{project.name}</strong>
                        {project.technologyStack.map((tech) =>
                            <img key={tech.name} src={tech.icon} alt={tech.name} title={tech.name} />
                        )}
                    </a>
                </div>
            )}
        </div>
    )
}

export default ProjectList