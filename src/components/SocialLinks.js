import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import 'assets/styles/components/SocialLinks.scss'

/* const socialLinks = [
    {
        name: 'LinkedIn',
        link: 'linkedIn',
        icon: 'https://picsum.photos/50/50',
    },
    {
        name: 'GitHub',
        link: 'GitHub',
        icon: 'https://picsum.photos/50/50',
    }
] */

export default function SocialLinks() {

    const data = useStaticQuery(graphql`
    query SocialMediaQuery {
      allDataJson {
        edges {
          node {
            social_media {
              icon
              link
              name
            }
          }
        }
      }
    }
`)

    let socialLinks = []
    data.allDataJson.edges.forEach(edge => {
        if (edge.node.social_media !== null) {
            socialLinks = edge.node.social_media
        }
    })

    return (
        <div className="social-links">
            {socialLinks.map((link, i) =>
                <a key={i} href={link.link} className="social-links__link">
                    <img className="social-links__icon" src={link.icon} alt={link.name} title={link.name} />
                </a>
            )}
        </div>
    )
}
