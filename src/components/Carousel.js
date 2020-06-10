import React, { useState, useEffect } from 'react'
import classNames from 'classnames'

import 'assets/styles/components/Carousel.scss'

const slideWidth = '100vw'

function Carousel({ data }) {

    const [index, setIndex] = useState(0)
    const [longTouch, setLongTouch] = useState(undefined)
    const [touchStartX, setTouchStartX] = useState(undefined)
    const [touchMoveX, setTouchMoveX] = useState(undefined)
    const [moveX, setMoveX] = useState(undefined)
    const [animate, setAnimate] = useState('')
    const [translate, setTranslate] = useState(0)
    const [width, setWidth] = useState(900)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [])

    const handleTouchStart = (event) => {
        console.log('touch start');
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

    const projects = data.map(({
        node: {
            id,
            frontmatter: {
                date,
                image,
                link,
                title,
                tech_stack
            },
            html
        }
    }) => ({
        id,
        date,
        html,
        image,
        link,
        title,
        tech_stack,
    }))

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
                            <h2>{project.title}</h2>
                            <div dangerouslySetInnerHTML={{ __html: project.html }} />
                        </div>
                        <div className="slide__image" style={{ backgroundImage: `url("${project.image}")` }} title={project.name} >
                        </div>
                        <div className="slide__tech-stack">
                            {project.tech_stack.map((tech) =>
                                <div key={tech.name} className="tech-item">
                                    <h3 className="tech-item__name">{tech.name}</h3>
                                    <img className="tech-item__icon" src={tech.icon} alt={tech.name} title={tech.name} />
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {index !== 0 && <div className="arrow arrow-left" onClick={prevSlide}>&#60;</div>}
            {index !== projects.length - 1 && <div className="arrow arrow-right" onClick={nextSlide}>&#x3e;</div>}
        </div>
    )
}

export default Carousel