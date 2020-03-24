import React from 'react'
import styles from 'assets/styles/components/Header.scss'

function Header(props) {


    return (
        <header className="header">
            <nav className="nav">
                <a className="nav__link" href="#bio">Bio</a>
                <a className="nav__link" href="#projects">Projects</a>
                <a className="nav__link" href="#contact">Contact</a>
            </nav>

            <div className="header__title">NathTech</div>
            <div className="header__sub-title">Developing Web Apps</div>
            <button className="header__button">Contact Me</button>
        </header>
    )
}

export default Header