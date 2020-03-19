import React from 'react'

import 'assets/styles/components/Carousel.scss'

function Carousel({ colour, projects }) {


    return (
        <div className="carousel">
            {projects.map((project) => (
                <div className="slide">
                    <div className="slide__description">
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
                    <div className="slide__image" style={{backgroundImage: `url("${project.image}")`}} title={project.name} >
                    </div>
                    <div className="slide__tech-stack">
                        {project.technologyStack.map((tech) =>
                            <div className="tech-item">
                                <h2 className="tech-item__name">{tech.name}</h2>
                                <img className="tech-item__icon" src={tech.icon} alt={tech.name} title={tech.name} />
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Carousel