import React from 'react'
import 'assets/styles/components/Header.scss'

import menu from 'constants/menu'

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                {menu.map((menuItem, i) =>
                    <a key={i} className="nav__link" href={menuItem.link}>{menuItem.name}</a>
                )}
            </nav>

            <div className="header__title">NathTech</div>
            <div className="header__sub-title">Developing Web Apps</div>
            <a className="header__button" href="#contact">Contact Me</a>
        </header>
    )
}

export default Header