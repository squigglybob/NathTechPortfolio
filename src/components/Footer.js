import React from 'react'

import Wrapper from 'components/Wrapper'
import ContactForm from "components/ContactForm";
import SocialLinks from "components/SocialLinks"

import "assets/styles/components/Footer.scss"
import variables from 'assets/styles/utilities/_variables.scss'

function Footer(props) {


    return (
        <Wrapper colour={variables.amethystDark}>
            <div className="footer">
                <ContactForm />
                <SocialLinks />
                <div>Copyright © 2020 <a href="https://nathtech.dev">NathTech</a></div>
            </div>
        </Wrapper>
    )
}

export default Footer