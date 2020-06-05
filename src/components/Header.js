import React from 'react'
import 'assets/styles/components/Header.scss'

import useSiteMetaData from 'hooks/useSiteMetaData'
import menu from 'constants/menu'

function Header() {

    const { description, title } = useSiteMetaData()

    return (
        <header className="header">
            <nav className="nav">
                {menu.map((menuItem, i) =>
                    <a key={i} className="nav__link" href={menuItem.link}>{menuItem.name}</a>
                )}
            </nav>

            <div className="header__title">{title}</div>
            <div className="header__sub-title">{description}</div>
            <a className="header__button" href="#contact">Contact Me</a>
        </header>
    )
}

export default Header