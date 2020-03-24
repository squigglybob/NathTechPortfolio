import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import 'assets/styles/components/Carousel.scss'

const slideWidth = '100vw'

function Carousel({ projects }) {

    const width = window.innerWidth

    const [index, setIndex] = useState(0)
    const [longTouch, setLongTouch] = useState(undefined)
    const [touchStartX, setTouchStartX] = useState(undefined)
    const [touchMoveX, setTouchMoveX] = useState(undefined)
    const [moveX, setMoveX] = useState(undefined)
    const [animate, setAnimate] = useState('')
    const [translate, setTranslate] = useState(0)

    useEffect(() => {

    }, [])

    const handleTouchStart = (event) => {
        console.log('touch starte');
        // check for long touch?
        setTouchStartX(event.touches[0].pageX)
        setAnimate('')
    }

    const handleTouchMove = (event) => {
        console.log('touch moving');
        setTouchMoveX(event.touches[0].pageX)
        const tempMoveX = index * slideWidth + (touchStartX - touchMoveX)
        setMoveX(index * slideWidth + (touchStartX - touchMoveX))
        const panX = 100 - moveX / 6

        console.log(panX);

    }

    const handleTouchEnd = (event) => {
        console.log('touch end');

        setAnimate('animate')
    }

    const nextSlide = () => {
        if (index === projects.length - 1) return
        setTranslate((index + 1) * width)
        setIndex(i => i + 1)
    }

    const prevSlide = () => {
        if (index === 0) return
        setTranslate((index - 1) * width)
        setIndex(i => i - 1)
    }

    return (
        <div className={classNames("carousel")}>
            <div
                className={classNames("holder", animate)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                //style={{ }}
                style={{
                    width: `${projects.length * width}px`,
                    transform: `translateX(-${translate}px)`
                }}
            >
                {projects.map((project) => (
                    <div key={project.id} id={project.id} className={`slide`} style={{ backgroundPosition: '0' }}>
                        <div className="slide__description">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                        </div>
                        <div className="slide__image" style={{ backgroundImage: `url("${project.image}")` }} title={project.name} >
                        </div>
                        <div className="slide__tech-stack">
                            {project.technologyStack.map((tech) =>
                                <div key={tech.name} className="tech-item">
                                    <h3 className="tech-item__name">{tech.name}</h3>
                                    <img className="tech-item__icon" src={tech.icon} alt={tech.name} title={tech.name} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="arrow arrow-left" onClick={prevSlide}>&#60;</div>
            <div className="arrow arrow-right" onClick={nextSlide}>&#x3e;</div>
        </div>
    )
}

export default Carousel