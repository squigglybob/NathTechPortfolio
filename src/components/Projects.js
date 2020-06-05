import React, { useState } from 'react'
import Carousel from 'components/Carousel'
import ProjectList from 'components/ProjectList'

import 'assets/styles/components/Projects.scss'

import variables from 'assets/styles/utilities/_variables.scss'
import { useStaticQuery, graphql } from 'gatsby'

const projects = [
    {
        id: 'nathtech_project',
        name: 'NathTech',
        description: 'Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.',
        image: 'https://source.unsplash.com/random',
        technologyStack: [
            {
                name: 'Gatsby',
                icon: 'https://picsum.photos/50/50'
            },
            {
                name: 'Netlify',
                icon: 'https://picsum.photos/50/50'
            },
            {
                name: 'Forestry',
                icon: 'https://picsum.photos/50/50'
            },
        ]
    },
    {
        id: 'supertimer_project',
        name: 'Super Timer',
        description: 'Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.',
        image: 'https://source.unsplash.com/random',
        technologyStack: [
            {
                name: 'Gatsby',
                icon: 'https://picsum.photos/50/50'
            },
            {
                name: 'Netlify',
                icon: 'https://picsum.photos/50/50'
            },
            {
                name: 'Forestry',
                icon: 'https://picsum.photos/50/50'
            },
        ]
    },
    {
        id: 'projectx_project',
        name: 'Project X',
        description: 'Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.Lorem Ipsum totor et dolete. Nunc ils potate eres. Pugnus est dolmio et sedete. Istnus empte fererre iluminate.',
        image: 'https://source.unsplash.com/random',
        technologyStack: [
            {
                name: 'Gatsby',
                icon: 'https://picsum.photos/50/50'
            },
            {
                name: 'Netlify',
                icon: 'https://picsum.photos/50/50'
            },
            {
                name: 'Forestry',
                icon: 'https://picsum.photos/50/50'
            },
        ]
    },
]

function Projects(props) {

    const [ activeIndex, setActiveIndex ] = useState(0)

    const goToSlide = () => {

    }



    return (
        <div id="projects">
            <Carousel projects={projects} activeIndex={activeIndex} />
{/*             <ProjectList projects={projects} /> */}
        </div>
    )
}

export default Projects