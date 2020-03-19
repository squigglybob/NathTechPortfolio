import React from 'react'
import ProjectCarousel from './ProjectCarousel'
import ProjectList from 'components/ProjectList'

import 'components/Projects.scss'

import variables from 'assets/styles/utilities/_variables.scss'

const projects = [
    {
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

    return (
        <>
            <ProjectCarousel colour={variables.boldColour} projects={projects} />
            <ProjectList projects={projects} />
        </>
    )
}

export default Projects