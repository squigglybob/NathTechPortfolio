import React, { useState } from 'react'
import Carousel from 'components/Carousel'
/* import ProjectList from 'components/ProjectList' */

import 'assets/styles/components/Projects.scss'

import { useStaticQuery, graphql } from 'gatsby'

function Projects() {

    const [activeIndex, setActiveIndex] = useState(0)

/*     const goToSlide = () => {

    } */

    const data = useStaticQuery(graphql`
        query projectQuery {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                        date
                        image
                        link
                        projectPicture
                        title
                        tech_stack {
                                icon
                                name
                            }
                        }
                        html
                    }
                }
            }
        }
    `)

    return (
        <div id="projects">
            <Carousel data={data.allMarkdownRemark.edges} activeIndex={activeIndex} />
            {/*             <ProjectList projects={projects} /> */}
        </div>
    )
}

export default Projects