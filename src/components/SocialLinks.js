import React from 'react'

import 'assets/styles/components/SocialLinks.scss'

const socialLinks = [
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
]

export default function SocialLinks() {
    return (
        <div className="social-links">
            {socialLinks.map((link, i) =>
                <a href={link.link} className="social-links__link">
                    <img className="social-links__icon" src={link.icon} alt={link.name} title={link.name} />
                </a>
            )}
        </div>
    )
}
